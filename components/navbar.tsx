'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(prev => {
      const newValue = !prev;
      // Prevent body scroll when menu is open
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return newValue;
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm'
            : 'bg-white/95 backdrop-blur-sm border-b'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex lg:flex-1"
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GK IT Consulting
              </span>
            </Link>
          </motion.div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleMenuClick}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden lg:flex lg:gap-x-8"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold leading-6 transition-colors relative group',
                    isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[25px] left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-[25px] left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  )}
                </Link>
              );
            })}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4"
          >
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Admin
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[100] bg-black/70"
            onClick={() => {
              setMobileMenuOpen(false);
              document.body.style.overflow = 'unset';
            }}
            aria-hidden="true"
          />
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 left-[15vw] z-[101] bg-white shadow-2xl overflow-y-auto">
            <div className="px-6 py-6">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = 'unset';
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-gray-900" />
                </button>
              </div>
              
              <div className="space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium bg-gray-50 hover:bg-blue-50 text-gray-900 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-gray-200 space-y-3">
                <a
                  href="/login"
                  className="block px-4 py-3 text-base font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-center transition-colors"
                >
                  Admin Login
                </a>
                <a
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
