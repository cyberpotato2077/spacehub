import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://api.spaceflightnewsapi.net/v4/reports/');
  const data = await response.json();
  return NextResponse.json(data);
}
