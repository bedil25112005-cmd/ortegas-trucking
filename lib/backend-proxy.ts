import 'server-only';
const backend='https://dominant-trucking-llc.sunlitsole515.chatgpt.site';
const noStore={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
export async function proxy(request:Request,path:'/api/leads'|'/api/admin'){
  const url=new URL(request.url);
  const origin=request.headers.get('origin');
  let sameHost=false;
  try { sameHost=!!origin && new URL(origin).host===request.headers.get('host') && ['http:','https:'].includes(new URL(origin).protocol); } catch {}
  if(request.method!=='GET'&&!sameHost)return Response.json({error:'Please submit from this website.'},{status:403,headers:noStore});
  const token=process.env.DOMINANT_BACKEND_TOKEN;
  if(!token)return Response.json({error:'Inquiry service is not configured. Please call or text (267) 571-6109.'},{status:503,headers:noStore});
  let body:string|undefined;
  if(!['GET','HEAD','DELETE'].includes(request.method)){
    if(!request.headers.get('content-type')?.includes('application/json'))return new Response(null,{status:415,headers:noStore});
    if(Number(request.headers.get('content-length'))>12000)return new Response(null,{status:413,headers:noStore});
    const reader=request.body?.getReader();const chunks:Uint8Array[]=[];let size=0;
    if(reader){for(;;){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>12000){await reader.cancel();return Response.json({error:'Please shorten your inquiry.'},{status:413,headers:noStore});}chunks.push(value);}}
    const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}body=new TextDecoder().decode(bytes);
  }
  const headers=new Headers({'OAI-Sites-Authorization':`Bearer ${token}`,'Origin':backend,'Content-Type':'application/json'});
  headers.set('X-Dominant-Proxy-Token',token);
  const clientIp=process.env.VERCEL==='1'?request.headers.get('x-forwarded-for')?.split(',')[0]?.trim():'127.0.0.1';
  if(clientIp&&/^[0-9a-f:.]{3,100}$/i.test(clientIp))headers.set('X-Dominant-Client-IP',clientIp);
  const cookie=request.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith('dominant_admin='));
  if(cookie&&path==='/api/admin')headers.set('Cookie',cookie);
  const target=new URL(path,backend);
  if(path==='/api/admin'&&url.searchParams.has('id'))target.searchParams.set('id',url.searchParams.get('id')!);
  try{
    const response=await fetch(target,{method:request.method,headers,body,cache:'no-store',redirect:'manual',signal:AbortSignal.timeout(20000)});
    if(!response.headers.get('content-type')?.includes('application/json'))return Response.json({error:'Inquiry service is temporarily unavailable. Please call (267) 571-6109.'},{status:503,headers:noStore});
    const replyHeaders=new Headers({...noStore,'Content-Type':'application/json'});
    const session=response.headers.get('set-cookie');if(session&&path==='/api/admin'&&session.startsWith('dominant_admin='))replyHeaders.set('Set-Cookie',session);
    return new Response(await response.text(),{status:response.status,headers:replyHeaders});
  }catch{return Response.json({error:'We could not reach the inquiry service. Please call or text (267) 571-6109.'},{status:503,headers:noStore});}
}
