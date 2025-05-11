'use client';

import { Button } from '@/components/ui/button';
import { getBlogsQueryOptions } from '@/lib/api/getBlogs';
import { Routes } from '@/lib/routes';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Blogs() {
  const router = useRouter();
  const { data } = useSuspenseQuery(getBlogsQueryOptions({}));

  return (
    <>
      {data.results.map((result) => (
        <div key={result.id}>
          <Button
            type="button"
            onClick={() => router.push(Routes.blog({ id: result.id }))}>
            go
          </Button>
          {JSON.stringify(result)}
        </div>
      ))}
    </>
  );
}
