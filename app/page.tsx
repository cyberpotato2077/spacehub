import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Home from './home';
import { getMeQueryOptions } from '@/lib/api/getMe';

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getMeQueryOptions());

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
