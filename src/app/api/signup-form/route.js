import { createClient } from '@supabase/supabase-js';

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
    const data = await req.formData();

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const address = data.get("address");
    const suburb = data.get("suburb");
    const postcode = data.get("postcode");
    const state = data.get("state");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (password !== confirmPassword) {
      return new Response(JSON.stringify({ 
        error: "Passwords do not match",
        redirect: '/signup'
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Generate a UUID for user ID
    const userId = crypto.randomUUID();

    // Check if email already exists
    const { data: existingLogin } = await supabaseAdmin
      .from('Owners_Login')
      .select('id')
      .eq('email', email)
      .single();

    const { data: existingSignup } = await supabaseAdmin
      .from('Owners_Signup')
      .select('id')
      .eq('email', email)
      .single();

    if (existingLogin || existingSignup) {
      return new Response(JSON.stringify({ 
        error: 'An account with this email already exists',
        redirect: '/signup'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert into Owners_Login
    const { error: loginError } = await supabaseAdmin
      .from('Owners_Login')
      .insert([{
        id: userId,
        email,
        password,
        is_active: true,
      }]);

    if (loginError) {
      console.error('Login insert error:', loginError.message);
      return new Response(JSON.stringify({ 
        error: 'Failed to create login account.',
        redirect: '/signup'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert into Owners_Signup
    const { error: signupError } = await supabaseAdmin
      .from('Owners_Signup')
      .insert([{
        id: userId,
        email,
        password, // also stored here as requested
        first_name: firstName,
        last_name: lastName,
        phone,
        address,
        suburb,
        postcode,
        state,
        is_active: true,
      }]);

    if (signupError) {
      console.error('Signup insert error:', signupError.message);
      // Clean up: delete from login table
      await supabaseAdmin.from('Owners_Login').delete().eq('id', userId);
      return new Response(JSON.stringify({ 
        error: 'Failed to create signup account.',
        redirect: '/signup'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ✅ Success
    return new Response(JSON.stringify({ 
      success: true,
      userId: userId,
      redirect: '/signup-success'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return new Response(JSON.stringify({ 
      error: 'Unexpected error occurred.',
      redirect: '/signup'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req) {
  return new Response(JSON.stringify({ 
    error: "GET method not supported",
    redirect: '/signup'
  }), {
    status: 405,
    headers: { 
      "Content-Type": "application/json",
      "Allow": "POST" 
    },
  });
}
