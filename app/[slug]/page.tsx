import { notFound } from 'next/navigation';
import Website from '../website';
import { pages } from '../content';
const titles: Record<string,string> = {buy:'Find a Trucking Company',sell:'Sell Your Trucking Company',valuation:'Request a Company Review',contact:'Contact Our Team',faq:'Frequently Asked Questions',guides:'Buyer & Seller Resources'};
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; return {title:pages[slug]?.title || titles[slug] || 'Page not found',alternates:{canonical:'/'+slug}}; }
export default async function Page({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; if (!pages[slug]&&!titles[slug]) notFound(); return <Website view={slug}/>; }
