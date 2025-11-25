import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Code2, Smartphone, Globe, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development - IT Services',
  description: 'Custom web development services for modern, responsive, and scalable applications.',
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Development', href: '/services/web-development', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Code2 className="h-5 w-5" />
                  <span className="font-medium">Web Development</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Modern Web Applications Built for Success
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We create fast, responsive, and user-friendly web applications using the latest technologies and best practices.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Start Your Project</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">View Portfolio</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                  alt="Web Development"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
              <p className="text-lg text-gray-600">
                Full-stack development solutions for every business need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, title: 'Custom Websites', description: 'Tailored websites that reflect your brand' },
                { icon: Smartphone, title: 'Progressive Web Apps', description: 'App-like experiences on the web' },
                { icon: Code2, title: 'E-commerce Solutions', description: 'Powerful online stores that convert' },
                { icon: Zap, title: 'Web Portals', description: 'Feature-rich enterprise portals' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech, index) => (
                    <div key={index} className="px-4 py-3 bg-blue-50 text-blue-600 rounded-lg text-center font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <div className="space-y-4">
                  {[
                    'Clean, maintainable code',
                    'Mobile-first responsive design',
                    'SEO optimized',
                    'Lightning-fast performance',
                    'Scalable architecture',
                    'Ongoing support and maintenance',
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

        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Web Application?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let us bring your vision to life with cutting-edge web development.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Get a Free Quote</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
