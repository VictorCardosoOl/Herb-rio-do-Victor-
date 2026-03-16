import { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import PlantDossier from '@/components/projects/PlantDossier';
import { PLANTS, Plant } from '@/data/plants';
import Container from '@/components/layout/Container';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
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
      <Container>
        {/* Header Section */}
        <div className="mb-16 2xl:mb-24 3xl:mb-32">
          <h1 className="hero-anim text-[length:var(--text-display-hero)] 3xl:text-[14rem] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12 3xl:mb-16">
            Herbário
          </h1>
          
          <div className="hero-anim flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6 3xl:pb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 rounded-full bg-petrol"></div>
              <span className="font-medium text-sm md:text-base 2xl:text-lg 3xl:text-xl uppercase tracking-wide">Engenharia Botânica</span>
            </div>
            <span className="font-mono text-sm md:text-base 2xl:text-lg 3xl:text-xl">VOL. I — 2026</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-12 2xl:gap-16 3xl:gap-20">
          {PLANTS.map((plant, index) => (
            <div key={plant.id} className="hero-anim">
              <ProjectCard 
                item={plant} 
                onClick={() => setSelectedPlant(plant)} 
              />
            </div>
          ))}
        </div>

        {/* Footer / Issue Number */}
        <div className="hero-anim mt-24 2xl:mt-32 3xl:mt-40 pt-8 2xl:pt-12 3xl:pt-16 border-t border-petrol flex items-end justify-between">
          <span className="text-[length:var(--text-display-lg)] 3xl:text-[10rem] font-sans font-light leading-none tracking-tighter">
            NO. 01
          </span>
          
          <button 
            onClick={() => setSelectedPlant(PLANTS[0])}
            className="flex items-center gap-2 text-lg 2xl:text-xl 3xl:text-2xl font-medium hover:gap-4 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-lg px-2"
          >
            <span className="group-hover:underline decoration-1 underline-offset-4">Acessar Dossiê Principal</span>
            <ArrowRight size={24} className="2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10" />
          </button>
        </div>
      </Container>

      {/* Modal de Detalhes (Dossiê) */}
      <ProjectModal 
        isOpen={!!selectedPlant} 
        onClose={() => setSelectedPlant(null)} 
        item={selectedPlant}
      >
        {selectedPlant && <PlantDossier plant={selectedPlant} />}
      </ProjectModal>
    </div>
  );
}
