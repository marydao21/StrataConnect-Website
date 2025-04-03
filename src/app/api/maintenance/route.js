// /app/api/maintenance/route.js

import { NextResponse } from 'next/server';

// Configuration for Edge Runtime
export const config = {
  runtime: 'edge', // Ensures this runs as an Edge Function
};

// The GET function to return maintenance issues
export async function GET(request) {
  const { pathname } = new URL(request.url);

  // Filter out requests to /favicon.ico
  if (pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  const requests = [
    { id: 1, issue: "Leaking roof", status: "Pending" },
    { id: 2, issue: "Broken elevator", status: "In Progress" },
    { id: 3, issue: "Parking gate malfunction", status: "Resolved" },
  ];

  // Log the request to the Vercel logs with the desired format
  const logEntry = `
  ${new Date().toISOString()}
  GET
  200
  ${request.headers.get('host')}
  ${pathname}
  `;
  console.log(logEntry.trim());

  // Returning JSON response
  return NextResponse.json(requests);
}
