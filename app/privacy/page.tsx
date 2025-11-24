import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Learn how GK IT Consulting collects, uses, and protects your personal information.',
};

export const revalidate = 86400; // Revalidate once per day

export default function PrivacyPage() {
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
                            <Shield className="h-12 w-12" />
                            <h1 className="text-4xl font-bold">Privacy Policy</h1>
                        </div>
                        <p className="text-blue-100">Last updated: {lastUpdated}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At GK IT Consulting ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li>Fill out contact forms</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Request a consultation or quote</li>
                                <li>Communicate with us via email or phone</li>
                                <li>Engage with our services</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                When you visit our website, we may automatically collect certain information about your device and usage, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Date and time of visits</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Responding to your inquiries and providing customer support</li>
                                <li>Delivering services and fulfilling contractual obligations</li>
                                <li>Sending you marketing communications (with your consent)</li>
                                <li>Improving our website and services</li>
                                <li>Analyzing website usage and trends</li>
                                <li>Detecting and preventing fraud or security issues</li>
                                <li>Complying with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li>Remember your preferences and settings</li>
                                <li>Understand how you use our website</li>
                                <li>Improve website functionality</li>
                                <li>Provide analytics and measure website performance</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (e.g., hosting, email services, analytics)</li>
                                <li><strong>Business Partners:</strong> When necessary to fulfill our contractual obligations</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information. These include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Depending on your location, you may have certain rights regarding your personal data:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Objection:</strong> Object to processing of your data</li>
                                <li><strong>Portability:</strong> Request transfer of your data</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                To exercise these rights, please contact us at privacy@gkit-consulting.com.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy and applicable laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have questions or concerns about this privacy policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <p className="text-gray-700 font-semibold mb-2">GK IT Consulting</p>
                                <p className="text-gray-600">Email: privacy@gkit-consulting.com</p>
                                <p className="text-gray-600">Website: <a href="/contact" className="text-blue-600 hover:underline">Contact Form</a></p>
                            </div>
                        </section>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-12">
                            <p className="text-sm text-gray-700">
                                <strong>Note:</strong> This privacy policy is provided as a template and should be reviewed by a legal professional to ensure compliance with applicable laws in your jurisdiction, including GDPR, CCPA, and other data protection regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
