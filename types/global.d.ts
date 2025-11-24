import { Service, Testimonial, Blog, ContactMessage, SiteContent, User, FAQ, Newsletter, CaseStudy } from '@prisma/client';

// Re-export Prisma types
export type {
  Service,
  Testimonial,
  Blog,
  ContactMessage,
  SiteContent,
  User,
};

// Extended types for components
export interface ServiceWithDetails extends Service {
  _count?: {
    [key: string]: number;
  };
}

export interface TestimonialWithDetails extends Testimonial {
  service?: Service;
}

export interface BlogWithDetails extends Blog {
  _count?: {
    [key: string]: number;
  };
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface FAQFormData {
  question: string;
  answer: string;
  category: string;
  order?: number;
  published?: boolean;
}

// SEO types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Breadcrumb types
export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}
