import { NextResponse } from 'next/server';
import { companySeed } from '../../../lib/data';

export async function GET() {
  return NextResponse.json({ success: true, companies: companySeed });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, companies: companySeed.filter((company) => {
    const term = (body?.query ?? '').toLowerCase();
    if (!term) return true;
    return company.name.toLowerCase().includes(term) || company.industry.toLowerCase().includes(term);
  }) });
}
