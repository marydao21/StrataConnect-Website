'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OwnersLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/login-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });      

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Login failed');
      }

      if (result.success) {
        localStorage.setItem('userId', result.userId);
        router.push(result.redirect);
      } else if (result.redirect) {
        router.push(result.redirect);
      }
    } catch (err) {
      setError(err.message);
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
            <Link href="/owners-login"><button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition font-bold">OWNERS LOGIN</button></Link>
            <Link href="/payment"><button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition font-bold">PAY MY LEVIES</button></Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto pt-40 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">StrataConnect Owner Login</h2>
        <p className="text-lg mb-8">Welcome back. Manage your property with ease.</p>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow space-y-6">
          <div>
            <label className="block mb-2 text-left font-semibold">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="p-3 border rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-left font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="p-3 border rounded w-full pr-10"
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
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button type="submit" disabled={loading} className="w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition">
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <div className="mt-10 text-left text-sm text-gray-800">
          <h3 className="text-base font-bold mb-4">💡 New to StrataConnect?</h3>
          <div className="space-y-4">
            <div>
              <p className="mb-2">Don't have an account?</p>
              <Link href="/signup"><button className="w-full bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 transition">Sign Up</button></Link>
            </div>
            <div>
              <p className="mb-2">Are you a contractor or service provider?</p>
              <Link href="/service-provider-signup"><button className="w-full bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 transition">Sign up as a Service Provider</button></Link>
            </div>
            <p className="pt-4">Need help? Contact <a href="mailto:info@strataconnect.com.au" className="text-green-700 font-semibold hover:underline">info@strataconnect.com.au</a></p>
          </div>
        </div>
      </main>
    </div>
  );
}
