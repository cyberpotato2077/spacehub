import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { PaginatedList, Post } from '@/models/common';

interface GetBlogsRequest {
  /**
   * Search for all documents related to a specific event using its
   * Launch Library 2 ID.
   */
  event?: number[];

  /**
   * Get all documents that have a related event.
   */
  has_event?: boolean;

  /**
   * Get all documents that have a related launch.
   */
  has_launch?: boolean;

  /**
   * Get all documents that are featured.
   */
  is_featured?: boolean;

  /**
   * Search for all documents related to a specific launch using its
   * Launch Library 2 ID.
   */
  launch?: string[]; // UUIDs, explode: false, style: form

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
  ordering?: Array<
    'published_at' | '-published_at' | 'updated_at' | '-updated_at'
  >; // explode: false, style: form

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

type GetArticlesResponse = PaginatedList<Post>;

const path = '/features/blogs';

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/blogs/blogs_list
 */
const getBlogs = (params: GetBlogsRequest) => {
  return http.get<GetArticlesResponse>(path, params);
};

export const getBlogsQueryOptions = (params: GetBlogsRequest) => {
  return queryOptions({
    queryKey: [path, params],
    queryFn: () => getBlogs(params),
  });
};
