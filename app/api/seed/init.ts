import { sql } from '@/lib/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
    }

    // 테이블 생성
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT, -- 비밀번호 로그인 시에만 사용
        role TEXT DEFAULT 'user',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    // 초기 admin 유저 생성
    const email = 'admin@example.com';
    const password = 'admin1234';
    const hash = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users (email, password_hash, role)
      VALUES (${email}, ${hash}, 'admin')
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ message: 'Seed complete' });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: 'Seed failed', detail: e.message }, { status: 500 });
  }
}
