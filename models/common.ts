export interface PaginatedList<T> {
  count: number; // Total number of articles
  next: string | null; // URL to next page
  previous: string | null; // URL to previous page
  results: T[]; // Array of article objects
}
