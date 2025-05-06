'use client';

import { Button } from '@/components/ui/button';
import { useAuthModal } from './hooks/useAuthModal';
import { useQuery } from '@tanstack/react-query';
import { http } from '@/lib/http';

export default function Home() {
  const { openAuthModal } = useAuthModal();
  const { data } = useQuery({
    queryKey: ['hi'],
    queryFn: async () => {
      return http.get('/helth-check');
    },
  });

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <Button onClick={openAuthModal}>로그인</Button>
    </div>
  );
}
