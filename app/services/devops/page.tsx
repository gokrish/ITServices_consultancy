import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { GitBranch, Rocket, RefreshCw, Settings, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DevOps Services - IT Services',
  description: 'Streamline development and operations with modern DevOps practices and automation.',
};

export default function DevOpsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'DevOps', href: '/services/devops', current: true }
        ]} />

        <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-6">
                  <GitBranch className="h-5 w-5" />
                  <span className="font-medium">DevOps Services</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Accelerate Delivery with DevOps Excellence
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Automate, optimize, and scale your development lifecycle with modern DevOps practices. Deploy faster, reduce errors, and improve collaboration.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline">View Results</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800"
                  alt="DevOps"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Services We Offer</h2>
              <p className="text-lg text-gray-600">
                End-to-end DevOps solutions for modern software delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: GitBranch, title: 'CI/CD Pipeline', description: 'Automated build, test, and deployment' },
                { icon: Rocket, title: 'Infrastructure as Code', description: 'Terraform, CloudFormation, Ansible' },
                { icon: RefreshCw, title: 'Continuous Monitoring', description: 'Real-time performance tracking' },
                { icon: Settings, title: 'Configuration Management', description: 'Automated environment management' },
              ].map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-orange-600 mb-4" />
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">DevOps Benefits</h2>
                <div className="space-y-4">
                  {[
                    'Deploy 10x faster with automated pipelines',
                    'Reduce deployment failures by 80%',
                    'Improve team collaboration',
                    'Scale infrastructure automatically',
                    'Real-time monitoring and alerts',
                    'Cost optimization through automation',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our DevOps Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'ELK Stack', 'Grafana'].map((tech, index) => (
                    <div key={index} className="px-4 py-3 bg-orange-50 text-orange-600 rounded-lg text-center font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Process?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Let us implement DevOps best practices for faster, more reliable deployments.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Start DevOps Journey</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
