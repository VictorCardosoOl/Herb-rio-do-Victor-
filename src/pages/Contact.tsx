import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight, Github, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.anim-target', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-full flex flex-col p-8 md:p-16 2xl:p-24 3xl:p-32 max-w-screen-3xl mx-auto w-full">
      {/* Header Section */}
      <div className="mb-16 2xl:mb-24">
        <h1 className="anim-target text-[12vw] md:text-[8rem] 2xl:text-[10rem] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
          Contato
        </h1>
        
        <div className="anim-target flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
            <span className="font-medium text-sm md:text-base 2xl:text-lg">Canais de Comunicação</span>
          </div>
          <span className="font-mono text-sm md:text-base 2xl:text-lg">VOL. V</span>
        </div>
      </div>

      {/* Main Content - Social Cards */}
      <div className="flex-1 flex flex-col md:flex-row gap-8 2xl:gap-12 mb-24 2xl:mb-32">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="anim-target flex-1 group">
          <div className="h-full border border-petrol/10 p-8 2xl:p-12 flex flex-col justify-between hover:bg-petrol hover:text-paper transition-all duration-500 min-h-[300px] 2xl:min-h-[400px]">
            <div className="flex justify-between items-start">
              <Github size={32} strokeWidth={1.5} className="2xl:w-12 2xl:h-12" />
              <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 2xl:w-8 2xl:h-8" />
            </div>
            <div>
              <h3 className="text-3xl 2xl:text-5xl font-serif italic mb-2 2xl:mb-4">GitHub</h3>
              <p className="font-mono text-xs 2xl:text-sm opacity-60">/victorherbarium</p>
            </div>
          </div>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="anim-target flex-1 group">
          <div className="h-full border border-petrol/10 p-8 2xl:p-12 flex flex-col justify-between hover:bg-petrol hover:text-paper transition-all duration-500 min-h-[300px] 2xl:min-h-[400px]">
            <div className="flex justify-between items-start">
              <Instagram size={32} strokeWidth={1.5} className="2xl:w-12 2xl:h-12" />
              <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 2xl:w-8 2xl:h-8" />
            </div>
            <div>
              <h3 className="text-3xl 2xl:text-5xl font-serif italic mb-2 2xl:mb-4">Instagram</h3>
              <p className="font-mono text-xs 2xl:text-sm opacity-60">@victor.botanica</p>
            </div>
          </div>
        </a>

        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="anim-target flex-1 group">
          <div className="h-full border border-petrol/10 p-8 2xl:p-12 flex flex-col justify-between hover:bg-petrol hover:text-paper transition-all duration-500 min-h-[300px] 2xl:min-h-[400px]">
            <div className="flex justify-between items-start">
              <MessageCircle size={32} strokeWidth={1.5} className="2xl:w-12 2xl:h-12" />
              <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 2xl:w-8 2xl:h-8" />
            </div>
            <div>
              <h3 className="text-3xl 2xl:text-5xl font-serif italic mb-2 2xl:mb-4">WhatsApp</h3>
              <p className="font-mono text-xs 2xl:text-sm opacity-60">+55 11 99999-9999</p>
            </div>
          </div>
        </a>
      </div>

      {/* Footer / Issue Number */}
      <div className="anim-target mt-auto pt-8 2xl:pt-12 border-t border-petrol flex items-end justify-between">
        <span className="text-6xl md:text-8xl 2xl:text-9xl font-sans font-light leading-none tracking-tighter">
          NO. 05
        </span>
        
        <div className="flex items-center gap-2 text-lg 2xl:text-xl font-medium group cursor-pointer">
          <span className="group-hover:underline decoration-1 underline-offset-4">Enviar Email</span>
          <ArrowRight size={24} className="2xl:w-8 2xl:h-8" />
        </div>
      </div>
    </div>
  );
}
