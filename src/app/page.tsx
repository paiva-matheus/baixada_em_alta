import { Suspense } from 'react';
import NewsGrid from '@/components/NewsGrid';
import Pagination from '@/components/Pagination';
import { prisma } from '@/lib/prisma';
import { News, PaginatedResponse } from '@/types';

interface HomePageProps {
  searchParams: {
    page?: string;
  };
}

async function getNews(page: number = 1, pageSize: number = 12): Promise<PaginatedResponse<News>> {
  const skip = (page - 1) * pageSize;
  
  const [news, total] = await Promise.all([
    prisma.news.findMany({
      skip,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.news.count(),
  ]);

  return {
    data: news.map(item => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    })),
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const page = Number(searchParams.page) || 1;
  const newsData = await getNews(page);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 py-8 bg-gradient-to-r from-baixada-blue to-baixada-green rounded-2xl text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Notícias da{' '}
            <span className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
              Baixada Santista
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Mantenha-se informado sobre os principais acontecimentos, 
            <strong className="text-white"> oportunidades de emprego</strong> e 
            <strong className="text-white"> mercado de trabalho</strong> da região
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15M+</div>
              <div className="text-sm text-blue-200">Habitantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">9</div>
              <div className="text-sm text-blue-200">Cidades</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-sm text-blue-200">Atualizações</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/10 rounded-full"></div>
      </div>

      <Suspense fallback={<div className="text-center py-8 text-gray-600 dark:text-gray-300">Carregando notícias...</div>}>
        {newsData.data.length > 0 ? (
          <>
            <NewsGrid news={newsData.data} />
            <div className="mt-12">
              <Pagination
                currentPage={newsData.pagination.page}
                totalPages={newsData.pagination.totalPages}
              />
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Nenhuma notícia encontrada
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Aguarde enquanto preparamos o conteúdo para você.
            </p>
          </div>
        )}
      </Suspense>
    </div>
  );
}