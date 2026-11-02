import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteData.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      setCopied(false);
    }
  };

  const mailtoUrl = `mailto:${siteData.email}?subject=${encodeURIComponent('Project inquiry')}`;

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-header">
            <Reveal>
              <span className="section-label">Contact</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="contact-headline">{siteData.contact.headline}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="contact-intro">{siteData.contact.subline}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="contact-availability-badge">
                <span className="availability-dot"></span>
                <span className="availability-text">{siteData.availability}</span>
              </div>
            </Reveal>
          </div>

          {/* Three simple items in a row (stacked on mobile): Email, LinkedIn, GitHub */}
          <div className="contact-words-row" aria-label="Direct contact channels">
            <Reveal staggerIndex={0} className="contact-word-item">
              <a
                href={mailtoUrl}
                className="word-link"
                aria-label={`Send email to ${siteData.email} (opens default email client)`}
              >
                <span className="word-text">Email</span>
                <span className="word-arrow" aria-hidden="true">↗</span>
              </a>
            </Reveal>

            <Reveal staggerIndex={1} className="contact-word-item">
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="word-link"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                <span className="word-text">LinkedIn</span>
                <span className="word-arrow" aria-hidden="true">↗</span>
              </a>
            </Reveal>

            <Reveal staggerIndex={2} className="contact-word-item">
              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="word-link"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <span className="word-text">GitHub</span>
                <span className="word-arrow" aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>

          {/* Copy email utility button */}
          <Reveal delay={320} className="contact-copy-row">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn btn-outline btn-sm copy-email-btn"
              aria-live="polite"
              aria-label={`Copy email address ${siteData.email}`}
            >
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <span className="contact-email-hint">{siteData.email}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
