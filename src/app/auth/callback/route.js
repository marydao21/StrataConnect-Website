// Import necessary dependencies
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Handle authentication callback from OAuth providers and magic links
export async function GET(request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      // Initialize Supabase client with cookies
      const cookieStore = await cookies()
      const supabase = createRouteHandlerClient({ 
        cookies: () => cookieStore 
      })
      
      // Exchange the authorization code for a session
      const { data: { session } } = await supabase.auth.exchangeCodeForSession(code)
      
      // If the user logged in with Google, get their profile picture
      if (session?.user?.app_metadata?.provider === 'google') {
        const { data: { user } } = await supabase.auth.getUser()
        
        // Get the user's profile picture from Google
        const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture

        if (avatarUrl) {
          // Update the user's profile in your database with the avatar URL
          const { error: updateError } = await supabase
            .from('profiles')
            .upsert({
              id: user.id,
              avatar_url: avatarUrl,
              updated_at: new Date().toISOString(),
            })

          if (updateError) {
            console.error('Error updating profile:', updateError)
          }
        }
      }
      
      // Redirect to the dashboard after successful authentication
      return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
    }
  } catch (error) {
    console.error('Auth callback error:', error)
  }

  // If no code is present or there was an error, redirect to login
  return NextResponse.redirect(new URL('/owners-login', request.url))
} 