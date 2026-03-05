import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
}

export default function Container({ children, className, fluid = false, ...props }: ContainerProps) {
  return (
    <div 
      className={cn(
        "w-full mx-auto px-[var(--space-container)]",
        fluid ? "max-w-full" : "max-w-[1920px]",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
