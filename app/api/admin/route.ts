import {proxy} from '../../../lib/backend-proxy';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export function GET(request:Request){return proxy(request,'/api/admin');}
export function POST(request:Request){return proxy(request,'/api/admin');}
export function PATCH(request:Request){return proxy(request,'/api/admin');}
export function DELETE(request:Request){return proxy(request,'/api/admin');}
