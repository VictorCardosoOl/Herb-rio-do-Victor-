import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
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
        <h1 className="hero-anim text-[length:var(--text-display-hero)] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
          Herbário
        </h1>
        
        <div className="hero-anim flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
            <span className="font-medium text-sm md:text-base 2xl:text-lg uppercase tracking-wide">Engenharia Botânica</span>
          </div>
          <span className="font-mono text-sm md:text-base 2xl:text-lg">VOL. I — 2026</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 gap-12 2xl:gap-16">
        {/* Featured Article Card */}
        <div className="hero-anim group cursor-pointer">
          <div className="w-full aspect-[16/9] 2xl:aspect-[21/9] overflow-hidden mb-8 2xl:mb-12 bg-petrol/5 relative">
            <img 
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2000&auto=format&fit=crop" 
              alt="Costela de Adão" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-petrol/0 group-hover:bg-petrol/10 transition-colors duration-500" />
          </div>
          
          <div className="max-w-4xl 2xl:max-w-5xl">
            <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-serif font-medium leading-tight mb-6 group-hover:underline decoration-1 underline-offset-8">
              Monstera deliciosa: Engenharia de Luz Difusa
            </h2>
            
            <div className="flex items-center gap-4 text-sm 2xl:text-base font-mono text-petrol/60 mb-8 uppercase tracking-wider">
              <span className="italic">Análise Técnica</span>
              <span>•</span>
              <span>Otimização Fotossintética</span>
            </div>
            
            <p className="text-lg md:text-xl 2xl:text-2xl text-petrol/80 leading-relaxed max-w-3xl">
              A fenestração foliar não é apenas estética; é uma solução evolutiva de alta eficiência para maximizar a captura de lúmens em ambientes de sub-bosque, reduzindo a resistência ao vento e otimizando a distribuição de energia.
            </p>
          </div>
        </div>
      </div>

      {/* Footer / Issue Number */}
      <div className="hero-anim mt-24 2xl:mt-32 pt-8 2xl:pt-12 border-t border-petrol flex items-end justify-between">
        <span className="text-6xl md:text-8xl 2xl:text-9xl font-sans font-light leading-none tracking-tighter">
          NO. 01
        </span>
        
        <button className="flex items-center gap-2 text-lg 2xl:text-xl font-medium hover:gap-4 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-lg px-2">
          <span className="group-hover:underline decoration-1 underline-offset-4">Acessar Dossiê</span>
          <ArrowRight size={24} className="2xl:w-8 2xl:h-8" />
        </button>
      </div>
    </div>
  );
}
