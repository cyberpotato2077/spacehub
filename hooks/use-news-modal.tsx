import { NewsModal } from '@/components/news-modal';
import type { Post } from '@/models/common';
import { overlay } from 'overlay-kit';

export function useNewsModal() {
  const openNewsModal = ({ post }: { post: Post }) => {
    overlay.open(({ isOpen, close }) => <NewsModal item={post} isOpen={isOpen} onClose={close} />);
  };

  return { openNewsModal };
}
