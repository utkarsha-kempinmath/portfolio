import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Scroll reading progress (2px caramel line)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Active section tracking on homepage
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHomePage]);

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getHref = (targetId) => {
    return isHomePage ? `#${targetId}` : `/#${targetId}`;
  };

  return (
    <>
      {/* 2px Caramel Scroll Progress Line */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="navbar-header">
        <div className="container navbar-container">
          {/* Name Wordmark */}
          <Link
            to="/"
            className="navbar-brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="brand-name">{siteData.name}</span>
            <span className="brand-dot"></span>
          </Link>

          {/* Desktop Links (About, Work, Services, Process, Contact) */}
          <nav className="navbar-nav desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={getHref(item.id)}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }
                }}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="navbar-action">
            <a
              href={getHref('contact')}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleNavClick('contact');
                }
              }}
              className="btn btn-primary btn-sm nav-cta"
            >
              Get in touch
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`toggle-bar ${mobileMenuOpen ? 'open-1' : ''}`}></span>
              <span className={`toggle-bar ${mobileMenuOpen ? 'open-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
            <div className="container mobile-nav-content">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={getHref(item.id)}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={getHref('contact')}
                onClick={() => handleNavClick('contact')}
                className="mobile-nav-link highlight"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
