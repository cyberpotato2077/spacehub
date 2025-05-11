'use client';

import { getArticleQueryOptions } from '@/lib/api/getArticle';
import { useSuspenseQuery } from '@tanstack/react-query';
import { invariant } from 'es-toolkit';
import { parseAsString, useQueryState } from 'nuqs';

export default function Article() {
  const [id] = useQueryState('id', parseAsString);

  invariant(id != null, 'd');

  const { data } = useSuspenseQuery(getArticleQueryOptions({ id }));

  return <>{JSON.stringify(data)}</>;
}
