import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, Truck } from 'lucide-react';
import { company } from '../lib/company';

interface ShipperSectionProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const ShipperSection: React.FC<ShipperSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="shippers" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase">
              {company.shipperCommitment.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-900 tracking-tight leading-tight">
              {company.shipperCommitment.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {company.shipperCommitment.lead}
            </p>

            <div className="space-y-4 pt-2">
              {company.shipperCommitment.pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-brand-dark-900">{pillar.title}</h4>
                    <p className="text-sm text-slate-600 mt-0.5">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenContact('Shipper / Freight Quote')}
                className="inline-flex items-center gap-3 bg-brand-dark-900 hover:bg-brand-dark-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Request Freight Rates</span>
                <ArrowRight className="w-5 h-5 text-brand-blue-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-card">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Freight Standards</span>
                <h3 className="text-xl font-extrabold text-brand-dark-900 mt-1">
                  Built For Independent Shippers & National Freight
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                  <Clock className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark-900">High On-Time Performance</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Strict dispatch coordination that respects scheduled pickup and delivery windows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                  <Truck className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark-900">Amazon Freight Quality Standards</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fulfilling contracted freight under top-tier enterprise logistics guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80">
                  <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark-900">Direct Communication</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Accessible dispatch contact with prompt status updates for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue-50/80 p-4 rounded-xl border border-brand-blue-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-brand-blue uppercase">Dispatch Inquiries</div>
                  <div className="text-sm font-extrabold text-brand-dark-900">{company.phone}</div>
                </div>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="px-4 py-2 bg-brand-blue text-white rounded-lg text-xs font-bold hover:bg-brand-blue-600 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
