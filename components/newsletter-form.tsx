'use client';

import { useState } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface NewsletterFormProps {
    variant?: 'default' | 'compact';
    className?: string;
}

export function NewsletterForm({ variant = 'default', className = '' }: NewsletterFormProps) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setEmail('');
                toast.success('Successfully subscribed! Check your email for confirmation.');

                // Reset success state after 3 seconds
                setTimeout(() => setIsSuccess(false), 3000);
            } else {
                toast.error(data.error || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    if (variant === 'compact') {
        return (
            <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
                <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSuccess}
                    className="flex-1 bg-white"
                    required
                />
                <Button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className="flex-shrink-0"
                >
                    {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : isSuccess ? (
                        <Check className="h-4 w-4" />
                    ) : (
                        'Subscribe'
                    )}
                </Button>
            </form>
        );
    }

    return (
        <div className={`bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 sm:p-12 text-white ${className}`}>
            <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                    <p className="text-blue-100">
                        Get the latest insights on IT consulting, tech trends, and best practices delivered to your inbox.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading || isSuccess}
                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                        required
                    />
                    <Button
                        type="submit"
                        variant="secondary"
                        disabled={isLoading || isSuccess}
                        className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                Subscribing...
                            </>
                        ) : isSuccess ? (
                            <>
                                <Check className="h-4 w-4 mr-2" />
                                Subscribed!
                            </>
                        ) : (
                            <>
                                <Mail className="h-4 w-4 mr-2" />
                                Subscribe
                            </>
                        )}
                    </Button>
                </div>

                <p className="text-xs text-blue-200">
                    By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
                    View our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
                </p>
            </form>

            {isSuccess && (
                <div className="mt-4 bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                    <p className="text-sm text-green-100 flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Welcome aboard! Check your email to confirm your subscription.
                    </p>
                </div>
            )}
        </div>
    );
}
