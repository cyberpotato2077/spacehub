import { SSRSuspense } from '@/components/ssr-suspense';
import Blog from './blog';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <SSRSuspense>
      <Blog id={id} />
    </SSRSuspense>
  );
}
