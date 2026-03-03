import { useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap-setup';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) return setProgress(0);
      
      const currentScroll = window.scrollY;
      const scrollProgress = currentScroll / totalHeight;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
      <div 
        className="h-full bg-petrol transition-all duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
