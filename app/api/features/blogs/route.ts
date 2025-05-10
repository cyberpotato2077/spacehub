import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/');
  const data = await response.json();
  return NextResponse.json(data);
}
