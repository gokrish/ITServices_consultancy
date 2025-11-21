'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cloud, Database, Code, Workflow, Shield, Headphones, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, any> = {
  Cloud,
  Database,
  Code,
  Workflow,
  Shield,
  Headphones,
  Bot,
};

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  slug: string;
  iconName: string;
  index: number;
}

export function AnimatedServiceCard({
  title,
  description,
  slug,
  iconName,
  index,
}: AnimatedServiceCardProps) {
  const Icon = iconMap[iconName] || Code;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Card className="h-full relative overflow-hidden group border-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
          
          <CardHeader className="relative">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300"
            >
              <Icon className="h-7 w-7 text-white" />
            </motion.div>
            <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-3 text-base">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <Link href={`/services/${slug}`}>
              <Button 
                variant="link" 
                className="p-0 group/button h-auto font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn more 
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
          </CardContent>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Card>
      </motion.div>
    </motion.div>
  );
}
