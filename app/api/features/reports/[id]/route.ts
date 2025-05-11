import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v4/reports/${id}`
  );
  const data = await response.json();

  return NextResponse.json(data);
}
