import { http } from '../http';

export const signUp = async ({ email, password }: { email: string; password: string }) => {
  return http.post('/auth/sign-up', {
    email,
    password,
  });
};
