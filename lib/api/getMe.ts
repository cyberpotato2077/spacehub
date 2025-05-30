import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';

type GetMeResponse = {};

const apiPath = '/auth/me';

const getMe = () => {
  return http.get<GetMeResponse>(apiPath);
};

export const getMeQueryOptions = () => {
  return queryOptions({
    queryKey: [apiPath],
    queryFn: () => getMe(),
  });
};
