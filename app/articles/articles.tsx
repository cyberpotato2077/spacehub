'use client';

import { getArticlesQueryOptions } from '@/lib/api/getArticles';
import { useQuery } from '@tanstack/react-query';

export default function Articles() {
  const { data } = useQuery(getArticlesQueryOptions({}));

  return <>{JSON.stringify(data)}</>;
}
