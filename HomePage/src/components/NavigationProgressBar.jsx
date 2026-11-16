'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function ProgressBarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname or search params change, route navigation completed
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Global click interceptor for internal links to trigger instant visual feedback
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // If internal link and not a hash/anchor or external URL or tel/mailto
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        anchor.target !== '_blank' &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        // If clicking on the exact current page, do nothing
        if (href === pathname) return;

        setLoading(true);
        setProgress(35);

        const timer1 = setTimeout(() => {
          setProgress((prev) => (prev < 80 ? 75 : prev));
        }, 120);

        const timer2 = setTimeout(() => {
          setProgress((prev) => (prev < 92 ? 90 : prev));
        }, 320);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none transition-opacity duration-300"
      style={{ opacity: progress === 100 ? 0 : 1 }}
      aria-hidden="true"
    >
      <div 
        className="h-[3px] bg-gradient-to-r from-[#ea580c] via-[#38bdf8] to-[#1a1f4b] shadow-[0_0_12px_rgba(56,189,248,0.9)] transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function NavigationProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarInner />
    </Suspense>
  );
}
