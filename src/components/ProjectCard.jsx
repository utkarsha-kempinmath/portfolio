import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// App logos as primary card visuals
import monthendLogo from '../assets/monthend-logo.jpg';
import aarogyaLogo from '../assets/aarogya-logo.jpg';
import mindbuddyLogo from '../assets/mindbuddy-logo.svg';

const logoImageMap = {
  monthend: monthendLogo,
  'aarogya-seva': aarogyaLogo,
  mindbuddy: mindbuddyLogo,
};

export default function ProjectCard({ project, isFeatured = false }) {
  const [imgError, setImgError] = useState(false);
  const cardLogoImg = logoImageMap[project.slug] || monthendLogo;

  return (
    <article className={`project-card ${isFeatured ? 'project-card-featured' : ''}`}>
      <div className="project-card-image-col">
        <Link to={`/work/${project.slug}`} className="project-card-image-link" tabIndex="-1">
          <img
            src={cardLogoImg}
            alt={`${project.title} logo`}
            width={600}
            height={600}
            loading="lazy"
            className="project-card-img project-card-logo-img"
            onError={() => setImgError(true)}
          />
        </Link>
      </div>

      <div className="project-card-body">
        <div className="project-card-header">
          {project.meta?.status && (
            <span className="project-status-label">{project.meta.status}</span>
          )}
          <h3 className="project-title">
            <Link to={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
        </div>

        <p className="project-outcome">{project.outcome}</p>

        <div className="project-stack-tags" aria-label="Tech stack">
          {project.meta.stack.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="tag">
              {tech}
            </span>
          ))}
          {project.meta.stack.length > 5 && (
            <span className="tag">+{project.meta.stack.length - 5}</span>
          )}
        </div>

        <div className="project-card-footer">
          <Link to={`/work/${project.slug}`} className="project-case-study-link">
            <span>View case study</span>
            <span className="link-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
