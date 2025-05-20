'use client';

import { getBlogQueryOptions } from '@/lib/api/getBlog';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Blog({ id }: { id: number }) {
  const { data } = useSuspenseQuery(getBlogQueryOptions({ id }));

  return <>{JSON.stringify(data)}</>;
}
