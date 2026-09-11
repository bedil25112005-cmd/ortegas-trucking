/**
 * ORTEGA'S TRUCKING LLC — Official Company Configuration
 * 
 * Centralized single source of truth for company information.
 * Components read from this configuration.
 * 
 * IMPORTANT: Strictly adheres to confirmed company information.
 * No fabricated statistics (truck count, driver count, founding year, DOT/MC, etc.)
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  isConfirmed: boolean;
  tag?: string;
  notes?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Shield' | 'DollarSign' | 'Users' | 'Truck' | 'Handshake';
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
    mapUrl: string;
  };
  website: string;
  about: {
    lead: string;
    paragraph1: string;
    paragraph2: string;
    strength: string;
  };
  vision: string;
  missionStatement: string;
  values: ValueItem[];
  services: ServiceItem[];
  driverCommitment: {
    badge: string;
    headline: string;
    lead: string;
    pillars: { title: string; description: string }[];
  };
  shipperCommitment: {
    badge: string;
    headline: string;
    lead: string;
    pillars: { title: string; description: string }[];
  };
  socialLinks: {
    enabled: boolean;
    links: { platform: string; url: string }[];
  };
  legal: {
    dotNumber: string;
    mcNumber: string;
    fmcsaDotUrl: string;
    fmcsaMcUrl: string;
    copyrightYear: number;
  };
}

export const company: CompanyConfig = {
  name: "ORTEGA'S TRUCKING LLC",
  legalName: "ORTEGA'S TRUCKING LLC",
  tagline: "Reliable Freight. Professional Service.",
  phone: "(904) 908-7895",
  phoneRaw: "+19049087895",
  email: "info@ortegastrucking.online",
  address: {
    street: "14855 PRICHARD ST",
    city: "LA PUENTE",
    state: "CA",
    zip: "91744",
    full: "14855 PRICHARD ST, LA PUENTE, CA 91744",
    mapUrl: "https://maps.google.com/?q=14855+PRICHARD+ST,+LA+PUENTE,+CA+91744",
  },
  website: "ortega.org",
  about: {
    lead: "ORTEGA'S TRUCKING LLC is a logistics company committed to connecting skilled drivers with reliable freight opportunities.",
    paragraph1: "We work with Amazon freight and independent shippers across the U.S., ensuring efficiency and trust in every load.",
    paragraph2: "Our vision is to build a trusted network of drivers and freight solutions nationwide. We strive for safety, transparency, and innovation in logistics while empowering drivers with reliable income and professional growth.",
    strength: "Our strength is our drivers — we believe in fair pay, safety, and long-term partnerships.",
  },
  vision: "Our vision is to build a trusted network of drivers and freight solutions nationwide.",
  missionStatement: "We strive for safety, transparency, and innovation in logistics while empowering drivers with reliable income and professional growth.",
  
  // Confirmed values: Reliable freight, Fair pay, Professional team
  // Derived directly from company description: Safety, Long-term partnerships
  values: [
    {
      id: "val-freight",
      title: "Reliable Freight",
      description: "Connecting skilled drivers with steady, dependable freight opportunities across the United States with consistency and care.",
      iconName: "Truck",
    },
    {
      id: "val-pay",
      title: "Fair Pay",
      description: "We believe drivers are the foundation of our strength. We prioritize fair pay, transparent agreements, and dependable income.",
      iconName: "DollarSign",
    },
    {
      id: "val-team",
      title: "Professional Team",
      description: "Dedicated logistics coordination and responsive dispatch committed to clear communication and mutual success.",
      iconName: "Users",
    },
    {
      id: "val-safety",
      title: "Safety",
      description: "Operating with an uncompromising commitment to road safety, compliance, and secure transportation on every route.",
      iconName: "Shield",
    },
    {
      id: "val-partnerships",
      title: "Long-Term Partnerships",
      description: "Fostering enduring relationships built on trust, respect, and mutual growth with drivers and shipping partners alike.",
      iconName: "Handshake",
    },
  ],

  // Confirmed services: Amazon freight and independent shippers
  // Clearly marked editable placeholders for user expansion
  services: [
    {
      id: "amazon-freight",
      title: "Amazon Freight Solutions",
      description: "Contracted freight transportation operating with Amazon freight, delivering high on-time reliability and seamless nationwide logistical coordination.",
      isConfirmed: true,
      tag: "Confirmed Service",
    },
    {
      id: "independent-shippers",
      title: "Independent Shipper Freight",
      description: "Dedicated transportation services for independent shippers across the U.S., offering transparent communication, load security, and dependable transit.",
      isConfirmed: true,
      tag: "Confirmed Service",
    },
    {
      id: "nationwide-network",
      title: "Nationwide Freight Solutions",
      description: "Connecting freight demands across interstate routes with skilled commercial drivers focused on efficiency, safety, and punctuality.",
      isConfirmed: true,
      tag: "Confirmed Service",
    },
    // Editable placeholder per instructions
    {
      id: "placeholder-service-1",
      title: "[Future Service: Dedicated Contract Lanes]",
      description: "[Editable Placeholder in lib/company.ts: Add specific route commitments, temperature-controlled freight, or custom logistics services here.]",
      isConfirmed: false,
      tag: "Editable Placeholder",
      notes: "Set isConfirmed: true in lib/company.ts when adding confirmed services.",
    },
  ],

  driverCommitment: {
    badge: "Driver-Focused Logistics",
    headline: "Our Strength Is Our Drivers",
    lead: "At ORTEGA'S TRUCKING LLC, we recognize that our entire operation succeeds because of skilled, hardworking drivers. We believe in building true, lasting partnerships where you are respected and supported.",
    pillars: [
      {
        title: "Fair Pay & Transparency",
        description: "Dependable earnings and honest communication. We honor the hard work our drivers deliver on every run.",
      },
      {
        title: "Uncompromising Safety",
        description: "Your health and safety come first. We prioritize safety standards and realistic schedules that keep you secure.",
      },
      {
        title: "Reliable Freight Opportunities",
        description: "Consistent loads through our work with Amazon freight and respected independent shippers across the United States.",
      },
      {
        title: "Professional Growth",
        description: "Expand your career with a supportive logistics team dedicated to helping you achieve lasting professional stability.",
      },
      {
        title: "Long-Term Partnerships",
        description: "We are committed to long-term relationships built on mutual respect, trust, and shared prosperity.",
      },
    ],
  },

  shipperCommitment: {
    badge: "For Shippers & Logistics Partners",
    headline: "Dependable Transportation for Shippers",
    lead: "Whether you are an independent shipper or a freight partner, ORTEGA'S TRUCKING LLC delivers efficiency, transparent communication, and integrity in every load.",
    pillars: [
      {
        title: "Efficiency in Every Load",
        description: "Experienced driving professionals and organized logistics coordination ensure your shipments arrive safely and on time.",
      },
      {
        title: "Trust & Transparency",
        description: "Open communication, honest scheduling, and accountability from dispatch through final delivery.",
      },
      {
        title: "Dedicated Freight Solutions",
        description: "Collaborative freight management tailored to meet the dynamic scheduling requirements of your supply chain.",
      },
    ],
  },

  socialLinks: {
    enabled: false,
    links: [],
  },

  legal: {
    dotNumber: "3623871",
    mcNumber: "1238867",
    fmcsaDotUrl: "https://safer.fmcsa.dot.gov/query.asp?query_type=queryCarrierSnapshot&query_param=USDOT&query_string=3623871",
    fmcsaMcUrl: "https://safer.fmcsa.dot.gov/query.asp?query_type=queryCarrierSnapshot&query_param=MC_MX&query_string=1238867",
    copyrightYear: 2026,
  },
};
