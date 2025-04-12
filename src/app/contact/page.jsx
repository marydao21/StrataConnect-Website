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
      <div className="relative w-full h-[500px] pt-20 overflow-hidden">
        <Image
          src="/images/contact-background.png"
          alt="Contact Page Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 pl-0 pr-10 py-6 rounded-r-xl shadow-lg z-10">
          <h2 className="text-white text-3xl font-bold uppercase ml-6">Contact Us</h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">📞 Contact Us</h2>
        <p className="text-lg text-black mb-10">
          We’re here to help.<br />
          Have a question about our services or need support with your strata scheme? The StrataConnect team is just a message away. Reach out to us via email or leave your details below, and we’ll be in touch shortly.
        </p>

        {/* Enquiry Form Heading */}
        <h3 className="text-2xl font-bold text-green-800 mb-6">📋 Enquiry Form</h3>

        {/* Enquiry Form */}
        <form 
          method="POST" 
          action="/api/contact-form" 
          className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="firstName" type="text" placeholder="First Name" required className="p-3 border rounded w-full" />
            <input name="lastName" type="text" placeholder="Last Name" required className="p-3 border rounded w-full" />
          </div>
          <input name="email" type="email" placeholder="Email Address" required className="p-3 border rounded w-full" />
          <input name="phone" type="tel" placeholder="Phone Number (optional)" className="p-3 border rounded w-full" />
          <textarea name="message" placeholder="Your enquiry, request or message..." required rows="5" className="p-3 border rounded w-full"></textarea>
          <div className="flex justify-center">
            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-bold hover:bg-green-800 transition">
              Submit
            </button>
          </div>
        </form>

        {/* Contact Details */}
        <section className="text-left mt-16 space-y-6 text-lg text-black">
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
            <p className="italic">(Please note this line is for critical building emergencies only.)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">🏢 Office Location</h3>
            <p>StrataConnect Pty Ltd</p>
            <p>123 Pitt Street, Sydney NSW 2000</p>
          </div>
        </section>
      </main>
    </div>
  );
}