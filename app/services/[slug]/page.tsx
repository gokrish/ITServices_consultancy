import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  });

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug, published: true },
  });

  if (!service) {
    notFound();
  }

  const faqs = service.faqs as any[];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/services" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Services
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-600">{service.description}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {service.deliverables && service.deliverables.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Key Deliverables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {service.techStacks && service.techStacks.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies We Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.techStacks.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {service.process && service.process.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help with your {service.title.toLowerCase()} needs.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
