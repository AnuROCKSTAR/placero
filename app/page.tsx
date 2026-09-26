import { NextResponse } from 'next/server';
import { companySeed } from '../../../../lib/data';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const decoded = decodeURIComponent(params.name);
  const company = companySeed.find(
    (item) => item.name.toLowerCase() === decoded.toLowerCase()
  );

  if (!company) {
    return NextResponse.json({ success: false, message: 'Company not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, company });
}
