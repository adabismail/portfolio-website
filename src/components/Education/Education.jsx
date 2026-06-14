import { education } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Education.css';

const EducationCard = ({ edu, index }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`edu-card card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className="edu-icon-wrap"
        style={{ background: `${edu.color}14`, border: `1px solid ${edu.color}28` }}
      >
        {edu.iconImg ? (
          <img
            src={edu.iconImg}
            alt={edu.shortName}
            className="edu-icon-img"
          />
        ) : (
          /* Placeholder: drop your image at the path set in portfolioData.js */
          <div className="edu-icon-fallback" style={{ color: edu.color }}>
            <span>{edu.shortName.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="edu-body">
        <div className="edu-header">
          <div>
            <h3 className="edu-institution">{edu.institution}</h3>
            <p className="edu-degree">
              <span className="gradient-text">{edu.degree}</span>
            </p>
            <p className="edu-field">{edu.field}</p>
          </div>
          <div className="edu-right">
            <span className="edu-duration">{edu.duration}</span>
            <span className="edu-grade" style={{ color: edu.color }}>{edu.grade}</span>
          </div>
        </div>

        <p className="edu-description">{edu.description}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="education" className="section education-section">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic background</h2>
          <p className="section-subtitle">
            Formal education that built my foundation in computer science, mathematics, and engineering.
          </p>
        </div>

        <div className="edu-list">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
