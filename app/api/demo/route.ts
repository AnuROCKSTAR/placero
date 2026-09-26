import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    demo: {
      user: 'Alex Student',
      branch: 'Chemical Engineering',
      targetCompanies: ['Reliance Industries', 'L&T', 'Indian Oil'],
      readiness: 64,
      primaryWeakness: 'Process Safety',
      primaryStrength: 'Thermodynamics'
    }
  });
}
