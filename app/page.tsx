'use client';

import { Button } from '@/components/ui/button';
import { useAuthModal } from './hooks/useAuthModal';

export default function Home() {
  const { openAuthModal } = useAuthModal();

  return (
    <div>
      <Button onClick={openAuthModal}>로그인</Button>
    </div>
  );
}
