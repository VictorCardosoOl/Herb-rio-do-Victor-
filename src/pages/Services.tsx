import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight, Sprout, Droplets, Sun, Wind, Bug, Thermometer } from 'lucide-react';

const guides = [
  { icon: Sprout, title: 'Preparo do Solo', desc: 'Mix de aeração e retenção.' },
  { icon: Droplets, title: 'Hidráulica', desc: 'Otimizando a turgidez.' },
  { icon: Sun, title: 'Fotossíntese', desc: 'Gestão de lúmens.' },
  { icon: Wind, title: 'Circulação', desc: 'Fluxo de ar estratégico.' },
  { icon: Bug, title: 'Defesa', desc: 'Controle biológico.' },
  { icon: Thermometer, title: 'Clima', desc: 'Simulação de habitat.' },
];

export default function Services() {
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
          Guias
        </h1>
        
        <div className="anim-target flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
            <span className="font-medium text-sm md:text-base 2xl:text-lg">Protocolos Técnicos</span>
          </div>
          <span className="font-mono text-sm md:text-base 2xl:text-lg">VOL. III</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-px bg-petrol/10 border border-petrol/10 mb-24 2xl:mb-32">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <div key={index} className="anim-target bg-paper p-8 2xl:p-12 hover:bg-petrol/5 transition-colors duration-300 group cursor-pointer flex flex-col justify-between min-h-[240px] 2xl:min-h-[320px]">
              <div className="flex justify-between items-start mb-6 2xl:mb-10">
                <span className="font-mono text-xs 2xl:text-sm text-petrol/40">0{index + 1}</span>
                <Icon size={24} strokeWidth={1.5} className="text-petrol/60 group-hover:text-petrol transition-colors 2xl:w-8 2xl:h-8" />
              </div>
              <div>
                <h3 className="text-2xl 2xl:text-3xl font-serif mb-3 2xl:mb-4 group-hover:underline decoration-1 underline-offset-4">{guide.title}</h3>
                <p className="text-sm 2xl:text-base text-petrol/60 leading-relaxed max-w-xs">{guide.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer / Issue Number */}
      <div className="anim-target mt-auto pt-8 2xl:pt-12 border-t border-petrol flex items-end justify-between">
        <span className="text-6xl md:text-8xl 2xl:text-9xl font-sans font-light leading-none tracking-tighter">
          NO. 03
        </span>
        
        <div className="flex items-center gap-2 text-lg 2xl:text-xl font-medium group cursor-pointer">
          <span className="group-hover:underline decoration-1 underline-offset-4">Ver Todos</span>
          <ArrowRight size={24} className="2xl:w-8 2xl:h-8" />
        </div>
      </div>
    </div>
  );
}
