import { NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  prompt: z.string().min(3).max(2000),
  context: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = bodySchema.parse(json);

    const response = {
      content: `Here is a placement-focused answer: ${data.prompt}. Focus on practical next steps, verified information, and a realistic engineering-student roadmap.`
    };

    return NextResponse.json({ success: true, answer: response });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid AI payload' }, { status: 400 });
  }
}
