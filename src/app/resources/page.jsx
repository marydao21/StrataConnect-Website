import Link from 'next/link';
import Image from 'next/image';

export default function ResourcesPage() {
  const cards = [
    {
      title: '🔐 My Portal',
      description: [
        'View and download levy notices',
        'Access financial statements and meeting minutes',
        'Track maintenance requests',
        'Update your contact details',
        'Receive important notices electronically',
      ],
      button: 'Login Now',
    },
    {
      title: '🧾 Manage Your Property Details',
      description: [
        'Change Contact Information',
        'Go Paperless – Choose email delivery for all notices',
        'Pay My Levies – BPAY, EFT, credit card options',
      ],
      button: 'Update Info',
    },
    {
      title: '📥 Submit a Request or Application',
      description: [
        'Pet Application Form – Request pet approval',
        'Renovation Request – Apply for renovation consent',
        'Keys & Remotes Request – Replacement or new access devices',
        'Maintenance Request Form – Log an issue in your building',
      ],
      button: 'Submit Request',
    },
    {
      title: '🗳️ Proxy Appointment Forms',
      description: [
        'Strata Title – General Meeting',
        'Strata Committee Proxy Form',
        'Company Title Proxy Form',
        'Community Association Proxy Form',
      ],
      button: 'Download Form',
    },
    {
      title: '📑 Legal & Property Documents',
      description: [
        'Request Section 184 Certificate – For sales and conveyancing',
        'Request Section 174 Certificate – For community associations',
        'Book a Strata Search – Arrange document access and review',
      ],
      button: 'Access Docs',
    },
    {
      title: '🗂️ Useful Downloads & Information',
      description: [
        'Download StrataConnect Brochure',
        'View Legislation & Key Links',
        'Electronic Voting – Cast your vote online',
      ],
      button: 'Download',
    },
  ];

  const actions = [
    {
      icon: '/icons/quote.svg',
      title: 'Request a Quote',
      subtitle: 'Get started today',
    },
    {
      icon: '/icons/call.svg',
      title: 'Book a Discovery Call',
      subtitle: 'Book a call with us',
    },
    {
      icon: '/icons/health.svg',
      title: 'Healthcheck',
      subtitle: 'Take the StrataConnect healthcheck',
    },
  ];

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
          alt="Resources Hero"
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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-2">Simplifying strata for owners, residents, and committees</h2>
        <p className="text-lg text-black text-center mb-10">\          Everything you need to manage your strata property with ease.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-green-800 mb-4">{section.title}</h4>
              <ul className="list-disc pl-5 space-y-2 text-black">
                {section.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
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

      {/* Horizontal Feature Highlights */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">
          {actions.map((item, idx) => (
            <div key={idx}>
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="mx-auto mb-2"
                />
              )}
              <h4 className="font-bold text-lg text-black">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
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
