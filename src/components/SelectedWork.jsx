import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function SelectedWork() {
  const flagshipProject = projects.find((p) => p.flagship) || projects[0];
  const otherProjects = projects.filter((p) => p !== flagshipProject);

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="section-label">Selected Work</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">Tested products shipped to production.</h2>
          </Reveal>
        </div>

        <div className="work-cards-grid">
          {/* Flagship MonthEnd - larger and first */}
          <Reveal staggerIndex={0}>
            <ProjectCard project={flagshipProject} isFeatured={true} />
          </Reveal>

          {/* Other projects */}
          {otherProjects.map((project, idx) => (
            <Reveal key={project.slug} staggerIndex={idx + 1}>
              <ProjectCard project={project} isFeatured={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
