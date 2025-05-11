import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { PaginatedList } from '@/models/common';

type GetArticleRequest = { id: string };

type GetArticleResponse = {
  foo: string;
};

const getPath = (id: string) => `/features/articles/${id}`;

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_list
 */
const getArticle = (params: GetArticleRequest) => {
  return http.get<GetArticleResponse>(getPath(params.id), params);
};

export const getArticleQueryOptions = (params: GetArticleRequest) => {
  return queryOptions({
    queryKey: [getPath(params.id), params],
    queryFn: () => getArticle(params),
  });
};
