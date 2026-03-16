import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';

export default function About() {
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
          <h1 className="anim-target text-[11vw] md:text-[8rem] 2xl:text-[10rem] 3xl:text-[12rem] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
            Enciclopédia
          </h1>
          
          <div className="anim-target flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
              <span className="font-medium text-sm md:text-base 2xl:text-lg 3xl:text-xl">Arquitetura Biológica</span>
            </div>
            <span className="font-mono text-sm md:text-base 2xl:text-lg 3xl:text-xl">VOL. II</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 2xl:gap-32 3xl:gap-40 mb-24 2xl:mb-32 3xl:mb-40">
          <div className="md:col-span-7 space-y-16 2xl:space-y-24 3xl:space-y-32">
            <p className="anim-target text-2xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-light leading-tight text-petrol max-w-4xl 3xl:max-w-5xl">
              Cada espécie neste herbário foi selecionada não apenas pela estética, mas pela sua <span className="font-serif italic">geometria natural</span>.
            </p>
            
            <div className="anim-target grid grid-cols-1 md:grid-cols-2 gap-12 2xl:gap-20 3xl:gap-24 border-t border-petrol pt-12 2xl:pt-16 3xl:pt-20">
              <div>
                <h3 className="text-xl 2xl:text-2xl 3xl:text-3xl font-serif italic mb-6 3xl:mb-8">Filosofia</h3>
                <p className="text-petrol/70 text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed max-w-md 3xl:max-w-lg">
                  O cuidado com plantas é um exercício de engenharia reversa. Observar, analisar e otimizar variáveis.
                </p>
              </div>
              <div>
                <h3 className="text-xl 2xl:text-2xl 3xl:text-3xl font-serif italic mb-6 3xl:mb-8">Metodologia</h3>
                <p className="text-petrol/70 text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed max-w-md 3xl:max-w-lg">
                  Sensores de umidade e análise de espectro de luz garantem a saúde máxima de cada espécime.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 flex flex-col justify-end">
            <div className="anim-target bg-petrol text-paper p-10 2xl:p-16 3xl:p-20 rounded-none w-full">
              <h4 className="font-mono text-xs 2xl:text-sm 3xl:text-base uppercase tracking-widest mb-10 2xl:mb-14 3xl:mb-16 opacity-60">Dados do Sistema</h4>
              <ul className="space-y-8 2xl:space-y-10 3xl:space-y-12">
                <li className="flex justify-between items-end border-b border-paper/20 pb-4 3xl:pb-6">
                  <span className="text-paper/80 font-light 2xl:text-lg 3xl:text-xl">Espécies</span>
                  <span className="font-serif text-4xl 2xl:text-6xl 3xl:text-7xl italic">42</span>
                </li>
                <li className="flex justify-between items-end border-b border-paper/20 pb-4 3xl:pb-6">
                  <span className="text-paper/80 font-light 2xl:text-lg 3xl:text-xl">Ciclos</span>
                  <span className="font-serif text-4xl 2xl:text-6xl 3xl:text-7xl italic">05</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer / Issue Number */}
        <div className="anim-target mt-auto pt-8 2xl:pt-12 3xl:pt-16 border-t border-petrol flex items-end justify-between">
          <span className="text-6xl md:text-8xl 2xl:text-9xl 3xl:text-[10rem] font-sans font-light leading-none tracking-tighter">
            NO. 02
          </span>
          
          <div className="flex items-center gap-2 text-lg 2xl:text-xl 3xl:text-2xl font-medium group cursor-pointer">
            <span className="group-hover:underline decoration-1 underline-offset-4">Explorar Dados</span>
            <ArrowRight size={24} className="2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10" />
          </div>
        </div>
      </Container>
    </div>
  );
}
