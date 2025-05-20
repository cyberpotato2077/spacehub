import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { Post } from '@/models/common';

type GetArticleRequest = { id: number };

type GetArticleResponse = Post;

const getPath = (id: number) => `/features/articles/${id}`;

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_retrieve
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
