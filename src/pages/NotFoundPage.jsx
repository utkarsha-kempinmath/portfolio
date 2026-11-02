import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="section not-found-section">
      <div className="container">
        <span className="section-label">Page Not Found</span>
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">The page you are looking for does not exist.</p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
