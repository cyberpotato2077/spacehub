// app/posts/page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Posts from './posts';
import { getPosts } from '@/lib/api/post';
import { getComments } from '@/lib/api/comments';

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  await queryClient.prefetchQuery({
    queryKey: ['posts-comments'],
    queryFn: getComments,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
