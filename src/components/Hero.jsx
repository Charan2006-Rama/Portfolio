import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Download } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

const TYPING_TITLES = [
  "B.Tech Computer Science & Engineering Student",
  "Aspiring Software Developer",
  "Java & Data Structures Practitioner",
  "Web Application Builder"
];

export default function Hero() {
  const { personal, links } = portfolioData;

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TYPING_TITLES[textIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeUrl = personal.resumeUrl || links.resume || "/Balivada_Rama_Charan_Resume.pdf";

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Status Pill Badge */}
            <motion.div
              className="hero-badge-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="status-pill">
                <span className="pulse-dot"></span>
                <Sparkles size={14} style={{ color: 'var(--accent-primary)' }} />
                {personal.statusBadge}
              </span>
            </motion.div>

            {/* Name & Animated Typing Headline */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.div
              className="hero-subtitle-animated"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span>{displayText}</span>
              <span className="typing-cursor"></span>
            </motion.div>

            {/* Professional Bio */}
            <motion.p
              className="hero-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personal.bio}
            </motion.p>

            {/* Recruiter Action Buttons including Resume Download */}
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Primary Resume Download Button */}
              <motion.a
                href={resumeUrl}
                download="Balivada_Rama_Charan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-resume-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Code2 size={18} />
                <span>LeetCode</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
