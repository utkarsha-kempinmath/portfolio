import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Reveal from '../components/Reveal';

// Image assets mapping
import monthend1Jpg from '../assets/monthend-1.jpg';
import monthend2Jpg from '../assets/monthend-2.jpg';
import monthend3Jpg from '../assets/monthend-3.jpg';
import mindbuddy1Jpg from '../assets/mindbuddy-1.jpg';
import mindbuddy2Jpg from '../assets/mindbuddy-2.jpg';
import aarogya1Jpg from '../assets/aarogya-1.jpg';
import aarogya2Jpg from '../assets/aarogya-2.jpg';
import aarogya3Jpg from '../assets/aarogya-3.jpg';

// App logos
import monthendLogo from '../assets/monthend-logo.jpg';
import aarogyaLogo from '../assets/aarogya-logo.jpg';
import mindbuddyLogo from '../assets/mindbuddy-logo.svg';

const logoMap = {
  monthend: monthendLogo,
  'aarogya-seva': aarogyaLogo,
  mindbuddy: mindbuddyLogo,
};

const galleryAssetMap = {
  '/assets/monthend-1.jpg': monthend1Jpg,
  '/assets/monthend-2.jpg': monthend2Jpg,
  '/assets/monthend-3.jpg': monthend3Jpg,
  '/assets/mindbuddy-1.jpg': mindbuddy1Jpg,
  '/assets/mindbuddy-2.jpg': mindbuddy2Jpg,
  '/assets/aarogya-1.jpg': aarogya1Jpg,
  '/assets/aarogya-2.jpg': aarogya2Jpg,
  '/assets/aarogya-3.jpg': aarogya3Jpg,
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setLightboxOpen(false);
    if (project) {
      document.title = `${project.title} — Utkarsha Kempinmath Case Study`;
    }
  }, [slug, project]);

  const galleryImages = (project?.gallery || []).map((item) => ({
    ...item,
    resolvedSrc: galleryAssetMap[item.src] || item.src,
  }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextLightboxImage = useCallback(() => {
    if (galleryImages.length === 0) return;
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevLightboxImage = useCallback(() => {
    if (galleryImages.length === 0) return;
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightboxImage();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  if (!project) {
    return (
      <div className="section not-found-section">
        <div className="container">
          <span className="section-label">404</span>
          <h1 className="not-found-title">Case study not found</h1>
          <p className="not-found-text">The requested project study does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  // Specific section finders to guarantee strict user order
  const problemSection = project.sections?.find((s) => s.heading.toLowerCase().includes('problem'));
  const builtSection = project.sections?.find((s) => s.heading.toLowerCase().includes('built'));
  const decisionsSection = project.sections?.find((s) => s.heading.toLowerCase().includes('decision'));
  const resultSection = project.sections?.find((s) => s.heading.toLowerCase().includes('result'));

  // Structured sections
  const structuredSections = [
    { title: 'The Problem', section: problemSection || project.sections?.[0] },
    { title: 'What I Built', section: builtSection || project.sections?.[1] },
    { title: 'Key Decisions & Architecture', section: decisionsSection || project.sections?.[2] },
    { title: 'Result & Proof', section: resultSection || project.sections?.[3] },
  ].filter((item) => item.section);

  const activeMainImage = galleryImages[activeImageIndex] || galleryImages[0];

  return (
    <article className="case-study-page">
      {/* 1. Back link */}
      <div className="case-study-topbar">
        <div className="container">
          <Link to="/#work" className="back-link">
            <span aria-hidden="true">←</span>
            <span>All Selected Work</span>
          </Link>
        </div>
      </div>

      {/* Case Study Header */}
      <header className="case-study-header">
        <div className="container">
          {/* 2. Label */}
          <Reveal>
            <span className="section-label">Case Study &amp; Technical Breakdown</span>
          </Reveal>

          {/* 3. Title */}
          <Reveal delay={80}>
            <div className="case-study-title-row">
              {logoMap[project.slug] && (
                <div className="case-study-logo-badge">
                  <img
                    src={logoMap[project.slug]}
                    alt={`${project.title} logo`}
                    width={52}
                    height={52}
                    className="case-study-logo-img"
                  />
                </div>
              )}
              <h1 className="case-study-title">{project.title}</h1>
            </div>
          </Reveal>

          {/* 4. One-line summary */}
          <Reveal delay={160}>
            <p className="case-study-outcome">{project.outcome}</p>
          </Reveal>

          {/* 5. Meta row: Role, Timeline, Stack */}
          <Reveal delay={240}>
            <div className="case-study-meta-row">
              <div className="meta-card meta-card-role">
                <span className="meta-card-label">Role</span>
                <span className="meta-card-value">{project.meta.role}</span>
              </div>

              <div className="meta-card meta-card-timeline">
                <span className="meta-card-label">Timeline</span>
                <span className="meta-card-value">{project.meta.timeline}</span>
              </div>

              <div className="meta-card meta-card-stack">
                <span className="meta-card-label">Stack</span>
                <div className="meta-card-tags">
                  {project.meta.stack.map((tech, idx) => (
                    <span key={idx} className="tag tag-meta">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* 6. IMMEDIATELY the project images */}
      {galleryImages.length > 0 && (
        <section className="case-study-gallery-section" aria-label="Project images gallery">
          <div className="container">
            {/* Desktop View: Large Main Image + Clickable Thumbnails */}
            <div className="desktop-gallery-view">
              <Reveal>
                <div
                  className="main-image-frame"
                  onClick={() => openLightbox(activeImageIndex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(activeImageIndex);
                    }
                  }}
                  aria-label={`View larger image: ${activeMainImage.title}`}
                >
                  <img
                    src={activeMainImage.resolvedSrc}
                    alt={activeMainImage.title}
                    width={800}
                    height={500}
                    className="gallery-main-img"
                  />
                  <div className="main-image-overlay-hint">
                    <span>Click to expand</span>
                  </div>
                </div>
              </Reveal>

              <div className="main-image-caption">
                <span className="gallery-caption-title">{activeMainImage.title}</span>
                <span className="gallery-caption-dot">•</span>
                <span className="gallery-caption-desc">{activeMainImage.description}</span>
              </div>

              {/* Thumbnails row */}
              <div className="gallery-thumbnails-row" role="tablist" aria-label="Project screen thumbnails">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={activeImageIndex === idx}
                    className={`gallery-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img
                      src={img.resolvedSrc}
                      alt={`Thumbnail: ${img.title}`}
                      width={200}
                      height={125}
                      className="gallery-thumb-img"
                    />
                    <span className="thumb-label">{img.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile View: Horizontal Gallery with scroll-snap */}
            <div className="mobile-gallery-view">
              <div className="mobile-snap-scroll">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="mobile-snap-card"
                    onClick={() => openLightbox(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') openLightbox(idx);
                    }}
                  >
                    <div className="mobile-snap-img-wrapper">
                      <img
                        src={img.resolvedSrc}
                        alt={img.title}
                        width={800}
                        height={500}
                        className="mobile-snap-img"
                      />
                    </div>
                    <div className="mobile-snap-caption">
                      <h4 className="mobile-snap-title">{img.title}</h4>
                      <p className="mobile-snap-desc">{img.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mobile-scroll-hint">Swipe horizontally to inspect screens</p>
            </div>
          </div>
        </section>
      )}

      {/* 7, 8, 9, 10: Problem, What I built, Key decisions, Result - with Scroll Reveal */}
      <section className="case-study-content-section">
        <div className="container">
          <div className="case-study-blocks">
            {structuredSections.map((item, idx) => (
              <Reveal key={idx} staggerIndex={idx} className="case-block">
                <div className="case-block-header">
                  <span className="case-block-num">0{idx + 1}</span>
                  <h2 className="case-block-title">{item.section.heading || item.title}</h2>
                </div>
                <div className="case-block-body">
                  {item.section.paragraphs.map((pText, pIdx) => (
                    <p key={pIdx} className="case-block-paragraph">
                      {pText}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* 11. Links (IEEE Paper & GitHub) */}
          {(project.links?.paper || project.links?.github) && (
            <Reveal className="case-study-links-row">
              <span className="links-row-label">Project links:</span>
              <div className="links-row-items">
                {project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>Read IEEE Paper</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>Inspect Code on GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Project CTA block (Get in touch) */}
      <section className="case-study-cta-section">
        <div className="container">
          <Reveal className="project-cta-box">
            <div className="cta-box-text">
              <span className="section-label">Ready to ship?</span>
              <h2 className="cta-box-title">Start a project like this.</h2>
              <p className="cta-box-subline">
                Have a mobile MVP or backend architecture to launch? Let's discuss scope and timeline.
              </p>
            </div>
            <div className="cta-box-action">
              <Link to="/#contact" className="btn btn-primary">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. Next / Previous Project pagination */}
      <nav className="case-study-pagination" aria-label="Project pagination">
        <div className="container">
          <div className="pagination-grid">
            <Link to={`/work/${prevProject.slug}`} className="pagination-link prev">
              <span className="pagination-direction">← Previous Project</span>
              <span className="pagination-title">{prevProject.title}</span>
            </Link>

            <Link to={`/work/${nextProject.slug}`} className="pagination-link next">
              <span className="pagination-direction">Next Project →</span>
              <span className="pagination-title">{nextProject.title}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Lightbox Modal */}
      {lightboxOpen && galleryImages[lightboxIndex] && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-topbar">
              <span className="lightbox-title">
                {galleryImages[lightboxIndex].title} ({lightboxIndex + 1}/{galleryImages.length})
              </span>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close image lightbox"
              >
                Close ✕
              </button>
            </div>

            <div className="lightbox-main">
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={prevLightboxImage}
                  aria-label="Previous image"
                >
                  ←
                </button>
              )}

              <div className="lightbox-image-wrapper">
                <img
                  src={galleryImages[lightboxIndex].resolvedSrc}
                  alt={galleryImages[lightboxIndex].title}
                  className="lightbox-img"
                />
                <p className="lightbox-caption">
                  {galleryImages[lightboxIndex].description}
                </p>
              </div>

              {galleryImages.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={nextLightboxImage}
                  aria-label="Next image"
                >
                  →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
