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
            className="relative w-full h-[98vh] bg-paper rounded-t-[3rem] shadow-2xl overflow-hidden"
          >
            {/* Botão Fechar */}
            <button 
              onClick={onClose} 
              className="absolute top-8 right-8 z-50 w-12 h-12 2xl:w-16 2xl:h-16 bg-petrol text-paper rounded-full flex items-center justify-center hover:scale-110 transition-transform"
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
                  <div className="relative w-full aspect-[16/9] 2xl:aspect-[21/9] overflow-hidden">
                    <motion.img 
                      layoutId={`image-${item.id}`}
                      src={item.image} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
                  </div>

                  {/* Conteúdo Dinâmico */}
                  <div className="px-8 md:px-24 2xl:px-48 -mt-24 2xl:-mt-48 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <motion.h2 
                        layoutId={`title-${item.id}`}
                        className="text-5xl md:text-8xl 2xl:text-[10rem] font-serif font-medium leading-[0.85] text-petrol mb-6"
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p 
                        layoutId={`subtitle-${item.id}`}
                        className="text-xl md:text-2xl 2xl:text-3xl text-petrol/60 font-mono uppercase tracking-widest mb-16"
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
