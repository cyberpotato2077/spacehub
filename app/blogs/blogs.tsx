'use client';

import { NewsCard } from '@/components/news-card';
import { Button } from '@/components/ui/button';
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
          item={{
            featured: result.featured,
            id: result.id,
            image_url: result.image_url,
            news_site: result.news_site,
            published_at: result.published_at,
            summary: result.summary,
            title: result.title,
            updated_at: result.updated_at,
            url: result.url,
          }}
          onClick={() => router.push(Routes.article({ id: result.id }))}
        />
      ))}
    </div>
  );
}
