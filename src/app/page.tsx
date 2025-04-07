
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <header className="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg">
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

      {/* Main Content */}
      <div className="flex min-h-screen pt-20">
        {/* Left Section - Text & Button */}
        <div className="w-1/2 bg-white flex flex-col justify-center px-12 sm:px-16 md:px-24">
          <h3 className="text-green-700 uppercase tracking-wide text-sm mb-2">
            View The Extraordinary
          </h3>
          <h1 className="text-green-800 text-4xl sm:text-5xl font-bold mb-4">
            Stay Connected, Stay in Control of Your Strata
          </h1>
          <p className="text-green-700 text-lg mb-6">
            StrataConnect – Bringing residents, owners, and strata managers 
            together on one seamless platform. Stay informed, streamline tasks, 
            and enhance community living with effortless communication and 
            management tools.
          </p>
          <Link href="/properties">
            <button className="bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-800 transition">
              Request a Quote
            </button>
          </Link>
        </div>

        {/* Right Section - Background Image */}
        <div className="w-1/2 relative">
          <Image
            src="/Users/mary/Library/CloudStorage/OneDrive-Personal/3rd-YEAR/SEM-1/INFO1111/Self-Learning/strata-connect/.next/static/images/picture3.jpg"
            alt="StrataConnect"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
