'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if we have a recovery token in the URL
    const hash = window.location.hash;
    if (hash && hash.includes('type=recovery')) {
      // Redirect to reset-password with the hash
      router.replace(`/reset-password${hash}`);
    } else {
      // If no recovery token, redirect to login
      router.replace('/owners-login');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
} 