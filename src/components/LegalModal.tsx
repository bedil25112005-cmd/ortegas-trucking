import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';

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
              <h3 className="text-lg font-bold text-brand-dark-900 pb-1">
                Privacy Policy
              </h3>
              <p>
                At ORTEGA'S TRUCKING LLC, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you visit our website and engage with our services, including any communications we provide.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Information We Collect
              </h4>
              <p>
                <strong>Personal Information:</strong> This includes information that may identify you as an individual, such as your name, email address, phone number, and postal address. We may collect this information when you contact us, request information, opt in to communications, or interact with us in other ways.
              </p>
              <p>
                <strong>Non-Personal Information:</strong> This includes information that does not directly identify you, such as aggregated data about website usage and browsing patterns. We may collect this information through cookies and similar technologies.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Mobile Information Non-Sharing
              </h4>
              <p>
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Consent and Privacy Compliance
              </h4>
              <p>
                ORTEGA'S TRUCKING LLC respects your privacy and handles communication information responsibly. If you consent to receive communications from us, such as SMS or email updates, you agree to receive messages related to our services and other communications described at the time of consent.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Phone numbers or contact details collected with your consent will NOT be sold, rented, or shared with third parties or affiliates for marketing or promotional purposes.
                </li>
                <li>
                  We do not share SMS opt-in data or consent status with any third parties.
                </li>
                <li>
                  Communication frequency may vary depending on the nature of the messages.
                </li>
                <li>
                  Message and data rates may apply based on your carrier's pricing.
                </li>
                <li>
                  You may opt out of SMS communications at any time by replying STOP to any message, replying HELP for assistance, or contacting us directly using the details below.
                </li>
              </ul>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                SMS/Text Messaging Policy
              </h4>
              <p>
                When you provide your mobile phone number to ORTEGA'S TRUCKING LLC, you expressly consent to receive SMS text messages from us related to your account, services, load and delivery updates, support, safety notifications, and other logistics-related information. Message frequency may vary. Message and data rates may apply. You may opt out at any time by replying STOP to any message.
              </p>
              <p>
                For additional assistance, you may reply HELP or contact us using the details provided in the Contact Us section below.
              </p>
              <p>
                We value your privacy. Your mobile phone number, SMS opt-in data, consent status, and message history will not be shared, sold, rented, or disclosed to any third parties for marketing or promotional purposes. We do not share this information with any third party except as required by law or as strictly necessary to operate and deliver the SMS messaging services described in this policy.
              </p>
              <p>
                For our SMS communication terms, please also review our{' '}
                {onSwitchType ? (
                  <button
                    type="button"
                    onClick={() => onSwitchType('terms')}
                    className="text-brand-blue hover:underline cursor-pointer"
                  >
                    Terms and Conditions
                  </button>
                ) : (
                  'Terms and Conditions'
                )}.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                How We Use Your Information
              </h4>
              <p>We may use the information we collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To respond to inquiries and requests</li>
                <li>To improve our services and website</li>
                <li>To monitor website usage</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>
                  To send communications from ORTEGA'S TRUCKING LLC where you have provided appropriate consent
                </li>
              </ul>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Data Security
              </h4>
              <p>
                We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Your Rights
              </h4>
              <p>
                Depending on your jurisdiction, you may have rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The right to access your personal data</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to object to processing</li>
                <li>The right to request restriction of processing</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise your rights, please contact us using the details below.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Cookies
              </h4>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files that may include anonymous unique identifiers. You can configure your browser to refuse cookies or notify you when cookies are being sent. However, refusing cookies may limit your ability to use some parts of our website or services.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Changes to This Privacy Policy
              </h4>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page, and you are encouraged to review it periodically. Updates become effective when posted.
              </p>

              <h4 className="text-base font-bold text-brand-dark-900 pt-2">
                Contact Us
              </h4>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
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
              </div>

              <p className="text-xs text-slate-500 pt-2">
                &copy; 2026 ORTEGA'S TRUCKING LLC. All rights reserved.
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
