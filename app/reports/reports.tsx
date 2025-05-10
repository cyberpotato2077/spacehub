'use client';

import { getReportsQueryOptions } from '@/lib/api/getReports';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Reports() {
  const { data } = useSuspenseQuery(getReportsQueryOptions({}));

  return <>{JSON.stringify(data)}</>;
}
