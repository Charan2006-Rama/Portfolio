import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code2, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, Sparkles, MessageSquare, ArrowUpRight, Rocket, PartyPopper } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { portfolioData } from '../data/portfolioData';
import { sendContactForm } from '../services/contactService';

export default function Contact() {
  const { links } = portfolioData;
  const targetEmail = "ramacharanbalivada2006@gmail.com";

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '', botcheck: false });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formState.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    const result = await sendContactForm({
      name: formState.name.trim(),
      email: formState.email.trim(),
      subject: formState.subject.trim(),
      message: formState.message.trim(),
      botcheck: formState.botcheck
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '', botcheck: false });
      setErrors({});
      setTimeout(() => setSubmitStatus(null), 7000);
    } else {
      setSubmitStatus('error');
      setErrorMessage(
        result.error || "Unable to send your message right now. Please try again or contact me through GitHub/LinkedIn."
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Sparkles size={14} />
            Let's Connect
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Available for software developer placement opportunities, technical roles, and collaborations
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* LEFT SIDE: Contact Channels Card */}
          <motion.div
            className="glass-card contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-card-header">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                Recruiters, engineering managers, and fellow developers can reach out directly or connect across professional platforms:
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="contact-email-box">
              <div className="email-box-top">
                <div className="email-box-icon">
                  <Mail size={20} />
                </div>
                <div className="email-box-info">
                  <span className="email-box-label">Primary Email</span>
                  <a href={`mailto:${targetEmail}`} className="email-box-value email-link">
                    {targetEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channel Cards */}
            <div className="contact-social-grid">
              <motion.a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-item"
                whileHover={{ x: 6, scale: 1.01 }}
              >
                <div className="channel-icon-wrapper linkedin-icon-bg">
                  <LinkedinIcon size={22} />
                </div>
                <div className="channel-text-details">
                  <div className="channel-name">LinkedIn Profile</div>
                  <div className="channel-handle">linkedin.com/in/balivada-rama-charan</div>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </motion.a>

              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-item"
                whileHover={{ x: 6, scale: 1.01 }}
              >
                <div className="channel-icon-wrapper github-icon-bg">
                  <GithubIcon size={22} />
                </div>
                <div className="channel-text-details">
                  <div className="channel-name">GitHub Profile</div>
                  <div className="channel-handle">github.com/Charan2006-Rama</div>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </motion.a>

              <motion.a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-item"
                whileHover={{ x: 6, scale: 1.01 }}
              >
                <div className="channel-icon-wrapper leetcode-icon-bg">
                  <Code2 size={22} />
                </div>
                <div className="channel-text-details">
                  <div className="channel-name">LeetCode Profile</div>
                  <div className="channel-handle">leetcode.com/u/Rama_Charan</div>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Real Working Contact Form Card */}
          <motion.div
            className="glass-card contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-card-header">
              <div className="form-header-icon">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="form-card-title">Send Me a Message</h3>
                <span className="form-card-subtitle">Fill out your details to get in touch</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="contact-form-body">
              {/* Spam Protection Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                checked={formState.botcheck}
                onChange={(e) => setFormState({ ...formState, botcheck: e.target.checked })}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager / Technical Recruiter"
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                />
                {errors.name && <span className="field-error-text">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => {
                    setFormState({ ...formState, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                />
                {errors.email && <span className="field-error-text">{errors.email}</span>}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject <span className="optional-tag">(Optional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software Developer Placement / Interview Opportunity"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows="4"
                  placeholder="Write your message or job opportunity details..."
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                ></textarea>
                {errors.message && <span className="field-error-text">{errors.message}</span>}
              </div>

              {/* Animated Submit CTA Button */}
              <motion.button
                type="submit"
                className={`btn btn-primary form-submit-btn ${isSubmitting ? 'sending-active' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="sending-motion-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      animate={{ x: [0, 15, -15, 0], y: [0, -8, 8, 0], rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Rocket size={20} className="rocket-launch-icon" />
                    </motion.div>
                    <span>Dispatching Message...</span>
                  </motion.div>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Animated Celebration Success Toast Overlay */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  className="animated-success-overlay"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <div className="success-pulse-ring">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.15 }}
                    >
                      <CheckCircle2 size={44} className="success-check-big" />
                    </motion.div>
                  </div>

                  <div className="success-text-content">
                    <div className="success-celebration-title">
                      <PartyPopper size={20} className="party-icon" />
                      <span>Message Dispatched!</span>
                    </div>
                    <p className="success-celebration-desc">
                      Thank you for reaching out! Your message has been processed successfully. I will review it and reply back to your email address promptly.
                    </p>
                  </div>

                  <motion.div
                    className="success-progress-bar"
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: 7, ease: 'linear' }}
                  />
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="contact-error-toast"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <AlertCircle size={22} className="toast-icon-error" />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.025rem' }}>Unable to send your message right now.</div>
                    <div style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {errorMessage}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
