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

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">📞 Contact Us</h2>
        <p className="text-lg text-black mb-6">
          Have a question about our services or need support with your strata scheme? The StrataConnect team is just a message away. Reach out to us via email or leave your details below, and we’ll be in touch shortly.
        </p>

        {/* Email Info */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-green-800">📧 Email Us Directly</h3>
          <p className="text-lg text-black">info@strataconnect.com.au</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 text-left max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-semibold">First Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" required />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-semibold">Last Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" required />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded p-2" required />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Phone</label>
            <input type="tel" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea rows="5" className="w-full border border-gray-300 rounded p-2" required placeholder="Your enquiry, request or message..."></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white font-bold px-6 py-3 rounded hover:bg-green-800 transition mx-auto block">
            Submit
          </button>
        </form>

        {/* Office Info */}
        <div className="mt-12 text-left">
          <h3 className="text-xl font-semibold text-green-800 mb-2">🕐 Office Hours</h3>
          <p className="text-black">Monday – Friday: 9:00 AM – 5:30 PM</p>
          <p className="text-black">Closed on weekends and public holidays</p>

          <h3 className="text-xl font-semibold text-green-800 mt-6 mb-2">📍 Office Location</h3>
          <p className="text-black">StrataConnect Pty Ltd</p>
          <p className="text-black">123 Pitt Street, Sydney NSW 2000</p>
        </div>
      </section>
    </div>
  );
}