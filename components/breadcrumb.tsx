'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';

export interface BreadcrumbItem {
    label: string;
    href: string;
    current?: boolean;
}

interface BreadcrumbProps {
    items?: BreadcrumbItem[];
    className?: string;
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', href: '/' }
    ];

    let currentPath = '';

    paths.forEach((path, index) => {
        currentPath += `/${path}`;
        const isLast = index === paths.length - 1;

        // Format the label (capitalize and replace hyphens with spaces)
        const label = path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        breadcrumbs.push({
            label,
            href: currentPath,
            current: isLast,
        });
    });

    return breadcrumbs;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    const pathname = usePathname();
    const breadcrumbs = items || generateBreadcrumbs(pathname);

    // Don't show breadcrumbs on homepage or admin pages
    if (pathname === '/' || pathname.startsWith('/admin')) {
        return null;
    }

    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
        >
            <ol className="flex items-center space-x-2" role="list">
                {breadcrumbs.map((item, index) => (
                    <Fragment key={item.href}>
                        <li className="flex items-center">
                            {index === 0 ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-blue-600 transition-colors flex items-center gap-1"
                                    aria-label="Home"
                                >
                                    <Home className="h-4 w-4" />
                                    <span className="sr-only sm:not-sr-only sm:inline">{item.label}</span>
                                </Link>
                            ) : item.current ? (
                                <span
                                    className="font-medium text-gray-900"
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                        {index < breadcrumbs.length - 1 && (
                            <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                        )}
                    </Fragment>
                ))}
            </ol>
        </nav>
    );
}

// Structured data for SEO
export function BreadcrumbSchema({ items }: { items?: BreadcrumbItem[] }) {
    const pathname = usePathname();
    const breadcrumbs = items || generateBreadcrumbs(pathname);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gkit-consulting.com'}${item.href}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
