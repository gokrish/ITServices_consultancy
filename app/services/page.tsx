import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Cloud, Code2, Smartphone, Lightbulb, GitBranch, BarChart3, Shield, HeadphonesIcon, ArrowRight, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants/services';

export const metadata: Metadata = {
  title: 'Our Services - IT Solutions',
  description: 'Comprehensive IT consulting services including cloud solutions, software development, DevOps, and more.',
};

const iconMap = {
  Cloud,
  Code2,
  Smartphone,
  Lightbulb,
  GitBranch,
  BarChart3,
  Shield,
  HeadphonesIcon,
  Bot,
};

const colorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services', current: true }
        ]} />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth. From cloud infrastructure to custom software development, we have you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => {
                const colors = colorClasses[service.color];
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    className={`group p-8 bg-white border-2 ${colors.border} rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`inline-flex p-3 ${colors.bg} rounded-lg mb-4`}>
                      <IconComponent className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional results through expertise, innovation, and dedication
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Expert Team', desc: '50+ certified professionals with decades of experience' },
                { title: 'Proven Results', desc: '500+ successful projects delivered on time and budget' },
                { title: '24/7 Support', desc: 'Round-the-clock support to keep your business running' },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We create tailored solutions to meet your unique business requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
