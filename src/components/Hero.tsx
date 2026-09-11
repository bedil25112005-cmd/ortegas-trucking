import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Truck, Users } from 'lucide-react';
import { company } from '../lib/company';

interface HeroProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-brand-dark-950 text-white overflow-hidden">
      {/* Subtle geometric & logistics background styling */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0052cc_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue-400 animate-pulse"></span>
              <span>American Freight & Logistics</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Connecting Skilled Drivers with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-300 via-brand-blue-400 to-white">
                Reliable Freight Nationwide
              </span>
            </h1>

            {/* Supporting Text — Strictly Authentic */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-white font-semibold">ORTEGA'S TRUCKING LLC</strong> connects skilled drivers with steady freight opportunities across the U.S. We work with Amazon freight and independent shippers, delivering efficiency and trust in every load.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenContact('General Inquiry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-brand hover:scale-[1.02] transition-all duration-200 active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-dark-800/80 hover:bg-brand-dark-800 text-slate-200 hover:text-white font-semibold text-base px-7 py-4 rounded-xl border border-slate-700/60 hover:border-slate-500 transition-all duration-200"
              >
                <span>Learn More</span>
              </a>

              <a
                href={`tel:${company.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-300 hover:text-brand-blue-300 text-sm font-semibold py-2 px-3 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue-400" />
                <span>{company.phone}</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3 bg-brand-dark-900/60 p-3 rounded-lg border border-slate-800/50">
                <Truck className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Reliable Freight</div>
                  <div className="text-xs text-slate-400">Amazon freight & independent shippers</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-brand-dark-900/60 p-3 rounded-lg border border-slate-800/50">
                <Users className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Driver-Focused</div>
                  <div className="text-xs text-slate-400">Fair pay, safety & growth</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-brand-dark-900/60 p-3 rounded-lg border border-slate-800/50">
                <ShieldCheck className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Safety & Trust</div>
                  <div className="text-xs text-slate-400">Integrity in every single load</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Official Logo & Trucking Theme */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backing Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-brand-blue-600/10 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-brand-dark-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
                {/* Official Logo Display Container (High Contrast, Original Proportions) */}
                <div className="bg-white rounded-xl p-5 sm:p-6 flex items-center justify-center shadow-inner border border-slate-100">
                  <img 
                    src="/logo.png" 
                    alt="Ortega's Trucking LLC Official Logo" 
                    className="h-28 sm:h-32 w-auto object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-brand-blue pl-4 py-1">
                    <h3 className="text-lg font-bold text-white">ORTEGA'S TRUCKING LLC</h3>
                    <p className="text-sm text-slate-400">14855 PRICHARD ST, LA PUENTE, CA 91744</p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{company.about.strength}"
                  </p>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <button
                      onClick={() => onOpenContact('Driver Opportunity')}
                      className="w-full flex items-center justify-between px-4 py-3 bg-brand-blue/10 hover:bg-brand-blue/20 border border-brand-blue/30 rounded-lg text-sm font-semibold text-brand-blue-300 hover:text-white transition-colors"
                    >
                      <span>Interested in Driving with Ortega's?</span>
                      <ArrowRight className="w-4 h-4 text-brand-blue-400" />
                    </button>

                    <button
                      onClick={() => onOpenContact('Shipper / Freight Quote')}
                      className="w-full flex items-center justify-between px-4 py-3 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      <span>Need Reliable Freight Capacity?</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
