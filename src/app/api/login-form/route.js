import { createClient } from '@supabase/supabase-js';
import { serialize } from 'cookie';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if the user exists in Owners_Login
    const { data: user, error } = await supabaseAdmin
      .from('Owners_Login')
      .select('id, password, email')
      .eq('email', email)
      .single();

    if (error || !user) {
      return new Response(JSON.stringify({ 
        error: 'User not found. Please sign up first.',
        redirect: '/signup'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (user.password !== password) {
      return new Response(JSON.stringify({ 
        error: 'Invalid password',
        redirect: '/signup'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Login successful
    // Set cookies with the user ID and email
    const userIdCookie = serialize('user_id', user.id, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    const userEmailCookie = serialize('user_email', user.email, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return new Response(JSON.stringify({ 
      success: true,
      userId: user.id,
      userEmail: user.email,
      redirect: '/login-success'
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Set-Cookie': [userIdCookie, userEmailCookie],
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return new Response(JSON.stringify({ 
      error: 'Login failed. Please try again.',
      redirect: '/owners-login'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ error: "GET method not allowed" }), {
    status: 405,
    headers: { 
      "Content-Type": "application/json",
      "Allow": "POST" 
    },
  });
}
