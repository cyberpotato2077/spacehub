// app/posts/page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Blogs from './blogs';
import { getBlogsQueryOptions } from '@/lib/api/getBlogs';

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getBlogsQueryOptions({}));

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Blogs />
    </HydrationBoundary>
  );
}
