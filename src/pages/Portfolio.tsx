import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';

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
        duration: 1.4,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-full flex flex-col w-full py-24 2xl:py-32 3xl:py-40">
      <Container className="flex-1 flex flex-col">
        {/* Header Section */}
        <div className="mb-16 2xl:mb-24 3xl:mb-32">
          <h1 className="anim-target text-[10vw] md:text-[8rem] 2xl:text-[10rem] 3xl:text-[12rem] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
            Cronograma
          </h1>
          
          <div className="anim-target flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
              <span className="font-medium text-sm md:text-base 2xl:text-lg 3xl:text-xl">Rotina Semanal</span>
            </div>
            <span className="font-mono text-sm md:text-base 2xl:text-lg 3xl:text-xl">VOL. IV</span>
          </div>
        </div>

        {/* Main Content - Table */}
        <div className="flex-1 mb-24 2xl:mb-32 3xl:mb-40">
          <div className="anim-target w-full">
            {schedule.map((item, index) => (
              <div key={index} className="group flex items-baseline justify-between py-8 2xl:py-10 3xl:py-14 border-b border-petrol/10 hover:border-petrol transition-colors duration-300 cursor-pointer">
                <div className="w-32 2xl:w-48 3xl:w-64 font-mono text-xs 2xl:text-sm 3xl:text-base uppercase tracking-widest text-petrol/60 group-hover:text-petrol">{item.day}</div>
                <div className="flex-1 font-serif text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl text-petrol group-hover:translate-x-4 3xl:group-hover:translate-x-8 transition-transform duration-300">{item.task}</div>
                <div className="hidden md:block text-sm 2xl:text-lg 3xl:text-xl text-petrol/40 group-hover:text-petrol">{item.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Issue Number */}
        <div className="anim-target mt-auto pt-8 2xl:pt-12 3xl:pt-16 border-t border-petrol flex items-end justify-between">
          <span className="text-6xl md:text-8xl 2xl:text-9xl 3xl:text-[10rem] font-sans font-light leading-none tracking-tighter">
            NO. 04
          </span>
          
          <div className="flex items-center gap-2 text-lg 2xl:text-xl 3xl:text-2xl font-medium group cursor-pointer">
            <span className="group-hover:underline decoration-1 underline-offset-4">Exportar</span>
            <ArrowRight size={24} className="2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10" />
          </div>
        </div>
      </Container>
    </div>
  );
}
