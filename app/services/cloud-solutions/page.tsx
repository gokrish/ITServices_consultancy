import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Cloud, Shield, Zap, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Solutions - IT Services',
  description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
};

export default function CloudSolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Cloud Solutions', href: '/services/cloud-solutions', current: true }
        ]} />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Cloud className="h-5 w-5" />
                  <span className="font-medium">Cloud Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Scalable Cloud Infrastructure for Your Business
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your business with secure, scalable, and cost-effective cloud solutions. We help you migrate, optimize, and manage your cloud infrastructure.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">View Case Studies</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
                  alt="Cloud Solutions"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive cloud solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Cloud,
                  title: 'Cloud Migration',
                  description: 'Seamless migration from on-premise to cloud infrastructure',
                },
                {
                  icon: Shield,
                  title: 'Security & Compliance',
                  description: 'Enterprise-grade security with compliance certifications',
                },
                {
                  icon: Zap,
                  title: 'Performance Optimization',
                  description: 'Optimize cloud resources for maximum performance',
                },
                {
                  icon: Database,
                  title: 'Data Management',
                  description: 'Secure data storage and backup solutions',
                },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Solutions?</h2>
                <div className="space-y-4">
                  {[
                    'Reduce infrastructure costs by up to 40%',
                    'Scale resources on-demand',
                    '99.9% uptime SLA',
                    '24/7 monitoring and support',
                    'Multi-cloud expertise (AWS, Azure, Google Cloud)',
                    'Automated backup and disaster recovery',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Assessment', desc: 'Analyze current infrastructure' },
                    { step: '02', title: 'Strategy', desc: 'Design cloud architecture' },
                    { step: '03', title: 'Migration', desc: 'Execute seamless migration' },
                    { step: '04', title: 'Optimization', desc: 'Ongoing monitoring and improvement' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let us help you build a scalable, secure cloud infrastructure.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
