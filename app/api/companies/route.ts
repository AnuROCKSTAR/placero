import { NextResponse } from 'next/server';
import { companySeed } from '../../../lib/data';

export async function GET() {
  return NextResponse.json({ success: true, companies: companySeed });
}

export async function POST(request: Request) {
  const body = await request.json();
  const q = String(body?.q ?? '').toLowerCase();

  const filtered = q
    ? companySeed.filter((company) =>
        company.name.toLowerCase().includes(q) ||
        company.industry.toLowerCase().includes(q) ||
        company.skills.some((skill) => skill.toLowerCase().includes(q))
      )
    : companySeed;

  return NextResponse.json({ success: true, companies: filtered });
}
