'use client';

import { getReportsQueryOptions } from '@/lib/api/getReports';
import { useQuery } from '@tanstack/react-query';

export default function Reports() {
  const { data } = useQuery(getReportsQueryOptions({}));

  return <>{JSON.stringify(data)}</>;
}
