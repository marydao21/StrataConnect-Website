"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function ResourcesPage() {
  const sections = [
    {
      title: 'My Portal',
      icon: '🔐',
      actions: [
        'View and download levy notices',
        'Access financial statements and meeting minutes',
        'Track maintenance requests',
        'Update your contact details',
        'Receive important notices electronically'
      ],
      button: 'Login Now'
    },
    {
      title: 'Manage Your Property Details',
      icon: '🧾',
      actions: [
        'Change Contact Information',
        'Go Paperless – Choose email delivery for all notices',
        'Pay My Levies – BPAY, EFT, credit card options'
      ]
    },
    {
      title: 'Submit a Request or Application',
      icon: '📥',
      actions: [
        'Pet Application Form – Request pet approval',
        'Renovation Request – Apply for renovation consent',
        'Keys & Remotes Request – Replacement or new access devices',
        'Maintenance Request Form – Log an issue in your building'
      ]
    },
    {
      title: 'Proxy Appointment Forms',
      icon: '🗳️',
      actions: [
        'Strata Title – General Meeting',
        'Strata Committee Proxy Form',
        'Company Title Proxy Form',
        'Community Association Proxy Form'
      ],
      note: 'Each form includes submission instructions and key deadlines.'
    },
    {
      title: 'Legal & Property Documents',
      icon: '📁',
      actions: [
        'Request Section 184 Certificate – For sales and conveyancing',
        'Request Section 174 Certificate – For community associations',
        'Book a Strata Search – Arrange document access and review'
      ]
    },
    {
      title: 'Useful Downloads & Information',
      icon: '🗂️',
      actions: [
        'Download StrataConnect Brochure',
        'View Legislation & Key Links',
        'Electronic Voting'
      ]
    },
    {
      title: 'Health Check for Your Building',
      icon: '✅',
      actions: [
        'Take the Strata Health Check and see how StrataConnect can help.'
      ],
      button: 'Get Started'
    },
    {
      title: 'Thinking About Switching?',
      icon: '🔁',
      actions: [
        'StrataConnect will review your building and provide a proactive, smooth transition—no guesswork required.'
      ],
      buttons: ['Request a Quote', 'Book a Call', 'Contact Us']
    }
  ];

  return (
    <div className="bg-white text-green-900 relative min-h-screen">
      <header className="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg z-50">
        <span className="text-white text-2xl font-bold tracking-wide">StrataConnect</span>
        <nav className="flex items-center space-x-8 text-white text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative w-full h-[500px] pt-20 overflow-hidden">
        <Image
          src="/images/about-hero.avif"
          alt="Resources Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 pr-10 py-6 rounded-r-xl shadow-lg z-10">
          <h2 className="text-white text-3xl font-bold uppercase ml-6">Client Resources</h2>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Everything you need to manage your strata property with ease</h2>
        <p className="text-lg text-black mb-10">
          Whether you're an owner, tenant, committee member or prospective buyer, this is your central hub for access, requests, and support.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-green-800 mb-2">{sec.icon} {sec.title}</h4>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  {sec.actions.map((act, i) => <li key={i}>{act}</li>)}
                </ul>
                {sec.note && <p className="text-sm text-gray-600 mt-2">{sec.note}</p>}
              </div>
              {sec.button && <button className="mt-4 mx-auto bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">{sec.button}</button>}
              {sec.buttons && (
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {sec.buttons.map((btn, i) => (
                    <button key={i} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">{btn}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
