import Image from 'next/image';
import Link from 'next/link';
import { ClipboardList, PhoneCall, HeartPulse } from 'lucide-react';

export default function ResourcesPage() {
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
          src="/images/resources-background.webp"
          alt="Resources Page Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 pl-0 pr-10 py-6 rounded-r-xl shadow-lg z-10">
          <h2 className="text-white text-3xl font-bold uppercase ml-6">Client Resources</h2>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Everything you need to manage your strata property with ease</h2>
        <p className="text-lg text-black mb-10">
          Whether you're an owner, tenant, committee member or prospective buyer, this is your central hub for access, requests, and support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[{
            title: '🔐 My Portal',
            actions: ['View levy notices & pay online', 'Access financial statements and meeting minutes', 'Track maintenance requests', 'Update your contact details', 'Receive important notices electronically'],
            button: 'Login Now'
          }, {
            title: '🧾 Manage Your Property Details',
            actions: ['Change Contact Information', 'Go Paperless — Email delivery for all notices', 'Pay My Levies — BPAY, EFT, card'],
            button: 'Update Info'
          }, {
            title: '📥 Submit a Request or Application',
            actions: ['Pet Application — Request pet approval', 'Renovation Request — Apply for renovation consent', 'Keys & Remotes — Replacement or new', 'Maintenance Request — Report an issue'],
            button: 'Submit Request'
          }, {
            title: '🗳️ Proxy Appointment Forms',
            actions: ['Strata Title – General Meeting', 'Strata Committee Proxy Form', 'Company Title Proxy Form', 'Community Association Proxy Form'],
            button: 'Download Form'
          }, {
            title: '📑 Legal & Property Documents',
            actions: ['Request Section 184 Certificate', 'Request Section 174 Certificate', 'Book a Strata Search'],
            button: 'Request Docs'
          }, {
            title: '🗂️ Useful Downloads & Information',
            actions: ['Download Brochure', 'View Legislation & Key Links', 'Electronic Voting'],
            button: 'Explore'
          }, {
            title: (
              <div className="flex flex-col items-center">
                <ClipboardList className="w-10 h-10 text-green-700 mb-2" />
                <span className="text-green-800 font-bold">Request a Quote</span>
              </div>
            ),
            actions: ['Get started today'],
            button: 'Get a Quote'
          }, {
            title: (
              <div className="flex flex-col items-center">
                <PhoneCall className="w-10 h-10 text-green-700 mb-2" />
                <span className="text-green-800 font-bold">Book a Discovery Call</span>
              </div>
            ),
            actions: ['Book a call with us'],
            button: 'Book Now'
          }, {
            title: (
              <div className="flex flex-col items-center">
                <HeartPulse className="w-10 h-10 text-green-700 mb-2" />
                <span className="text-green-800 font-bold">Health Check</span>
              </div>
            ),
            actions: ['Take the Strata Health Check'],
            button: 'Get Started'
          }].map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col h-full text-center">
              <div className="mb-4 text-xl font-bold text-green-800">{section.title}</div>
              <div className="flex-1">
                <ul className="list-disc pl-5 space-y-2 text-black text-left">
                  {section.actions.map((action, i) => <li key={i}>{action}</li>)}
                </ul>
              </div>
              {section.button && (
                <div className="mt-6 flex justify-center">
                  <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                    {section.button}
                  </button>
                </div>
              )}
            </div>
          ))}
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
