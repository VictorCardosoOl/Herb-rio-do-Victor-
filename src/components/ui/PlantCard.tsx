import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { ArrowUpRight } from 'lucide-react';

interface PlantCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  index: number;
}

export default function PlantCard({ title, subtitle, description, image, index }: PlantCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;

    if (!card || !img) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      card,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: index * 0.1 }
    );

    // Parallax effect on hover
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(img, {
        x: x * 20,
        y: y * 20,
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, [index]);

  return (
    <div ref={cardRef} className="group relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-paper-dark cursor-pointer">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-petrol/20 group-hover:bg-petrol/0 transition-colors duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-petrol/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end mb-2">
          <h3 className="text-2xl font-serif text-paper italic">{title}</h3>
          <ArrowUpRight className="text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
        </div>
        <p className="text-xs font-mono text-paper/80 uppercase tracking-widest mb-2">{subtitle}</p>
        <p className="text-sm text-paper/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
      </div>
    </div>
  );
}
