'use client';

import { getArticleQueryOptions } from '@/lib/api/getArticle';
import { useSuspenseQuery } from '@tanstack/react-query';
import { invariant } from 'es-toolkit';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  invariant(id != null, 'd');

  const { data } = useSuspenseQuery(getArticleQueryOptions({ id }));

  return <>{JSON.stringify(data)}</>;
}
