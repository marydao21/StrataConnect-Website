import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET() {
  const buildingInfo = {
    name: "Sunrise Apartments",
    address: "123 Pitt Street, Sydney, NSW 2000",
    builtYear: 2010,
    totalUnits: 120,
    facilities: ["Pool", "Gym", "Parking", "Garden"],
    timestamp: new Date().toISOString(), // disable Vercel cache
  };

  return new NextResponse(JSON.stringify(buildingInfo), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store', // no caching
    },
  });
}
