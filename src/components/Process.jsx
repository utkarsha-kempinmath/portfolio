import React, { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveStepIndex(index);
            }
          }
        });
      },
      { threshold: 0.55, rootMargin: '0px 0px -10% 0px' }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="section-label">Process</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">From initial kickoff to store release.</h2>
          </Reveal>
        </div>

        <div className="process-grid">
          {siteData.process.map((step, idx) => (
            <Reveal
              key={step.step}
              staggerIndex={idx}
            >
              <div
                data-index={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`process-card ${activeStepIndex === idx ? 'process-card-active' : ''}`}
                tabIndex={0}
              >
                <span className="process-number">{step.step}</span>
                <h3 className="process-name">{step.name}</h3>
                <p className="process-line">{step.line}</p>
                {step.extra && (
                  <p className="process-extra-line">{step.extra}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
