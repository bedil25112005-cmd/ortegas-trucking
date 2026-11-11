// Reads a private backend credential through hidden stdin, never through argv.
import fs from 'node:fs';
if(process.stdin.isTTY)process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
let buffer='';
console.log('Ready for private local configuration (input hidden).');
const timeout=setTimeout(()=>process.exit(1),60000);
process.stdin.on('data',chunk=>{
  buffer+=chunk;
  if(!/[\r\n]/.test(buffer))return;
  try{
    const {token}=JSON.parse(buffer.trim());
    if(typeof token!=='string'||token.includes('\n')||token.includes('\r'))throw new Error();
    fs.writeFileSync('.env.local',`DOMINANT_BACKEND_TOKEN=${token}\nSITE_URL=https://www.ortegastrucking.online\n`);
    console.log('Local backend configuration saved to ignored .env.local.');
    clearTimeout(timeout);process.exit(0);
  }catch{console.error('Invalid private configuration.');process.exit(1);}
});
