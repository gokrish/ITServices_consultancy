import Link from 'next/link';
import { ArrowRight, Cloud, Database, Code, Workflow, Shield, Headphones, Bot, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getHomeData() {
  const [services, testimonials, siteContent] = await Promise.all([
    prisma.service.findMany({
      where: { published: true, featured: true },
      orderBy: { order: 'asc' },
      take: 6,
    }),
    prisma.testimonial.findMany({
      where: { published: true, featured: true },
      orderBy: { order: 'asc' },
      take: 3,
    }),
    prisma.siteContent.findMany({
      where: {
        key: {
          in: ['home_hero_title', 'home_hero_subtitle'],
        },
      },
    }),
  ]);

  const contentMap = Object.fromEntries(
    siteContent.map(item => [item.key, item.content])
  );

  return { services, testimonials, contentMap };
}

const iconMap: Record<string, any> = {
  Cloud,
  Database,
  Code,
  Workflow,
  Shield,
  Headphones,
  Bot,
};

export default async function Home() {
  const { services, testimonials, contentMap } = await getHomeData();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                {contentMap.home_hero_title || 'Empowering Businesses with Scalable Technology Solutions'}
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                {contentMap.home_hero_subtitle || 'We help companies build reliable systems, optimize infrastructure, implement cloud solutions, and automate workflows.'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon || 'Code'];
                return (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        {Icon && <Icon className="h-6 w-6 text-blue-600" />}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="link" className="p-0">
                          Learn more <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures successful project delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your needs and challenges' },
                { step: '02', title: 'Strategy', description: 'Design a tailored solution architecture' },
                { step: '03', title: 'Implementation', description: 'Build and deploy with best practices' },
                { step: '04', title: 'Support', description: 'Ongoing optimization and maintenance' },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose GK IT Consulting?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We combine deep technical expertise with business acumen to deliver solutions that drive real results.
                </p>
                <div className="space-y-4">
                  {[
                    'Expert team with 10+ years of experience',
                    'Proven track record across multiple industries',
                    'Scalable solutions built for growth',
                    'Transparent communication and pricing',
                    'Ongoing support and optimization',
                    'Cutting-edge technology stack',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <p className="mb-8">
                  Let's discuss how we can help you achieve your technology goals.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  See what our clients say about working with us
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id}>
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <CardDescription className="text-base">
                        "{testimonial.feedback}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href="/testimonials">
                  <Button variant="outline" size="lg">
                    View All Testimonials
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to discuss your project and receive a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
