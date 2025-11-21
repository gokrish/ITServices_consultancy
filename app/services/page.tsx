import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import { Cloud, Database, Code, Workflow, Shield, Headphones, Bot, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

const iconMap: Record<string, any> = {
  Cloud,
  Database,
  Code,
  Workflow,
  Shield,
  Headphones,
  Bot,
};

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive IT consulting services including cloud solutions, software development, DevOps, and more.',
};

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon || 'Code'];
                return (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader>
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        {Icon && <Icon className="h-7 w-7 text-blue-600" />}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="default" className="w-full">
                          Learn More <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
