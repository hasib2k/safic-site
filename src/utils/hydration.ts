/**
 * Utility to handle client-server hydration mismatches
 * This is particularly useful when dealing with browser extensions
 * that inject attributes or scripts after the initial render
 */

import { useEffect, useState } from 'react';

/**
 * Hook to determine if we're running on the client side
 * Helps prevent hydration mismatches for client-only content
 */
export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Hook to safely use client-only values that might differ between server and client
 * @param clientValue - The value to use on the client side
 * @param serverValue - The value to use on the server side (defaults to undefined)
 */
export function useClientValue<T>(clientValue: T, serverValue?: T): T | undefined {
  const [value, setValue] = useState<T | undefined>(serverValue);

  useEffect(() => {
    setValue(clientValue);
  }, [clientValue]);

  return value;
}

/**
 * Utility function to suppress specific hydration warnings in development
 * @param elementId - The ID of the element to suppress warnings for
 */
export function suppressHydrationWarning(elementId: string): void {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const element = document.getElementById(elementId);
    if (element) {
      // Add data attribute to suppress React's hydration warnings
      element.setAttribute('data-suppress-hydration-warning', 'true');
    }
  }
}