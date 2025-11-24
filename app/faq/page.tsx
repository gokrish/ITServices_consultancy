import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Search, ChevronDown } from 'lucide-react';
import { FadeInSection } from '@/components/fade-in-section';

export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions | GK IT Consulting',
    description: 'Find answers to common questions about our IT consulting services, pricing, project timelines, and more.',
    openGraph: {
        title: 'FAQ - GK IT Consulting',
        description: 'Frequently asked questions about our IT consulting services',
    },
};

export const revalidate = 3600;

const faqs = [
    {
        category: 'General',
        questions: [
            {
                q: 'What services does GK IT Consulting offer?',
                a: 'We offer a comprehensive range of IT consulting services including cloud consulting, data engineering, software development, DevOps & CI/CD, cybersecurity assessments, IT support & maintenance, and AI automation consulting. Each service is tailored to meet your specific business needs.'
            },
            {
                q: 'Which industries do you serve?',
                a: 'We serve clients across various industries including healthcare, finance, e-commerce, manufacturing, education, and technology startups. Our solutions are adaptable to any industry requiring robust IT infrastructure and digital transformation.'
            },
            {
                q: 'Do you work with startups or only established companies?',
                a: 'We work with organizations of all sizes, from early-stage startups to enterprise-level corporations. We customize our approach and solutions based on your company size, budget, and growth stage.'
            },
        ]
    },
    {
        category: 'Pricing & Contracts',
        questions: [
            {
                q: 'How do you structure your pricing?',
                a: 'We offer flexible pricing models including project-based fees, monthly retainers, and hourly rates. Pricing depends on project scope, complexity, timeline, and required resources. We always provide transparent quotes before starting any work.'
            },
            {
                q: 'Do you require long-term contracts?',
                a: 'We offer both project-based engagements and ongoing support contracts. There\'s no minimum commitment for project work. For managed services, we typically recommend 3-6 month agreements with month-to-month options available.'
            },
            {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, credit cards, and online payment platforms. For larger projects, we can arrange milestone-based payments. Net-30 payment terms are available for qualified businesses.'
            },
        ]
    },
    {
        category: 'Project Process',
        questions: [
            {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, medium projects 1-3 months, and large enterprise implementations 3-12 months. We provide detailed timelines during the discovery phase.'
            },
            {
                q: 'What is your development process?',
                a: 'We follow an agile methodology with regular sprints, continuous communication, and iterative development. Our process includes: Discovery → Planning → Design → Development → Testing → Deployment → Support. You\'ll receive regular updates and demos throughout.'
            },
            {
                q: 'How do you ensure project success?',
                a: 'We ensure success through clear communication, defined milestones, regular progress updates, thorough testing, and post-launch support. We assign a dedicated project manager to each engagement and maintain transparent documentation.'
            },
            {
                q: 'Can you work with our existing team?',
                a: 'Absolutely! We excel at collaborating with in-house teams. We can augment your team, work independently, or provide training and knowledge transfer. We adapt to your preferred tools, workflows, and communication channels.'
            },
        ]
    },
    {
        category: 'Technical Questions',
        questions: [
            {
                q: 'What technologies do you specialize in?',
                a: 'We specialize in modern tech stacks including React, Next.js, Node.js, Python, AWS, Azure, GCP, Docker, Kubernetes, PostgreSQL, MongoDB, and more. We stay current with emerging technologies and recommend the best fit for your needs.'
            },
            {
                q: 'Do you provide cloud migration services?',
                a: 'Yes, we help businesses migrate from on-premise infrastructure to cloud platforms (AWS, Azure, GCP) or between cloud providers. We handle assessment, planning, migration, and optimization to ensure minimal downtime and maximum ROI.'
            },
            {
                q: 'Can you help with legacy system modernization?',
                a: 'Definitely. We have extensive experience modernizing legacy systems. We assess your current architecture, create a migration roadmap, and execute the modernization while maintaining business continuity. This includes refactoring, re-platforming, or complete rebuilds.'
            },
            {
                q: 'Do you offer cybersecurity services?',
                a: 'Yes, we provide comprehensive cybersecurity assessments, vulnerability testing, security audits, and implementation of security best practices. We help ensure your systems comply with industry standards like SOC 2, HIPAA, and GDPR.'
            },
        ]
    },
    {
        category: 'Support & Maintenance',
        questions: [
            {
                q: 'Do you provide ongoing support after project completion?',
                a: 'Yes, we offer various support plans including basic maintenance, priority support, and full managed services. Support includes bug fixes, updates, monitoring, performance optimization, and technical assistance.'
            },
            {
                q: 'What is your response time for support requests?',
                a: 'Response times vary by support tier: Priority support typically responds within 2-4 hours, standard support within 24 hours. Critical issues affecting production systems receive immediate attention regardless of support tier.'
            },
            {
                q: 'Can you provide emergency support?',
                a: 'Yes, we offer 24/7 emergency support for critical issues. This includes our on-call engineering team available for production outages, security incidents, or urgent bug fixes. Emergency support is included in premium packages or available on-demand.'
            },
        ]
    },
    {
        category: 'Getting Started',
        questions: [
            {
                q: 'How do I start a project with you?',
                a: 'Simply contact us through our website, email, or phone. We\'ll schedule an initial consultation to understand your needs, followed by a detailed proposal. Once approved, we kick off with a discovery phase to ensure project success.'
            },
            {
                q: 'Do you offer free consultations?',
                a: 'Yes! We provide a free initial consultation (30-60 minutes) to discuss your project, answer questions, and provide high-level recommendations. This helps us understand your needs and allows you to evaluate if we\'re the right fit.'
            },
            {
                q: 'What information do you need to provide a quote?',
                a: 'To provide an accurate quote, we need: project objectives, desired features/functionality, timeline expectations, existing systems/integrations, team size, and any specific requirements. The more details you provide, the more accurate our estimate.'
            },
        ]
    },
];

export default function FAQPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-16">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <Breadcrumb className="mb-6 text-blue-100" />
                        <FadeInSection>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                Find answers to common questions about our services, pricing, and processes
                            </p>
                        </FadeInSection>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
                    {faqs.map((category, categoryIndex) => (
                        <FadeInSection key={category.category} delay={categoryIndex * 0.1}>
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                                    {category.category}
                                </h2>

                                <div className="space-y-4">
                                    {category.questions.map((faq, faqIndex) => (
                                        <details
                                            key={faqIndex}
                                            className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                                        >
                                            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 list-none">
                                                <span className="pr-4">{faq.q}</span>
                                                <ChevronDown className="h-5 w-5 text-blue-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
                                            </summary>
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}

                    {/* Still Have Questions CTA */}
                    <FadeInSection delay={0.5}>
                        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 sm:p-12 text-white text-center mt-16">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                Still Have Questions?
                            </h3>
                            <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
                                Can't find the answer you're looking for? Our team is here to help.
                                Reach out for a free consultation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/services"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    View Services
                                </a>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </main>
            <Footer />
        </>
    );
}
