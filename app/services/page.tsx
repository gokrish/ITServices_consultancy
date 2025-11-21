import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { FadeInSection } from '@/components/fade-in-section';
import { ServicesClient } from './services-client';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive IT consulting services including cloud solutions, software development, DevOps, and more.',
};

export default async function ServicesPage() {
  let services = [];
  try {
    services = await prisma.service.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    });
  } catch (error) {
    console.error('Failed to fetch services:', error);
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <FadeInSection>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ServicesClient services={services} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
          <FadeInSection className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We create tailored solutions to meet your unique business requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                Contact Us Today
              </Button>
            </Link>
          </FadeInSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
