import Link from 'next/link';

export default function RequestQuotePage() {
  return (
    <div className="bg-white text-green-900 relative min-h-screen">
      {/* Navigation Bar */}
      <header className="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg z-50">
        <span className="text-white text-2xl font-bold tracking-wide">StrataConnect</span>
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
              <button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition font-bold">OWNERS LOGIN</button>
            </Link>
            <Link href="/payment">
              <button className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition font-bold">PAY MY LEVIES</button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-40 text-left">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Request a Quote</h2>
        <p className="text-lg mb-10 text-center">
          Looking for trusted, proactive strata management? Complete the form below and one of our friendly team members will be in touch shortly with a tailored quote for your property.
        </p>

        <form action="/api/request-quote" method="POST" className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" required className="p-3 border rounded w-full" />
            <input type="text" name="lastName" placeholder="Last Name" required className="p-3 border rounded w-full" />
          </div>
          <input type="tel" name="phone" placeholder="Phone" required className="p-3 border rounded w-full" />
          <input type="email" name="email" placeholder="Email" required className="p-3 border rounded w-full" />
          <input type="text" name="buildingName" placeholder="Plan or Building Name (if applicable)" className="p-3 border rounded w-full" />

          <input type="text" name="address" placeholder="Street Address" required className="p-3 border rounded w-full" />
          <input type="text" name="address2" placeholder="Address Line 2" className="p-3 border rounded w-full" />

          <div className="grid sm:grid-cols-3 gap-6">
            <input type="text" name="city" placeholder="City" className="p-3 border rounded w-full" />
            <input type="text" name="state" placeholder="State / Region" className="p-3 border rounded w-full" />
            <input type="text" name="zip" placeholder="ZIP / Postal Code" className="p-3 border rounded w-full" />
          </div>

          <select name="country" className="p-3 border rounded w-full">
            <option value="">Select Country</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Other">Other</option>
          </select>

          <h4 className="text-xl font-bold text-green-800 mt-6">🏢 Property Details</h4>
          <input type="text" name="lots" placeholder="Number of Lots" className="p-3 border rounded w-full" />

          <label className="font-semibold">Type of Property</label>
          <div className="grid sm:grid-cols-2 gap-2">
            {['Residential', 'Commercial', 'Mixed Use', 'Retail', 'Industrial', 'Retirement', 'Company Title', 'Community Association'].map((type, index) => (
              <label key={index} className="flex items-center">
                <input type="checkbox" name="propertyTypes" value={type} className="mr-2" /> {type}
              </label>
            ))}
          </div>

          <input type="text" name="role" placeholder="Your Role / Position on Strata Committee" required className="p-3 border rounded w-full" />
          <input type="text" name="expiry" placeholder="Current Management Agreement Expiry (if known)" className="p-3 border rounded w-full" />
          <textarea name="comments" placeholder="Additional Comments or Requirements" rows="4" className="p-3 border rounded w-full"></textarea>

          <label className="flex items-center">
            <input type="checkbox" name="consent" required className="mr-2" />
            By submitting this form, you agree to receive occasional updates and newsletters from StrataConnect.
          </label>

          <div className="flex justify-center">
            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-bold hover:bg-green-800 transition">
              Submit Request
            </button>
          </div>
        </form>

        <section className="mt-12">
          <h4 className="text-xl font-bold text-green-800">📎 Helpful Resources</h4>
          <p>Explore our <Link href="/resources" className="text-green-700 underline">Resources</Link> section for useful forms, guides, and downloads to support your strata needs.</p>
        </section>
      </main>
    </div>
  );
}
