'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function LoginSuccessPage() {
  const params = useSearchParams();
  const name = params.get('name') || 'Owner';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-green-900 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-800">✅ Login Successful</h1>
      <p className="text-lg mb-4">Welcome, {name}!</p>
      <Link href="/">
        <button className="bg-green-700 text-white px-6 py-3 rounded font-bold hover:bg-green-800 transition">
          Go to Your Portal
        </button>
      </Link>
    </div>
  );
}
