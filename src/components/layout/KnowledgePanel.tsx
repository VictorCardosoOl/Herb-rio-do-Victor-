import { useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

interface KnowledgeItem {
  id: number;
  date: string;
  title: string;
  description: string;
  tag?: string;
}

interface KnowledgeSection {
  title: string;
  items: KnowledgeItem[];
}

const KNOWLEDGE_DATA: Record<string, KnowledgeSection> = {
  '/': {
    title: 'Monitoramento em Tempo Real',
    items: [
      { id: 1, date: '16.03.2026', title: 'Umidade do Solo', description: 'Níveis críticos detectados no Setor A. Recomenda-se irrigação por nebulização.', tag: 'ALERTA' },
      { id: 2, date: '16.03.2026', title: 'Ciclo de Luz', description: 'Fase de fotoperíodo estendido ativa. 14h de luz indireta simulada.', tag: 'SISTEMA' },
      { id: 3, date: '15.03.2026', title: 'Nutrientes NPK', description: 'Balanço estável. Próxima fertilização programada para 5 dias.', tag: 'STATUS' },
    ]
  },
  '/about': {
    title: 'Notas de Pesquisa',
    items: [
      { id: 1, date: '10.03.2026', title: 'Taxonomia Digital', description: 'Implementação de novos algoritmos de reconhecimento foliar via IA.', tag: 'PESQUISA' },
      { id: 2, date: '05.03.2026', title: 'Genética Vegetal', description: 'Estudo sobre a resiliência de espécies tropicais em climas áridos.', tag: 'LAB' },
    ]
  },
  '/services': {
    title: 'Protocolos de Cultivo',
    items: [
      { id: 1, date: '12.03.2026', title: 'Poda Técnica', description: 'Remoção de folhas senescentes para otimização de energia vital.', tag: 'GUIA' },
      { id: 2, date: '08.03.2026', title: 'Controle de Pragas', description: 'Uso de soluções orgânicas baseadas em óleo de Neem.', tag: 'MANUTENÇÃO' },
    ]
  },
  '/portfolio': {
    title: 'Logs de Expedição',
    items: [
      { id: 1, date: '20.02.2026', title: 'Expedição Amazônia', description: 'Coleta de espécimes raros no alto Rio Negro. 12 novas entradas.', tag: 'FIELD' },
      { id: 2, date: '15.01.2026', title: 'Mapeamento Mata Atlântica', description: 'Registro de epífitas em áreas de preservação permanente.', tag: 'GEO' },
    ]
  },
  '/contact': {
    title: 'Canais de Suporte',
    items: [
      { id: 1, date: 'Agora', title: 'Consultoria Direta', description: 'Agende uma análise técnica do seu jardim vertical.', tag: 'LIVE' },
      { id: 2, date: '24/7', title: 'Base de Conhecimento', description: 'Acesse nossa documentação técnica completa via API.', tag: 'DOCS' },
    ]
  }
};

export default function KnowledgePanel() {
  const location = useLocation();
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentData = useMemo(() => {
    return KNOWLEDGE_DATA[location.pathname] || KNOWLEDGE_DATA['/'];
  }, [location.pathname]);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.5,
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
      className="h-full py-12 3xl:py-16 px-8 3xl:px-12 overflow-y-auto overscroll-contain no-scrollbar relative bg-paper"
      data-lenis-prevent
    >
      <div ref={contentRef} className="flex flex-col min-h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            <div className="flex justify-between items-baseline mb-8 border-b border-petrol pb-2 flex-shrink-0">
              <h3 className="font-serif italic text-xl text-petrol">{currentData.title}</h3>
              <span className="text-[10px] font-mono text-petrol uppercase tracking-widest flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-petrol animate-pulse"></div> LIVE
              </span>
            </div>

            <div className="flex flex-col gap-10 pb-12">
              {currentData.items.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-3xl font-light text-petrol/30">{idx + 1}</span>
                      {item.tag && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 border border-petrol/20 text-petrol/60 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-petrol/40 mt-1">{item.date}</span>
                  </div>
                  <h4 className="font-sans font-bold text-base text-petrol mb-2 leading-tight group-hover:text-petrol/70 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-petrol/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-auto pt-8 border-t border-petrol/10">
          <div className="bg-petrol/5 p-4 rounded-lg border border-petrol/5">
            <p className="text-[10px] font-mono text-petrol/40 uppercase tracking-widest leading-relaxed">
              Sistema de Inteligência Herbária v2.4. Acesso restrito a pesquisadores autorizados.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
