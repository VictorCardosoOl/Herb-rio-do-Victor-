import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Lenis from 'lenis';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
  } | null;
  children: React.ReactNode;
}

export default function ProjectModal({ isOpen, onClose, item, children }: ProjectModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const scopedLenisRef = useRef<Lenis | null>(null);

  // Lógica de Scroll Isolado (Lenis) dentro do Modal
  useEffect(() => {
    if (isOpen) {
      // Trava o scroll do body principal
      document.body.style.overflow = 'hidden';
      
      // Inicia Lenis apenas no Modal após um pequeno delay para a animação de entrada
      const timeout = setTimeout(() => {
        if (modalContainerRef.current && modalContentRef.current) {
            const scopedLenis = new Lenis({
                wrapper: modalContainerRef.current,
                content: modalContentRef.current,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                touchMultiplier: 1.5,
            });
            scopedLenisRef.current = scopedLenis;
            
            function raf(time: number) {
                scopedLenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
      }, 400);

      return () => {
        clearTimeout(timeout);
        document.body.style.overflow = '';
        scopedLenisRef.current?.destroy();
      };
    }
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && item && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-petrol/90 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            layoutId={`modal-container-${item.id}`}
            initial={{ y: "100%" }}
            animate={{ 
              y: "2%", 
              transition: { type: "spring", damping: 30, stiffness: 300, mass: 0.8 } 
            }}
            exit={{ 
              y: "100%", 
              transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] } 
            }}
            className="relative w-full h-[95vh] md:h-[98vh] bg-paper rounded-t-[2rem] md:rounded-t-[3rem] shadow-2xl overflow-hidden"
          >
            {/* Botão Fechar */}
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-10 h-10 md:w-16 md:h-16 bg-petrol text-paper rounded-full flex items-center justify-center hover:scale-110 transition-transform focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-petrol"
            >
               <X size={24} />
            </button>

            {/* Scroll Wrapper para Lenis */}
            <div 
              ref={modalContainerRef} 
              className="h-full w-full overflow-y-auto no-scrollbar"
            >
               <div ref={modalContentRef} className="pb-32">
                  {/* Hero Section do Modal */}
                  <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden">
                    <div className="absolute inset-0 bg-petrol mix-blend-multiply opacity-20 z-10 pointer-events-none" />
                    <motion.img 
                      layoutId={`image-${item.id}`}
                      src={item.image} 
                      className="w-full h-full object-cover grayscale-[0.2] contrast-[1.15] brightness-90 saturate-[0.85]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent z-20" />
                  </div>

                  {/* Conteúdo Dinâmico */}
                  <div className="px-[var(--space-container)] -mt-16 md:-mt-32 relative z-30">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <motion.h2 
                        layoutId={`title-${item.id}`}
                        className="text-[length:var(--text-display-lg)] font-serif font-medium leading-[0.85] text-petrol mb-4 md:mb-6"
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p 
                        layoutId={`subtitle-${item.id}`}
                        className="text-[length:var(--text-h3)] text-petrol/60 font-mono uppercase tracking-widest mb-12 md:mb-16"
                      >
                        {item.subtitle}
                      </motion.p>
                    </motion.div>

                    {children}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
