import Link from 'next/link';

export default function OwnersLoginPage() {
  return (
    <div className="bg-white text-green-900 relative min-h-screen">
      {/* Navigation Bar */}
      <header className="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg z-50">
        <span className="text-white text-2xl font-bold tracking-wide">
          StrataConnect
        </span>
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
        <h2 className="text-2xl font-bold text-green-800 mb-4">🔐 StrataConnect Owner Login</h2>
        <p className="text-lg mb-8">Welcome back. Manage your property with ease.</p>

        {/* Login Form */}
        <form className="bg-gray-50 p-8 rounded-lg shadow space-y-6">
          <div>
            <label className="block mb-2 text-left font-semibold">Email Address</label>
            <input type="email" placeholder="Enter your email" className="p-3 border rounded w-full" />
          </div>
          <div>
            <label className="block mb-2 text-left font-semibold">Password</label>
            <input type="password" placeholder="Enter your password" className="p-3 border rounded w-full" />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-700">
            <label>
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href="#" className="text-green-700 hover:underline">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition">
            Login
          </button>
        </form>

        {/* Help Section */}
        <div className="mt-10 text-left text-sm text-gray-800">
          <h3 className="text-base font-bold mb-2">💡 New to StrataConnect?</h3>
          <ul className="space-y-3">
            <li>
              If you're a contractor or service provider:{' '}
              <Link href="#" className="text-green-700 font-semibold hover:underline">Sign up as a Service Provider</Link>
            </li>
            <li>
              Don't have an account?
              <div className="mt-2">
                <Link href="/signup">
                  <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 font-bold transition">
                    Sign Up
                  </button>
                </Link>
              </div>
            </li>
            <li>
              Need help accessing your portal? Contact us at{' '}
              <a href="mailto:info@strataconnect.com.au" className="text-green-700 font-semibold hover:underline">
                info@strataconnect.com.au
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
