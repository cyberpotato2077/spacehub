// app/posts/page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Reports from './reports';
import { getReportsQueryOptions } from '@/lib/api/getReports';

export default async function ReportsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getReportsQueryOptions({}));

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Reports />
    </HydrationBoundary>
  );
}
