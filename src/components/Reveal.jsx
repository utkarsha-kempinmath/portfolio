import React, { useRef, useState, useEffect } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  staggerIndex,
  as: Component = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If prefers-reduced-motion, reveal immediately without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger items inside a group by 80ms each, capped at 5 steps (indices 0..4)
  const computedDelay =
    typeof staggerIndex === 'number'
      ? Math.min(staggerIndex, 4) * 80
      : delay;

  const style =
    computedDelay > 0 && isRevealed
      ? { transitionDelay: `${computedDelay}ms` }
      : undefined;

  return (
    <Component
      ref={ref}
      className={`reveal-item ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}

