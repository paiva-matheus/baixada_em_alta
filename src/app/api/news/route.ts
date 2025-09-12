import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { validateAccessToken } from '@/lib/auth';
import { CreateNewsRequest } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '12');
    
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

    return NextResponse.json({
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
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Token de acesso necessário' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const isValidToken = await validateAccessToken(token);
    
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Token inválido ou expirado' },
        { status: 401 }
      );
    }

    const body: CreateNewsRequest = await request.json();
    
    if (!body.title || !body.description || !body.content || !body.news_url) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: title, description, content, news_url' },
        { status: 400 }
      );
    }

    const news = await prisma.news.create({
      data: {
        title: body.title,
        description: body.description,
        content: body.content, 
        news_url: body.news_url,
        image_url: body.image_url || undefined,
      },
    });

    return NextResponse.json(
      {
        ...news,
        createdAt: news.createdAt.toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}