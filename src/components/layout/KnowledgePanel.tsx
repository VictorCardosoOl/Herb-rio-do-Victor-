import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';

export default function KnowledgePanel() {
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.5, // Match main site duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <aside 
      ref={wrapperRef}
      className="h-full py-12 px-8 overflow-y-auto overscroll-contain no-scrollbar relative"
      data-lenis-prevent
    >
      <div ref={contentRef} className="flex flex-col min-h-full">
        <div className="flex justify-between items-baseline mb-8 border-b border-petrol pb-2 flex-shrink-0">
          <h3 className="font-serif italic text-xl text-petrol">Guia de Cultivo</h3>
          <span className="text-xs font-mono text-petrol uppercase tracking-wider flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-petrol"></div> See All
          </span>
        </div>

        <div className="flex flex-col gap-12 pb-12">
          <div className="group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="font-sans text-4xl font-light text-petrol">1</span>
              <span className="font-mono text-xs text-petrol/60 mt-1">12.06.2026</span>
            </div>
            <h4 className="font-sans font-bold text-lg text-petrol mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
              Substrato - A Fundação da Vida
            </h4>
            <p className="text-sm text-petrol/70 leading-relaxed line-clamp-3">
              Aeração é chave. Misture 40% terra vegetal, 30% perlita e 30% casca de pinus para criar o ambiente perfeito.
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="font-sans text-4xl font-light text-petrol">2</span>
              <span className="font-mono text-xs text-petrol/60 mt-1">14.06.2026</span>
            </div>
            <h4 className="font-sans font-bold text-lg text-petrol mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
              Hidráulica Vegetal e Rega
            </h4>
            <p className="text-sm text-petrol/70 leading-relaxed line-clamp-3">
              Verifique a umidade do solo a 2cm de profundidade. Evite encharcamento para prevenir a hipóxia radicular.
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="font-sans text-4xl font-light text-petrol">3</span>
              <span className="font-mono text-xs text-petrol/60 mt-1">20.06.2026</span>
            </div>
            <h4 className="font-sans font-bold text-lg text-petrol mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
              Fotossíntese e Luz
            </h4>
            <p className="text-sm text-petrol/70 leading-relaxed line-clamp-3">
              Luz indireta brilhante é o ideal. O sol direto pode queimar as folhas mais sensíveis de espécies tropicais.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
