import { Suspense } from 'react';
import client from './client';

export default function LoginSuccessPage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading login confirmation...</p>}>
      <client />
    </Suspense>
  );
}
