import React from 'react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="footer-brand">{siteData.name}</span>
          <span className="footer-meta">{siteData.title}</span>
        </div>

        <div className="footer-right">
          <span className="footer-copy">© {currentYear} {siteData.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
