import { createClient } from '@supabase/supabase-js';

// Create Supabase clients with different permission levels
// Admin client for secure database operations
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Regular client for public operations
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    // Extract form data from the request
    const data = await request.formData();

    // Get all required fields from form data
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

    // Validate password match
    if (password !== confirmPassword) {
      return new Response(JSON.stringify({ 
        error: "Passwords do not match",
        redirect: '/signup'
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if email already exists in both custom tables
    // This prevents duplicate accounts
    const [loginCheck, signupCheck] = await Promise.all([
      supabaseAdmin
        .from('Owners_Login')
        .select('id')
        .eq('email', email)
        .single(),
      supabaseAdmin
        .from('Owners_Signup')
        .select('id')
        .eq('email', email)
        .single()
    ]);

    // Return error if email already exists
    if (loginCheck.data || signupCheck.data) {
      return new Response(JSON.stringify({ 
        error: 'An account with this email already exists',
        redirect: '/signup'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create user in Supabase Auth
    // This sets up the user's authentication
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        data: {
          firstName,
          lastName,
          phone,
          address,
          suburb,
          postcode,
          state,
          signup_date: new Date().toISOString(),
        }
      }
    });

    // Handle authentication errors
    if (authError) {
      console.error('Auth error:', authError);
      return new Response(JSON.stringify({ 
        error: authError.message,
        redirect: '/signup'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate a UUID for user ID
    const userId = crypto.randomUUID();

    // Insert user data into Owners_Login table
    // This stores basic login information
    const { error: loginError } = await supabaseAdmin
      .from('Owners_Login')
      .insert([{
        id: userId,
        email,
        password, // Note: This should be hashed in production
        is_active: true,
        created_at: new Date().toISOString()
      }]);

    // Handle login table insertion errors
    if (loginError) {
      console.error('Login insert error:', loginError);
      // Clean up: delete from auth if login table insertion fails
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      return new Response(JSON.stringify({ 
        error: 'Failed to create login account',
        redirect: '/signup'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert user data into Owners_Signup table
    // This stores detailed user information
    const { error: signupError } = await supabaseAdmin
      .from('Owners_Signup')
      .insert([{
        id: userId,
        email,
        password, // Note: This should be hashed in production
        first_name: firstName,
        last_name: lastName,
        phone,
        address,
        suburb,
        postcode,
        state,
        is_active: true,
        created_at: new Date().toISOString()
      }]);

    // Handle signup table insertion errors
    if (signupError) {
      console.error('Signup insert error:', signupError);
      // Clean up: delete from auth and login table if signup table insertion fails
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      await supabaseAdmin
        .from('Owners_Login')
        .delete()
        .eq('id', userId);
      return new Response(JSON.stringify({ 
        error: 'Failed to create user account',
        redirect: '/signup'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return success response
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Account created successfully!',
      redirect: '/signup-success'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Handle any unexpected errors
    console.error('Signup error:', error);
    return new Response(JSON.stringify({ 
      error: 'An unexpected error occurred during signup',
      redirect: '/signup'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
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
