// Without edge runtime
export default async function handler(req) {
    const { ownerId } = req.query;
  
    if (!ownerId) {
      return new Response(JSON.stringify({ error: "Owner ID is required" }), { status: 400 });
    }
  
    const levyAmount = Math.random() * 1000;
    const levyNotice = `Levy Notice for Owner ${ownerId}: Amount Due - $${levyAmount.toFixed(2)}`;
  
    return new Response(JSON.stringify({ levyNotice }), { status: 200 });
  }
  