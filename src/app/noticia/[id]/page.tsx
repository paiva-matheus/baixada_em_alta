import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

async function getNewsById(id: string) {
  try {
    const news = await prisma.news.findUnique({
      where: { id },
    });
    return news;
  } catch {
    return null;
  }
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = await getNewsById(params.id);

  if (!news) {
    notFound();
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-baixada-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar para o início
          </Link>
          
         
        </div>

        <div className='pb-2'>
          <time className="text-gray-500 dark:text-gray-400 text-sm">
            {formatDate(news.createdAt)}
          </time>
        </div>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          {news.image_url && (
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {news.title}
            </h1>
            
            <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {news.description}
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-baixada-blue dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
            
            {news.news_url && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <span className="text-gray-600 dark:text-gray-300">Fonte:</span>
                  <a
                    href={news.news_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-baixada-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
                  >
                    Ver fonte original
                  </a>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}