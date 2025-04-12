export async function POST(req) {
    const data = await req.formData();
  
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
  
    console.log("Contact Form Submitted:", {
      firstName, lastName, email, phone, message,
    });
  
    // Redirect to thank you page after submission
    return Response.redirect("https://strata-connect-green.vercel.app/thank-you", 302);
  }
  
  export async function GET(req) {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");
    const name = url.searchParams.get("name");
  
    return new Response(
      JSON.stringify({
        message: `Hello ${name || "there"}, we’ll contact you soon at ${email}.`,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
  