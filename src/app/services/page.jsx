import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-white text-green-900">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src="/images/strata-hero.jpg"
          alt="Strata Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl font-bold mb-4">
              Expert Strata Services for Every Stage
            </h1>
            <p className="text-white text-lg">
              Supporting owners, developers, and communities with transparency, efficiency, and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
        <p className="text-lg text-gray-700">
          StrataConnect partners with property owners, residents, and developers
          throughout the entire strata lifecycle — from development planning and
          scheme establishment, to efficient day-to-day management and
          future-ready solutions.
        </p>
      </section>

      {/* Services Breakdown */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-green-800">Owners</h3>
          <p>
            Personalized management approach tailored to each property. Our services promote transparency, community harmony, and long-term asset value.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-green-800">Developers</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
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

        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-green-800">Financial Management</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Budgeting & Planning: transparent, fair levies</li>
            <li>Accounting: real-time reporting via portal</li>
            <li>Levy Management: flexible payment options</li>
            <li>Arrears Control: proactive and professional</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-green-800">Administration Management</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Records & Documentation: fully digitized access</li>
            <li>Insurance Handling: quotes, renewals, claims</li>
            <li>Meeting Coordination: agendas, notices, minutes</li>
            <li>Essential Services: fire safety and compliance</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to simplify your strata management?</h2>
        <p className="mb-6">Talk to our team today and discover tailored solutions that fit your property needs.</p>
        <Link href="/contact">
          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
