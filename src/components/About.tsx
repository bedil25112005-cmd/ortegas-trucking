import React from 'react';
import { CheckCircle2, Eye, Handshake } from 'lucide-react';
import { company } from '../lib/company';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase">
            About The Company
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
            Connecting Skilled Drivers with Nationwide Freight
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {company.about.lead}
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {company.about.paragraph1}
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {company.about.paragraph2}
              </p>
            </div>

            {/* Key Authentic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark-900">Amazon Freight</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Experienced collaboration across contracted freight networks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark-900">Independent Shippers</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Tailored transportation solutions for businesses nationwide.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark-900">Fair Driver Compensation</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Empowering drivers with dependable earnings and honest partnership.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark-900">Uncompromising Safety</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Rigorous road safety and regulatory compliance on every route.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Vision Feature Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-brand-blue/10 pointer-events-none">
                <Eye className="w-24 h-24" />
              </div>
              <div className="relative space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 text-brand-blue-300 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {company.vision}
                </p>
              </div>
            </div>

            {/* Core Philosophy Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 shadow-card space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-dark-900">Our Operational Philosophy</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                "{company.about.strength}"
              </p>
              <div className="pt-2 text-xs font-bold text-brand-blue tracking-wide uppercase">
                Long-Term Partnerships • Driver Safety • Mutual Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
