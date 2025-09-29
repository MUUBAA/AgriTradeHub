"use client";

import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useOnScreen } from '@/hooks/use-on-screen';

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function AnimateOnScroll({
  children,
  className,
  delay = 'delay-0',
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out',
        delay,
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </Tag>
  );
}
