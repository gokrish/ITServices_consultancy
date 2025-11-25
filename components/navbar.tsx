'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { SERVICES, COMPANY_LINKS, RESOURCE_LINKS } from '@/lib/constants/services';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Desktop dropdown states
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false);

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
    setServicesOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
    setDesktopServicesOpen(false);
    setDesktopCompanyOpen(false);
    setDesktopResourcesOpen(false);
    document.body.style.overflow = 'unset';
  }, [pathname]);

  // Navigation array - Home link removed as logo serves this purpose
  const navigation: { name: string; href: string }[] = [];

  // Use shared constants with IT Support included
  const services = [
    { name: 'All Services', href: '/services' },
    ...SERVICES.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
  ];

  const company = COMPANY_LINKS;
  const resources = RESOURCE_LINKS;

  const handleMenuClick = () => {
    setMobileMenuOpen(prev => {
      const newValue = !prev;
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
        setServicesOpen(false);
        setCompanyOpen(false);
        setResourcesOpen(false);
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
        <nav className="mx-auto flex max-w-7xl items-center gap-x-6 p-6 lg:px-8" aria-label="Global">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex shrink-0"
          >
            <Link href="/" className="-m-1.5 p-1.5" title="Go to homepage">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                GK IT Consulting
              </span>
            </Link>
          </motion.div>

          <div className="flex lg:hidden ml-auto">
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
            className="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:items-center lg:justify-center"
          >

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-semibold leading-6 transition-colors px-3 py-2',
                  pathname.startsWith('/services') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                )}
              >
                Services
                <ChevronDown className={cn(
                  'h-4 w-4 transition-transform',
                  desktopServicesOpen && 'rotate-180'
                )} />
              </button>
              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          'block px-4 py-2 text-sm transition-colors',
                          pathname === service.href
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        )}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopCompanyOpen(true)}
              onMouseLeave={() => setDesktopCompanyOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-semibold leading-6 transition-colors px-3 py-2',
                  (pathname === '/about' || pathname === '/contact' || pathname === '/testimonials' || pathname === '/careers' || pathname.startsWith('/about/'))
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-600'
                )}
              >
                Company
                <ChevronDown className={cn(
                  'h-4 w-4 transition-transform',
                  desktopCompanyOpen && 'rotate-180'
                )} />
              </button>
              <AnimatePresence>
                {desktopCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {company.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block px-4 py-2 text-sm transition-colors',
                          pathname === item.href
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopResourcesOpen(true)}
              onMouseLeave={() => setDesktopResourcesOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-semibold leading-6 transition-colors px-3 py-2',
                  (pathname === '/blog' || pathname === '/faq' || pathname === '/case-studies' || pathname === '/docs' || pathname === '/privacy' || pathname === '/terms')
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-600'
                )}
              >
                Resources
                <ChevronDown className={cn(
                  'h-4 w-4 transition-transform',
                  desktopResourcesOpen && 'rotate-180'
                )} />
              </button>
              <AnimatePresence>
                {desktopResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block px-4 py-2 text-sm transition-colors',
                          pathname === item.href
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex lg:justify-end lg:gap-4 shrink-0 min-w-fit"
          >
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
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={handleMenuClick}
            aria-hidden="true"
          />

          {/* Slide-in Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-[101] bg-white shadow-2xl"
          >
            {/* Header with Logo */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <Link href="/" onClick={handleMenuClick}>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  GK IT Consulting
                </span>
              </Link>
              <button
                onClick={handleMenuClick}
                className="p-2 hover:bg-white rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="px-4 py-4 overflow-y-auto h-[calc(100vh-73px)]">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname.startsWith('/services')
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    aria-expanded={servicesOpen}
                    aria-controls="services-dropdown"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id="services-dropdown"
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-3 space-y-1 border-l-2 border-blue-200 pl-3">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className={cn(
                                "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                pathname === service.href
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                              )}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Company Dropdown */}
                <div>
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      (pathname === '/about' || pathname === '/contact' || pathname === '/testimonials' || pathname === '/careers' || pathname.startsWith('/about/'))
                        ? "bg-purple-50 text-purple-600"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    aria-expanded={companyOpen}
                    aria-controls="company-dropdown"
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        companyOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {companyOpen && (
                      <motion.div
                        id="company-dropdown"
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-3 space-y-1 border-l-2 border-purple-200 pl-3">
                          {company.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                pathname === item.href
                                  ? "text-purple-600 bg-purple-50"
                                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources Dropdown */}
                <div>
                  <button
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      (pathname === '/blog' || pathname === '/faq' || pathname === '/case-studies' || pathname === '/docs' || pathname === '/privacy' || pathname === '/terms')
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    aria-expanded={resourcesOpen}
                    aria-controls="resources-dropdown"
                  >
                    <span>Resources</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        resourcesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        id="resources-dropdown"
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-3 space-y-1 border-l-2 border-green-200 pl-3">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                pathname === item.href
                                  ? "text-green-600 bg-green-50"
                                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-center transition-colors shadow-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
