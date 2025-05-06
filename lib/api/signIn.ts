import { httpClient } from '../httpClient';

export const signIn = async ({ email, password }: { email: string; password: string }) => {
  return httpClient.post('/auth/sign-in', {
    email,
    password,
  });
};
