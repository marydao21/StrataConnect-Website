export async function POST(req) {
  const data = await req.formData();
  const email = data.get("email");
  const password = data.get("password");

  console.log("POST Request Received", { email, password });

  // Simulate login logic (e.g., validate against a database)
  // For demo purposes, we'll always redirect with the email

  const encodedEmail = encodeURIComponent(email);

  // Redirect to login success page with email as query param
  return Response.redirect(`https://strata-connect-green.vercel.app/login-success?email=${encodedEmail}`, 302);
}

export async function GET(req) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  console.log("GET Request Received", { email });

  return new Response(
    JSON.stringify({
      message: `Hello! You're logged in with ${email}.`
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
