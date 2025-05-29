import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    
    try {
      // Exchange the code for a session
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