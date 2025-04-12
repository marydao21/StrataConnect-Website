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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 pt-36 pb-20 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">🔐 StrataConnect Owner Login</h2>
        <p className="text-lg text-black mb-10">Welcome back. Manage your property with ease.</p>

        {/* Login Form */}
        <form className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6 text-left">
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input type="email" className="p-3 border rounded w-full" placeholder="your@email.com" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input type="password" className="p-3 border rounded w-full" placeholder="••••••••" required />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href="#" className="text-green-700 hover:underline">Restore Password</Link>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition">
            Login
          </button>
        </form>

        {/* Footer Note */}
        <div className="mt-10 text-sm text-black">
          <p className="mb-2">💡 <span className="font-medium">New to StrataConnect?</span></p>
          <p className="mb-2">
            If you're a contractor or service provider: <Link href="#" className="text-green-700 underline">Sign up as a Service Provider</Link>
          </p>
          <p>
            Need help accessing your portal? Contact us at <a href="mailto:info@strataconnect.com.au" className="text-green-700 underline">info@strataconnect.com.au</a>
          </p>
        </div>
      </main>
    </div>
  );
}
