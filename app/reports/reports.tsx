'use client';

import { Button } from '@/components/ui/button';
import { getReportsQueryOptions } from '@/lib/api/getReports';
import { Routes } from '@/lib/routes';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Reports() {
  const router = useRouter();
  const { data } = useSuspenseQuery(getReportsQueryOptions({}));

  return (
    <>
      {data.results.map((result) => (
        <div key={result.id}>
          <Button
            type="button"
            onClick={() => router.push(Routes.report({ id: result.id }))}>
            go
          </Button>
          {JSON.stringify(result)}
        </div>
      ))}
    </>
  );
}
