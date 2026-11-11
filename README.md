# Dominant Trucking LLC

This replaces the former Ortega's Trucking website on the existing Vercel project and domain, www.ortegastrucking.online. The former website remains in Git history for rollback.

## Architecture

- Next.js frontend and server routes on Vercel.
- Original Dominant website content, new truck image, buyer/seller inquiry flows, and private staff inbox.
- Server-only authenticated proxy to the existing Sites/Cloudflare D1 backend. The backend remains private; its credential never goes into the browser or repository.
- The existing staff access key continues to protect the inbox. No automated email or SMS delivery is enabled.

## Environment variables

Configure DOMINANT_BACKEND_TOKEN as a sensitive server-only variable in Vercel for production and previews. SITE_URL is https://www.ortegastrucking.online. Local secrets belong in ignored .env.local. Never prefix the backend token with NEXT_PUBLIC_. Backend runtime PROXY_TOKEN verifies the forwarded client IP used for abuse protection.

## Development

Run npm ci, then npm run dev. The development URL is http://127.0.0.1:5180. Run npm run build before deployment. Local requests use the configured remote backend, not a local database. Use only clearly labeled disposable test inquiries during verification.

## Source map

- app/website.tsx — layout and forms
- app/globals.css — styling
- app/content.ts — pages, FAQs, and policy text
- app/admin/ — protected staff inbox UI
- app/api/ — Vercel proxy endpoints
- lib/backend-proxy.ts — fixed upstream, secret server authentication, origin checks, body limit, request timeout, private cookie forwarding, no-store responses
- public/images/ — optimized image assets
- next.config.ts and vercel.json — deployment configuration

The inquiry backend stores records for staff follow-up with the retention behavior described in the privacy policy. The Vercel privacy disclosure reflects both hosting providers. Review business address, state, fees, and transaction agreements before a full commercial launch.
