import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#hero" className="footer-name" onClick={scrollToTop}>
              Adab Ismail
            </a>
            <p className="footer-tagline">
              Software Engineer · Agentic AI Developer · NIT Srinagar
            </p>
          </div>

          {/* Nav */}
          <nav className="footer-nav">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="footer-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(`#${item.toLowerCase()}`);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer-social" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Adab Ismail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
