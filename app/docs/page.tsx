import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { Book, Code, FileText, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation - Technical Resources',
  description: 'Access our comprehensive documentation, guides, and technical resources.',
};

const docCategories = [
  {
    title: 'Getting Started',
    icon: Book,
    items: [
      'Introduction',
      'Quick Start Guide',
      'Installation',
      'Configuration',
    ],
  },
  {
    title: 'API Reference',
    icon: Code,
    items: [
      'Authentication',
      'REST API',
      'GraphQL API',
      'Webhooks',
    ],
  },
  {
    title: 'Guides',
    icon: FileText,
    items: [
      'Best Practices',
      'Security Guidelines',
      'Performance Optimization',
      'Troubleshooting',
    ],
  },
  {
    title: 'Tutorials',
    icon: Video,
    items: [
      'Video Tutorials',
      'Code Examples',
      'Use Cases',
      'Integration Guides',
    ],
  },
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Documentation', href: '/docs', current: true }]} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about our services, APIs, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <category.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive Documentation Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              We're working hard to create detailed documentation for all our services. 
              In the meantime, feel free to reach out to our support team for any questions.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
