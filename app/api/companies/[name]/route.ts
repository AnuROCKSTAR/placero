import { NextResponse } from 'next/server';
import { companySeed } from '../../../lib/data';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  const filtered = q
    ? companySeed.filter((company) =>
        company.name.toLowerCase().includes(q.toLowerCase()) ||
        company.industry.toLowerCase().includes(q.toLowerCase()) ||
        company.roles.some((role) => role.toLowerCase().includes(q.toLowerCase()))
      )
    : companySeed;

  return NextResponse.json({ success: true, companies: filtered });
}
