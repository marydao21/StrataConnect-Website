'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LogoutPage() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch('/api/logout', {
          method: 'POST',
        });
        
        if (response.ok) {
          setIsLoggingOut(false);
          // Wait 2 seconds before redirecting to show success message
          setTimeout(() => {
            router.push('/');
          }, 2000);
        } else {
          setError('Logout failed. Please try again.');
          setIsLoggingOut(false);
        }
      } catch (error) {
        setError('An error occurred during logout. Please try again.');
        setIsLoggingOut(false);
      }
    };

    handleLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        {isLoggingOut ? (
          <>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Logging out...</h1>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
          </>
        ) : error ? (
          <>
            <h1 className="text-2xl font-semibold text-red-600 mb-4">Error</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link href="/">
              <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
                Return to Home
              </button>
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-green-700 mb-4">Successfully Logged Out</h1>
            <p className="text-gray-600 mb-4">Redirecting to home page...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
          </>
        )}
      </div>
    </div>
  );
} 