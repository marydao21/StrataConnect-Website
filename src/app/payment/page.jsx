import Link from 'next/link';

export default function PayMyLeviesPage() {
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
        </div>
      </header>

      <main className="max-w-4xl mx-auto pt-40 px-6 py-16 text-left">
        <h2 className="text-3xl font-bold text-green-800 mb-4">💳 Pay My Levies</h2>
        <p className="text-lg text-black mb-8">
          Convenient, secure payment options to help you stay on top of your strata fees.
        </p>

        {/* Option 1: Pay Online */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-green-800 mb-4">🔗 Option 1: Pay Online via StrataConnect</h3>
          <p className="mb-4">You can pay your levies directly through our secure online form using a credit or debit card.</p>

          <form className="bg-gray-50 p-6 rounded-lg shadow space-y-4">
            <input type="text" placeholder="Reference Number (from your levy notice)" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Credit Card Number" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Name on Card" className="w-full p-3 border rounded" />
            <div className="flex gap-4">
              <input type="text" placeholder="Month" className="w-1/2 p-3 border rounded" />
              <input type="text" placeholder="Year" className="w-1/2 p-3 border rounded" />
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded" />
              <span className="self-center text-sm text-gray-600">What is a CVV?</span>
            </div>
            <input type="text" placeholder="Payment Amount" className="w-full p-3 border rounded" />
            <div className="flex justify-between mt-4">
              <button type="reset" className="bg-gray-300 text-green-900 px-4 py-2 rounded font-bold hover:bg-gray-400">Clear</button>
              <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded font-bold hover:bg-green-800">Submit Payment</button>
            </div>
            <p className="text-sm mt-4">Accepted cards: 💳 Visa 💳 MasterCard 💳 American Express 💳 Diners</p>
          </form>
        </section>

        {/* Option 2: Direct Debit */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-green-800 mb-4">🔄 Option 2: Set Up Direct Debit</h3>
          <p className="mb-2">Automate your levy payments with ease. You can choose to:</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Automatically pay the full amount due when it’s due</li>
            <li>Schedule a fixed recurring payment (e.g., monthly)</li>
          </ul>
          <p>
            Set up, amend, or cancel your Direct Debit via: <a href="https://www.stratapay.com/ddr" target="_blank" className="text-green-700 underline">www.stratapay.com/ddr</a>
          </p>
        </section>

        {/* Option 3: BPAY or DEFT */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-green-800 mb-4">💼 Option 3: BPAY or DEFT</h3>
          <p className="font-bold">✅ BPAY</p>
          <p className="mb-2">Biller Code: 123456 (example)<br />Reference Number: Found on your levy notice</p>
          <p className="font-bold">✅ DEFT Payment System</p>
          <p className="mb-2">Pay online at <a href="https://www.deft.com.au" className="text-green-700 underline">www.deft.com.au</a></p>
          <ul className="list-disc pl-6">
            <li>Make one-off or recurring payments</li>
            <li>Set up a Biller Initiated Direct Debit</li>
          </ul>
        </section>

        <section className="mb-12">
          <h4 className="text-green-800 font-bold mb-2">📄 How to Set Up Biller Initiated Direct Debit</h4>
        </section>

        <section className="mb-12">
          <h4 className="text-green-800 font-bold mb-2">🏪 Other Payment Methods</h4>
          <p>📞 Phone Banking (BPAY): Call your bank and use the self-service option.</p>
          <p>🏤 Australia Post: Visit any Australia Post branch with your levy notice (barcode required). Payment methods: EFTPOS or cheque.</p>
        </section>

        <section className="mb-12">
          <h4 className="text-green-800 font-bold mb-2">📢 Important Notice About DEFT</h4>
          <ul className="list-disc pl-6">
            <li>March 2024: DEFT phone line will be discontinued</li>
            <li>November 2024: Cheque payments will no longer be accepted</li>
          </ul>
          <p className="mt-2">📄 <a href="#" className="text-green-700 underline">Download DEFT Digital Payments Guide</a></p>
        </section>

        {/* Help Section */}
        <section className="mb-20">
          <h4 className="text-xl font-bold text-green-800 mb-2">❓ Need Help?</h4>
          <p>📧 <a href="mailto:info@strataconnect.com.au" className="text-green-700 underline">info@strataconnect.com.au</a></p>
          <p>📞 1300 123 456</p>
        </section>
      </main>
    </div>
  );
}
