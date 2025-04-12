'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function client() {
  const params = useSearchParams();
  const email = params.get('email') || 'your account';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-green-900 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-800">✅ Login Successful</h1>
      <p className="text-lg mb-4">Welcome! You're logged in with <strong>{email}</strong></p>
      <Link href="/">
        <button className="bg-green-700 text-white px-6 py-3 rounded font-bold hover:bg-green-800 transition">
          Go to Your Portal
        </button>
      </Link>
    </div>
  );
}
