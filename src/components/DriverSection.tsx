import React from 'react';
import { ArrowRight, ShieldCheck, DollarSign, Award, TrendingUp, HeartHandshake } from 'lucide-react';
import { company } from '../lib/company';

interface DriverSectionProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const DriverSection: React.FC<DriverSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="drivers" className="py-20 sm:py-28 bg-brand-dark-950 text-white relative overflow-hidden border-b border-slate-800">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
              {company.driverCommitment.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {company.driverCommitment.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {company.driverCommitment.lead}
            </p>

            <div className="bg-brand-dark-900/80 border border-slate-800 p-5 rounded-xl space-y-2">
              <div className="text-xs font-bold text-brand-blue-400 tracking-wider uppercase">Our Core Belief</div>
              <p className="text-sm sm:text-base text-slate-200 font-medium italic">
                "{company.about.strength}"
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Driver Opportunity')}
                className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-brand hover:scale-[1.02] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Drive With Ortega's</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {company.driverCommitment.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-brand-dark-900 border border-slate-800 hover:border-brand-blue/40 p-5 rounded-xl transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue-400 shrink-0 flex items-center justify-center mt-0.5">
                  {idx === 0 && <DollarSign className="w-5 h-5" />}
                  {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 2 && <Award className="w-5 h-5" />}
                  {idx === 3 && <TrendingUp className="w-5 h-5" />}
                  {idx === 4 && <HeartHandshake className="w-5 h-5" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
