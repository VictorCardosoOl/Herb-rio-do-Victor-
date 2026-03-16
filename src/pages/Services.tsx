import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight, Sprout, Droplets, Sun, Wind, Bug, Thermometer } from 'lucide-react';
import Container from '@/components/layout/Container';

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
          <h1 className="anim-target text-[12vw] md:text-[8rem] 2xl:text-[10rem] 3xl:text-[12rem] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
            Guias
          </h1>
          
          <div className="anim-target flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
              <span className="font-medium text-sm md:text-base 2xl:text-lg 3xl:text-xl">Protocolos Técnicos</span>
            </div>
            <span className="font-mono text-sm md:text-base 2xl:text-lg 3xl:text-xl">VOL. III</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-px bg-petrol/10 border border-petrol/10 mb-24 2xl:mb-32 3xl:mb-40">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <div key={index} className="anim-target bg-paper p-8 2xl:p-12 3xl:p-16 hover:bg-petrol/5 transition-colors duration-300 group cursor-pointer flex flex-col justify-between min-h-[240px] 2xl:min-h-[320px] 3xl:min-h-[400px]">
                <div className="flex justify-between items-start mb-6 2xl:mb-10">
                  <span className="font-mono text-xs 2xl:text-sm 3xl:text-base text-petrol/40">0{index + 1}</span>
                  <Icon size={24} strokeWidth={1.5} className="text-petrol/60 group-hover:text-petrol transition-colors 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10" />
                </div>
                <div>
                  <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl font-serif mb-3 2xl:mb-4 3xl:mb-6 group-hover:underline decoration-1 underline-offset-4">{guide.title}</h3>
                  <p className="text-sm 2xl:text-base 3xl:text-lg text-petrol/60 leading-relaxed max-w-xs 3xl:max-w-sm">{guide.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer / Issue Number */}
        <div className="anim-target mt-auto pt-8 2xl:pt-12 3xl:pt-16 border-t border-petrol flex items-end justify-between">
          <span className="text-6xl md:text-8xl 2xl:text-9xl 3xl:text-[10rem] font-sans font-light leading-none tracking-tighter">
            NO. 03
          </span>
          
          <div className="flex items-center gap-2 text-lg 2xl:text-xl 3xl:text-2xl font-medium group cursor-pointer">
            <span className="group-hover:underline decoration-1 underline-offset-4">Ver Todos</span>
            <ArrowRight size={24} className="2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10" />
          </div>
        </div>
      </Container>
    </div>
  );
}
