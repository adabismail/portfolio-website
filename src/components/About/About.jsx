import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCode, FaBrain, FaLayerGroup } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const highlights = [
  { icon: <FaCode />, label: 'Full Stack Development', color: '#6366f1' },
  { icon: <FaBrain />, label: 'Agentic AI & RAG', color: '#8b5cf6' },
  { icon: <FaLayerGroup />, label: 'ML & Deep Learning', color: '#06b6d4' },
];

const About = () => {
  const [textRef, textVisible] = useScrollReveal();
  const [sideRef, sideVisible] = useScrollReveal();
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="about" className="section about-section">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building things that matter</h2>
        </div>

        <div className="about-grid">
          {/* Text column */}
          <div ref={textRef} className={`about-text-col reveal${textVisible ? ' visible' : ''}`}>
            {personalInfo.aboutText.map((para, i) => (
              <p
                key={i}
                className={`about-para reveal-delay-${i + 1}`}
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? 'none' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                {para}
              </p>
            ))}

            {/* <div
              className="about-links"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
              }}
            >
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="about-social-btn">
                <FaGithub /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="about-social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`} className="about-social-btn">
                <FaEnvelope /> Email
              </a>
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary about-resume-btn">
                <FaFileAlt /> Resume
              </a>
            </div> */}
          </div>

          {/* Highlights + facts column */}
          <div ref={sideRef} className={`about-highlights-col reveal${sideVisible ? ' visible' : ''}`}>
            <div className="about-highlights">
              {highlights.map(({ icon, label, color }, i) => (
                <div
                  key={label}
                  className="about-highlight-card card"
                  style={{
                    '--card-accent': color,
                    opacity: sideVisible ? 1 : 0,
                    transform: sideVisible ? 'none' : 'translateY(16px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.3s, box-shadow 0.3s, transform 0.3s`,
                  }}
                >
                  <span className="about-highlight-icon" style={{ color }}>{icon}</span>
                  <span className="about-highlight-label">{label}</span>
                </div>
              ))}
            </div>

            <div
              className="about-quickfacts"
              style={{
                opacity: sideVisible ? 1 : 0,
                transform: sideVisible ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s',
              }}
            >
              {[
                { key: 'Institution', val: 'NIT Srinagar' },
                { key: 'Degree', val: 'B.Tech — ITE' },
                { key: 'Batch', val: '2023 — 2027' },
                { key: 'Focus', val: 'Agentic AI, Full Stack' },
              ].map(({ key, val }) => (
                <div key={key} className="about-fact">
                  <span className="about-fact-key">{key}</span>
                  <span className="about-fact-val">{val}</span>
                </div>
              ))}
              <div className="about-fact">
                <span className="about-fact-key">Status</span>
                <span className="about-fact-val about-fact-available">
                  <span className="about-available-dot" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
