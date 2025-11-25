import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { BarChart3, Database, TrendingUp, PieChart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Analytics - IT Services',
  description: 'Transform data into actionable insights with advanced analytics and business intelligence.',
};

export default function DataAnalyticsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Data Analytics', href: '/services/data-analytics', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full mb-6">
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">Data Analytics</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Turn Data into Strategic Insights
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Unlock the power of your data with advanced analytics, machine learning, and business intelligence solutions. Make data-driven decisions with confidence.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">See Results</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt="Data Analytics"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive data solutions for informed decision-making
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: BarChart3, title: 'Business Intelligence', description: 'Interactive dashboards and reports' },
                { icon: Database, title: 'Data Warehousing', description: 'Centralized data storage and management' },
                { icon: TrendingUp, title: 'Predictive Analytics', description: 'ML-powered forecasting and insights' },
                { icon: PieChart, title: 'Data Visualization', description: 'Beautiful, actionable visualizations' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Analytics Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Python', 'R', 'Tableau', 'Power BI', 'Snowflake', 'Apache Spark', 'TensorFlow', 'SQL'].map((tech, index) => (
                    <div key={index} className="px-4 py-3 bg-indigo-50 text-indigo-600 rounded-lg text-center font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Analytics?</h2>
                <div className="space-y-4">
                  {[
                    'Real-time data processing',
                    'Scalable data infrastructure',
                    'Custom ML models',
                    'Self-service BI tools',
                    'Data governance and security',
                    'Ongoing optimization and support',
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

        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data Potential?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Let us help you build a data-driven organization with powerful analytics.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Schedule Analytics Consultation</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
