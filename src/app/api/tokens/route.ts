import { NextRequest, NextResponse } from 'next/server';
import { createAccessToken } from '@/lib/auth';

// TODO autenticação adicional
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.name) {
      return NextResponse.json(
        { error: 'Nome do token é obrigatório' },
        { status: 400 }
      );
    }

    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET && process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }

    const token = await createAccessToken(body.name);

    return NextResponse.json(
      {
        message: 'Token criado com sucesso',
        token,
        name: body.name,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating token:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}