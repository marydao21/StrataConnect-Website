import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-green-900 px-6 text-center">
      <h1 className="text-4xl font-bold text-green-800 mb-4">🎉 Thank You!</h1>
      <p className="text-lg mb-6">
        Your request has been received. Our team will be in touch shortly.
      </p>
      <Link href="/">
        <button className="bg-green-700 text-white px-6 py-3 rounded font-bold hover:bg-green-800 transition">
          Return to Home
        </button>
      </Link>
    </div>
  );
}
