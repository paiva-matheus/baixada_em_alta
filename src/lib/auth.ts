import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';
// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'fallback-access-secret';

export interface AccessTokenPayload {
  tokenId: string;
  name: string;
}

export function generateAccessToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function signJWT(payload: AccessTokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1y' });
}

export function verifyJWT(token: string): AccessTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AccessTokenPayload;
  } catch {
    return null;
  }
}

export async function validateAccessToken(token: string): Promise<boolean> {
  try {
    const accessToken = await prisma.accessToken.findUnique({
      where: { token, isActive: true },
    });
    return !!accessToken;
  } catch {
    return false;
  }
}

export async function createAccessToken(name: string): Promise<string> {
  const token = generateAccessToken();
  
  await prisma.accessToken.create({
    data: {
      name,
      token,
    },
  });

  return token;
}