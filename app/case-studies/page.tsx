import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies - Success Stories',
  description: 'Explore our client success stories and see how we have helped businesses transform digitally.',
};

const caseStudies = [
  {
    id: 1,
    client: 'TechRetail Inc.',
    industry: 'E-commerce',
    title: 'Scaling E-commerce Platform for 10x Growth',
    challenge: 'Handle increasing traffic and improve conversion rates',
    solution: 'Cloud migration, performance optimization, and UX redesign',
    results: [
      '300% increase in conversion rate',
      '99.9% uptime achieved',
      '50% reduction in page load time',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    id: 2,
    client: 'HealthCare Plus',
    industry: 'Healthcare',
    title: 'Digital Transformation for Patient Management',
    challenge: 'Modernize legacy systems and improve patient experience',
    solution: 'Custom web and mobile app with secure data management',
    results: [
      '60% reduction in admin time',
      '95% patient satisfaction',
      'HIPAA compliant system',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
  },
  {
    id: 3,
    client: 'FinanceFlow',
    industry: 'Fintech',
    title: 'Building Secure Payment Processing Platform',
    challenge: 'Create fast, secure, and scalable payment infrastructure',
    solution: 'Microservices architecture with advanced security',
    results: [
      '1M+ transactions daily',
      'Zero security breaches',
      '40% cost reduction',
    ],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
  },
  {
    id: 4,
    client: 'EduLearn',
    industry: 'Education',
    title: 'Online Learning Platform for 100k+ Students',
    challenge: 'Create engaging and scalable e-learning solution',
    solution: 'Interactive platform with video streaming and real-time collaboration',
    results: [
      '100k+ active students',
      '90% course completion rate',
      '4.8/5 average rating',
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies', current: true }]} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses achieve their digital transformation goals and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Happy Clients', value: '200+' },
              { icon: Award, label: 'Projects Completed', value: '500+' },
              { icon: TrendingUp, label: 'Average ROI', value: '350%' },
              { icon: Award, label: 'Industry Awards', value: '25+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center bg-white rounded-2xl p-8 shadow-lg`}
              >
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button>Get Similar Results</Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
