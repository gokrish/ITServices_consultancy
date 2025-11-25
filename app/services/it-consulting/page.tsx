import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { Lightbulb, Users, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Consulting - IT Services',
  description: 'Strategic IT consulting to help your business leverage technology effectively.',
};

export default function ITConsultingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'IT Consulting', href: '/services/it-consulting', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full mb-6">
                  <Lightbulb className="h-5 w-5" />
                  <span className="font-medium">IT Consulting</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Strategic IT Consulting for Business Growth
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Expert guidance to align your technology strategy with business goals. We help you make informed decisions and maximize ROI.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Book Consultation</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">Success Stories</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="IT Consulting"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive IT strategy and advisory services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: 'IT Strategy', description: 'Align technology with business objectives' },
                { icon: Users, title: 'Digital Transformation', description: 'Modernize your business operations' },
                { icon: TrendingUp, title: 'Technology Assessment', description: 'Evaluate and optimize your tech stack' },
                { icon: Lightbulb, title: 'Innovation Consulting', description: 'Identify growth opportunities' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-green-600 mb-4" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Discovery', desc: 'Understand your business and challenges' },
                    { step: '02', title: 'Analysis', desc: 'Assess current state and opportunities' },
                    { step: '03', title: 'Strategy', desc: 'Develop actionable IT roadmap' },
                    { step: '04', title: 'Implementation', desc: 'Execute and monitor progress' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">
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
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
                <div className="space-y-4">
                  {[
                    '20+ years of industry experience',
                    'Vendor-neutral recommendations',
                    'Proven ROI improvement strategies',
                    'Hands-on implementation support',
                    'Ongoing strategic partnership',
                    'Industry best practices',
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

        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Strategy?</h2>
            <p className="text-xl mb-8 text-green-100">
              Schedule a consultation with our expert IT advisors today.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Book Free Consultation</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
