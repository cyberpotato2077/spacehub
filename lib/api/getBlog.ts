import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';

type GetBlogRequest = { id: string };
type GetBlogResponse = { foo: string };

const getPath = (id: string) => `/features/blogs/${id}`;

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
