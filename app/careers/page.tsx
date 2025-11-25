import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description: 'Explore career opportunities at GK IT Consulting. Join our team of innovative professionals.',
};

const openPositions = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team.',
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain scalable cloud infrastructure for our clients.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
  },
  {
    id: 4,
    title: 'Cloud Solutions Architect',
    department: 'Consulting',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and implement cloud solutions for enterprise clients.',
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers', current: true }]} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a team that's shaping the future of technology. We're always looking for talented individuals who are passionate about innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career development programs',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible hours and remote work options',
              },
              {
                title: 'Competitive Benefits',
                description: 'Health insurance, retirement plans, and more',
              },
              {
                title: 'Innovative Projects',
                description: 'Work on cutting-edge technology solutions',
              },
              {
                title: 'Collaborative Culture',
                description: 'Supportive team environment and open communication',
              },
              {
                title: 'Impact',
                description: 'Make a real difference for clients worldwide',
              },
            ].map((benefit, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button className="flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary">
            Send Your Resume
          </Button>
        </div>
      </section>
    </main>
  );
}
