export async function POST(req) {
    const data = await req.formData();
  
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
    const consent = data.get('consent');
  
    console.log('POST Request Received', {
      firstName, lastName, phone, email, planName,
      address, address2, city, state, zip, country,
      lots, propertyTypes, role, expiry, comments, consent
    });
  
    // Redirect to a thank-you page
    return Response.redirect('https://strata-connect-green.vercel.app/thank-you', 302);
  }
  
  export async function GET(req) {
    const url = new URL(req.url);
    const email = url.searchParams.get('email');
  
    return new Response(
      JSON.stringify({ message: `Thanks for requesting a quote! We will contact ${email} shortly.` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  