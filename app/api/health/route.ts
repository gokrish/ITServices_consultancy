import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Try to connect to database
    await prisma.$connect();
    
    // Try a simple query
    const count = await prisma.service.count();
    
    await prisma.$disconnect();
    
    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      servicesCount: count,
      timestamp: new Date().toISOString(),
      env: {
        hasDatabase: !!process.env.DATABASE_URL,
        databaseHost: process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'not configured',
        nodeEnv: process.env.NODE_ENV,
      },
    });
  } catch (error: any) {
    console.error('Health check failed:', error);
    
    return NextResponse.json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error.message,
      errorCode: error.code,
      timestamp: new Date().toISOString(),
      env: {
        hasDatabase: !!process.env.DATABASE_URL,
        databaseHost: process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'not configured',
        nodeEnv: process.env.NODE_ENV,
      },
    }, { status: 500 });
  }
}
