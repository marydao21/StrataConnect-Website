import { createClient } from '@supabase/supabase-js';
import { serialize } from 'cookie';

// Create a Supabase client with admin privileges for secure database operations
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Handle POST requests for contact form submissions
export async function POST(req) {
  try {
    // Extract form data from request
    const data = await req.formData();

    // Get all required fields from form data
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    // Verify user exists in Owners_Login table
    const { data: userData, error: userError } = await supabaseAdmin
      .from('Owners_Login')
      .select('id')
      .eq('email', email)
      .single();

    // Handle case where user is not found
    if (userError || !userData) {
      return new Response(JSON.stringify({ 
        error: 'You must be logged in to submit the contact form. Please login first.' 
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get the next sequential ID for the contact entry
    const { data: maxIdData } = await supabaseAdmin
      .from('Contacts')
      .select('id')
      .order('id', { ascending: false })
      .limit(1)
      .single();

    const nextId = maxIdData ? maxIdData.id + 1 : 1;

    // Insert the contact form data into Contacts table
    const { error: insertError } = await supabaseAdmin
      .from('Contacts')
      .insert([{
        id: nextId,
        user_id: userData.id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message,
        created_at: new Date().toISOString()
      }]);

    // Handle database insertion errors
    if (insertError) {
      console.error("❌ Supabase Insert Error:", insertError.message);
      return new Response(JSON.stringify({ 
        error: 'Unable to submit your message. Please try again later.' 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Set cookies for contact information
    const nameCookie = serialize('contact_name', `${firstName} ${lastName}`, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    const emailCookie = serialize('contact_email', email, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    const phoneCookie = serialize('contact_phone', phone, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });

    // Redirect to thank you page with cookies
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/thank-you',
        'Set-Cookie': [nameCookie, emailCookie, phoneCookie],
      },
    });
  } catch (err) {
    // Handle any unexpected errors
    console.error("❌ Unexpected Error:", err);
    return new Response(JSON.stringify({ 
      error: 'An unexpected error occurred. Please try again later.' 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle GET requests - Not allowed for contact form
export async function GET() {
  return new Response("GET method not supported", {
    status: 405,
    headers: { "Allow": "POST" },
  });
}
