import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { action } = await req.json();

    if (action === 'signin') {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://strata-connect-green.vercel.app/auth/callback',
        },
      });

      if (error) throw error;

      return new Response(JSON.stringify({ 
        success: true,
        url: data.url
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (action === 'signout') {
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;

      return new Response(JSON.stringify({ 
        success: true,
        message: 'Successfully signed out'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    throw new Error('Invalid action');
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 