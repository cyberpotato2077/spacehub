import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { PaginatedList, Post } from '@/models/common';

export interface GetReportsRequest {
  /**
   * Number of results to return per page.
   */
  limit?: number;

  /**
   * Search for documents with a news_site__name present in a list
   * of comma-separated values. Case insensitive.
   */
  news_site?: string;

  /**
   * Search for documents with a news_site__name not present in a
   * list of comma-separated values. Case insensitive.
   */
  news_site_exclude?: string;

  /**
   * The initial index from which to return the results.
   */
  offset?: number;

  /**
   * Order the result on `published_at, -published_at, updated_at, -updated_at`.
   *
   * * `published_at` - Published at
   * * `-published_at` - Published at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  ordering?: (
    | '-published_at'
    | '-updated_at'
    | 'published_at'
    | 'updated_at'
  )[];

  /**
   * Get all documents published after a given ISO8601 timestamp (excluded).
   */
  published_at_gt?: string; // ISO8601

  /**
   * Get all documents published after a given ISO8601 timestamp (included).
   */
  published_at_gte?: string; // ISO8601

  /**
   * Get all documents published before a given ISO8601 timestamp (excluded).
   */
  published_at_lt?: string; // ISO8601

  /**
   * Get all documents published before a given ISO8601 timestamp (included).
   */
  published_at_lte?: string; // ISO8601

  /**
   * Search for documents with a specific phrase in the title or summary.
   */
  search?: string;

  /**
   * Search for all documents with a specific phrase in the summary.
   */
  summary_contains?: string;

  /**
   * Search for documents with a summary containing all keywords from
   * comma-separated values.
   */
  summary_contains_all?: string;

  /**
   * Search for documents with a summary containing at least one keyword
   * from comma-separated values.
   */
  summary_contains_one?: string;

  /**
   * Search for all documents with a specific phrase in the title.
   */
  title_contains?: string;

  /**
   * Search for documents with a title containing all keywords from
   * comma-separated values.
   */
  title_contains_all?: string;

  /**
   * Search for documents with a title containing at least one keyword
   * from comma-separated values.
   */
  title_contains_one?: string;

  /**
   * Get all documents updated after a given ISO8601 timestamp (excluded).
   */
  updated_at_gt?: string; // ISO8601

  /**
   * Get all documents updated after a given ISO8601 timestamp (included).
   */
  updated_at_gte?: string; // ISO8601

  /**
   * Get all documents updated before a given ISO8601 timestamp (excluded).
   */
  updated_at_lt?: string; // ISO8601

  /**
   * Get all documents updated before a given ISO8601 timestamp (included).
   */
  updated_at_lte?: string; // ISO8601
}

type GetReportsResponse = PaginatedList<Post>;

const path = '/features/reports';

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/reports/reports_list
 */
const getReports = (params: GetReportsRequest) => {
  return http.get<GetReportsResponse>(path, params);
};

export const getReportsQueryOptions = (params: GetReportsRequest) => {
  return queryOptions({
    queryKey: [path, params],
    queryFn: () => getReports(params),
  });
};
