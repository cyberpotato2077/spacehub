import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { Post } from '@/models/common';

type GetReportRequest = { id: number };

type GetReportResponse = Post;

const getPath = (id: number) => `/features/reports/${id}`;

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/reports/reports_retrieve
 */
const getReport = (params: GetReportRequest) => {
  return http.get<GetReportResponse>(getPath(params.id), params);
};

export const getReportQueryOptions = (params: GetReportRequest) => {
  return queryOptions({
    queryKey: [getPath(params.id), params],
    queryFn: () => getReport(params),
  });
};
