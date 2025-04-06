import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
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
          src="/images/picture4.avif"
          alt="About StrataConnect"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 pl-0 pr-10 py-6 rounded-r-xl shadow-lg z-10">
          <h2 className="text-white text-3xl font-bold uppercase ml-6">About Us</h2>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">StrataConnect – Shaping Smarter Communities</h2>
        <h3 className="text-2xl italic text-green-800 font-medium mb-6">Your Trusted Partner in Strata Management</h3>
        <p className="text-lg text-black mb-6">
          At StrataConnect, we believe that strong communities begin with smart, transparent, and people-focused management. Since our inception, we’ve been on a mission to simplify strata living and ownership through innovative tools, personalized service, and a deep understanding of the unique needs of every building and community we serve.
        </p>
        <p className="text-lg text-black mb-6">
          From boutique apartment blocks to large-scale developments, we bring consistency, clarity, and care to every strata scheme—making life easier for owners, residents, and developers alike.
        </p>
        <p className="text-lg text-black mb-6">
          While our roots are proudly Australian, our approach is forward-thinking and digitally driven. We combine on-the-ground support with smart, cloud-based tools that give stakeholders real-time access to essential strata information, streamline communication, and support proactive decision-making.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold uppercase text-green-800 mb-6">Why Choose StrataConnect?</h3>
        <ul className="list-disc pl-6 text-lg text-black space-y-4">
          <li><strong>Dedicated Local Teams:</strong> We bring hands-on service backed by a national perspective.</li>
          <li><strong>Smart Technology:</strong> Access documents, pay levies, and raise issues—all in one place.</li>
          <li><strong>Transparent Operations:</strong> Real-time insights and clear reporting for all stakeholders.</li>
          <li><strong>Flexible Communication:</strong> We listen and respond quickly—whether online, by phone, or in person.</li>
          <li><strong>Sustainable Growth:</strong> We’re here for the long term, investing in people, innovation, and community wellbeing.</li>
        </ul>
      </section>

      {/* Mission and Vision */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
        <p className="text-lg text-black mb-8">
          To redefine strata living by delivering efficient, transparent, and community-first services—empowered by technology, driven by people.
        </p>
        <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
        <p className="text-lg text-black">
          To become the most trusted and innovative strata management partner in Australia, helping every client stay connected, in control, and confident in their community’s future.
        </p>
      </section>

      {/* Leadership Team */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-10">Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <div>
            <Image src="/images/Alex.png" alt="Alex Nguyen" width={200} height={250} className="rounded-lg object-cover" />
            <h4 className="text-lg font-bold mt-4">Alex Nguyen</h4>
            <p className="text-sm text-gray-800">Managing Director</p>
          </div>
          <div>
            <Image src="/images/Sophie.png" alt="Sophie Blake" width={200} height={250} className="rounded-lg object-cover" />
            <h4 className="text-lg font-bold mt-4">Sophie Blake</h4>
            <p className="text-sm text-gray-800">Head of Operations</p>
          </div>
          <div>
            <Image src="/images/Marcus.png" alt="Marcus Chen" width={200} height={250} className="rounded-lg object-cover" />
            <h4 className="text-lg font-bold mt-4">Marcus Chen</h4>
            <p className="text-sm text-gray-800">Financial Controller</p>
          </div>
          <div>
            <Image src="/images/leila.png" alt="Leila Rahimi" width={200} height={250} className="rounded-lg object-cover" />
            <h4 className="text-lg font-bold mt-4">Leila Rahimi</h4>
            <p className="text-sm text-gray-800">Client Success Manager</p>
          </div>
          <div>
            <Image src="/images/Tom.png" alt="Tom Yuen" width={200} height={250} className="rounded-lg object-cover" />
            <h4 className="text-lg font-bold mt-4">Tom Yuen</h4>
            <p className="text-sm text-gray-800">Digital Solutions Lead</p>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Join Our Team</h3>
        <p className="text-lg text-black mb-4">
          We’re always on the lookout for energetic, customer-focused professionals to join the StrataConnect family. If you're passionate about improving communities and love working in a fast-paced, supportive environment,<br /> we want to hear from you.
        </p>
        <p className="text-lg text-black">
          Send your CV or enquiry to <a href="mailto:careers@strataconnect.com.au" className="text-green-700 underline">careers@strataconnect.com.au</a>
        </p>
        <p className="text-sm text-gray-600 mt-2">Your privacy and confidentiality are always respected.</p>
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
