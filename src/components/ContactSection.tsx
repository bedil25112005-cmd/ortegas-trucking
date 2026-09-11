import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { company } from '../lib/company';

interface ContactSectionProps {
  initialInquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInquiryType = 'General Inquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryType: initialInquiryType,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialInquiryType) {
      setFormData(prev => ({ ...prev, inquiryType: initialInquiryType }));
    }
  }, [initialInquiryType]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase">
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
            Contact ORTEGA'S TRUCKING LLC
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are looking for dependable freight capacity or interested in driving opportunities, we welcome your inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Company Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-extrabold text-brand-dark-900">
              Direct Contact Details
            </h3>

            {/* Phone Card */}
            <a
              href={`tel:${company.phoneRaw}`}
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-brand-blue/50 shadow-card hover:shadow-brand transition-all duration-200 flex items-start gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</div>
                <div className="text-lg font-bold text-brand-dark-900 group-hover:text-brand-blue transition-colors">
                  {company.phone}
                </div>
                <div className="text-xs text-slate-500">Tap to call our dispatch & office line</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${company.email}`}
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-brand-blue/50 shadow-card hover:shadow-brand transition-all duration-200 flex items-start gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</div>
                <div className="text-lg font-bold text-brand-dark-900 group-hover:text-brand-blue transition-colors break-all">
                  {company.email}
                </div>
                <div className="text-xs text-slate-500">Send inquiries directly to our team</div>
              </div>
            </a>

            {/* Address Card */}
            <a
              href={company.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-brand-blue/50 shadow-card hover:shadow-brand transition-all duration-200 flex items-start gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mailing & Location Address</div>
                <div className="text-base font-bold text-brand-dark-900 group-hover:text-brand-blue transition-colors">
                  {company.address.street}
                </div>
                <div className="text-sm text-slate-600">
                  {company.address.city}, {company.address.state} {company.address.zip}
                </div>
                <div className="text-xs text-brand-blue font-semibold pt-1">Open in Google Maps &rarr;</div>
              </div>
            </a>

            {/* FMCSA Operating Authority Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1 w-full">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">FMCSA Operating Authority</div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Verified
                  </span>
                </div>
                <div className="text-base font-bold text-brand-dark-900 flex flex-wrap items-center gap-2 pt-0.5">
                  <a
                    href={company.legal.fmcsaDotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-brand-blue-700 hover:underline transition-colors"
                    title="View official USDOT 3623871 SAFER record"
                  >
                    USDOT {company.legal.dotNumber}
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={company.legal.fmcsaMcUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-brand-blue-700 hover:underline transition-colors"
                    title="View official MC 1238867 SAFER record"
                  >
                    MC {company.legal.mcNumber}
                  </a>
                </div>
                <div className="text-xs text-slate-500">
                  Official federal motor carrier safety and operating authority registration
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex items-start gap-3">
              <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 font-semibold">Prompt Response Commitment:</strong> We respond to all driver inquiries and freight quote requests as quickly as possible during standard dispatch hours.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-extrabold text-brand-dark-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill out the form below and our team will get in touch with you shortly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-brand-blue-50 border border-brand-blue-200 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-brand-blue">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h4 className="text-base font-bold text-brand-dark-900">Message Received (Demo Mode)</h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Thank you for reaching out, <strong className="font-semibold">{formData.name}</strong>! 
                    Your inquiry regarding <strong className="font-semibold">{formData.inquiryType}</strong> has been drafted.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-brand-blue-200/60 text-xs text-slate-600">
                    <span className="font-bold text-brand-blue uppercase">Note:</span> Direct automated email dispatch has not yet been connected to an external email service. For immediate assistance, please call us directly at <a href={`tel:${company.phoneRaw}`} className="font-bold text-brand-blue underline">{company.phone}</a> or email <a href={`mailto:${company.email}`} className="font-bold text-brand-blue underline">{company.email}</a>.
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        inquiryType: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="text-xs font-bold text-brand-blue hover:underline pt-2 inline-block cursor-pointer"
                  >
                    &larr; Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-brand-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Driver Opportunity">Driver Opportunity (Drive with Ortega's)</option>
                      <option value="Shipper / Freight Quote">Shipper / Freight Quote (Ship with Ortega's)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-brand-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-brand-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="(904) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-brand-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your Company / Shipper"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-brand-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Inquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Please let us know how we can assist you..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } text-brand-dark-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-y`}
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-600 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-brand transition-all duration-200 active:scale-95 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
