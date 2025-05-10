'use client';

import { getBlogsQueryOptions } from '@/lib/api/getBlogs';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Blogs() {
  const { data } = useSuspenseQuery(getBlogsQueryOptions({}));

  return <>{JSON.stringify(data)}</>;
}
