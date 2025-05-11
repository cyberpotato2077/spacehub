'use client';

import { getArticlesQueryOptions } from '@/lib/api/getArticles';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Articles() {
  const { data } = useSuspenseQuery(getArticlesQueryOptions({}));

  return <>{JSON.stringify(data)}</>;
}
