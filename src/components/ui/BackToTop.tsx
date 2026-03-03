import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { lenis } from '@/lib/lenis-setup';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    lenis.scrollTo(0, { duration: 1.5 });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-petrol text-paper shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
