import { NextResponse } from 'next/server';
import { companySeed } from '../../../lib/data';

export async function POST(request: Request) {
  const body = await request.json();

  const plan = {
    company: body?.company ?? 'Reliance Industries',
    role: body?.role ?? 'Process Engineer',
    timeline: [
      { period: 'First 30 days', goals: ['Understand core technical requirements', 'Complete 3 concept blocks', 'Build one proof project'] },
      { period: 'Days 31–60', goals: ['Practice company-specific questions', 'Improve resume bullets', 'Complete mock interview'] },
      { period: 'Days 61–90', goals: ['Strengthen weak skills', 'Prepare final project evidence', 'Refine communication'] }
    ]
  };

  return NextResponse.json({ success: true, plan });
}
