'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { ReactNode } from 'react';

interface HydrationBoundaryProps {
  children: ReactNode;
}

function ErrorFallback({ error, resetErrorBoundary }: any) {
  console.warn('Hydration error caught:', error);
  return (
    <div>
      {/* Silently handle hydration errors in development */}
    </div>
  );
}

export default function HydrationBoundary({ children }: HydrationBoundaryProps) {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error: Error) => {
        // Only log hydration errors in development
        if (process.env.NODE_ENV === 'development' && error.message.includes('hydration')) {
          console.warn('Hydration error suppressed:', error.message);
        }
      }}
    >
      {children}
    </ErrorBoundary>
  );
}