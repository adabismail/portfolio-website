import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
];

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme }  = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [menuOpen]);

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
  };

  const isActive = (href) => activeSection === href.replace('#', '');

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header-inner">
          {/* Left: Logo */}
          <a href="#hero" className="header-logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <div className="header-avatar">
              <img
                src="/profile.jpg"
                alt="Adab Ismail"
                className="avatar-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <span className="avatar-initials" style={{ display: 'none' }}>AI</span>
            </div>
            <span className="header-name">Adab Ismail</span>
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${isActive(link.href) ? ' nav-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => scrollTo(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: theme toggle + hamburger */}
          <div className="header-right">
            <label className="theme-switch" title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
              <span className={`theme-switch-icon${theme === 'dark' ? ' theme-switch-icon--active' : ''}`}>
                <FaMoon size={11} />
              </span>
              <span className="theme-switch-pill" />
              <span className={`theme-switch-icon${theme === 'light' ? ' theme-switch-icon--active' : ''}`}>
                <FaSun size={11} />
              </span>
            </label>

            <button
              className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — inside header so it inherits z-index */}
        {menuOpen && (
          <div className="mobile-menu-dialog" role="dialog" aria-label="Navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`mobile-menu-link${isActive(link.href) ? ' mobile-menu-link--active' : ''}`}
                style={{ animationDelay: `${i * 0.04}s` }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Thin backdrop — clicking it closes the menu */}
      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
