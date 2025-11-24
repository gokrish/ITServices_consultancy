'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCw, Mail } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error occurred:', {
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        cause: error.cause,
      });
    }

    // In production, you might want to send to error tracking service
    // e.g., Sentry, LogRocket, etc.
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <AlertCircle className="h-24 w-24 text-red-600 relative" />
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We encountered an unexpected error. Don't worry, our team has been notified
            and we're working on it. Please try again or contact us if the problem persists.
          </p>
        </div>

        {/* Error Details (Development Only) */}
        {isDevelopment && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
            <p className="text-sm font-semibold text-red-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Error Details (Development Mode)
            </p>
            <p className="text-sm font-mono text-red-800 break-all mb-3 bg-red-100 p-3 rounded">
              {error.message || 'Unknown error occurred'}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mb-3">
                Error ID: <code className="bg-red-100 px-2 py-1 rounded">{error.digest}</code>
              </p>
            )}
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-semibold text-red-900 hover:text-red-700 transition-colors">
                View Stack Trace
              </summary>
              <pre className="mt-3 text-xs overflow-auto bg-red-100 p-4 rounded max-h-64 border border-red-200">
                {error.stack || 'No stack trace available'}
              </pre>
            </details>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={reset}
            size="lg"
            className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg" className="gap-2 border-2 w-full sm:w-auto">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="gap-2 border-2 w-full sm:w-auto">
              <Mail className="h-5 w-5" />
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">What you can do:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </span>
              <span>Click "Try Again" to reload the page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </span>
              <span>Return to the homepage and navigate from there</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </span>
              <span>Contact our support team if the issue continues</span>
            </li>
          </ul>
        </div>

        {/* Error ID for Support */}
        {error.digest && !isDevelopment && (
          <p className="text-center text-sm text-gray-500 mt-8">
            Error ID: <code className="bg-gray-100 px-2 py-1 rounded">{error.digest}</code>
            <br />
            <span className="text-xs">Please include this ID when contacting support</span>
          </p>
        )}
      </div>
    </div>
  );
}

