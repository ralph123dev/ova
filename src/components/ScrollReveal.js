import React, { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children with a scroll-triggered entrance animation.
 * Props:
 *   direction: 'up' | 'left' | 'right' | 'fade'  (default: 'up')
 *   delay:     number in ms                        (default: 0)
 *   className: extra CSS classes
 */
export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('sr-visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass =
    direction === 'left'  ? 'sr-from-left'  :
    direction === 'right' ? 'sr-from-right' :
    direction === 'fade'  ? 'sr-from-fade'  :
    'sr-from-up';

  return (
    <div ref={ref} className={`sr-reveal ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
