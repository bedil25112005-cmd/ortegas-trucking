import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { company } from '../lib/company';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-brand-blue" />
            ) : (
              <FileText className="w-5 h-5 text-brand-blue" />
            )}
            <h3 className="text-lg font-bold text-brand-dark-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
              <p>
                {company.name} ("we", "us", or "our") operates the website <strong>{company.website}</strong>. 
                This Privacy Policy outlines our policies regarding the collection, use, and disclosure of personal information when you use our website.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">1. Information Collection</h4>
              <p>
                We only collect personally identifiable information that you voluntarily provide to us when submitting inquiries through our contact forms or communicating with our dispatch team, including your name, email address, phone number, and company name.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">2. Use of Information</h4>
              <p>
                We use the information collected solely to respond to your freight requests, evaluate commercial driving inquiries, coordinate transportation services, and provide customer support.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">3. Data Protection & Sharing</h4>
              <p>
                We do not sell, rent, or trade your personal information to third parties. Information may only be shared with verified logistics partners as strictly necessary to fulfill contracted transportation services.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">4. Contact Us</h4>
              <p>
                If you have questions regarding this Privacy Policy, you may contact us at <strong>{company.email}</strong> or call <strong>{company.phone}</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
              <p>
                Please review these Terms & Conditions carefully before using the <strong>{company.website}</strong> website operated by {company.name}.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">1. Acceptance of Terms</h4>
              <p>
                By accessing or browsing this website, you agree to comply with and be bound by these Terms & Conditions and all applicable laws and regulations.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">2. Transportation & Freight Inquiries</h4>
              <p>
                Website content is provided for informational and business inquiry purposes. Submitting a rate request or driver inquiry does not constitute a binding contract until formal logistics agreements are executed.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">3. Intellectual Property</h4>
              <p>
                All content, trademarks, logos, and materials on this website are the property of {company.name} and protected by applicable copyright and trademark laws.
              </p>
              <h4 className="text-base font-bold text-brand-dark-900 pt-2">4. Governing Law</h4>
              <p>
                These terms are governed by and construed in accordance with the laws of the State of California and applicable federal regulations.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-dark-900 hover:bg-brand-dark-800 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
