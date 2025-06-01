import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const trimmedEmail = body?.email?.trim().toLowerCase();

    if (!trimmedEmail) {
      return NextResponse.json({
        success: false,
        message: 'Email is required'
      }, { status: 400 });
    }

    // Check Owners_Login table first
    const { data: loginData, error: loginError } = await supabaseAdmin
      .from('Owners_Login')
      .select('id, email')
      .eq('email', trimmedEmail)
      .single();

    if (loginError) {
      if (loginError.code === 'PGRST116') {
        // No user found in login table, continue to check signup table
      } else {
        console.error('Login table error:', loginError);
        return NextResponse.json({
          success: false,
          message: 'Error checking user account'
        }, { status: 500 });
      }
    }

    // If user found in login table
    if (loginData) {
      // Send password reset email using Supabase
      const { error: resetError } = await supabaseAdmin.auth.resetPasswordForEmail(trimmedEmail, {
        redirectTo: 'https://strata-connect-green.vercel.app/reset-password',
        options: {
          emailRedirectTo: 'https://strata-connect-green.vercel.app/reset-password'
        }
      });

      if (resetError) {
        console.error('Password reset error:', resetError);
        if (resetError.message.includes('expired') || resetError.message.includes('invalid')) {
          return NextResponse.json({
            success: false,
            message: 'The reset link has expired. Please request a new one.'
          }, { status: 400 });
        }
        return NextResponse.json({
          success: false,
          message: 'Failed to send reset email. Please try again.'
        }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: 'Password reset instructions have been sent to your email. The link will expire in 3 minutes.'
      });
    }

    // If not found in login table, check signup table
    const { data: signupData, error: signupError } = await supabaseAdmin
      .from('Owners_Signup')
      .select('id, email')
      .eq('email', trimmedEmail)
      .single();

    if (signupError) {
      if (signupError.code === 'PGRST116') {
        // No user found in signup table
        return NextResponse.json({
          success: false,
          message: 'No account found with this email address. Please sign up to create an account.'
        }, { status: 404 });
      } else {
        console.error('Signup table error:', signupError);
        return NextResponse.json({
          success: false,
          message: 'Error checking user account'
        }, { status: 500 });
      }
    }

    if (signupData) {
      // Send password reset email using Supabase
      const { error: resetError } = await supabaseAdmin.auth.resetPasswordForEmail(trimmedEmail, {
        redirectTo: 'https://strata-connect-green.vercel.app/reset-password',
        options: {
          emailRedirectTo: 'https://strata-connect-green.vercel.app/reset-password'
        }
      });

      if (resetError) {
        console.error('Password reset error:', resetError);
        if (resetError.message.includes('expired') || resetError.message.includes('invalid')) {
          return NextResponse.json({
            success: false,
            message: 'The reset link has expired. Please request a new one.'
          }, { status: 400 });
        }
        return NextResponse.json({
          success: false,
          message: 'Failed to send reset email. Please try again.'
        }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: 'Password reset instructions have been sent to your email. The link will expire in 3 minutes.'
      });
    }

    // If not found in either table
    return NextResponse.json({
      success: false,
      message: 'No account found with this email address. Please sign up to create an account.'
    }, { status: 404 });

  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    }, { status: 500 });
  }
} 