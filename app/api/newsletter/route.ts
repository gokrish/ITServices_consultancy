import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { newsletterSchema } from '@/lib/validations';
import { rateLimit, getIP } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
    try {
        // Rate limiting - 3 requests per minute per IP
        const ip = getIP(request);
        const rateLimitResult = await rateLimit(`newsletter:${ip}`, 3, 60000);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const validatedData = newsletterSchema.parse(body);

        // Check if email already exists
        const existing = await prisma.newsletter.findUnique({
            where: { email: validatedData.email },
        });

        if (existing) {
            if (existing.status === 'active') {
                return NextResponse.json(
                    { error: 'This email is already subscribed to our newsletter.' },
                    { status: 400 }
                );
            } else {
                // Reactivate if previously unsubscribed
                await prisma.newsletter.update({
                    where: { email: validatedData.email },
                    data: {
                        status: 'active',
                        subscribedAt: new Date(),
                    },
                });

                return NextResponse.json({
                    success: true,
                    message: 'Successfully resubscribed!',
                });
            }
        }

        // Create new newsletter subscription
        await prisma.newsletter.create({
            data: {
                email: validatedData.email,
                status: 'active',
            },
        });

        // TODO: Send welcome email (implement with your email service)
        // await sendWelcomeEmail(validatedData.email);

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to newsletter!',
        });

    } catch (error: any) {
        console.error('Newsletter subscription error:', error);

        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to subscribe. Please try again later.' },
            { status: 500 }
        );
    }
}
