import { sql } from '@/lib/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await sql`
      INSERT INTO users (email, password_hash)
      VALUES (${email}, ${hashed})
      RETURNING id, email
    `;
    return NextResponse.json({ user: user[0] });
  } catch (e: any) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }
}
