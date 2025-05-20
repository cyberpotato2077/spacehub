import type { Author, EventType, LaunchType } from './common';

export interface Blog {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string; // ISO8601 date-time
  updated_at: string; // ISO8601 date-time
  featured: boolean;
  launches: LaunchType[];
  events: EventType[];
}
