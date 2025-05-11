'use client';

import { getBlogsQueryOptions } from '@/lib/api/getBlogs';
import { useQuery } from '@tanstack/react-query';

export default function Blogs() {
  const { data } = useQuery(getBlogsQueryOptions({}));

  return <>{JSON.stringify(data)}</>;
}
