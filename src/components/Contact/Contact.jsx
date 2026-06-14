import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [headerRef, headerVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;

    setTimeout(() => {
      window.open(mailto, '_blank');
      setStatus('sent');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  const isValid = form.name && form.email && form.message;

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Whether you have a project, an opportunity, or just want to talk tech — my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div ref={formRef} className={`contact-form-wrap reveal${formVisible ? ' visible' : ''}`}>
            <form className="contact-form card" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="contact-input"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary contact-submit${!isValid ? ' contact-submit--disabled' : ''}`}
                disabled={!isValid || status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact-spinner" />
                    Sending…
                  </>
                ) : status === 'sent' ? (
                  <>✓ Message sent!</>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className="contact-success">
                  Your email client should have opened. If not, email me directly at{' '}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                </p>
              )}
            </form>
          </div>

          {/* Info */}
          <div ref={infoRef} className={`contact-info-col reveal${infoVisible ? ' visible' : ''}`}>
            <div className="contact-info-card card">
              <h3 className="contact-info-heading">Get in touch</h3>
              <p className="contact-info-text">
                I'm currently open to internships, full-time roles, research collaborations, and freelance projects in software engineering and AI development.
              </p>

              <div className="contact-details">
                <a href={`mailto:${personalInfo.email}`} className="contact-detail-link">
                  <span className="contact-detail-icon"><FaEnvelope /></span>
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <span className="contact-detail-val">{personalInfo.email}</span>
                  </div>
                </a>

                <div className="contact-detail-link" style={{ cursor: 'default' }}>
                  <span className="contact-detail-icon"><FaMapMarkerAlt /></span>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-val">NIT Srinagar, India</span>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
