import { createClient } from '@supabase/supabase-js';
import { serialize } from 'cookie';

// Create a Supabase client with the service role key for database operations
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const data = await req.formData();

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    // Get the user's ID from the Owners_Login table
    const { data: userData, error: userError } = await supabaseAdmin
      .from('Owners_Login')
      .select('id')
      .eq('email', email)
      .single();

    if (userError || !userData) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get the next sequential ID
    const { data: maxIdData, error: maxIdError } = await supabaseAdmin
      .from('Contacts')
      .select('id')
      .order('id', { ascending: false })
      .limit(1)
      .single();

    const nextId = maxIdData ? maxIdData.id + 1 : 1;

    // Insert the contact form data with the next sequential ID
    const { error } = await supabaseAdmin
      .from('Contacts')
      .insert([{
        id: nextId,
        user_id: userData.id, // Store the user's ID as a foreign key
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message
      }]);

    if (error) {
      console.error("❌ Supabase Insert Error:", error.message);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Set cookies for contact_name, contact_email, and contact_phone
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

    return new Response(null, {
      status: 302,
      headers: {
        'Location': 'https://strata-connect-green.vercel.app/thank-you',
        'Set-Cookie': [nameCookie, emailCookie, phoneCookie],
      },
    });
  } catch (err) {
    console.error("❌ Unexpected Error:", err);
    return new Response("Server error", { status: 500 });
  }
}

export async function GET(req) {
  return new Response("GET method not supported", {
    status: 405,
    headers: { "Allow": "POST" },
  });
}
