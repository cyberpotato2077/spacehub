export interface PaginatedList<T> {
  count: number; // Total number of articles
  next: string | null; // URL to next page
  previous: string | null; // URL to previous page
  results: T[]; // Array of article objects
}

export type Author = {
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

export type LaunchType = {
  launch_id: string;
  provider: string;
};

export type EventType = {
  event_id: number;
  provider: string;
};
