// Import necessary dependencies
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Handle authentication callback from OAuth providers and magic links
export async function GET(request) {
  // Get the authorization code from the URL
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    // Initialize Supabase client with cookies
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    
    try {
      // Exchange the authorization code for a session
      // This completes the OAuth flow or magic link authentication
      await supabase.auth.exchangeCodeForSession(code)
      
      // Redirect to the dashboard after successful authentication
      return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
    } catch (error) {
      console.error('Auth callback error:', error)
      // Redirect to login page if there's an error
      return NextResponse.redirect(new URL('/owners-login', requestUrl.origin))
    }
  }

  // If no code is present, redirect to login
  return NextResponse.redirect(new URL('/owners-login', requestUrl.origin))
} 