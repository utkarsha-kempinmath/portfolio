import React from 'react';
import { siteData } from '../data/siteData';
import Portrait from './Portrait';
import CountUpNumber from './CountUpNumber';

export default function Hero() {
  const { hero, about } = siteData;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section hero-section hero-load-fade" id="about">
      <span id="hero" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          {/* Label + Compact portrait on mobile */}
          <div className="hero-label-row">
            <div className="hero-mobile-avatar">
              <Portrait size="about" alt="Utkarsha Kempinmath portrait" />
            </div>
            <div className="hero-label-info">
              {/* <span className="section-label">{hero.label}</span>
              <span className="hero-author-tag">{siteData.name}</span> */}
            </div>
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-line hero-line-1">
              {hero.headlineLine1 || "I build mobile and web products,"}
            </span>
            <span className="hero-headline-line hero-line-2">
              {hero.headlineLine2 || "from first idea to live launch."}
            </span>
          </h1>

          <p className="hero-subline">{hero.subline}</p>

          <div className="hero-actions">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-primary"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="btn btn-outline"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Stat counters: 65, 70%, 200+ count up when 40% in view */}
          <div className="hero-stats-row" aria-label="Key statistics">
            {hero.stats?.map((stat, idx) => (
              <div key={idx} className="hero-stat-item">
                <div className="hero-stat-value">
                  <CountUpNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1600}
                    minWidth={stat.value === 200 ? '3.2ch' : '2.4ch'}
                  />
                </div>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Compact About Bio line */}

        </div>

        {/* Desktop portrait column: compact and balanced */}
        <div className="hero-portrait-col desktop-only">
          <div className="hero-portrait-frame">
            <Portrait size="hero" alt="Utkarsha Kempinmath — Full-stack mobile developer" />
          </div>

        </div>
      </div>
    </section>
  );
}
