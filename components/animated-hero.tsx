'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
}

export function AnimatedHero({ title, subtitle }: AnimatedHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-indigo-400/10 rounded-full blur-3xl animate-glow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Transform Your Business
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6"
          >
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Services
              </Button>
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { label: 'Projects', value: '200+' },
              { label: 'Clients', value: '50+' },
              { label: 'Experience', value: '10+ Years' },
              { label: 'Satisfaction', value: '99%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
