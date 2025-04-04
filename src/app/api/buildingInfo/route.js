// /app/api/buildingInfo/route.js

import { NextResponse } from 'next/server';

// Configuration for Edge Runtime
export const config = {
  runtime: 'edge', // Ensures this runs as an Edge Function
};

// The GET function to return general building information
export async function GET() {
  const buildingInfo = {
    name: "Sunrise Apartments",
    address: "123 Main Street, Sydney, NSW 2000",
    builtYear: 2010,
    totalUnits: 120,
    facilities: ["Swimming Pool", "Gym", "Parking Garage", "Garden"],
    contact: {
      email: "management@sunrise-apartments.com",
      phone: "+61 2 1234 5678"
    }
  };

  // Log the request to the Vercel logs
  console.log('Received request for /api/buildingInfo');
  console.log('Returning building info:', JSON.stringify(buildingInfo, null, 2)); // Pretty-print the JSON

  // Returning JSON response
  return NextResponse.json(buildingInfo);
}
