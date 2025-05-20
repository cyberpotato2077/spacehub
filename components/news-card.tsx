import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import type { Post } from '@/models/common';

export function NewsCard({
  item,
  onClick,
}: {
  item: Post;
  onClick: VoidFunction;
}) {
  return (
    <Card
      className="w-full hover:shadow-lg transition-shadow py-0 select-none cursor-pointer"
      onClick={onClick}>
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={item.image_url}
            alt={item.title}
            width={400}
            height={200}
            className="w-full h-full object-cover rounded-t-xl"
            unoptimized
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {item.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2 items-center justify-between">
          <Badge variant="secondary">{item.news_site}</Badge>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <CalendarIcon className="w-4 h-4" />
            {new Date(item.published_at).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
