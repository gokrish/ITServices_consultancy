import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'About Us',
  description: 'Learn about GK IT Consulting - our mission, values, and expertise in delivering cutting-edge technology solutions.',
};

export default async function AboutPage() {
  const aboutContent = await prisma.siteContent.findUnique({
    where: { key: 'about_content' },
  });

  const content = aboutContent?.content || '';
  const metadata = aboutContent?.metadata as any;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About GK IT Consulting</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for digital transformation and technology excellence
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guiding principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Delivering high-quality solutions that exceed expectations
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Staying ahead with cutting-edge technologies and approaches
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Transparent communication and ethical business practices
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
                <p className="text-gray-600">
                  Your success is our success - we're invested in your growth
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
