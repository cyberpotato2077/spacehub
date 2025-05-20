export interface PaginatedList<T> {
  count: number; // Total number of articles
  next: string | null; // URL to next page
  previous: string | null; // URL to previous page
  results: T[]; // Array of article objects
}

type Author = {
  name: string;
  socials: {
    x: string;
    youtube: string;
    instagram: string;
    linkedin: string;
    mastodon: string;
    bluesky: string;
  };
};

type LaunchType = {
  launch_id: string;
  provider: string;
};

type EventType = {
  event_id: number;
  provider: string;
};

export type Post = {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches?: LaunchType[];
  events?: EventType[];
};
