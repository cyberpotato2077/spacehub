import { httpClient } from '../httpClient';

export const signUp = async ({ email, password }: { email: string; password: string }) => {
  return httpClient.post('/auth/sign-up', {
    email,
    password,
  });
};
