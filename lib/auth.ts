import { invariant } from 'es-toolkit';
import jwt from 'jsonwebtoken';

const SECRET = (() => {
  const jwtSecret = process.env.JWT_SECRET;
  invariant(jwtSecret != null, '시크릿 키가 누락되었습니다.');
  return jwtSecret;
})();

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
