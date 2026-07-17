"use client";

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimatedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const animationClasses = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  slideInLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  slideInRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
};

export const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
    delay,
  });

  const animationConfig = animationClasses[animation];
  const baseClasses = 'transition-all duration-700 ease-out';
  const visibilityClasses = isVisible 
    ? animationConfig.animate 
    : animationConfig.initial;

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${visibilityClasses} ${className}`}
    >
      {children}
    </div>
  );
};
