import { z } from 'zod';

export const geminiResponseSchema = z.object({
  answer: z.string().min(1),
  confidence: z.number().min(0).max(1).optional()
});

export function buildGeminiPrompt({ userMessage, context }: { userMessage: string; context?: string }) {
  return `
You are Placero AI, a placement coach for engineering students.

Rules:
- Use only verified information when present.
- If information is missing, say what is missing and ask for it.
- Do not invent company requirements, salary, or personal achievements.
- Keep the answer concise, practical, and career-focused.
- Suggest a 3-step plan with clear next actions.
- If the user asks for interviews or resume help, give specific, actionable advice.

Context:
${context ?? 'Student preparing for campus placements.'}

User question:
${userMessage}

Return a short but useful answer in plain English.
  `.trim();
}

export async function askGemini(prompt: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      answer: 'Gemini is not configured yet. Add GEMINI_API_KEY in your environment to enable AI coaching.',
      confidence: 0.3
    };
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 500
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error('Gemini API failed');
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'I could not generate a response.';

    const parsed = geminiResponseSchema.safeParse({ answer: text, confidence: 0.85 });

    return parsed.success ? parsed.data : { answer: text, confidence: 0.7 };
  } catch {
    return {
      answer: 'The AI coach is temporarily unavailable. Your saved preparation progress remains safe.',
      confidence: 0.2
    };
  }
}
