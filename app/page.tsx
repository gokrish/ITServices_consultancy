import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AnimatedHero } from '@/components/animated-hero';
import { AnimatedServiceCard } from '@/components/animated-service-card';
import { FadeInSection } from '@/components/fade-in-section';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getHomeData() {
  try {
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
  } catch (error) {
    console.error('Database error in getHomeData:', error);
    // Return empty data instead of crashing
    return {
      services: [],
      testimonials: [],
      contentMap: {
        home_hero_title: 'Transform Your Business with Expert IT Solutions',
        home_hero_subtitle: 'We deliver cutting-edge technology solutions tailored to your business needs.',
      },
    };
  }
}

export default async function Home() {
  const { services, testimonials, contentMap } = await getHomeData();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <AnimatedHero
          title={contentMap.home_hero_title || 'Empowering Businesses with Scalable Technology Solutions'}
          subtitle={contentMap.home_hero_subtitle || 'We help companies build reliable systems, optimize infrastructure, implement cloud solutions, and automate workflows.'}
        />

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service: any, index: number) => {
                return (
                  <AnimatedServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    slug={service.slug}
                    iconName={service.icon || 'Code'}
                    index={index}
                  />
                );
              })}
            </div>
            <FadeInSection className="text-center mt-12" delay={0.5}>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-2 hover:border-blue-600 hover:text-blue-600">
                  View All Services
                </Button>
              </Link>
            </FadeInSection>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures successful project delivery
              </p>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your needs and challenges' },
                { step: '02', title: 'Strategy', description: 'Design a tailored solution architecture' },
                { step: '03', title: 'Implementation', description: 'Build and deploy with best practices' },
                { step: '04', title: 'Support', description: 'Ongoing optimization and maintenance' },
              ].map((phase, i) => (
                <FadeInSection key={phase.step} delay={i * 0.15} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white text-2xl font-bold mb-4 shadow-lg shadow-blue-500/30">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose GK IT Consulting?</h2>
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
                  ].map((benefit, i) => (
                    <FadeInSection key={benefit} delay={i * 0.1}>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-green-500/30">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 sm:p-12 text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
                    <p className="mb-8 text-blue-100">
                      Let's discuss how we can help you achieve your technology goals.
                    </p>
                    <Link href="/contact">
                      <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        Schedule a Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <FadeInSection className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  See what our clients say about working with us
                </p>
              </FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial: any, i: number) => (
                  <FadeInSection key={testimonial.id} delay={i * 0.15}>
                    <Card className="h-full border-2 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, idx) => (
                            <svg key={idx} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          "{testimonial.feedback}"
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
              <FadeInSection className="text-center mt-12" delay={0.5}>
                <Link href="/testimonials">
                  <Button variant="outline" size="lg" className="border-2 hover:border-blue-600 hover:text-blue-600">
                    View All Testimonials
                  </Button>
                </Link>
              </FadeInSection>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
          <FadeInSection className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to discuss your project and receive a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 shadow-xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
