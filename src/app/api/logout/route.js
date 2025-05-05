import { serialize } from 'cookie';

export async function POST() {
  // Set the cookies with an expired date to remove them
  const userIdCookie = serialize('user_id', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // Expire immediately
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  const userEmailCookie = serialize('user_email', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0),
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return new Response(JSON.stringify({ success: true, message: 'Logged out' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': [userIdCookie, userEmailCookie],
    },
  });
}