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
        {/* Text: eyebrow + heading + typing + summary */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            Hello, I am{' '}
            <span className="gradient-text">Adab Ismail</span>
          </h1>

          <div className="hero-typing-row">
            <span className="hero-typing-prefix">I am </span>
            <span className="hero-typing-word">{typedRole}</span>
            <span className="hero-cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-summary">
            {personalInfo.heroSummary}
          </p>
        </div>

        {/* Radar — right column on desktop, between text and CTAs on mobile */}
        <div className="hero-visual">
          <EngineeringRadar />
        </div>

        {/* Actions: CTA buttons + social links */}
        <div className="hero-actions">
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
              {/* <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-link"
                aria-label="Email"
                title={personalInfo.email}
              >
                <FaEnvelope />
                <span>Gmail</span>
              </a> */}
            </div>
          </div>
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
