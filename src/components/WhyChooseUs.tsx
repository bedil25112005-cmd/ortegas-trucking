import React from 'react';
import { Truck, DollarSign, Users, Shield, Handshake } from 'lucide-react';
import { company } from '../lib/company';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Handshake': return <Handshake className="w-6 h-6" />;
      default: return <Truck className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase">
            Our Commitments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
            Why Choose ORTEGA'S TRUCKING LLC
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our company is founded on core values that benefit both commercial drivers and our shipping partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {company.values.map((val) => (
            <div
              key={val.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-brand-blue/40 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-blue text-brand-blue group-hover:text-white border border-slate-200 group-hover:border-transparent flex items-center justify-center transition-colors duration-300 shadow-sm">
                  {getIcon(val.iconName)}
                </div>

                <h3 className="text-lg font-bold text-brand-dark-900 group-hover:text-brand-blue transition-colors">
                  {val.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
