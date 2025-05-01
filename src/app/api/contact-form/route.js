import { supabase } from '@/app/config/supabaseClient';

export async function POST(req) {
  try {
    const data = await req.formData();

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    console.log("Received form submission:", { firstName, lastName, email, phone, message });

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
      console.error("❌ Supabase insert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return Response.redirect("https://strata-connect-green.vercel.app/thank-you", 302);
  } catch (e) {
    console.error("❌ Unexpected server error:", e);
    return new Response("Server error", { status: 500 });
  }
}
