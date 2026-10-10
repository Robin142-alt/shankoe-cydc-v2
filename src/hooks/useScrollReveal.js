import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using Intersection Observer.
 * Returns a ref to attach to elements and an `isVisible` flag.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

/**
 * Hook that auto-attaches scroll reveal to all elements with [data-reveal] within a container.
 * Adds 'revealed' class when scrolled into view with staggered delays.
 */
export function useAutoReveal(containerRef) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const revealElements = container.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.revealDelay || '0';
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('revealed');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}

/**
 * Global document-level reveal observer.
 * Call once from App root — scans the entire document for [data-reveal] elements
 * and handles them with staggered entrance animations.
 * Re-runs whenever `pageKey` changes (page navigation).
 */
export function useGlobalReveal(pageKey) {
  useEffect(() => {
    // Small delay to let React finish rendering the new page
    const init = setTimeout(() => {
      const elements = document.querySelectorAll('[data-reveal]');
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = el.dataset.revealDelay || '0';
              el.style.transitionDelay = `${delay}ms`;
              el.classList.add('revealed');
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
      );

      elements.forEach((el) => {
        // Reset so re-navigation re-animates
        el.classList.remove('revealed');
        el.style.transitionDelay = '';
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(init);
  }, [pageKey]);
}
