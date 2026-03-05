import { motion } from 'framer-motion';
import { Droplets, Sun, Zap, Activity } from 'lucide-react';
import { Plant } from '@/data/plants';

interface PlantDossierProps {
  plant: Plant;
}

export default function PlantDossier({ plant }: PlantDossierProps) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + (i * 0.1), duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-section)]">
      {/* Coluna de Texto Principal */}
      <div className="lg:col-span-7 space-y-[var(--space-card)]">
        <motion.section 
          custom={0} initial="hidden" animate="visible" variants={revealVariants}
          className="space-y-6"
        >
          <h3 className="text-sm font-mono uppercase tracking-widest text-petrol/40 border-b border-petrol/10 pb-4">
            01. Análise Estrutural
          </h3>
          <p className="text-[length:var(--text-h2)] font-light leading-relaxed text-petrol/80">
            {plant.dossier.structuralAnalysis}
          </p>
        </motion.section>

        <motion.section 
          custom={1} initial="hidden" animate="visible" variants={revealVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-mono uppercase tracking-widest text-petrol/40 border-b border-petrol/10 pb-4">
            02. Dinâmica de Fluidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-petrol/5 p-8 border border-petrol/10">
              <Droplets className="mb-6 text-petrol" size={32} />
              <h4 className="text-xl font-serif mb-3">Capilaridade Vertical</h4>
              <p className="text-sm text-petrol/60 leading-relaxed">
                {plant.dossier.fluidDynamics.capillarity}
              </p>
            </div>
            <div className="bg-petrol/5 p-8 border border-petrol/10">
              <Activity className="mb-6 text-petrol" size={32} />
              <h4 className="text-xl font-serif mb-3">Evapotranspiração</h4>
              <p className="text-sm text-petrol/60 leading-relaxed">
                {plant.dossier.fluidDynamics.evapotranspiration}
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          custom={2} initial="hidden" animate="visible" variants={revealVariants}
          className="space-y-6"
        >
          <h3 className="text-sm font-mono uppercase tracking-widest text-petrol/40 border-b border-petrol/10 pb-4">
            03. Geometria Sagrada
          </h3>
          <p className="text-[length:var(--text-body-lg)] text-petrol/70 leading-relaxed">
            {plant.dossier.geometry}
          </p>
        </motion.section>
      </div>

      {/* Coluna de Dados Técnicos / Sidebar */}
      <div className="lg:col-span-5 space-y-8">
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={revealVariants}
          className="bg-petrol text-paper p-8 md:p-12 2xl:p-16 space-y-12"
        >
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">Especificações de Sistema</h4>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-paper/10 pb-4">
                <div className="flex items-center gap-3">
                  <Sun size={16} className="opacity-50" />
                  <span className="text-sm font-light">Luminosidade Ideal</span>
                </div>
                <span className="font-serif text-xl md:text-2xl italic text-right">{plant.dossier.specs.light}</span>
              </div>
              <div className="flex justify-between items-end border-b border-paper/10 pb-4">
                <div className="flex items-center gap-3">
                  <Droplets size={16} className="opacity-50" />
                  <span className="text-sm font-light">Umidade Crítica</span>
                </div>
                <span className="font-serif text-xl md:text-2xl italic text-right">{plant.dossier.specs.humidity}</span>
              </div>
              <div className="flex justify-between items-end border-b border-paper/10 pb-4">
                <div className="flex items-center gap-3">
                  <Zap size={16} className="opacity-50" />
                  <span className="text-sm font-light">Taxa de Crescimento</span>
                </div>
                <span className="font-serif text-xl md:text-2xl italic text-right">{plant.dossier.specs.growth}</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-paper/10">
            <p className="text-xs font-mono leading-relaxed opacity-40 uppercase tracking-widest">
              Dados coletados via monitoramento sensorial em ambiente controlado. VOL I.
            </p>
          </div>
        </motion.div>

        {/* Imagem de Detalhe Técnica */}
        <motion.div 
          custom={4} initial="hidden" animate="visible" variants={revealVariants}
          className="aspect-square bg-petrol/5 border border-petrol/10 overflow-hidden"
        >
          <img 
            src={plant.dossier.detailImage} 
            alt={`${plant.title} Detail`} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}
