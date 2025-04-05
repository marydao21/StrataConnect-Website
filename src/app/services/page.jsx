import Image from 'next/image';
import Link from 'next/link';
import { Home, Building2, Wallet, FileText } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white text-green-900 relative min-h-screen">
      {/* Navigation Bar */}
      <header className="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg z-50">
        <span className="text-white text-3xl font-bold tracking-wide">
          StrataConnect
        </span>
        <div className="flex items-center space-x-12">
          <nav className="flex space-x-8 text-white text-lg font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
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

      {/* Hero Section with Background Image and SERVICES label */}
      <div className="relative w-full h-[500px] pt-20 overflow-hidden">
        <Image
          src="/images/picture4.avif"
          alt="Strata Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        {/* SERVICES Label Box */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-green-700 px-6 py-2 rounded shadow-lg z-10">
          <h2 className="text-white text-xl font-bold uppercase">Services</h2>
        </div>
      </div>

      {/* Our Approach Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-lg italic text-green-800 font-semibold mb-6">
          Expert Strata Services for Every Stage
        </p>
        <p className="text-lg text-black">
          StrataConnect supports owners, developers, and communities with a commitment to transparency, efficiency, and innovation. From development planning and scheme establishment to seamless day-to-day management and forward-thinking solutions, we partner with you at every stage of the strata lifecycle.
        </p>
      </section>

      {/* Services Breakdown */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center">
          <div className="flex justify-center mb-4">
            <Home className="w-10 h-10 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-800 uppercase">Owners</h3>
          <ul className="list-disc pl-5 text-left text-black space-y-1">
            <li>Personalized management tailored to each property</li>
            <li>Transparency, community harmony, and asset value</li>
            <li>Access levy, maintenance, meetings, insurance via portal</li>
            <li>Supportive communication via email, phone, portal</li>
            <li>Help for both investors and owner-occupiers</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="w-10 h-10 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-800 uppercase">Developers</h3>
          <ul className="list-disc pl-5 text-left text-black space-y-1">
            <li>Advice on strata scheme setup and structure</li>
            <li>Registering plans and creating custom by-laws</li>
            <li>Budgeting and striking levies during Initial Period</li>
            <li>Strata insurance coordination</li>
            <li>Creating strata roll and financial record keeping</li>
            <li>Organizing inaugural meetings</li>
            <li>Issuing disclosure documents for buyers</li>
            <li>Managing fit-out and damage bonds</li>
            <li>Builder defect resolution during warranty</li>
            <li>Handover process and First AGM coordination</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center">
          <div className="flex justify-center mb-4">
            <Wallet className="w-10 h-10 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-800 uppercase">Financial Management</h3>
          <ul className="list-disc pl-5 text-left text-black space-y-1">
            <li>Budgeting & Planning: transparent, fair levies</li>
            <li>Accounting: real-time reporting via portal</li>
            <li>Levy Management: flexible payment options</li>
            <li>Arrears Control: proactive and professional</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center">
          <div className="flex justify-center mb-4">
            <FileText className="w-10 h-10 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-800 uppercase">Administration Management</h3>
          <ul className="list-disc pl-5 text-left text-black space-y-1">
            <li>Records & Documentation: fully digitized access</li>
            <li>Insurance Handling: quotes, renewals, claims</li>
            <li>Meeting Coordination: agendas, notices, minutes</li>
            <li>Essential Services: fire safety and compliance</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to simplify your strata management?</h2>
        <p className="mb-4">Talk to our team today and discover tailored solutions that fit your property needs.</p>
        <Link href="/contact">
          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
