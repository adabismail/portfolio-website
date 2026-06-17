import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experiences } from '../../data/portfolioData';
import './Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`exp-item reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline spine */}
      <div className="exp-spine">
        <div className="exp-dot" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }} />
        <div className="exp-line" />
      </div>

      {/* Card */}
      <div className="exp-card card">
        {/* Header */}
        <div className="exp-card-header">
          <div className="exp-icon" style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}30`, color: exp.color }}>
            {exp.iconImg ? (
              <img
                src={exp.iconImg}
                alt={exp.shortCompany}
                className="exp-icon-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <span style={{ display: exp.iconImg ? 'none' : undefined }}>
              {exp.shortCompany.charAt(0)}
            </span>
          </div>
          <div className="exp-meta">
            <span className="exp-type" style={{ color: exp.color }}>
              {exp.type}
            </span>
            <h3 className="exp-title">{exp.title}</h3>
            <p className="exp-company">{exp.company}</p>
          </div>
          <div className="exp-duration">
            <span className="exp-duration-badge">{exp.duration}</span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="exp-bullets">
          {exp.description.map((point, i) => (
            <li key={i} className="exp-bullet">
              <span className="exp-bullet-dot" style={{ background: exp.color }} />
              {point}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="exp-tags">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            Internships, research roles, and contributions that shaped my engineering perspective.
          </p>
        </div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
