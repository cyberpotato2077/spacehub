import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';

type Launch = {
  id: string;
  provider: string;
};

type Event = {
  id: number;
  provider: string;
};

type NewsItem = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured?: boolean;
  launches?: Launch[];
  events?: Event[];
};

export function NewsCard({ item, onClick }: { item: NewsItem; onClick: VoidFunction }) {
  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow py-0" onClick={onClick}>
      <CardHeader className="p-0">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={item.image_url}
            alt={item.title}
            width={400}
            height={200}
            className="w-full h-full object-cover rounded-t-xl"
            unoptimized
          />
        </a>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg line-clamp-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              {item.title}
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </CardTitle>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">{item.summary}</p>

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
