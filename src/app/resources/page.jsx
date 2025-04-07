import Image from 'next/image';
import Link from 'next/link';

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
          src="/images/about-hero.avif"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[{
            title: '🔐 My Portal',
            actions: ['View and download levy notices', 'Access financial statements and meeting minutes', 'Track maintenance requests', 'Update your contact details', 'Receive important notices electronically'],
            button: 'Login Now'
          }, {
            title: '🧾 Manage Your Property Details',
            actions: ['Change Contact Information', 'Go Paperless – Choose email delivery for all notices', 'Pay My Levies – BPAY, EFT, credit card options']
          }, {
            title: '📥 Submit a Request or Application',
            actions: ['Pet Application Form – Request pet approval', 'Renovation Request – Apply for renovation consent', 'Keys & Remotes Request – Replacement or new access devices', 'Maintenance Request Form – Log an issue in your building']
          }, {
            title: '🗳️ Proxy Appointment Forms',
            actions: ['Strata Title – General Meeting', 'Strata Committee Proxy Form', 'Company Title Proxy Form', 'Community Association Proxy Form']
          }, {
            title: '📑 Legal & Property Documents',
            actions: ['Request Section 184 Certificate – For sales and conveyancing', 'Request Section 174 Certificate – For community associations', 'Book a Strata Search – Arrange document access and review']
          }, {
            title: '🗂️ Useful Downloads & Information',
            actions: ['Download StrataConnect Brochure', 'View Legislation & Key Links', 'Electronic Voting']
          }, {
            title: '✅ Health Check for Your Building',
            actions: ['Take the Strata Health Check and see how StrataConnect can help.']
          }, {
            title: '🔁 Thinking About Switching?',
            actions: ['StrataConnect takes time to understand your building’s needs and conducts a full review for proactive transition.']
          }].map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-green-800 mb-4">{section.title}</h4>
              <ul className="list-disc pl-5 space-y-2 text-black">
                {section.actions.map((action, i) => <li key={i}>{action}</li>)}
              </ul>
              {section.button && (
                <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  {section.button}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Need help or can’t find what you’re looking for?</h2>
        <Link href="/contact">
          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}