// /app/api/maintenance/route.js

import { NextResponse } from 'next/server';

// Configuration for Edge Runtime
export const config = {
  runtime: 'edge', // Ensures this runs as an Edge Function
};

// The GET function to return maintenance issues
export async function GET(request) {
  const url = new URL(request.url); // Get full request URL
  console.log(`🔍 Incoming request URL: ${url.href}`); // Log full request
  console.log(`🔍 Pathname: ${url.pathname}`); // Log extracted pathname

  // Ensure only /api/maintenance is logged
  if (url.pathname !== '/api/maintenance') {
    console.log(`❌ Ignoring request for: ${url.pathname}`);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  console.log('✅ Received request for /api/maintenance');

  const requests = [
    { id: 1, issue: "Leaking roof", status: "Pending" },
    { id: 2, issue: "Broken elevator", status: "In Progress" },
    { id: 3, issue: "Parking gate malfunction", status: "Resolved" },
  ];

  console.log('📦 Returning maintenance data:', JSON.stringify(requests, null, 2));

  return NextResponse.json(requests);
}
