import { NextResponse } from 'next/server';
import { z } from 'zod';
import { askGemini, buildGeminiPrompt } from '../../../server/services/gemini';

const chatSchema = z.object({
  message: z.string().min(2).max(2000),
  context: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = chatSchema.parse(body);

    const prompt = buildGeminiPrompt({
      userMessage: data.message,
      context: data.context ?? 'The student is preparing for placements in engineering and wants practical, verified guidance.'
    });

    const aiResult = await askGemini(prompt);

    return NextResponse.json({
      success: true,
      answer: {
        content: aiResult.answer,
        confidence: aiResult.confidence ?? 0.7
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process AI request. Please provide a valid prompt.',
        fallback: 'Review your target company and study plan, then ask again.'
      },
      { status: 400 }
    );
  }
}
