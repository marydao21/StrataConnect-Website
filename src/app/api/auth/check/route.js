import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Create a Supabase client with admin privileges
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  try {
    // Get cookies from the request
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_id')?.value;
    const userEmail = cookieStore.get('user_email')?.value;

    // If no user cookies are present, return unauthorized
    if (!userId || !userEmail) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Verify user exists in Owners_Login table
    const { data: user, error } = await supabaseAdmin
      .from('Owners_Login')
      .select('id, email, is_active')
      .eq('id', userId)
      .eq('email', userEmail)
      .single();

    // If user not found or inactive, return unauthorized
    if (error || !user || !user.is_active) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // If we have a valid user, return success
    return NextResponse.json({ 
      authenticated: true,
      user: {
        id: user.id,
        email: user.email
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
} 