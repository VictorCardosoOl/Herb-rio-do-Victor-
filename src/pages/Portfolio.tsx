import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight } from 'lucide-react';

const schedule = [
  { day: 'Segunda', task: 'Inspeção Visual', type: 'Monitoramento' },
  { day: 'Terça', task: 'Rega (Fícus)', type: 'Hidratação' },
  { day: 'Quarta', task: 'Rotação', type: 'Luz' },
  { day: 'Quinta', task: 'Limpeza', type: 'Manutenção' },
  { day: 'Sexta', task: 'Fertilização', type: 'Nutrição' },
  { day: 'Sábado', task: 'Poda', type: 'Estrutura' },
];

export default function Portfolio() {
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
        <h1 className="anim-target text-[10vw] md:text-[8rem] 2xl:text-[10rem] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
          Cronograma
        </h1>
        
        <div className="anim-target flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
            <span className="font-medium text-sm md:text-base 2xl:text-lg">Rotina Semanal</span>
          </div>
          <span className="font-mono text-sm md:text-base 2xl:text-lg">VOL. IV</span>
        </div>
      </div>

      {/* Main Content - Table */}
      <div className="flex-1 mb-24 2xl:mb-32">
        <div className="anim-target w-full">
          {schedule.map((item, index) => (
            <div key={index} className="group flex items-baseline justify-between py-8 2xl:py-10 border-b border-petrol/10 hover:border-petrol transition-colors duration-300 cursor-pointer">
              <div className="w-32 2xl:w-48 font-mono text-xs 2xl:text-sm uppercase tracking-widest text-petrol/60 group-hover:text-petrol">{item.day}</div>
              <div className="flex-1 font-serif text-2xl md:text-3xl 2xl:text-5xl text-petrol group-hover:translate-x-4 transition-transform duration-300">{item.task}</div>
              <div className="hidden md:block text-sm 2xl:text-lg text-petrol/40 group-hover:text-petrol">{item.type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Issue Number */}
      <div className="anim-target mt-auto pt-8 2xl:pt-12 border-t border-petrol flex items-end justify-between">
        <span className="text-6xl md:text-8xl 2xl:text-9xl font-sans font-light leading-none tracking-tighter">
          NO. 04
        </span>
        
        <div className="flex items-center gap-2 text-lg 2xl:text-xl font-medium group cursor-pointer">
          <span className="group-hover:underline decoration-1 underline-offset-4">Exportar</span>
          <ArrowRight size={24} className="2xl:w-8 2xl:h-8" />
        </div>
      </div>
    </div>
  );
}
