import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
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

      {/* Hero Section */}
      <div className="relative w-full h-[400px] pt-20 overflow-hidden">
        <Image
          src="/images/about-hero.avif"
          alt="Contact Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 pl-0 pr-10 py-6 rounded-r-xl shadow-lg z-10">
          <h2 className="text-white text-3xl font-bold uppercase ml-6">Contact Us</h2>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">📬 General Enquiries</h2>
        <p className="text-lg text-black mb-2">Email: info@strataconnect.com.au</p>
        <p className="text-lg text-black mb-2">Phone: 1300 123 456</p>
        <p className="text-lg text-black mb-2">Fax: 02 9000 1111</p>
        <p className="text-lg text-black mb-2">Business Hours: Monday to Friday, 9:00 AM – 5:30 PM</p>
        <p className="text-lg text-black mb-6">ABN: 12 345 678 910</p>

        <h2 className="text-2xl font-bold text-green-800 mb-4">🚨 After-Hours Emergency</h2>
        <p className="text-lg text-black mb-2">Emergency Line: 02 9000 2222</p>
        <p className="text-sm italic text-gray-700 mb-6">(Please note this line is for critical building emergencies only.)</p>

        <h2 className="text-2xl font-bold text-green-800 mb-4">📮 Postal Address</h2>
        <p className="text-lg text-black mb-2">StrataConnect Pty Ltd</p>
        <p className="text-lg text-black mb-10">PO Box 1234, Sydney NSW 2000</p>

        {/* Enquiry Form */}
        <h3 className="text-2xl font-bold text-green-800 mb-6">📋 Enquiry Form</h3>
        <form className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row gap-4">
            <input className="w-full border rounded p-3" type="text" placeholder="First Name" required />
            <input className="w-full border rounded p-3" type="text" placeholder="Last Name" required />
          </div>
          <input className="w-full border rounded p-3" type="email" placeholder="Enter your email address" required />
          <input className="w-full border rounded p-3" type="tel" placeholder="Enter your contact number (optional)" />
          <textarea className="w-full border rounded p-3" rows="5" placeholder="Your enquiry, request or message..." required></textarea>
          <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
            Submit
          </button>
        </form>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">We’re ready to support your strata needs.</h2>
        <p className="mb-4">Reach out anytime—we’re here to help make your strata journey easier.</p>
        <Link href="/">
          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded hover:bg-gray-100 transition">
            Back to Home
          </button>
        </Link>
      </section>
    </div>
  );
}
