import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

const INITIAL_COUNT = 4;

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-card card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
    >
      {/* Visual header */}
      <div className="project-visual" style={{ background: project.gradient }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="project-img"
          />
        ) : (
          <div className="project-img-placeholder">
            {/* Replace project.image in portfolioData.js with your image path */}
            <span className="project-placeholder-text">{project.name.charAt(0)}</span>
          </div>
        )}
        <div className="project-visual-overlay" />
      </div>

      {/* Body */}
      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tag project-tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-btn">
            <FaGithub /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll]       = useState(false);
  const [headerRef, headerVisible]  = useScrollReveal();

  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore   = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of projects across full-stack engineering, AI systems, and applied research.
          </p>
        </div>

        <div className="projects-grid">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {hasMore && (
          <div className="projects-toggle">
            <button
              className="btn btn-outline projects-toggle-btn"
              onClick={() => setShowAll((p) => !p)}
            >
              {showAll ? (
                <><FaChevronUp /> Show Less</>
              ) : (
                <><FaChevronDown /> Show More ({projects.length - INITIAL_COUNT} more)</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
