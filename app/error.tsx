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
    // Log to console for debugging
    console.error('Error occurred:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      cause: error.cause,
    });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6 text-left">
          <p className="text-sm font-semibold text-red-900 mb-2">Error Details:</p>
          <p className="text-sm font-mono text-red-800 break-all mb-4">
            {error.message || 'Unknown error occurred'}
          </p>
          {error.digest && (
            <p className="text-xs text-red-600 mb-2">Digest: {error.digest}</p>
          )}
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-semibold text-red-900 hover:text-red-700">
              View Stack Trace
            </summary>
            <pre className="mt-2 text-xs overflow-auto bg-red-100 p-3 rounded max-h-64">
              {error.stack || 'No stack trace available'}
            </pre>
          </details>
          {error.cause && (
            <details className="mt-2">
              <summary className="cursor-pointer text-sm font-semibold text-red-900 hover:text-red-700">
                View Cause
              </summary>
              <pre className="mt-2 text-xs overflow-auto bg-red-100 p-3 rounded">
                {JSON.stringify(error.cause, null, 2)}
              </pre>
            </details>
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
