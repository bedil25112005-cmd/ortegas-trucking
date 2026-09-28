import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { company } from '../lib/company';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  onSwitchType?: (type: 'privacy' | 'terms') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose, onSwitchType }) => {
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
              {type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions for SMS Communications'}
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
              <h3 className="text-lg font-bold text-brand-dark-900 pb-1">
                Terms and Conditions for SMS Communications
              </h3>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                1. SMS Consent and Privacy
              </h4>
              <p>
                By providing your mobile phone number and submitting the SMS consent form on our website, you agree to receive SMS text messages from ORTEGA'S TRUCKING LLC related to delivery notifications, order updates, shipment information, service alerts, and compliance-related communications.
              </p>
              <p>
                Mobile opt-in data and consent information will not be shared with third parties or affiliates for marketing or promotional purposes. No mobile information will be shared with third parties for their own marketing use.
              </p>
              <p>
                For more information about how we collect, use, and protect your information, please review our{' '}
                {onSwitchType ? (
                  <button
                    type="button"
                    onClick={() => onSwitchType('privacy')}
                    className="text-brand-blue hover:underline cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                ) : (
                  'Privacy Policy'
                )}.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                2. How to Opt-In
              </h4>
              <p>
                You can opt in to receive SMS messages from ORTEGA'S TRUCKING LLC by visiting our website and completing the form where a phone number is requested.
              </p>
              <p>
                The specific mobile opt-in path is: Visit our website, open the contact/application form, enter your mobile phone number, check the SMS consent checkbox, and submit the form.
              </p>
              <p>
                The SMS consent checkbox is not pre-selected. You must manually select the checkbox to give consent to receive SMS messages.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                3. Types of SMS Messages
              </h4>
              <p>
                If you consent to receive SMS messages from ORTEGA'S TRUCKING LLC, you may receive messages such as:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Delivery notifications</li>
                <li>Shipment updates</li>
                <li>Service-related notifications</li>
                <li>Order or load updates</li>
                <li>Compliance-related communications</li>
              </ul>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                4. Message Frequency
              </h4>
              <p>
                Message frequency may vary depending on your communication needs, account activity, service status, or shipment activity. You may receive up to 3 SMS messages per week.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                5. Message and Data Rates
              </h4>
              <p>
                Message and data rates may apply depending on your mobile carrier and your mobile service plan. ORTEGA'S TRUCKING LLC is not responsible for any charges imposed by your mobile carrier.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                6. How to Opt-Out
              </h4>
              <p>
                You may opt out of receiving SMS messages at any time by replying STOP to any SMS message you receive from ORTEGA'S TRUCKING LLC.
              </p>
              <p>
                After replying STOP, you may receive a final confirmation message stating that you have been unsubscribed. After this, you will no longer receive SMS messages from us unless you opt in again.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                7. Help Instructions
              </h4>
              <p>
                For assistance, reply HELP to any SMS message you receive from ORTEGA'S TRUCKING LLC.
              </p>
              <p>
                You may also contact us directly by email at{' '}
                <a href="mailto:info@ortegastrucking.online" className="text-brand-blue hover:underline">
                  info@ortegastrucking.online
                </a>{' '}
                or by phone at{' '}
                <a href="tel:+16782634771" className="text-brand-blue hover:underline">
                  +1 (678) 263-4771
                </a>.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                8. Standard SMS Disclosure
              </h4>
              <p>
                By opting in, you agree to receive SMS messages from ORTEGA'S TRUCKING LLC. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for assistance. Mobile opt-in information is not shared with third parties for marketing purposes.
              </p>
              <p>
                Please review our{' '}
                {onSwitchType ? (
                  <button
                    type="button"
                    onClick={() => onSwitchType('privacy')}
                    className="text-brand-blue hover:underline cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                ) : (
                  'Privacy Policy'
                )}{' '}
                and these Terms and Conditions for more information.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                9. Contact Information
              </h4>
              <div className="space-y-1">
                <p className="font-semibold text-brand-dark-900">ORTEGA'S TRUCKING LLC</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@ortegastrucking.online" className="text-brand-blue hover:underline">
                    info@ortegastrucking.online
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+16782634771" className="text-brand-blue hover:underline">
                    +1 (678) 263-4771
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a
                    href="https://ortegastrucking.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    ortegastrucking.online
                  </a>
                </p>
              </div>

              <p className="text-xs text-slate-500 pt-2">
                &copy; 2026 ORTEGA'S TRUCKING LLC. All rights reserved.
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
