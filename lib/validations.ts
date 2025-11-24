import { z } from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().max(100, 'Company name too long').optional(),
    message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter Schema
export const newsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Service Schema
export const serviceSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(200),
    slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    icon: z.string().optional(),
    image: z.string().url().optional().or(z.literal('')),
    deliverables: z.array(z.string()).default([]),
    process: z.array(z.string()).default([]),
    techStacks: z.array(z.string()).default([]),
    faqs: z.any().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    order: z.number().int().default(0),
});

export type ServiceFormData = z.infer<typeof serviceSchema>;

// Blog Schema
export const blogSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(200),
    slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens'),
    excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
    content: z.string().min(50, 'Content must be at least 50 characters'),
    image: z.string().url().optional().or(z.literal('')),
    author: z.string().default('GK IT Consulting'),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
});

export type BlogFormData = z.infer<typeof blogSchema>;

// Testimonial Schema
export const testimonialSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    company: z.string().min(2, 'Company name must be at least 2 characters').max(100),
    role: z.string().max(100).optional(),
    feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
    image: z.string().url().optional().or(z.literal('')),
    rating: z.number().int().min(1).max(5).default(5),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    order: z.number().int().default(0),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;

// FAQ Schema
export const faqSchema = z.object({
    question: z.string().min(5, 'Question must be at least 5 characters'),
    answer: z.string().min(10, 'Answer must be at least 10 characters'),
    category: z.string().min(2, 'Category is required'),
    order: z.number().int().default(0),
    published: z.boolean().default(true),
});

export type FAQFormData = z.infer<typeof faqSchema>;

// Case Study Schema
export const caseStudySchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(200),
    slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens'),
    client: z.string().min(2, 'Client name is required'),
    industry: z.string().min(2, 'Industry is required'),
    challenge: z.string().min(50, 'Challenge description must be at least 50 characters'),
    solution: z.string().min(50, 'Solution description must be at least 50 characters'),
    results: z.string().min(50, 'Results description must be at least 50 characters'),
    image: z.string().url().optional().or(z.literal('')),
    metrics: z.any().optional(),
    technologies: z.array(z.string()).default([]),
    testimonialId: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    order: z.number().int().default(0),
});

export type CaseStudyFormData = z.infer<typeof caseStudySchema>;

// Environment Variables Schema
export const envSchema = z.object({
    // Database
    DATABASE_URL: z.string().url(),

    // Auth
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(32),

    // Email
    EMAIL_SERVER: z.string().optional(),
    EMAIL_FROM: z.string().email().optional(),

    // Analytics
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),

    // Rate Limiting
    UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

    // reCAPTCHA
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
    RECAPTCHA_SECRET_KEY: z.string().optional(),

    // Storage
    NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
    SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
});

export type EnvSchema = z.infer<typeof envSchema>;

// Helper function to sanitize HTML/user input
export function sanitizeInput(input: string): string {
    return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .trim();
}

// Helper function to generate slug from title
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Email validation regex
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
