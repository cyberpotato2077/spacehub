'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

export default function Home() {
  const { data } = useSuspenseQuery({
    queryKey: [],
    queryFn: () => ['home1', 'home2'],
  });
  return (
    <div>
      {JSON.stringify(data)}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
