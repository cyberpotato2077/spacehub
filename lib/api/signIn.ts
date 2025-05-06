import { http } from '../http';

export const signIn = async ({ email, password }: { email: string; password: string }) => {
  return http.post('/auth/sign-in', {
    email,
    password,
  });
};
