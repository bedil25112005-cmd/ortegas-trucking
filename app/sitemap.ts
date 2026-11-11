import {siteUrl} from '../lib/site-url';
export default function sitemap(){return ['','buy','sell','valuation','about','aged','checklist','guides','faq','contact','privacy','terms'].map(p=>({url:`${siteUrl}/${p}`}));}
