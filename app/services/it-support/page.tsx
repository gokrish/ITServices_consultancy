import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { Cog, Wrench, Headphones, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Support & Maintenance - IT Services',
  description: 'Reliable IT support and maintenance services to keep your systems running smoothly.',
};

export default function ITSupportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'IT Support', href: '/services/it-support', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-600 rounded-full mb-6">
                  <Headphones className="h-5 w-5" />
                  <span className="font-medium">IT Support</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  24/7 IT Support & Maintenance
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Keep your business running smoothly with our comprehensive IT support and maintenance services. Fast response times, expert technicians, and proactive monitoring.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Get Support</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800"
                  alt="IT Support"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive IT support for businesses of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Headphones, title: '24/7 Help Desk', description: 'Round-the-clock technical support' },
                { icon: Cog, title: 'System Maintenance', description: 'Regular updates and optimization' },
                { icon: Wrench, title: 'Remote Support', description: 'Fast remote troubleshooting' },
                { icon: Zap, title: 'Emergency Response', description: 'Rapid response to critical issues' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Plans</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Basic', features: 'Business hours support, Email & phone' },
                    { name: 'Professional', features: '24/7 support, Priority response' },
                    { name: 'Enterprise', features: 'Dedicated team, Custom SLA' },
                  ].map((plan, index) => (
                    <div key={index} className="p-4 border-2 border-teal-100 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">{plan.name}</h4>
                      <p className="text-sm text-gray-600">{plan.features}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Support?</h2>
                <div className="space-y-4">
                  {[
                    'Average response time under 15 minutes',
                    'Certified IT professionals',
                    'Proactive system monitoring',
                    'Regular maintenance and updates',
                    'Detailed reporting and analytics',
                    'Flexible support plans',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Need IT Support?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Get started with our reliable IT support services today.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Contact Support Team</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
