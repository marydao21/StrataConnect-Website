import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const { action } = await request.json();

    if (action === 'signin') {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
        },
      });

      if (error) throw error;

      return NextResponse.json({ url: data.url });
    } else if (action === 'signout') {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      return NextResponse.json({ message: 'Signed out successfully' });
    } else {
      throw new Error('Invalid action');
    }
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
} 