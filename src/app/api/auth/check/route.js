import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Create a Supabase client with admin privileges
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  try {
    // Get the session from the request
    const { data: { session } } = await supabaseAdmin.auth.getSession();

    // If there's no session or no user, return unauthorized
    if (!session?.user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // If we have a valid session with a user, return success
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
} 