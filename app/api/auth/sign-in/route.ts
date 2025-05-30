import { sql } from '@/lib/db';
import bcryptjs from 'bcryptjs';
import { signToken } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  console.error(email, password);

  const user = await sql`SELECT * FROM users WHERE email = ${email}`;
  if (!user.length) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const valid = await bcryptjs.compare(password, user[0].password_hash);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = signToken({ id: user[0].id, role: user[0].role });

  const res = NextResponse.json({ success: true });
  res.cookies.set('auth-token', token, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
