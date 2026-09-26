import { type NextRequest, NextResponse } from 'next/server';
import { companySeed } from '../../lib/data';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const company = url.searchParams.get('company');
  const result = company
    ? companySeed.find((item) => item.name.toLowerCase() === company.toLowerCase())
    : companySeed[0];

  if (!result) {
    return NextResponse.json({ success: false, message: 'Company not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, company: result });
}
