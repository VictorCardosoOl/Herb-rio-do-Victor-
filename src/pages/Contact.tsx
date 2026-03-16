import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight, Github, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import Container from '@/components/layout/Container';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.anim-target', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-full w-full py-24 2xl:py-32 3xl:py-40">
      <Container>
        {/* Header Section - Editorial Style */}
        <div className="mb-16 2xl:mb-24 3xl:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 3xl:mb-16">
            <h1 className="anim-target text-[clamp(4rem,15vw,12rem)] 3xl:text-[14rem] font-serif leading-[0.85] tracking-tight text-petrol">
              Contato
            </h1>
            <div className="anim-target max-w-sm 3xl:max-w-md">
              <p className="text-sm md:text-base 3xl:text-lg text-petrol/60 leading-relaxed font-light">
                Para consultas técnicas, parcerias botânicas ou acesso a espécimes raros, utilize nossos canais oficiais de comunicação.
              </p>
            </div>
          </div>
          
          <div className="anim-target flex items-center justify-between border-b border-petrol/20 pb-4 3xl:pb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 rounded-full bg-petrol animate-pulse"></div>
              <span className="font-mono text-[10px] 3xl:text-xs uppercase tracking-[0.2em] text-petrol/60">Canais de Comunicação</span>
            </div>
            <span className="font-mono text-[10px] 3xl:text-xs uppercase tracking-[0.2em] text-petrol/60">VOL. V — 2026</span>
          </div>
        </div>

        {/* Main Content - Elegant Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 2xl:gap-20 3xl:gap-24 mb-24 2xl:mb-32 3xl:mb-40">
          
          {/* Left Column - Direct Channels */}
          <div className="lg:col-span-4 space-y-12">
            <div className="anim-target space-y-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-petrol/40 border-b border-petrol/10 pb-4">
                01. Escritório Central
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={18} className="text-petrol/40 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold mb-1">Localização</h4>
                    <p className="text-sm text-petrol/60 font-light">Av. Paulista, 1000 — Estufa 04<br />São Paulo, SP — Brasil</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-petrol/40 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold mb-1">Telefone</h4>
                    <p className="text-sm text-petrol/60 font-light">+55 11 99999-9999</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-petrol/40 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold mb-1">Email</h4>
                    <p className="text-sm text-petrol/60 font-light">contato@herbarium.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="anim-target space-y-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-petrol/40 border-b border-petrol/10 pb-4">
                02. Redes Digitais
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <a href="#" className="flex items-center justify-between p-4 border border-petrol/10 hover:bg-petrol hover:text-paper transition-all duration-500 group">
                  <div className="flex items-center gap-4">
                    <Instagram size={20} />
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 border border-petrol/10 hover:bg-petrol hover:text-paper transition-all duration-500 group">
                  <div className="flex items-center gap-4">
                    <Github size={20} />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 border border-petrol/10 hover:bg-petrol hover:text-paper transition-all duration-500 group">
                  <div className="flex items-center gap-4">
                    <MessageCircle size={20} />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </div>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Elegant Form */}
          <div className="lg:col-span-8">
            <div className="anim-target bg-petrol/5 p-8 md:p-16 border border-petrol/10 h-full">
              <h2 className="text-xs font-mono uppercase tracking-widest text-petrol/40 mb-12">
                03. Mensagem Direta
              </h2>
              
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-petrol/40 group-focus-within:text-petrol transition-colors">Nome Completo</label>
                    <input type="text" className="w-full bg-transparent border-b border-petrol/20 py-2 focus:outline-none focus:border-petrol transition-colors font-serif text-xl" placeholder="Victor Moraes" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-petrol/40 group-focus-within:text-petrol transition-colors">Email Técnico</label>
                    <input type="email" className="w-full bg-transparent border-b border-petrol/20 py-2 focus:outline-none focus:border-petrol transition-colors font-serif text-xl" placeholder="victor@exemplo.com" />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-petrol/40 group-focus-within:text-petrol transition-colors">Assunto</label>
                  <select className="w-full bg-transparent border-b border-petrol/20 py-2 focus:outline-none focus:border-petrol transition-colors font-serif text-xl appearance-none">
                    <option>Consulta Técnica</option>
                    <option>Parceria Institucional</option>
                    <option>Acesso ao Herbário</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-petrol/40 group-focus-within:text-petrol transition-colors">Mensagem</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-petrol/20 py-2 focus:outline-none focus:border-petrol transition-colors font-serif text-xl resize-none" placeholder="Descreva sua solicitação..."></textarea>
                </div>

                <button className="w-full md:w-auto bg-petrol text-paper px-12 py-4 text-sm font-mono uppercase tracking-widest hover:bg-petrol/90 transition-all flex items-center justify-center gap-4 group">
                  Enviar Dossiê
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer / Issue Number */}
        <div className="anim-target pt-8 2xl:pt-12 3xl:pt-16 border-t border-petrol flex items-end justify-between">
          <span className="text-[length:var(--text-display-lg)] 3xl:text-[10rem] font-sans font-light leading-none tracking-tighter">
            NO. 05
          </span>
          <div className="text-right">
            <p className="text-[10px] 3xl:text-xs font-mono text-petrol/40 uppercase tracking-widest">Disponibilidade</p>
            <p className="text-sm 2xl:text-base 3xl:text-lg font-serif italic">Seg — Sex, 09:00 — 18:00</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
