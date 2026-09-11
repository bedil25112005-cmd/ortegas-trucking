import React from 'react';
import { Truck, PackageCheck, Route, FileCode2, ArrowRight } from 'lucide-react';
import { company } from '../lib/company';

interface ServicesProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase">
            Freight Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
            Reliable Freight & Transportation Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Executing on-time freight solutions across the United States in partnership with Amazon freight and independent shippers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.services.map((service, idx) => {
            const isPlaceholder = !service.isConfirmed;
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isPlaceholder
                    ? 'bg-slate-100/80 border-2 border-dashed border-slate-300 hover:border-brand-blue/50 text-slate-500'
                    : 'bg-white border border-slate-200 shadow-card hover:shadow-brand hover:-translate-y-1'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isPlaceholder
                        ? 'bg-slate-200 text-slate-500'
                        : 'bg-brand-blue text-white shadow-md'
                    }`}>
                      {idx === 0 && <Truck className="w-6 h-6" />}
                      {idx === 1 && <PackageCheck className="w-6 h-6" />}
                      {idx === 2 && <Route className="w-6 h-6" />}
                      {idx >= 3 && <FileCode2 className="w-6 h-6" />}
                    </div>

                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isPlaceholder 
                        ? 'bg-slate-200 text-slate-600' 
                        : 'bg-brand-blue-50 text-brand-blue'
                    }`}>
                      {service.tag || (isPlaceholder ? 'Placeholder' : 'Active Service')}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold leading-snug ${
                    isPlaceholder ? 'text-slate-600' : 'text-brand-dark-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  {isPlaceholder ? (
                    <div className="text-xs text-slate-400 font-mono">
                      Editable in: <span className="font-semibold text-slate-600">lib/company.ts</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => onOpenContact('Shipper / Freight Quote')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-700 transition-colors"
                    >
                      <span>Inquire About Freight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-brand-dark-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Have a specific shipping lane or freight requirement?</h4>
            <p className="text-sm text-slate-300">
              Speak directly with our team to discuss customized freight scheduling and dependable capacity.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Shipper / Freight Quote')}
            className="shrink-0 bg-brand-blue hover:bg-brand-blue-600 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-brand transition-all duration-200"
          >
            Request Freight Quote
          </button>
        </div>
      </div>
    </section>
  );
};
