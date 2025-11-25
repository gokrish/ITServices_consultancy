import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team - Meet the Experts',
  description: 'Meet the talented team behind our success. Experienced professionals dedicated to your digital transformation.',
};

const team = [
  {
    name: 'Gopikrishna Pamidala',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with extensive experience in IT consulting and digital transformation. Gopikrishna founded GK IT Consulting with a mission to deliver cutting-edge technology solutions that drive business growth and innovation.',
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Expert in cloud architecture and enterprise solutions with multiple certifications. Sarah leads our technical strategy and ensures we stay ahead of emerging technologies.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Development',
    bio: 'Full-stack development expert specializing in modern web technologies and scalable applications. Michael oversees all development projects with a focus on quality and performance.',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Design',
    bio: 'Award-winning designer with a passion for creating exceptional user experiences. Emily ensures our solutions are not only functional but also beautiful and intuitive.',
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Team', href: '/about/team', current: true }
        ]} />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-gray-600">
                A diverse group of talented professionals passionate about delivering exceptional results. Our team brings together decades of experience across all areas of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow p-8"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team by the Numbers</h2>
              <p className="text-lg text-gray-600">
                Experience and expertise that drives success
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '50+', label: 'Team Members' },
                { value: '15+', label: 'Years Average Experience' },
                { value: '100+', label: 'Certifications' },
                { value: '30+', label: 'Technologies Mastered' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We are always looking for talented individuals to join our growing team.
            </p>
            <Link href="/careers">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
