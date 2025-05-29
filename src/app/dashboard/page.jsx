'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        router.push('/owners-login');
      }
    };

    getUser();
  }, [router, supabase]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg border border-green-300">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-green-800">
            Successfully Logged In!
          </h2>
          <div className="mt-4 text-left space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {user.user_metadata?.name && (
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {user.user_metadata.name}
              </p>
            )}
            {user.user_metadata?.avatar_url && (
              <div className="flex items-center justify-center">
                <img 
                  src={user.user_metadata.avatar_url} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full"
                />
              </div>
            )}
          </div>
          <button
            onClick={() => router.push('/')}
            className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
} 