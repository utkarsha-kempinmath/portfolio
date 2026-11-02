import React, { useState, useEffect, useRef } from 'react';

// Ease-out cubic: 1 - (1 - t)^3
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUpNumber({
  value,
  suffix = '',
  duration = 1600,
  minWidth,
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If prefers-reduced-motion, show final value immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      setHasStarted(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setCount(value);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Start count only after element is at least 40% visible
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();

          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = Math.floor(easedProgress * value);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasStarted]);

  // Estimate min-width if not explicitly provided based on length of number string
  const numDigits = String(value).length;
  const computedMinWidth = minWidth || `${numDigits + 0.2}ch`;

  return (
    <span
      ref={elementRef}
      className={`countup-number-wrapper ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      <span
        className="countup-digits"
        style={{
          display: 'inline-block',
          minWidth: computedMinWidth,
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {count}
      </span>
      {suffix && <span className="countup-suffix">{suffix}</span>}
    </span>
  );
}

