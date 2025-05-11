import Articles from './article';
import { SSRSuspense } from '@/components/ssr-suspense';

export default async function ArticlesPage() {
  return (
    <SSRSuspense>
      <Articles />
    </SSRSuspense>
  );
}
