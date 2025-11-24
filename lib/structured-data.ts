import { Service, Testimonial, Blog } from '@prisma/client';

interface Organization {
    name: string;
    url: string;
    logo?: string;
    description?: string;
    email?: string;
    telephone?: string;
    address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    sameAs?: string[];
}

export function generateOrganizationSchema(org: Organization) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: org.name,
        url: org.url,
        logo: org.logo,
        description: org.description,
        email: org.email,
        telephone: org.telephone,
        address: org.address ? {
            '@type': 'PostalAddress',
            ...org.address,
        } : undefined,
        sameAs: org.sameAs,
    };
}

export function generateServiceSchema(service: Service, baseUrl: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `${baseUrl}/services/${service.slug}`,
        image: service.image,
        serviceType: service.title,
        provider: {
            '@type': 'Organization',
            name: 'GK IT Consulting',
            url: baseUrl,
        },
    };
}

export function generateReviewSchema(testimonials: Testimonial[], baseUrl: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GK IT Consulting',
        url: baseUrl,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: (
                testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
            ).toFixed(1),
            reviewCount: testimonials.length,
            bestRating: 5,
            worstRating: 1,
        },
        review: testimonials.map((testimonial) => ({
            '@type': 'Review',
            author: {
                '@type': 'Person',
                name: testimonial.name,
                jobTitle: testimonial.role,
                worksFor: {
                    '@type': 'Organization',
                    name: testimonial.company,
                },
            },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: testimonial.rating,
                bestRating: 5,
                worstRating: 1,
            },
            reviewBody: testimonial.feedback,
        })),
    };
}

export function generateBlogPostSchema(blog: Blog, baseUrl: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.excerpt,
        image: blog.image,
        datePublished: blog.publishedAt || blog.createdAt,
        dateModified: blog.updatedAt,
        author: {
            '@type': 'Person',
            name: blog.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'GK IT Consulting',
            url: baseUrl,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${blog.slug}`,
        },
    };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateWebsiteSchema(baseUrl: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'GK IT Consulting',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

// Helper to convert schema to JSON-LD string
export function schemaToString(schema: object): string {
    return JSON.stringify(schema);
}
