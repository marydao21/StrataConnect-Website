import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const supabaseAnon = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { email } = await req.json();
    const trimmedEmail = email.trim().toLowerCase();

    // 1. Check if email exists in Owners_Login
    const { data: user, error: ownersError } = await supabaseAdmin
      .from('Owners_Login')
      .select('id')
      .eq('email', trimmedEmail)
      .single();

    if (ownersError || !user) {
      return NextResponse.json({
        success: false,
        message: 'No account found with this email. Please sign up to create an account.'
      }, { status: 404 });
    }

    // 2. Check if email exists in Supabase Auth
    let authUser = null;
    let authError = null;

    if (typeof supabaseAdmin.auth.admin.getUserByEmail === 'function') {
      // Newer SDKs
      const { data, error } = await supabaseAdmin.auth.admin.getUserByEmail(trimmedEmail);
      authUser = data?.user;
      authError = error;
    } else {
      // Older SDKs
      const { data, error } = await supabaseAdmin.auth.admin.listUsers({ email: trimmedEmail });
      authUser = data?.users?.[0];
      authError = error;
    }

    if (authError || !authUser) {
      return NextResponse.json({
        success: false,
        message: 'No account found with this email. Please sign up to create an account.'
      }, { status: 404 });
    }

    // 3. If found in both, send password reset email using anon client
    // Fallback to request origin if NEXT_PUBLIC_WEBSITE_URL is not set
    let redirectBase = process.env.NEXT_PUBLIC_WEBSITE_URL;
    if (!redirectBase) {
      try {
        const url = new URL(req.url);
        redirectBase = url.origin;
      } catch {
        redirectBase = 'http://localhost:3000';
      }
    }
    const redirectTo = `${redirectBase}/reset-password`;

    const { error: resetError } = await supabaseAnon.auth.resetPasswordForEmail(trimmedEmail, {
      redirectTo,
    });
    if (resetError) {
      return NextResponse.json({
        success: false,
        message: 'Failed to send reset email. Please try again later.'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Password reset email sent! Please check your inbox.'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again.'
    }, { status: 500 });
  }
} 