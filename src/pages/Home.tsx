import { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import PlantDossier from '@/components/projects/PlantDossier';
import { PLANTS, Plant } from '@/data/plants';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
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
        <h1 className="hero-anim text-[length:var(--text-display-hero)] font-serif leading-[0.85] tracking-tight text-petrol mb-8 2xl:mb-12">
          Herbário
        </h1>
        
        <div className="hero-anim flex items-center justify-between border-b border-petrol pb-4 2xl:pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-petrol"></div>
            <span className="font-medium text-sm md:text-base 2xl:text-lg uppercase tracking-wide">Engenharia Botânica</span>
          </div>
          <span className="font-mono text-sm md:text-base 2xl:text-lg">VOL. I — 2026</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 gap-12 2xl:gap-24">
        {PLANTS.map((plant, index) => (
          <div key={plant.id} className="hero-anim">
            <ProjectCard 
              item={plant} 
              onClick={() => setSelectedPlant(plant)} 
            />
          </div>
        ))}
      </div>

      {/* Modal de Detalhes (Dossiê) */}
      <ProjectModal 
        isOpen={!!selectedPlant} 
        onClose={() => setSelectedPlant(null)} 
        item={selectedPlant}
      >
        {selectedPlant && <PlantDossier plant={selectedPlant} />}
      </ProjectModal>

      {/* Footer / Issue Number */}
      <div className="hero-anim mt-24 2xl:mt-32 pt-8 2xl:pt-12 border-t border-petrol flex items-end justify-between">
        <span className="text-6xl md:text-8xl 2xl:text-9xl font-sans font-light leading-none tracking-tighter">
          NO. 01
        </span>
        
        <button 
          onClick={() => setSelectedPlant(PLANTS[0])}
          className="flex items-center gap-2 text-lg 2xl:text-xl font-medium hover:gap-4 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-lg px-2"
        >
          <span className="group-hover:underline decoration-1 underline-offset-4">Acessar Dossiê Principal</span>
          <ArrowRight size={24} className="2xl:w-8 2xl:h-8" />
        </button>
      </div>
    </div>
  );
}
