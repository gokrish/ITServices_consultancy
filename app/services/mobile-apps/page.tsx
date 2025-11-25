import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Smartphone, Apple, MonitorSmartphone, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development - IT Services',
  description: 'Native and cross-platform mobile app development for iOS and Android.',
};

export default function MobileAppsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Mobile Apps', href: '/services/mobile-apps', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-6">
                  <Smartphone className="h-5 w-5" />
                  <span className="font-medium">Mobile Development</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Build Powerful Mobile Apps for iOS & Android
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  From concept to launch, we create engaging mobile experiences that users love. Native or cross-platform, we have you covered.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Start Your App</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">View Apps</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
                  alt="Mobile Apps"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Development Services</h2>
              <p className="text-lg text-gray-600">
                Complete mobile app solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Apple, title: 'iOS Development', description: 'Native Swift apps for iPhone and iPad' },
                { icon: Smartphone, title: 'Android Development', description: 'Kotlin apps for Android devices' },
                { icon: MonitorSmartphone, title: 'Cross-Platform', description: 'React Native & Flutter apps' },
                { icon: Zap, title: 'App Modernization', description: 'Update and optimize existing apps' },
                { icon: Smartphone, title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces' },
                { icon: MonitorSmartphone, title: 'App Maintenance', description: 'Ongoing support and updates' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-purple-600 mb-4" />
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Mobile Solutions?</h2>
                <div className="space-y-4">
                  {[
                    'Native performance and user experience',
                    'Offline functionality support',
                    'Push notifications and real-time updates',
                    'Secure authentication and data encryption',
                    'App Store optimization and submission',
                    'Post-launch support and updates',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Process</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Discovery', desc: 'Define requirements and features' },
                    { step: '02', title: 'Design', desc: 'Create wireframes and UI/UX' },
                    { step: '03', title: 'Development', desc: 'Build and test the app' },
                    { step: '04', title: 'Launch', desc: 'Deploy to App Stores' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold">
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

        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let us turn your app idea into reality with our expert mobile development team.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Get Started Today</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
