import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const response = {
    score: 84,
    strengths: ['Clear technical depth', 'Good domain relevance', 'Strong project structure'],
    gaps: ['Add measurable outcomes', 'Clarify business impact', 'Include specific tools and metrics'],
    nextSteps: ['Quantify project impact', 'Add a short result section', 'Improve wording for recruiter readability']
  };

  return NextResponse.json({ success: true, feedback: response });
}
