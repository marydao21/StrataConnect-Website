import Link from 'next/link';

export default function PaymentPage() {
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Pay My Levies</h2>
        <p className="text-lg mb-10 text-center">
          Convenient, secure payment options to help you stay on top of your strata fees.
        </p>

        <section className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">🔗 Option 1: Pay Online via StrataConnect</h3>
            <p className="mb-4">You can pay your levies directly through our secure online form using a credit or debit card.</p>
            <form className="bg-gray-50 p-6 rounded shadow-md space-y-4">
              <input type="text" placeholder="Reference Number" className="w-full border p-3 rounded" />
              <input type="text" placeholder="Credit Card Number" className="w-full border p-3 rounded" />
              <input type="text" placeholder="Name on Card" className="w-full border p-3 rounded" />
              <div className="flex gap-4">
                <input type="text" placeholder="Month" className="w-1/2 border p-3 rounded" />
                <input type="text" placeholder="Year" className="w-1/2 border p-3 rounded" />
              </div>
              <input type="text" placeholder="CVV" className="w-full border p-3 rounded" />
              <input type="text" placeholder="Payment Amount" className="w-full border p-3 rounded" />
              <div className="flex justify-between gap-4">
                <button className="bg-gray-200 px-6 py-2 rounded">Clear</button>
                <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Submit Payment</button>
              </div>
              <p className="text-sm mt-4">Accepted cards: 💳 Visa 💳 MasterCard 💳 American Express 💳 Diners</p>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">🔄 Option 2: Set Up Direct Debit</h3>
            <p className="mb-2">Automate your levy payments with ease.</p>
            <ul className="list-disc pl-6 mb-2">
              <li>Automatically pay the full amount due when it’s due</li>
              <li>Schedule a fixed recurring payment (e.g., monthly)</li>
            </ul>
            <p className="mb-2">Set up, amend, or cancel your Direct Debit via: <a href="https://www.stratapay.com/ddr" className="text-green-700 underline">www.stratapay.com/ddr</a></p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">💼 Option 3: BPAY or DEFT</h3>
            <h4 className="font-semibold">✅ BPAY</h4>
            <p>Biller Code: 123456</p>
            <p>Reference Number: Found on your levy notice</p>

            <h4 className="font-semibold mt-4">✅ DEFT Payment System</h4>
            <p>Pay online at <a href="https://www.deft.com.au" className="text-green-700 underline">www.deft.com.au</a></p>
            <ul className="list-disc pl-6">
              <li>Make one-off or recurring payments</li>
              <li>Set up a Biller Initiated Direct Debit</li>
            </ul>
            <p className="mt-2">📄 <a href="#" className="text-green-700 underline">How to Set Up Biller Initiated Direct Debit</a></p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">🏪 Other Payment Methods</h3>
            <p>📞 Phone Banking (BPAY) — Call your bank and use the self-service option.</p>
            <p>🏤 Australia Post — Visit any Australia Post branch with your levy notice (barcode required). Payment methods: EFTPOS or cheque.</p>

            <div className="mt-4">
              <h4 className="font-semibold">📢 Important Notice About DEFT</h4>
              <ul className="list-disc pl-6">
                <li>March 2024: DEFT phone line will be discontinued</li>
                <li>November 2024: Cheque payments will no longer be accepted</li>
              </ul>
              <p className="mt-2">📄 <a href="#" className="text-green-700 underline">Download DEFT Digital Payments Guide</a></p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">❓ Need Help?</h3>
            <p>📧 <a href="mailto:info@strataconnect.com.au" className="text-green-700 underline">info@strataconnect.com.au</a></p>
            <p>📞 1300 123 456</p>
          </div>
        </section>
      </main>
    </div>
  );
}
