import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';

type GetReportRequest = { id: string };

type GetReportResponse = { foo: string };

const getPath = (id: string) => `/features/reports/${id}`;

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/reports/reports_list
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
