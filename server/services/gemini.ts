import { z } from 'zod';

export const aiPromptSchema = z.object({
  message: z.string().min(2),
  context: z.string().optional()
});

export function buildGeminiPrompt({ userMessage, context }: { userMessage: string; context?: string }) {
  return `You are Placero AI, a placement coach for engineering students. Use only verified information and ask for missing details when needed.\n\nContext: ${context ?? 'Student placement prep.'}\n\nUser: ${userMessage}\n\nProvide a concise, actionable answer with prioritized steps.`;
}
