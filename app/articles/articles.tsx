'use client';

import { Button } from '@/components/ui/button';
import { getArticlesQueryOptions } from '@/lib/api/getArticles';
import { Routes } from '@/lib/routes';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Articles() {
  const router = useRouter();
  const { data } = useSuspenseQuery(getArticlesQueryOptions({}));

  return (
    <>
      {data.results.map((result) => (
        <div key={result.id}>
          <Button
            type="button"
            onClick={() => router.push(Routes.article({ id: result.id }))}>
            go
          </Button>
          {JSON.stringify(result)}
        </div>
      ))}
    </>
  );
}
