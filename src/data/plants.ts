export interface Plant {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  dossier: {
    structuralAnalysis: string;
    fluidDynamics: {
      capillarity: string;
      evapotranspiration: string;
    };
    geometry: string;
    specs: {
      light: string;
      humidity: string;
      growth: string;
    };
    detailImage: string;
  };
}

export const PLANTS: Plant[] = [
  {
    id: 'monstera-deliciosa',
    title: 'Monstera deliciosa',
    subtitle: 'Engenharia de Luz Difusa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2000&auto=format&fit=crop',
    category: 'Análise Técnica',
    dossier: {
      structuralAnalysis: 'A Monstera deliciosa opera como uma rede de captação de fótons otimizada. Suas fenestrações (buracos) não são aleatórias; são algoritmos biológicos que permitem que a luz passe para as folhas inferiores enquanto reduzem a carga mecânica do vento.',
      fluidDynamics: {
        capillarity: 'Sistema de transporte de xilema capaz de elevar nutrientes a até 20 metros em seu habitat natural, utilizando pressão negativa e coesão molecular.',
        evapotranspiration: 'Regulação térmica ativa através dos estômatos, mantendo a temperatura foliar até 4°C abaixo da temperatura ambiente em picos de calor.'
      },
      geometry: 'A disposição das folhas segue a sequência de Fibonacci, garantindo que nenhuma folha bloqueie completamente a outra. É uma solução de engenharia para o problema de empilhamento espacial em ambientes de baixa luminosidade.',
      specs: {
        light: '1500-2500 lux',
        humidity: '> 60%',
        growth: '0.8m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'samambaia-nephrolepis',
    title: 'Nephrolepis exaltata',
    subtitle: 'Sistemas Fractais de Alta Umidade',
    image: 'https://images.unsplash.com/photo-1595224326116-17b545d9e504?q=80&w=2000&auto=format&fit=crop',
    category: 'Análise Primitiva',
    dossier: {
      structuralAnalysis: 'Apresenta uma arquitetura fractal rigorosa onde cada fronde replica a estrutura da folha principal. Este design maximiza exponencialmente a área de superfície para captação de umidade e fótons em ambientes de sub-bosque denso.',
      fluidDynamics: {
        capillarity: 'Rede vascular primitiva, porém altamente eficiente, projetada para transporte rápido de fluidos em ambientes saturados. Ausência de tecidos lenhosos complexos.',
        evapotranspiration: 'Possui uma taxa de transpiração altíssima, atuando como umidificador natural e regulador microclimático do ambiente ao seu redor.'
      },
      geometry: 'Simetria bilateral com subdivisões fractais recursivas. A curvatura das frondes segue catenárias naturais sob a influência da gravidade e peso da água.',
      specs: {
        light: '800-1500 lux',
        humidity: '> 70%',
        growth: 'Rápido (Contínuo)'
      },
      detailImage: 'https://images.unsplash.com/photo-1605553634123-5e5e6e33658d?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'sansevieria-trifasciata',
    title: 'Sansevieria trifasciata',
    subtitle: 'Resiliência Estrutural e Purificação CAM',
    image: 'https://images.unsplash.com/photo-1598880940080-c9a108269151?q=80&w=2000&auto=format&fit=crop',
    category: 'Otimização Metabólica',
    dossier: {
      structuralAnalysis: 'Folhas verticalizadas e extremamente rígidas com alta concentração de fibras esclerenquimáticas. Projetadas estruturalmente para resistir a estresse mecânico severo e períodos prolongados de seca (estresse hídrico).',
      fluidDynamics: {
        capillarity: 'Armazenamento hídrico de alta densidade no mesofilo esponjoso. O sistema radicular atua como âncora e reservatório secundário.',
        evapotranspiration: 'Utiliza o Metabolismo Ácido das Crassuláceas (CAM). Os estômatos abrem exclusivamente à noite para trocas gasosas, minimizando a perda de água por evaporação diurna.'
      },
      geometry: 'Crescimento vertical cilíndrico ou plano-lanceolado. Esta geometria minimiza a área de superfície exposta à radiação solar direta durante o pico do meio-dia.',
      specs: {
        light: '500-5000 lux',
        humidity: 'Tolerante (Baixa)',
        growth: '0.2m / ano'
      },
      detailImage: 'https://images.unsplash.com/photo-1614594805320-e8cb404503e0?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'begonia-maculata',
    title: 'Begônia Maculata',
    subtitle: 'Fotônica Foliar e Pigmentação',
    image: 'https://images.unsplash.com/photo-1612363228103-b09a081c782b?q=80&w=2000&auto=format&fit=crop',
    category: 'Engenharia Óptica',
    dossier: {
      structuralAnalysis: 'As máculas (pontos prateados) na superfície adaxial atuam como micro-refletores ópticos. O verso da folha, rico em antocianinas (vermelho), funciona como um espelho biológico, refletindo fótons não absorvidos de volta para o mesofilo fotossintético.',
      fluidDynamics: {
        capillarity: 'Caules suculentos e nodosos adaptados para armazenamento temporário de água, compensando flutuações rápidas na umidade do solo.',
        evapotranspiration: 'Altamente sensível a correntes de ar convectivas. Exige um microclima estável para evitar o colapso do gradiente de pressão de vapor nas bordas das folhas.'
      },
      geometry: 'Folhas fortemente assimétricas (formato "asa de anjo"). Esta assimetria é otimizada para que as folhas superiores não sombreiem perfeitamente as inferiores no eixo de crescimento helicoidal.',
      specs: {
        light: '1000-2000 lux',
        humidity: '> 60%',
        growth: 'Moderado'
      },
      detailImage: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop'
    }
  }
];
