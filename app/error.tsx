'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error details:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-sm font-mono text-red-800 break-all">
            {error.message || 'Unknown error occurred'}
          </p>
          {error.digest && (
            <p className="text-xs text-red-600 mt-2">Digest: {error.digest}</p>
          )}
          {process.env.NODE_ENV === 'development' && (
            <pre className="mt-4 text-left text-xs overflow-auto">
              {error.stack}
            </pre>
          )}
        </div>
        <div className="space-x-4">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline">
              Go home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
