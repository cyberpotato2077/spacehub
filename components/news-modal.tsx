import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, X } from 'lucide-react';
import type { Post } from '@/models/common';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function NewsModal({ item, isOpen, onClose }: { item: Post; isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <VisuallyHidden>
        <DialogTitle>{item.title}</DialogTitle>
      </VisuallyHidden>
      <DialogContent className="w-full max-w-5xl h-[90vh] overflow-y-auto p-0 rounded-t-xl">
        <div className="flex flex-col h-full">
          <div className="relative w-full aspect-[16/9]">
            <Image src={item.image_url} alt={item.title} fill className="object-cover rounded-t-xl" unoptimized />
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-2 text-muted-foreground">{item.summary}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t">
              <Badge variant="secondary">{item.news_site}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                {new Date(item.published_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
