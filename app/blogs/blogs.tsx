'use client';

import { NewsCard } from '@/components/news-card';
import { useNewsModal } from '@/hooks/use-news-modal';
import { getBlogsQueryOptions } from '@/lib/api/getBlogs';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Blogs() {
  const { openNewsModal } = useNewsModal();
  const { data } = useSuspenseQuery(getBlogsQueryOptions({}));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.results.map((result) => (
        <NewsCard key={result.id} item={result} onClick={() => openNewsModal({ post: result })} />
      ))}
    </div>
  );
}
