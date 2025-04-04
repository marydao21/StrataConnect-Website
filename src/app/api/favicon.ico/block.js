import { NextResponse } from 'next/server';

export async function GET() {
  // Stop logging favicon by returning a no-content response
  return new NextResponse(null, { status: 204 });
}
