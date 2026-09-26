import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Placero uses a student-first readiness system with measurable skill tracking and proof-based progress.'
  });
}
