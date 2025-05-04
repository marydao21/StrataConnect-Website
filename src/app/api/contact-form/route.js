import { createClient } from '@supabase/supabase-js';

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

    // Insert the contact form data with the user's ID
    const { error } = await supabaseAdmin
      .from('Contacts')
      .insert([{
        id: userData.id,
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

    return Response.redirect("https://strata-connect-green.vercel.app/thank-you", 302);
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
