import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
    }

    // 테이블 제거
    await sql`
      DROP TABLE IF EXISTS users;
    `;

    return NextResponse.json({ message: 'Tables cleared' });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to clear tables', detail: e.message }, { status: 500 });
  }
}
