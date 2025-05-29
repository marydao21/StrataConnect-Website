import { createClient } from '@supabase/supabase-js';
import { serialize } from 'cookie';

// Create a Supabase client with admin privileges for secure database operations
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Handle POST requests for user login
export async function POST(req) {
  try {
    // Extract email and password from request body
    const { email, password } = await req.json();

    // Check if the user exists in Owners_Login table
    const { data: user, error } = await supabaseAdmin
      .from('Owners_Login')
      .select('id, password, email')
      .eq('email', email)
      .single();

    // Handle case where user is not found
    if (error || !user) {
      return new Response(JSON.stringify({ 
        error: 'User not found. Please sign up first.',
        redirect: '/signup'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify password matches
    if (user.password !== password) {
      return new Response(JSON.stringify({ 
        error: 'Invalid password',
        redirect: '/signup'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Login successful - Set secure cookies for user session
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

    // Return success response with user data and cookies
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
    // Handle any unexpected errors
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

// Handle GET requests - Not allowed for login
export async function GET() {
  return new Response(JSON.stringify({ error: "GET method not allowed" }), {
    status: 405,
    headers: { 
      "Content-Type": "application/json",
      "Allow": "POST" 
    },
  });
}
