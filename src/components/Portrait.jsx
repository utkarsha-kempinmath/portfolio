import React, { useState } from 'react';
import photoJpg from '../assets/photo.jpg';
import portraitFallback from '../assets/portrait-placeholder.svg';

/**
 * Reusable Portrait component
 * - Softly rounded rectangle (NO circle crop)
 * - 1px --line border
 * - Slightly warm, desaturated tone via CSS filter
 * - Graceful fallback to neutral placeholder
 * - Explicit width & height with lazy loading to prevent layout shift
 */
export default function Portrait({
  size = 'hero', // 'hero' | 'about'
  alt = "Utkarsha Kempinmath portrait",
  className = ""
}) {
  const [loadError, setLoadError] = useState(false);

  // When photoJpg is a 1x1 dummy or fails, use the portraitFallback
  const isAbout = size === 'about';
  const width = isAbout ? 180 : 400;
  const height = isAbout ? 200 : 470;

  return (
    <div className={`portrait-wrapper portrait-${size} ${className}`}>
      <div className="portrait-inner">
        <img
          src={loadError ? portraitFallback : photoJpg}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onError={() => setLoadError(true)}
          className="portrait-img"
        />
        {/* Subtle monogram indicator overlay if placeholder is shown */}
        {loadError && (
          <div className="portrait-badge">
            <span>Utkarsha K.</span>
          </div>
        )}
      </div>
    </div>
  );
}
