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
        fluid ? "max-w-full" : "max-w-screen-xl 2xl:max-w-[1440px] 3xl:max-w-[1800px] 4xl:max-w-[2400px]",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
