import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if the user exists in Owners_Login
    const { data: user, error } = await supabaseAdmin
      .from('Owners_Login')
      .select('id, password')
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

    // ✅ Login successful
    return new Response(JSON.stringify({ 
      success: true,
      userId: user.id,
      redirect: '/login-success'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
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
