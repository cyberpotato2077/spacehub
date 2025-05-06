import postgres from 'postgres';
import { invariant } from 'es-toolkit';

export const sql = (() => {
  const postgresUrl = process.env.POSTGRES_URL;
  invariant(postgresUrl != null, `연결할 DB 주소가 누락되었습니다. ${process.env.TEST}`);
  return postgres(postgresUrl, { ssl: 'require' });
})();
