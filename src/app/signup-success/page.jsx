'use client';

import Link from 'next/link';

export default function SignupSuccess() {
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
            Account Created Successfully!
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Your account has been created. Please log in to manage your property.
          </p>
          <div className="mt-6">
            <Link
              href="/owners-login"
              className="w-full inline-block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
