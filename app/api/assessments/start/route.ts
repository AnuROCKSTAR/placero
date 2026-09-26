import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  company: z.string().min(2),
  role: z.string().min(2)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    return NextResponse.json({
      success: true,
      readiness: 78,
      company: data.company,
      role: data.role,
      nextAction: 'Complete one technical concept drill and one communication practice set.'
    });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid company readiness request' }, { status: 400 });
  }
}
