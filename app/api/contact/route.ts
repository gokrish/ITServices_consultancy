import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail, getContactEmailTemplate } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = contactSchema.parse(json);

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: body,
    });

    // Send email notification
    await sendEmail({
      to: process.env.EMAIL_TO || 'admin@gkit-consulting.com',
      subject: `New Contact Form Submission from ${body.name}`,
      html: getContactEmailTemplate(body),
    });

    return NextResponse.json({ 
      message: 'Message sent successfully',
      id: contactMessage.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
