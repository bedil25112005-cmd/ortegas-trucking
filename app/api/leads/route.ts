import {proxy} from '../../../lib/backend-proxy';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export function POST(request:Request){return proxy(request,'/api/leads');}
