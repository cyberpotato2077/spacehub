'use client';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { Suspense, type ReactNode } from 'react';

export function SSRSuspense({ fallback, children }: { fallback?: ReactNode; children: ReactNode }) {
  const isMounted = useIsMounted();

  if (isMounted) {
    return <Suspense fallback={fallback}>{children}</Suspense>;
  }

  return fallback;
}
