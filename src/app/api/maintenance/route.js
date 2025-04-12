import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET() {
  const issues = [
    { id: 1, item: "Elevator Repair", status: "In Progress" },
    { id: 2, item: "Garage Door", status: "Resolved" },
    { id: 3, item: "Water Leak", status: "Pending" },
  ];

  return new NextResponse(JSON.stringify({ updatedAt: new Date().toISOString(), issues }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
