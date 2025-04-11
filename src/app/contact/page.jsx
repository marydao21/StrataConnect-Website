import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white text-green-900 min-h-screen">
      {/* Navigation Bar */}
      <header className="w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg">
        <span className="text-white text-2xl font-bold tracking-wide">StrataConnect</span>
        <nav className="flex space-x-8 text-white text-lg font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-green-50 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-2">📞 Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Have a question about our services or need support with your strata scheme? The StrataConnect team is just a message away. Reach out to us via email or leave your details below, and we’ll be in touch shortly.
        </p>
      </div>

      {/* Contact Details & Form */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">📧 Email Us Directly</h2>
          <p className="text-green-700 font-semibold">info@strataconnect.com.au</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">First Name *</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name *</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Email *</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Phone (optional)</label>
            <input type="tel" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Message *</label>
            <textarea rows="5" className="w-full border border-gray-300 rounded px-4 py-2" required></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">Submit</button>
          </div>
        </form>

        {/* Office Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2">🕐 Office Hours</h2>
          <p className="text-black mb-4">Monday – Friday: 9:00 AM – 5:30 PM<br />Closed on weekends and public holidays</p>

          <h2 className="text-2xl font-bold mb-2">📍 Office Location</h2>
          <p className="text-black">StrataConnect Pty Ltd<br />123 Example Street, Sydney NSW 2000</p>
        </div>
      </section>
    </div>
  );
}
