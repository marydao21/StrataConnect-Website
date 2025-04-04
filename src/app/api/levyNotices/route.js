// /app/api/levyNotices/route.js

import { NextResponse } from 'next/server';

// Configuration for Edge Runtime
export const config = {
  runtime: 'edge', // Ensures this runs as an Edge Function
};

// The GET function to return levy notices
export async function GET() {
  const levyNotices = [
    { id: 1, owner: "John Doe", amountDue: 500.00, dueDate: "2025-05-01", status: "Pending" },
    { id: 2, owner: "Jane Smith", amountDue: 750.50, dueDate: "2025-04-20", status: "Paid" },
    { id: 3, owner: "Michael Johnson", amountDue: 620.75, dueDate: "2025-04-25", status: "Overdue" },
  ];

  // Log the request to the Vercel logs
  console.log('Received request for /api/levyNotices');
  console.log('Returning levy notice data:', JSON.stringify(levyNotices, null, 2)); // Pretty-print the JSON

  // Returning JSON response
  return NextResponse.json(levyNotices);
}
