import { NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  message: z.string().min(2).max(2000),
  context: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bodySchema.parse(body);

    const answer = {
      content: `Here is a focused placement recommendation: ${data.message}. Break it into a 3-step plan: assess your biggest gap, do one core skill task, and prepare one evidence-based proof action for your target company.`,
      confidence: 0.82
    };

    return NextResponse.json({ success: true, answer });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid AI prompt' }, { status: 400 });
  }
}
