import { createClient } from '@supabase/supabase-js';

// Create a Supabase client with admin privileges for secure database operations
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Handle POST requests for quote requests
export async function POST(req) {
  try {
    // Extract form data from request
    const data = await req.formData();
  
    // Get all required fields from form data
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const phone = data.get('phone');
    const email = data.get('email');
    const planName = data.get('planName');
    const address = data.get('address');
    const address2 = data.get('address2');
    const city = data.get('city');
    const state = data.get('state');
    const zip = data.get('zip');
    const country = data.get('country');
    const lots = data.get('lots');
    const propertyTypes = data.getAll('propertyTypes'); // checkbox list
    const role = data.get('role');
    const expiry = data.get('expiry');
    const comments = data.get('comments');
    const consent = data.has('consent'); // Check if consent checkbox was checked
  
    // Log received quote request data
    console.log('Quote Request Received:', {
      firstName, lastName, phone, email, planName,
      address, address2, city, state, zip, country,
      lots, propertyTypes, role, expiry, comments,
      consent
    });

    // Verify user exists in Owners_Login table
    const { data: userData, error: userError } = await supabaseAdmin
      .from('Owners_Login')
      .select('id')
      .eq('email', email)
      .single();

    // Handle case where user is not found
    if (userError || !userData) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get the next sequential ID for the quote request
    const { data: maxIdData } = await supabaseAdmin
      .from('Request_Info')
      .select('id')
      .order('id', { ascending: false })
      .limit(1)
      .single();

    const nextId = maxIdData ? maxIdData.id + 1 : 1;

    // Insert the quote request data into Request_Info table
    const { error } = await supabaseAdmin
      .from('Request_Info')
      .insert([{
        id: nextId,
        user_id: userData.id, // Store the user's ID as a foreign key
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
        plan_name: planName,
        address,
        address2,
        city,
        state,
        zip,
        country,
        lots: lots ? parseInt(lots) : null,
        property_types: propertyTypes,
        role,
        expiry: expiry ? new Date(expiry) : null,
        comments,
        consent: consent
      }]);

    // Handle database insertion errors
    if (error) {
      console.error("❌ Supabase Insert Error:", error.message);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Redirect to thank you page on success
    return Response.redirect("https://strata-connect-green.vercel.app/thank-you", 302);
  } catch (err) {
    // Handle any unexpected errors
    console.error("❌ Unexpected Error:", err);
    return new Response("Server error", { status: 500 });
  }
}

// Handle GET requests - Not allowed for quote requests
export async function GET() {
  return new Response("GET method not supported", {
    status: 405,
    headers: { "Allow": "POST" },
  });
}
  