import { queryOptions } from '@tanstack/react-query';
import { http } from '../http';
import type { PaginatedList } from '@/models/common';

type GetArticlesRequest = {
  event?: number[]; // Search for documents related to specific event IDs
  has_event?: boolean; // Filter documents that have a related event
  has_launch?: boolean; // Filter documents that have a related launch
  is_featured?: boolean; // Filter documents that are featured
  launch?: string[]; // Launch IDs (UUID)
  limit?: number; // Number of results per page
  news_site?: string; // Comma-separated list of news_site names (include)
  news_site_exclude?: string; // Comma-separated list of news_site names (exclude)
  offset?: number; // Index offset for pagination
  ordering?: ('published_at' | '-published_at' | 'updated_at' | '-updated_at')[]; // Ordering options
  published_at_gt?: string; // ISO8601 timestamp (exclusive)
  published_at_gte?: string; // ISO8601 timestamp (inclusive)
  published_at_lt?: string; // ISO8601 timestamp (exclusive)
  published_at_lte?: string; // ISO8601 timestamp (inclusive)
  search?: string; // Phrase search in title or summary
  summary_contains?: string; // Phrase search in summary
  summary_contains_all?: string; // Comma-separated keywords (all must be in summary)
  summary_contains_one?: string; // Comma-separated keywords (at least one must be in summary)
  title_contains?: string; // Phrase search in title
  title_contains_all?: string; // Comma-separated keywords (all must be in title)
  title_contains_one?: string; // Comma-separated keywords (at least one must be in title)
  updated_at_gt?: string; // ISO8601 timestamp (exclusive)
  updated_at_gte?: string; // ISO8601 timestamp (inclusive)
  updated_at_lt?: string; // ISO8601 timestamp (exclusive)
  updated_at_lte?: string; // ISO8601 timestamp (inclusive)
};

type Article = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string; // ISO8601
  updated_at: string; // ISO8601
  featured: boolean;
  launches: {
    id: string;
    provider: string;
  }[];
  events: {
    id: number;
    provider: string;
  }[];
};

type GetArticlesResponse = PaginatedList<Article>;

const path = '/features/articles';

/**
 * @link https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_list
 */
const getArticles = (params: GetArticlesRequest) => {
  return http.get<GetArticlesResponse>(path, params);
};

export const getArticlesQueryOptions = (params: GetArticlesRequest) => {
  return queryOptions({
    queryKey: [path, params],
    queryFn: () => getArticles(params),
  });
};
