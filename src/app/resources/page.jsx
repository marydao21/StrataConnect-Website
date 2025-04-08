import Image from 'next/image';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'My Portal',
      description: [
        'View and download levy notices',
        'Access financial statements and meeting minutes',
        'Track maintenance requests',
        'Update your contact details',
        'Receive important notices electronically',
      ],
      buttonText: 'Login Now',
    },
    {
      title: 'Manage Your Property Details',
      description: [
        'Change Contact Information',
        'Go Paperless – Email delivery for notices',
        'Pay My Levies – BPAY, EFT, credit card',
      ],
      buttonText: 'Manage Info',
    },
    {
      title: 'Submit a Request or Application',
      description: [
        'Pet Application Form – Request pet approval',
        'Renovation Request – Apply for renovation consent',
        'Keys & Remotes Request – Order access devices',
        'Maintenance Request Form – Report an issue',
      ],
      buttonText: 'Submit Request',
    },
    {
      title: 'Proxy Appointment Forms',
      description: [
        'Strata Title – General Meeting',
        'Strata Committee Proxy Form',
        'Company Title Proxy Form',
        'Community Association Proxy Form',
      ],
      buttonText: 'Download Form',
    },
    {
      title: 'Legal & Property Documents',
      description: [
        'Request Section 184 Certificate – Sales use',
        'Request Section 174 Certificate – Community use',
        'Book a Strata Search – Document review',
      ],
      buttonText: 'Get Document',
    },
    {
      title: 'Useful Downloads & Information',
      description: [
        'Download StrataConnect Brochure',
        'View Legislation & Key Links',
        'Electronic Voting – Submit vote online',
      ],
      buttonText: 'View Resources',
    },
    {
      title: 'Health Check for Your Building',
      description: [
        'Take the Strata Health Check to assess your setup and see how we can help.',
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Thinking About Switching?',
      description: [
        'StrataConnect offers full review & support for a smooth transition.',
      ],
      buttonText: 'Request a Quote',
    },
  ];

  return (
    <div className="bg-white text-green-900 min-h-screen">
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

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">
          Everything you need to manage your strata property with ease
        </h2>
        <p className="text-lg text-black mb-10">
          Whether you're an owner, tenant, committee member or prospective buyer, this is your central hub for access, requests, and support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {resources.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md text-left flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-green-800 mb-4 text-center">{section.title}</h4>
                <ul className="list-disc list-inside space-y-2 text-black">
                  {section.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-6">
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  {section.buttonText}
                </button>
              </div>
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
