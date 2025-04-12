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

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">📞 Contact Us</h2>
          <p className="text-lg mb-2">We’re here to help.</p>
          <p className="text-lg text-black">
            Have a question about our services or need support with your strata scheme? The StrataConnect team is just a message away. Reach out to us via email or leave your details below, and we’ll be in touch shortly.
          </p>
        </section>

        {/* Enquiry Form */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-green-800 mb-4">📋 Enquiry Form</h3>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="First Name" required className="flex-1 p-3 rounded border border-gray-300" />
              <input type="text" placeholder="Last Name" required className="flex-1 p-3 rounded border border-gray-300" />
            </div>
            <input type="email" placeholder="Enter your email address" required className="w-full p-3 rounded border border-gray-300" />
            <input type="text" placeholder="Enter your contact number (optional)" className="w-full p-3 rounded border border-gray-300" />
            <textarea placeholder="Your enquiry, request or message..." required className="w-full p-3 h-32 rounded border border-gray-300"></textarea>
            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
              Submit
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="text-left text-black space-y-6">
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">📬 General Enquiries</h3>
            <p>Email: info@strataconnect.com.au</p>
            <p>Phone: 1300 123 456</p>
            <p>Fax: 02 9000 1111</p>
            <p>Business Hours: Monday to Friday, 9:00 AM – 5:30 PM</p>
            <p>ABN: 12 345 678 910</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">🚨 After-Hours Emergency</h3>
            <p>Emergency Line: 02 9000 2222</p>
            <p className="text-sm italic">(Please note this line is for critical building emergencies only.)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">📮 Postal Address</h3>
            <p>StrataConnect Pty Ltd</p>
            <p>PO Box 1234, Sydney NSW 2000</p>
          </div>
        </section>
      </main>
    </div>
  );
}
