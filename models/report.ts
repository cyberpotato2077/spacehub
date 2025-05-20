import type { Author } from './common';

export type Report = {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string; // ISO8601 형식
  updated_at: string; // ISO8601 형식
};
