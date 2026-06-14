import { skills } from '../../data/portfolioData';
import { techIcons, darkInvertIcons } from '../../data/techIcons';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import './Skills.css';

const SkillBadge = ({ skill, theme }) => {
  const iconUrl = techIcons[skill];
  const needsInvert = darkInvertIcons.has(skill) && theme === 'dark';

  return (
    <span className="skill-badge">
      {iconUrl && (
        <img
          src={iconUrl}
          alt={skill}
          className={`skill-icon${needsInvert ? ' skill-icon--invert' : ''}`}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      )}
      {skill}
    </span>
  );
};

const SkillGroup = ({ category, data, index }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`skill-group card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="skill-group-header">
        {data.iconImg ? (
          <img
            src={data.iconImg}
            alt={category}
            className="skill-group-img"
          />
        ) : (
          <span
            className="skill-group-color-dot"
            style={{ background: data.color }}
          />
        )}
        <h3 className="skill-group-title" style={{ color: data.color }}>
          {category}
        </h3>
      </div>

      <div className="skill-badges">
        <SkillBadgeListing items={data.items} color={data.color} />
      </div>
    </div>
  );
};

const SkillBadgeListing = ({ items, color }) => {
  const { theme } = useTheme();
  return items.map((skill) => (
    <span
      key={skill}
      className="skill-badge"
      style={{
        '--badge-color': color,
        '--badge-bg': `${color}14`,
        '--badge-border': `${color}28`,
      }}
    >
      {techIcons[skill] && (
        <img
          src={techIcons[skill]}
          alt={skill}
          className={`skill-icon${darkInvertIcons.has(skill) && theme === 'dark' ? ' skill-icon--invert' : ''}`}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      )}
      {skill}
    </span>
  ));
};

const Skills = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">My toolkit</h2>
          <p className="section-subtitle">
            Technologies, frameworks, and tools I work with across the full engineering stack.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, data], i) => (
            <SkillGroup key={category} category={category} data={data} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
