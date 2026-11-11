export const consentText = 'I am at least 18, agree to the Terms of Use, have read the Privacy Policy, and ask Dominant Trucking LLC to respond to this inquiry through my selected contact method. This is not consent to automated marketing.';
export const states = 'AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' ');
export function validateLead(raw: Record<string, unknown>) {
  const fields = ['kind','name','email','phone','state','channel','timeline','company','authorityAge','operation','price','insurance','experience','message','source'];
  const data: Record<string,string> = {};
  for (const field of fields) {
    if (raw[field] !== undefined && typeof raw[field] !== 'string') throw new Error('Please check your form fields.');
    data[field] = String(raw[field] || '').trim();
    if (data[field].length > (field === 'message' ? 2000 : 250)) throw new Error('Please shorten your entry.');
  }
  if (!['buyer','seller','valuation','contact','privacy'].includes(data.kind)) throw new Error('Choose a valid inquiry type.');
  if (data.name.length < 2) throw new Error('Enter your full name.');
  if (!['Call','Text','Email'].includes(data.channel)) throw new Error('Choose a contact method.');
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('Enter a valid email address.');
  if (data.phone && !/^\+?[\d\s().-]{10,25}$/.test(data.phone)) throw new Error('Enter a valid phone number.');
  if (data.channel === 'Email' && !data.email) throw new Error('Email is required for an email response.');
  if (data.channel !== 'Email' && data.phone.replace(/\D/g,'').length < 10) throw new Error('A phone number is required for a call or text.');
  if (data.state && !states.includes(data.state)) throw new Error('Choose a valid state.');
  if (!['As soon as possible','Within 30 days','1–3 months','Exploring options'].includes(data.timeline)) throw new Error('Choose a timeline.');
  if (raw.consent !== true) throw new Error('Please confirm the inquiry acknowledgment.');
  return data;
}
