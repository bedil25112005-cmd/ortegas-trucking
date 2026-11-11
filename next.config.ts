import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  async headers(){return [{source:'/:path*',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}]}];},
  async redirects(){return [{source:'/policy.html',destination:'/privacy',permanent:true},{source:'/terms.html',destination:'/terms',permanent:true}];},
};
export default config;
