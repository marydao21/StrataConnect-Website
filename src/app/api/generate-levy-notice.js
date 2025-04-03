// pages/api/generate-levy-notice.js

export const config = {
    runtime: 'edge',  // Ensure it's running as an edge function
  };
  
  export default async function handler(req) {
    const { ownerId } = req.query;  // Get the unit owner ID from query params
  
    if (!ownerId) {
      return new Response(JSON.stringify({ error: "Owner ID is required" }), { status: 400 });
    }
  
    // Simulate levy amount calculation for the owner
    const levyAmount = Math.random() * 1000;  // Example levy amount
  
    const levyNotice = `Levy Notice for Owner ${ownerId}: Amount Due - $${levyAmount.toFixed(2)}`;
  
    return new Response(JSON.stringify({ levyNotice }), { status: 200 });
  }
  