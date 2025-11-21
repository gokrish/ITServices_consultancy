import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const serviceSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().optional(),
  image: z.string().optional(),
  deliverables: z.array(z.string()).optional(),
  process: z.array(z.string()).optional(),
  techStacks: z.array(z.string()).optional(),
  faqs: z.any().optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
  order: z.number().optional(),
});

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const json = await request.json();
    const body = serviceSchema.parse(json);

    const service = await prisma.service.create({
      data: body,
    });

    return NextResponse.json(service);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
