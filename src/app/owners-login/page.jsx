'use client';

// Import necessary dependencies for React, routing, and Supabase
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// State management for form handling and UI feedback
export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [magicLinkEmail, setMagicLinkEmail] = useState('');
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient(); // Initialize Supabase client for authentication

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check', {  // Call our custom API endpoint to verify authentication status
          method: 'GET',
          credentials: 'include',
        });
        
        // We don't redirect anymore, just show the login form
        if (response.ok) {
          console.log('User is authenticated');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
      }
    };

    checkAuth();
  }, [router]);

  // Handle regular email/password login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setLoading(true); // Show loading state

    try {
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');

      const response = await fetch('/api/login-form', { // Call our custom login API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Login failed');
      }

      if (result.success) {
        // Store user info in localStorage for client-side access
        if (result.userId && result.userEmail) {
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('userEmail', result.userEmail);
        }
        // Redirect to login success page after successful login
        router.push('/login-success');
      } else if (result.redirect) {
        router.push(result.redirect);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        },
      });

      if (error) {
        throw error;
      }
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  // Handle magic link (passwordless) sign-in
  const handleMagicLinkSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({ // Use Supabase's OTP (One-Time Password) functionality
        email: magicLinkEmail,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      setMagicLinkSent(true);
      setMagicLinkEmail('');
    } catch (err) {
      setError(err.message || 'Failed to send magic link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-green-900 relative min-h-screen">
      <header className="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg z-50">
        <span className="text-white text-2xl font-bold tracking-wide">StrataConnect</span>
        <div className="flex items-center space-x-12">
          <nav className="flex space-x-8 text-white text-lg font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="/owners-login">
              <button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition font-bold">
                OWNERS LOGIN
              </button>
            </Link>
            <Link href="/payment">
              <button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition font-bold">
                PAY MY LEVIES
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto pt-40 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Welcome Back</h2>
        <p className="text-lg mb-8">Sign in to your StrataConnect account.</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {magicLinkSent && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Magic Link Sent! </strong>
            <span className="block sm:inline">Please check your email for the login link.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow space-y-6">
          <input 
            name="email" 
            type="email" 
            placeholder="Email Address" 
            required 
            className="p-3 border rounded w-full" 
            autoComplete="email"
          />
          
          <div className="relative">
            <input 
              name="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              required 
              className="p-3 border rounded w-full" 
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Link href="/forgot-password" className="text-sm text-green-700 hover:text-green-800">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className={`w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-100 transition"
              style={{ boxShadow: '0 1px 2px rgba(60,64,67,.08)' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_13183_10121)">
                  <path d="M19.805 10.2305C19.805 9.55078 19.7484 8.86719 19.6266 8.19922H10.2V12.0492H15.605C15.38 13.2695 14.6416 14.3301 13.6016 15.0117V17.0898H16.6016C18.3672 15.4805 19.805 13.1699 19.805 10.2305Z" fill="#4285F4"/>
                  <path d="M10.2 20C12.6992 20 14.7891 19.1699 16.6016 17.0898L13.6016 15.0117C12.6016 15.6914 11.4004 16.0801 10.2 16.0801C7.78906 16.0801 5.73633 14.4199 4.96484 12.1699H1.86328V14.3184C3.66797 17.5293 6.76172 20 10.2 20Z" fill="#34A853"/>
                  <path d="M4.96484 12.1699C4.76562 11.5898 4.6543 10.9707 4.6543 10.3301C4.6543 9.68945 4.76562 9.07031 4.96484 8.49023V6.3418H1.86328C1.31445 7.48047 1 8.7793 1 10.3301C1 11.8809 1.31445 13.1797 1.86328 14.3184L4.96484 12.1699Z" fill="#FBBC05"/>
                  <path d="M10.2 4.58008C11.5273 4.58008 12.7363 5.03906 13.6914 5.94922L16.6719 3.00977C14.7891 1.16992 12.6992 0 10.2 0C6.76172 0 3.66797 2.4707 1.86328 5.68164L4.96484 7.83008C5.73633 5.58008 7.78906 4.58008 10.2 4.58008Z" fill="#EA4335"/>
                </g>
                <defs>
                  <clipPath id="clip0_13183_10121">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in with Google</span>
            </button>

            <Link href="/magic-link">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-100 transition"
                style={{ boxShadow: '0 1px 2px rgba(60,64,67,.08)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Sign in with Magic Link</span>
              </button>
            </Link>
          </div>
        </form>

        <div className="mt-10 text-left text-sm text-gray-800">
          <p className="mb-4">Don't have an account?</p>
          <Link href="/signup">
            <button className="w-full bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 transition">
              Create Account
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
