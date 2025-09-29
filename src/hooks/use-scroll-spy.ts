"use client";

import { useState, useEffect } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  options?: {
    offset?: number;
    root?: Element | null;
  }
) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop + (options?.offset ?? 0);
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      
      // If no section is in view (e.g., at the top or bottom of the page),
      // we can try to infer the closest one. For now, let's keep it simple.
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options, activeSection]);

  return activeSection;
}
