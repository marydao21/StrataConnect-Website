// /app/api/maintenance/route.js

import { NextResponse } from 'next/server';

// Configuration for Edge Runtime
export const config = {
  runtime: 'edge', // Ensures this runs as an Edge Function
};

// The GET function to return maintenance issues
export async function GET() {
  const requests = [
    { id: 1, issue: "Leaking roof", status: "Pending" },
    { id: 2, issue: "Broken elevator", status: "In Progress" },
    { id: 3, issue: "Parking gate malfunction", status: "Resolved" },
  ];

  // Log the request to the Vercel logs
  console.log('Received request for /api/maintenance');
  console.log('Returning maintenance data:', JSON.stringify(requests, null, 2)); // Pretty-print the JSON

  // Returning JSON response
  return NextResponse.json(requests);
}
