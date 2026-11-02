import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';

export default function Services() {
  const [activeTab, setActiveTab] = useState('startups');

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentService = siteData.services.find((s) => s.id === activeTab) || siteData.services[0];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="section-label">Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">Direct engineering, zero agency bloat.</h2>
          </Reveal>
        </div>

        {/* Tab switch buttons */}
        <Reveal delay={160}>
          <div className="services-tabs-nav" role="tablist" aria-label="Services by audience">
            {siteData.services.map((track) => (
              <button
                key={track.id}
                role="tab"
                aria-selected={activeTab === track.id}
                aria-controls={`service-panel-${track.id}`}
                id={`tab-${track.id}`}
                type="button"
                className={`services-tab-btn ${activeTab === track.id ? 'active' : ''}`}
                onClick={() => setActiveTab(track.id)}
              >
                {track.tabLabel || track.title.split(':')[0]}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active tab content panel */}
        <div
          id={`service-panel-${currentService.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentService.id}`}
          className="services-tab-panel"
          key={currentService.id}
        >
          <div className="service-card service-card-active">
            <div className="service-card-top">
              <span className="service-timeline">{currentService.timeline}</span>
              <h3 className="service-title">{currentService.title}</h3>
            </div>

            <ul className="service-list">
              {currentService.items.map((item, idx) => (
                <Reveal key={idx} staggerIndex={idx} as="li" className="service-item">
                  <span className="service-dash" aria-hidden="true">—</span>
                  <span className="service-text">{item}</span>
                </Reveal>
              ))}
            </ul>

            <div className="service-card-cta">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn btn-outline btn-sm"
              >
                <span>Inquire about this</span>
                <span className="link-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
