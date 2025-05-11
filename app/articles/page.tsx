import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Articles from './articles';
import { getArticlesQueryOptions } from '@/lib/api/getArticles';
import { SSRSuspense } from '@/components/ssr-suspense';

export default async function ArticlesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getArticlesQueryOptions({}));

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SSRSuspense>
        <Articles />
      </SSRSuspense>
    </HydrationBoundary>
  );
}
