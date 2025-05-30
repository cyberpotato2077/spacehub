'use client';

import { getMeQueryOptions } from '@/lib/api/getMe';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data } = useQuery(getMeQueryOptions());

  return <>{JSON.stringify(data)}</>;
}
