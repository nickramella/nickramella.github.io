// hooks/useWindowSize.js
import { useState, useEffect } from 'react';

export function useWindowSize() {
  // Initialize state with undefined so that the first render happens on the client
  const [windowSize, setWindowSize] = useState({});

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Set size on initial load
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect runs only on mount

  return windowSize;
}
