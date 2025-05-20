import type { Author, EventType, LaunchType } from './common';

export type Article = {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string; // ISO8601
  updated_at: string; // ISO8601
  featured: boolean;
  launches: LaunchType[];
  events: EventType[];
};
