import Image from 'next/image';
import Link from 'next/link';
import './page.css';

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
      <div className="hero-section pt-20">
        <Image
          src="/images/about-hero.avif"
          alt="Resources Page Hero"
          layout="fill"
          objectFit="cover"
          className="hero-image"
          priority
        />
        <div className="hero-label">
          <h2>Client Resources</h2>
        </div>
      </div>

      {/* Main Content */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Simplifying strata for owners, residents, and committees</h2>
        <p className="text-lg text-black mb-10">
          Welcome to your one-stop hub for forms, updates, and essential services.
        </p>

        <div className="card-grid">
          {[{
            title: '🔐 My Portal',
            actions: ['View levy notices & pay online', 'Access meeting minutes & financials', 'Update your contact details'],
            button: 'Login to Portal'
          }, {
            title: '🧾 Payments & Contact Updates',
            actions: ['Pay My Levies — BPAY, card, or EFT', 'Update My Contact Details', 'Go Paperless — Receive documents digitally']
          }, {
            title: '🐾 Requests & Approvals',
            actions: ['Pet Application — Apply online', 'Renovation Request — Submit your plans', 'Keys & Remotes — Order replacements']
          }, {
            title: '🗳️ Proxy Appointment Forms',
            actions: ['General Meeting (Strata Title)', 'Strata Committee Meeting', 'Company Title Meeting', 'Community Association Meeting'],
            button: 'Download Form'
          }, {
            title: '🧰 Maintenance & Search Requests',
            actions: ['Submit a Work Request', 'Book a Strata Search', 'Request a Section 184 Certificate', 'Request a Section 174 Certificate']
          }, {
            title: '📞 Book a Call or Request a Quote',
            actions: ['Book a Discovery Call — Speak to our team', 'Request a Management Quote', 'Download Brochure']
          }, {
            title: '📋 Extras & Resources',
            actions: ['Legislation & Helpful Links', 'Electronic Voting — Cast your vote online', 'Take a Health Check']
          }, {
            title: '💬 Thinking of Making the Switch?',
            actions: ['StrataConnect offers a full assessment to ensure a proactive transition. No wait-and-see here!']
          }].map((section, index) => (
            <div key={index} className="card">
              <h4>{section.title}</h4>
              <ul>
                {section.actions.map((action, i) => <li key={i}>{action}</li>)}
              </ul>
              {section.button && (
                <button>{section.button}</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to simplify your strata management?</h2>
        <p>Talk to our team today and discover tailored solutions that fit your property needs.</p>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </div>
  );
}
