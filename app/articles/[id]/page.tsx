import Articles from './article';
import { SSRSuspense } from '@/components/ssr-suspense';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <SSRSuspense>
      <Articles id={id} />
    </SSRSuspense>
  );
}
