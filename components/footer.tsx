import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { NewsletterForm } from './newsletter-form';
import { CONTACT_INFO } from '@/lib/constants/services';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
          <NewsletterForm />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              GK IT Consulting
            </h3>
            <p className="text-slate-300 mb-4 text-sm">
              Transform your business with expert IT solutions. Cloud consulting, software development, DevOps, and more.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Mail className="h-4 w-4" />
                <a href={CONTACT_INFO.email.href} className="hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.email.display}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Phone className="h-4 w-4" />
                <a href={CONTACT_INFO.phone.href} className="hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{CONTACT_INFO.address.display}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/services/cloud-consulting" className="hover:text-blue-400 transition-colors">
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="hover:text-blue-400 transition-colors">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="hover:text-blue-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/devops-cicd" className="hover:text-blue-400 transition-colors">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-slate-300 text-sm mb-6">
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/gkit-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/gkit_consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/gkit-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GK IT Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </Link>
              <Link href="/faq" className="hover:text-blue-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

