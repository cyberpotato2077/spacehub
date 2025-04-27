'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

export default function Home() {
  const { data } = useSuspenseQuery({
    queryKey: [],
    queryFn: () => ['home1', 'home2'],
  });
  return <div>{JSON.stringify(data)}</div>;
}
