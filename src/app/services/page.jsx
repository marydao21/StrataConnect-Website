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

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[500px] pt-20">
        <Image
          src="/images/picture4.avif"
          alt="Strata Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl font-bold mb-4 uppercase">
              Expert Strata Services for Every Stage
            </h1>
            <p className="text-white text-lg">
              Supporting owners, developers, and communities with transparency, efficiency, and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Remaining content remains unchanged */}
    </div>
  );
}
