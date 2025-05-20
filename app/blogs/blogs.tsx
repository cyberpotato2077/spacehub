'use client';

import { NewsCard } from '@/components/news-card';
import { getBlogsQueryOptions } from '@/lib/api/getBlogs';
import { Routes } from '@/lib/routes';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Blogs() {
  const router = useRouter();
  const { data } = useSuspenseQuery(getBlogsQueryOptions({}));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.results.map((result) => (
        <NewsCard
          key={result.id}
          item={result}
          onClick={() => router.push(Routes.article({ id: result.id }))}
        />
      ))}
    </div>
  );
}
