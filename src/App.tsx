import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DriverSection } from './components/DriverSection';
import { ShipperSection } from './components/ShipperSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [activeInquiryType, setActiveInquiryType] = useState<string>('General Inquiry');

  const handleOpenContact = (inquiryType = 'General Inquiry') => {
    setActiveInquiryType(inquiryType);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Services onOpenContact={handleOpenContact} />
        <WhyChooseUs />
        <DriverSection onOpenContact={handleOpenContact} />
        <ShipperSection onOpenContact={handleOpenContact} />
        <ContactSection initialInquiryType={activeInquiryType} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Accessible Modals for Privacy Policy & Terms */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onSwitchType={(type) => setLegalModalType(type)}
      />
    </div>
  );
};

export default App;
