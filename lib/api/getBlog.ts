import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { Post } from '@/models/common';

type GetBlogRequest = { id: number };
type GetBlogResponse = Post;
const getPath = (id: number) => `/features/blogs/${id}`;

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/blogs/blogs_retrieve
 */
const getBlog = (params: GetBlogRequest) => {
  return http.get<GetBlogResponse>(getPath(params.id), params);
};

export const getBlogQueryOptions = (params: GetBlogRequest) => {
  return queryOptions({
    queryKey: [getPath(params.id), params],
    queryFn: () => getBlog(params),
  });
};
