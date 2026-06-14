import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaArrowDown } from 'react-icons/fa';
import { personalInfo, roles } from '../../data/portfolioData';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import EngineeringRadar from '../EngineeringWeb/EngineeringWeb';
import './Hero.css';

const Hero = () => {
  const typedRole = useTypingEffect(roles);

  const handleScroll = (e) => {
    e.preventDefault();
    const about = document.querySelector('#about');
    if (about) {
      const top = about.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* Background elements */}
      <div className="hero-bg">
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-title">
            Hello, I am{' '}
            <span className="gradient-text">Adab Ismail</span>
          </h1>

          {/* Typing effect */}
          <div className="hero-typing-row">
            <span className="hero-typing-prefix">I am </span>
            <span className="hero-typing-word">{typedRole}</span>
            <span className="hero-cursor" aria-hidden="true">|</span>
          </div>

          {/* Summary */}
          <p className="hero-summary">
            {personalInfo.heroSummary}
          </p>

          {/* CTA buttons */}
          <div className="hero-ctas">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-btn"
            >
              <FaFileAlt />
              View Resume
            </a>
            <a
              href="#contact"
              className="btn btn-outline hero-btn"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
            >
              <FaEnvelope />
              Contact Me
            </a>
          </div>

          {/* Connect row */}
          <div className="hero-connect">
            <span className="hero-connect-label">Connect with me</span>
            <div className="hero-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-link"
                aria-label="Email"
                title={personalInfo.email}
              >
                <FaEnvelope />
                <span>Gmail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        {/* <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-avatar">
              <img
                src="/profile.jpg"
                alt="Adab Ismail"
                className="hero-card-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hero-card-initials" style={{ display: 'none' }}>AI</span>
            </div>
            <div className="hero-card-info">
              <h3 className="hero-card-name">Adab Ismail</h3>
              <p className="hero-card-role">Software Engineer</p>
              <p className="hero-card-location">📍 NIT Srinagar, India</p>
            </div>
            <div className="hero-card-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">4+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">3+</span>
                <span className="hero-stat-label">Internships</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">2+</span>
                <span className="hero-stat-label">Years Coding</span>
              </div>
            </div>
            <div className="hero-card-tags">
              {['Agentic AI', 'RAG', 'Full Stack'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div> */}

        <div className="hero-visual">
          <EngineeringRadar />
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="hero-scroll-cue" onClick={handleScroll} aria-label="Scroll down">
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
