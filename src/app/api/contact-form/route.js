export async function POST(req) {
    const data = await req.formData();
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const phone = data.get('phone');
    const message = data.get('message');
  
    console.log("POST Request Received", { firstName, lastName, email, phone, message });
  
    // 302 REDIRECT after successful POST
    return Response.redirect('https://strata-connect-green.vercel.app/thank-you', 302);
  }
  
  export async function GET(req) {
    const url = new URL(req.url);
    const name = url.searchParams.get('name');
    const email = url.searchParams.get('email');
  
    console.log("GET Request Received", { name, email });
  
    return new Response(
      JSON.stringify({ message: `Hello ${name}, your email is ${email}` }),
      { status: 200 }
    );
  }
  