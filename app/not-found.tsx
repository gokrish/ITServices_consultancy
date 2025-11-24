import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-16">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    {/* 404 Animation */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                            404
                        </h1>
                    </div>

                    {/* Error Message */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                        Don't worry, even the best explorers get lost sometimes.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link href="/">
                            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                                <Home className="h-5 w-5" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="gap-2 border-2">
                                <Search className="h-5 w-5" />
                                Browse Services
                            </Button>
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl mx-auto border border-gray-100">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">
                            Perhaps you were looking for:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {[
                                { name: 'Our Services', href: '/services', description: 'Explore our IT solutions' },
                                { name: 'About Us', href: '/about', description: 'Learn about our team' },
                                { name: 'Blog', href: '/blog', description: 'Read our latest insights' },
                                { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-blue-200"
                                >
                                    <div className="flex items-start gap-3">
                                        <ArrowLeft className="h-5 w-5 text-blue-600 group-hover:transform group-hover:-translate-x-1 transition-transform" />
                                        <div>
                                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {link.name}
                                            </div>
                                            <div className="text-sm text-gray-600">{link.description}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Fun Element */}
                    <div className="mt-16 text-gray-400 text-sm">
                        <p>Error Code: 404 | The page you requested could not be found</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
