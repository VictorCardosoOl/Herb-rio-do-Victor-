import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-setup';
import { lenis } from '@/lib/lenis-setup';

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function update(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return <>{children}</>;
}
