import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const news = await prisma.news.findUnique({
      where: { id: params.id },
    });

    if (!news) {
      return NextResponse.json(
        { error: 'Notícia não encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...news,
      createdAt: news.createdAt.toISOString(),
    });
  } catch (error) {
    console.error('Error fetching news by id:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}