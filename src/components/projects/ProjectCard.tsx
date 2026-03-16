import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

interface ProjectCardProps {
  item: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    category: string;
  };
  onClick: () => void;
}

export default function ProjectCard({ item, onClick }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // 1. Detectar Scroll relativo ao card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"]
  });

  // 2. Suavizar Física do scroll
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20, stiffness: 100, mass: 0.5
  });
  
  // 3. Transformações Visuais (ClipPath e Parallax)
  const clipPath = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(10% 8% 10% 8% round 4px)", "inset(0% 0% 0% 0% round 0px)"]
  );
  
  const yParallax = useTransform(smoothProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-20%", "20%"]);

  return (
    <div 
      ref={containerRef} 
      onClick={onClick} 
      className="group cursor-pointer py-[var(--space-card)]"
    >
      {/* Wrapper com ClipPath Animado */}
      <motion.div 
        style={{ clipPath: isMobile ? undefined : clipPath }} 
        className="relative aspect-[3/4] overflow-hidden bg-petrol/5"
      >
        {/* Imagem com Parallax e LayoutId */}
        <motion.div className="w-full h-full relative overflow-hidden">
           {/* Filtro de Cor Petrol Overlay */}
           <div className="absolute inset-0 bg-petrol mix-blend-multiply opacity-20 z-10 pointer-events-none" />
           
           <motion.img 
              layoutId={`image-${item.id}`}
              src={item.image} 
              alt={item.title}
              style={{ scale: 1.3, y: yParallax }} 
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.15] brightness-90 saturate-[0.85]"
              referrerPolicy="no-referrer"
           />
        </motion.div>

        {/* Overlay de Hover */}
        <div className="absolute inset-0 bg-petrol/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Botão Centralizado */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10">
           <div className="w-16 h-16 2xl:w-24 2xl:h-24 bg-paper rounded-full flex items-center justify-center text-petrol shadow-xl">
              <ArrowUpRight size={isMobile ? 24 : 32} />
           </div>
        </div>
      </motion.div>

      {/* Título e Meta com LayoutId */}
      <div className="mt-8 2xl:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-4xl">
          <motion.h3 
            layoutId={`title-${item.id}`} 
            className="text-[length:var(--text-h2)] font-serif font-medium leading-tight mb-4"
          >
             {item.title}
          </motion.h3>
          <motion.p 
            layoutId={`subtitle-${item.id}`}
            className="text-[length:var(--text-body-lg)] text-petrol/60 font-mono uppercase tracking-wider"
          >
            {item.subtitle}
          </motion.p>
        </div>
        
        <div className="flex items-center gap-4 text-sm 2xl:text-base font-mono text-petrol/40">
          <span className="italic">{item.category}</span>
          <span>•</span>
          <span>Acessar Dossiê</span>
        </div>
      </div>
    </div>
  );
}
