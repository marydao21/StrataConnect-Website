import { parse } from 'cookie';

export async function GET(req) {
  const cookies = parse(req.headers.get('cookie') || '');
  return new Response(JSON.stringify({
    user_id: cookies.user_id,
    user_email: cookies.user_email,
    contact_name: cookies.contact_name,
    contact_email: cookies.contact_email,
    contact_phone: cookies.contact_phone
  }, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}