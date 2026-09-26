import { NextResponse } from 'next/server';
import { companySeed } from '../../../lib/data';

export async function GET() {
  return NextResponse.json({ success: true, companies: companySeed });
}

export async function POST(request: Request) {
  const body = await request.json();
  const query = String(body?.query ?? '').toLowerCase();

  const filtered = companySeed.filter((company) => {
    if (!query) return true;
    return (
      company.name.toLowerCase().includes(query) ||
      company.industry.toLowerCase().includes(query) ||
      company.skills.some((skill) => skill.toLowerCase().includes(query))
    );
  });

  return NextResponse.json({ success: true, companies: filtered });
}
