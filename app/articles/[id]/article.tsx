'use client';

import { getArticleQueryOptions } from '@/lib/api/getArticle';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Article({ id }: { id: number }) {
  const { data } = useSuspenseQuery(getArticleQueryOptions({ id }));

  return <>{JSON.stringify(data)}</>;
}
