import React, { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap-setup';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = 'primary',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(button, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const baseStyles = 'relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-petrol text-paper hover:bg-petrol-light focus:ring-petrol',
    secondary: 'bg-paper text-petrol border border-petrol hover:bg-paper-dark focus:ring-petrol',
    outline: 'bg-transparent text-petrol border border-petrol hover:bg-petrol hover:text-paper focus:ring-petrol',
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  if (href) {
    return (
      <Link to={href} ref={buttonRef as React.RefObject<HTMLAnchorElement>} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={buttonRef as React.RefObject<HTMLButtonElement>} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
