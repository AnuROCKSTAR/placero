import { NextResponse } from 'next/server';
import { transformResumeBullet } from '../../../lib/scoring';

export async function POST(request: Request) {
  const body = await request.json();
  const raw = String(body?.text ?? '');

  return NextResponse.json({
    success: true,
    result: {
      original: raw,
      improved: transformResumeBullet(raw),
      suggestions: [
        'Add measurable business or user impact.',
        'Mention the specific problem and context.',
        'Show what changed because of your action.'
      ]
    }
  });
}
