import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Read the terms and conditions for using GK IT Consulting services.',
};

export const revalidate = 86400; // Revalidate once per day

export default function TermsPage() {
    const lastUpdated = 'November 24, 2024';

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-16">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <Breadcrumb className="mb-6 text-blue-100" />
                        <div className="flex items-center gap-4 mb-4">
                            <FileText className="h-12 w-12" />
                            <h1 className="text-4xl font-bold">Terms of Service</h1>
                        </div>
                        <p className="text-blue-100">Last updated: {lastUpdated}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms of Service ("Terms") govern your use of the GK IT Consulting website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                GK IT Consulting provides IT consulting services including, but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Cloud consulting and infrastructure services</li>
                                <li>Software development and engineering</li>
                                <li>DevOps and CI/CD implementation</li>
                                <li>Data engineering and analytics</li>
                                <li>Cybersecurity assessments and consulting</li>
                                <li>IT support and maintenance</li>
                                <li>AI and automation consulting</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreements</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Specific services will be provided under separate written agreements ("Service Agreements") that detail:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Scope of work and deliverables</li>
                                <li>Timeline and milestones</li>
                                <li>Pricing and payment terms</li>
                                <li>Intellectual property rights</li>
                                <li>Confidentiality obligations</li>
                                <li>Warranty and liability provisions</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                In case of conflict between these Terms and a Service Agreement, the Service Agreement shall prevail.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                When using our services, you agree to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the confidentiality of account credentials</li>
                                <li>Use services only for lawful purposes</li>
                                <li>Not attempt to gain unauthorized access to our systems</li>
                                <li>Not interfere with or disrupt our services</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Respect intellectual property rights</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Unless otherwise specified in a Service Agreement:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Payment is due within 30 days of invoice date</li>
                                <li>Late payments may incur interest charges</li>
                                <li>We reserve the right to suspend services for non-payment</li>
                                <li>All fees are non-refundable unless otherwise agreed</li>
                                <li>Prices are subject to change with 30 days' notice</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Our IP</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                All content on our website, including text, graphics, logos, software, and methodologies, is the property of GK IT Consulting and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Client IP</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Unless otherwise specified in a Service Agreement:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Client retains ownership of their pre-existing intellectual property</li>
                                <li>Custom work product created for client becomes client property upon full payment</li>
                                <li>We retain ownership of our pre-existing tools, frameworks, and methodologies</li>
                                <li>We may retain rights to use generic knowledge and skills</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We maintain strict confidentiality of client information. Both parties agree not to disclose confidential information received during the course of engagement, except as required by law or with prior written consent. Confidentiality obligations survive termination of services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We strive to provide high-quality services, but:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Services are provided "as is" without warranties of any kind</li>
                                <li>We do not guarantee uninterrupted or error-free services</li>
                                <li>We are not responsible for third-party services or content</li>
                                <li>Specific warranties, if any, will be outlined in Service Agreements</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To the maximum extent permitted by law:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Our liability is limited to the fees paid for the specific service</li>
                                <li>We are not liable for indirect, incidental, or consequential damages</li>
                                <li>We are not liable for loss of profits, data, or business opportunities</li>
                                <li>Liability limitations may not apply where prohibited by law</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                            <p className="text-gray-600 leading-relaxed">
                                You agree to indemnify and hold harmless GK IT Consulting from any claims, damages, or expenses arising from your use of our services, violation of these Terms, or infringement of any rights of third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may terminate or suspend access to our services immediately, without prior notice, for:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Violation of these Terms</li>
                                <li>Non-payment of fees</li>
                                <li>Fraudulent or illegal activity</li>
                                <li>Any reason we deem appropriate</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Upon termination, your right to use our services ceases immediately. Provisions regarding confidentiality, intellectual property, and liability survive termination.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                In the event of any dispute:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Parties agree to first attempt resolution through good faith negotiation</li>
                                <li>If negotiation fails, disputes may be submitted to mediation</li>
                                <li>Any legal action must be brought in the appropriate jurisdiction</li>
                                <li>These Terms are governed by the laws of [Your Jurisdiction]</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, government actions, or technical failures.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these Terms at any time. Material changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the modified Terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Entire Agreement</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms, together with any Service Agreements and our Privacy Policy, constitute the entire agreement between you and GK IT Consulting regarding the use of our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have questions about these Terms, please contact us:
                            </p>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <p className="text-gray-700 font-semibold mb-2">GK IT Consulting</p>
                                <p className="text-gray-600">Email: legal@gkit-consulting.com</p>
                                <p className="text-gray-600">Website: <a href="/contact" className="text-blue-600 hover:underline">Contact Form</a></p>
                            </div>
                        </section>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-12">
                            <p className="text-sm text-gray-700">
                                <strong>Legal Notice:</strong> This Terms of Service document is provided as a template and should be reviewed and customized by a qualified attorney to ensure it meets your specific business needs and complies with applicable laws in your jurisdiction.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
