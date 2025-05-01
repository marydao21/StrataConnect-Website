// src/app/api/contact-form/route.js

import { supabase } from '@/app/config/supabaseClient';

export async function POST(req) {
  const data = await req.formData();

  const firstName = data.get("firstName");
  const lastName = data.get("lastName");
  const email = data.get("email");
  const phone = data.get("phone");
  const message = data.get("message");

  // Insert into Supabase
  const { error } = await supabase
    .from('contact_messages')
    .insert([{
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message
    }]);

  if (error) {
    console.error("Supabase Error:", error.message);
    return new Response(JSON.stringify({ error: "Submission failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return Response.redirect("https://strata-connect-green.vercel.app/thank-you", 302);
}

export async function GET(req) {
  return new Response("GET not supported", {
    status: 405,
    headers: { "Allow": "POST" },
  });
}
