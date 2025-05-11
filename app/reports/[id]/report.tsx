'use client';

import { getReportQueryOptions } from '@/lib/api/getReport';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Report({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getReportQueryOptions({ id }));

  return <>{JSON.stringify(data)}</>;
}
