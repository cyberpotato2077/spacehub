import { SSRSuspense } from '@/components/ssr-suspense';
import Report from './report';

export default async function ReportPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <SSRSuspense>
      <Report id={id} />
    </SSRSuspense>
  );
}
