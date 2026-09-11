import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { company } from '../lib/company';

interface NavbarProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Drivers', href: '#drivers' },
    { name: 'Shippers', href: '#shippers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3 sm:py-4'
    } border-b border-slate-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1">
            <img 
              src="/logo.png" 
              alt="Ortega's Trucking LLC Logo" 
              className="h-11 sm:h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-bold text-brand-dark-900 hover:text-brand-blue transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
              title="Call Ortega's Trucking LLC"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue-50 text-brand-blue flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>{company.phone}</span>
            </a>

            <button
              onClick={() => onOpenContact('General Inquiry')}
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-brand transition-all duration-200 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${company.phoneRaw}`}
              className="p-2 text-brand-blue bg-brand-blue-50 rounded-lg hover:bg-brand-blue-100 transition-colors"
              aria-label="Call Ortega's Trucking"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-blue hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base font-semibold text-slate-800 hover:text-brand-blue transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full bg-slate-100 text-brand-dark-900 font-bold py-3 rounded-lg text-center"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>{company.phone}</span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center justify-center gap-3 w-full bg-slate-50 text-slate-700 font-medium py-2.5 rounded-lg text-sm text-center"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>{company.email}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('General Inquiry');
              }}
              className="w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg shadow-brand flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
