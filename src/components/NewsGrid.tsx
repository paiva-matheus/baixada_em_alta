import Link from 'next/link';
import Image from 'next/image';
import { News } from '@/types';

interface NewsGridProps {
  news: News[];
}

export default function NewsGrid({ news }: NewsGridProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map(item => (
        <article key={item.id} className="news-card">
          {item.image_url && (
            <div className="relative h-48 w-full">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          
          <div className="p-6">
            <div className="mb-4">
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(item.createdAt)}
              </time>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
              {item.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between">
              <Link
                href={`/noticia/${item.id}`}
                className="inline-flex items-center text-baixada-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Ler mais
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              
              {item.news_url && (
                <a
                  href={item.news_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Fonte externa
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}