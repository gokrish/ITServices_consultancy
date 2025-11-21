import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              GK IT Consulting
            </h3>
            <p className="text-slate-300 mb-4">
              Empowering businesses with scalable technology solutions. Expertise across cloud, software development, DevOps, and data engineering.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@gkit-consulting.com" className="hover:text-blue-400 transition-colors">
                  contact@gkit-consulting.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
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
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
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
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} GK IT Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
