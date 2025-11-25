import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Bot, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Automation Consulting - GK IT Consulting',
    description: 'Leverage AI to automate workflows and enhance decision-making. We help businesses implement practical AI solutions.',
};

export default function AIAutomationPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-28">
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'AI Automation Consulting', href: '/services/ai-automation-consulting', current: true }
                ]} />

                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
                                    <Bot className="h-4 w-4" />
                                    <span>AI & Automation</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Leverage AI to Automate Workflows
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    We help businesses implement practical AI solutions from chatbots to predictive analytics, enhancing decision-making and operational efficiency.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-500/30">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="#process">
                                        <Button size="lg" variant="outline" className="border-2">
                                            Our Process
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Efficiency', value: '+40%' },
                                            { label: 'Cost Reduction', value: '30%' },
                                            { label: 'Accuracy', value: '99.9%' },
                                            { label: 'ROI', value: '3x' }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                                                <div className="text-2xl font-bold text-cyan-600 mb-1">{stat.value}</div>
                                                <div className="text-sm text-gray-600">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Deliverables */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Deliverables</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive AI solutions tailored to your specific business needs
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                'AI use case identification',
                                'Custom AI model development',
                                'Workflow automation',
                                'Chatbot and virtual assistant implementation',
                                'ML pipeline development',
                                'Predictive analytics integration'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-cyan-50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">{item}</h3>
                                        <p className="text-sm text-gray-600">Tailored implementation to drive measurable business results.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                From discovery to optimization, we guide you through every step of AI adoption
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { title: 'Discover', desc: 'Identify automation opportunities' },
                                { title: 'Prototype', desc: 'Build proof of concept' },
                                { title: 'Train', desc: 'Develop and train AI models' },
                                { title: 'Integrate', desc: 'Deploy into existing systems' },
                                { title: 'Optimize', desc: 'Monitor and improve performance' }
                            ].map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.desc}</p>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden md:block absolute top-1/2 right-[-50%] w-full h-0.5 bg-gray-200 -z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-cyan-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                    </div>
                    <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
                        <p className="text-xl text-cyan-100 mb-10">
                            Let's discuss how we can help with your AI automation consulting needs.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 shadow-xl">
                                Contact Us Today
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
