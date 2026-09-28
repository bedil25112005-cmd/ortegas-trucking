import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { company } from '../lib/company';

interface FooterProps {
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Identity & Logo */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo container with clean white background to guarantee original colors and pristine contrast */}
            <div className="inline-block bg-white p-3 rounded-xl shadow-md border border-slate-100">
              <img 
                src="/logo.png" 
                alt="Ortega's Trucking LLC Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {company.about.lead}
            </p>

            <div className="text-xs text-slate-500 italic">
              "{company.about.strength}"
            </div>

            {/* Verified FMCSA Authority */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-2">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[11px]">FMCSA Authority:</span>
              <a
                href={company.legal.fmcsaDotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-brand-blue-400 underline decoration-slate-600 hover:decoration-brand-blue-400 transition-colors"
                title="View official USDOT 3623871 SAFER record"
              >
                USDOT {company.legal.dotNumber}
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={company.legal.fmcsaMcUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-brand-blue-400 underline decoration-slate-600 hover:decoration-brand-blue-400 transition-colors"
                title="View official MC 1238867 SAFER record"
              >
                MC {company.legal.mcNumber}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-brand-blue-400 transition-colors">About Ortega's</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue-400 transition-colors">Freight Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#drivers" className="hover:text-brand-blue-400 transition-colors">Driver Opportunities</a>
              </li>
              <li>
                <a href="#shippers" className="hover:text-brand-blue-400 transition-colors">Shipper Solutions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company Contact
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-blue-400 shrink-0 mt-1" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-white transition-colors font-medium">
                  {company.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-blue-400 shrink-0 mt-1" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors break-all">
                  {company.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue-400 shrink-0 mt-1" />
                <a 
                  href={company.address.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {company.address.full}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div>
              &copy; {company.legal.copyrightYear} {company.legalName}. All rights reserved.
            </div>
            <div className="hidden sm:block text-slate-700">|</div>
            <div className="flex items-center gap-2">
              <a
                href={company.legal.fmcsaDotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
                title="View USDOT 3623871 on FMCSA SAFER"
              >
                USDOT {company.legal.dotNumber}
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={company.legal.fmcsaMcUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
                title="View MC 1238867 on FMCSA SAFER"
              >
                MC {company.legal.mcNumber}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/policy.html"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms.html"
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-brand-dark-900 text-slate-400 hover:text-white hover:bg-brand-dark-800 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
