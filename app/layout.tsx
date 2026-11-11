import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from '../lib/site-url';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {canonical:'/'},
  title: { default: 'Buy & Sell Trucking Companies | Dominant Trucking LLC', template: '%s | Dominant Trucking LLC' },
  description: 'Buy or sell a U.S. trucking company with Dominant Trucking LLC. Confidential buyer and seller inquiries and acquisition support.',
  openGraph: { title: 'Your next chapter in trucking. Dominant Trucking LLC.', description: 'Buy or sell a U.S. trucking business. Start a confidential conversation.', type: 'website' },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
