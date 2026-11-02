import React from 'react';
import { siteData } from '../data/siteData';

const toolsList = Array.isArray(siteData.tools)
  ? siteData.tools
  : [
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'EAS',
      'Google OAuth',
      'CI/CD',
    ];

export default function Tools() {
  return (
    <div className="tools-ticker-section" aria-label="Tools I ship with">
      <div className="tools-ticker-container">
        <div className="tools-ticker-badge">
          <span className="tools-ticker-badge-text">Tools I ship with:</span>
        </div>

        <div className="tools-ticker-viewport">
          <div className="tools-ticker-track">
            {/* Primary group */}
            <div className="tools-ticker-group">
              {toolsList.map((tool, idx) => (
                <span key={`tool-1-${idx}`} className="tools-ticker-item">
                  <span className="ticker-dot" aria-hidden="true">•</span>
                  <span className="ticker-text">{tool}</span>
                </span>
              ))}
            </div>

            {/* Seamless duplicate group for infinite CSS loop */}
            <div className="tools-ticker-group ticker-duplicate" aria-hidden="true">
              {toolsList.map((tool, idx) => (
                <span key={`tool-2-${idx}`} className="tools-ticker-item">
                  <span className="ticker-dot">•</span>
                  <span className="ticker-text">{tool}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
