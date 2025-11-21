import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'GK IT Consulting - Empowering Businesses with Scalable Technology Solutions',
    template: '%s | GK IT Consulting',
  },
  description: 'We help companies build reliable systems, optimize infrastructure, implement cloud solutions, and automate workflows. Expertise across software development, cloud, DevOps, and data engineering.',
  keywords: ['IT Consulting', 'Cloud Consulting', 'DevOps', 'Software Development', 'Data Engineering', 'Cybersecurity'],
  authors: [{ name: 'GK IT Consulting' }],
  creator: 'GK IT Consulting',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gkit-consulting.com',
    siteName: 'GK IT Consulting',
    title: 'GK IT Consulting - Empowering Businesses with Scalable Technology Solutions',
    description: 'We help companies build reliable systems, optimize infrastructure, implement cloud solutions, and automate workflows.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GK IT Consulting',
    description: 'Empowering Businesses with Scalable Technology Solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
