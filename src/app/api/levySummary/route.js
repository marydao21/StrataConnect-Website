import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET() {
  const data = {
    owner: "Mary Dao",
    currentBalance: "$1,200",
    dueDate: "2025-06-01",
    lastPaid: "2025-03-28",
    timestamp: new Date().toISOString(),
  };

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
