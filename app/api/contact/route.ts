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
    try {
      await sendEmail({
        to: process.env.EMAIL_TO || 'admin@gkit-consulting.com',
        subject: `New Contact Form Submission from ${body.name}`,
        html: getContactEmailTemplate(body),
      });
    } catch (emailError) {
      // Log email error but don't fail the request since message is saved
      console.error('Email send failed:', emailError);
      return NextResponse.json({ 
        message: 'Message saved but email notification failed',
        id: contactMessage.id,
        emailError: process.env.NODE_ENV === 'development' ? String(emailError) : 'Email service unavailable'
      }, { status: 200 });
    }

    return NextResponse.json({ 
      message: 'Message sent successfully',
      id: contactMessage.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? String(error) : undefined
    }, { status: 500 });
  }
}
