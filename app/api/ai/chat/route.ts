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
      context: data.context ?? 'Student is preparing for campus placements. Recommend practical next steps.'
    });

    const answer = await askGemini(prompt);

    return NextResponse.json({ success: true, answer });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Unable to process AI request' }, { status: 400 });
  }
}
