import { createClient } from '@supabase/supabase-js';
import { serialize } from 'cookie';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {
    // Sign out from Supabase Auth
    const { error } = await supabaseAdmin.auth.signOut();
    
    if (error) {
      return new Response(JSON.stringify({ 
        error: error.message,
        success: false 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

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

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Logged out successfully' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': [userIdCookie, userEmailCookie],
      },
    });
  } catch (err) {
    console.error('Logout error:', err);
    return new Response(JSON.stringify({ 
      error: 'Logout failed',
      success: false 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}