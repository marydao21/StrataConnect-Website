import { createClient } from '@supabase/supabase-js';
import { parse } from 'cookie';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(req) {
  try {
    // Parse cookies from the request
    const cookies = parse(req.headers.get('cookie') || '');
    const userId = cookies.user_id;
    const userEmail = cookies.user_email;

    // If no user ID or email in cookies, user is not authenticated
    if (!userId || !userEmail) {
      return new Response(JSON.stringify({ 
        authenticated: false 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify user exists in Owners_Login table
    const { data: user, error } = await supabaseAdmin
      .from('Owners_Login')
      .select('id, email, is_active')
      .eq('id', userId)
      .eq('email', userEmail)
      .single();

    if (error || !user || !user.is_active) {
      return new Response(JSON.stringify({ 
        authenticated: false 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // User is authenticated
    return new Response(JSON.stringify({ 
      authenticated: true,
      userId: user.id,
      userEmail: user.email
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('Auth check error:', err);
    return new Response(JSON.stringify({ 
      authenticated: false,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 