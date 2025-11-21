'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeInSection } from '@/components/fade-in-section';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <FadeInSection>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <FadeInSection className="lg:col-span-2">
                <Card className="border-2 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      {success ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-center py-12"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                          >
                            <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-4" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                          <p className="text-gray-600 mb-6">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                          <Button onClick={() => setSuccess(false)} variant="outline">
                            Send Another Message
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="h-12"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="h-12"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                className="h-12"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Company</Label>
                              <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Your Company"
                                className="h-12"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your project..."
                              rows={6}
                              className="resize-none"
                            />
                          </div>

                          {error && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 bg-red-50 text-red-800 rounded-lg border border-red-200"
                            >
                              {error}
                            </motion.div>
                          )}

                          <Button
                            type="submit"
                            size="lg"
                            disabled={loading}
                            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30"
                          >
                            {loading ? (
                              <>
                                <span className="animate-spin mr-2">⏳</span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message <Send className="h-4 w-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'contact@gkit-consulting.com',
                    href: 'mailto:contact@gkit-consulting.com',
                    delay: 0,
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+1 (234) 567-890',
                    href: 'tel:+1234567890',
                    delay: 0.1,
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    content: 'San Francisco, CA\nUnited States',
                    delay: 0.2,
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: 'Monday - Friday\n9:00 AM - 6:00 PM PST',
                    delay: 0.3,
                  },
                ].map((item, index) => (
                  <FadeInSection key={index} delay={item.delay}>
                    <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                        )}
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
