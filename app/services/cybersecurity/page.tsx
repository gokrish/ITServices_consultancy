import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Services - IT Services',
  description: 'Protect your business with comprehensive cybersecurity solutions and threat protection.',
};

export default function CybersecurityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Cybersecurity', href: '/services/cybersecurity', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-red-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full mb-6">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">Cybersecurity</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Comprehensive Cybersecurity Protection
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Safeguard your business from cyber threats with enterprise-grade security solutions. Protect your data, systems, and reputation with proactive security measures.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Security Assessment</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">Case Studies</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                  alt="Cybersecurity"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Services</h2>
              <p className="text-lg text-gray-600">
                Multi-layered security solutions to protect your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: 'Threat Protection', description: 'Advanced threat detection and prevention' },
                { icon: Lock, title: 'Data Encryption', description: 'End-to-end encryption solutions' },
                { icon: Eye, title: 'Security Monitoring', description: '24/7 SOC and incident response' },
                { icon: AlertTriangle, title: 'Vulnerability Assessment', description: 'Regular security audits and testing' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-red-600 mb-4" />
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
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Security Approach</h2>
                <div className="space-y-4">
                  {[
                    'Zero-trust security architecture',
                    'Multi-factor authentication (MFA)',
                    'Network security and firewall management',
                    'Incident response and recovery',
                    'Compliance and regulatory support',
                    'Employee security training',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Framework</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Risk Assessment', desc: 'Identify vulnerabilities and threats' },
                    { step: '02', title: 'Security Design', desc: 'Build defense strategy' },
                    { step: '03', title: 'Implementation', desc: 'Deploy security measures' },
                    { step: '04', title: 'Monitor & Respond', desc: 'Continuous protection' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">
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

        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Business Today</h2>
            <p className="text-xl mb-8 text-red-100">
              Do not wait for a security breach. Get a free security assessment now.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Get Free Security Assessment</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
