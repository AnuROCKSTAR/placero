import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    mission: {
      title: 'Daily placement sprint',
      duration: '42 minutes',
      tasks: [
        'Solve 5 concept questions',
        'Review a company-specific preparation module',
        'Record a 2-minute interview answer',
        'Update one proof artifact'
      ]
    }
  });
}
