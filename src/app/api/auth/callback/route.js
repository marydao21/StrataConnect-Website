import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Store the session
      const response = NextResponse.redirect(new URL('/', request.url));
      response.cookies.set('supabase.auth.token', JSON.stringify(data.session), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
      return response;
    }
  }

  // Return the user to an error page with some instructions
  return NextResponse.redirect(new URL('/auth/auth-error', request.url));
} 