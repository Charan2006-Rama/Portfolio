import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <UserCheck size={14} />
            About Me
          </span>
          <h2 className="section-title">Academic Background & Focus</h2>
          <p className="section-subtitle">
            Dedicated Computer Science student passionate about software engineering and problem solving
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Detailed Narrative Card */}
          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="about-heading">{personal.aboutHeading}</h3>
            {personal.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="about-text">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            className="about-highlights-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-highlights">
              <motion.div className="stat-item" whileHover={{ scale: 1.04 }}>
                <div className="stat-label">Current Academic Level</div>
                <div className="stat-value">{personal.currentSem}</div>
              </motion.div>

              <motion.div className="stat-item" whileHover={{ scale: 1.04 }}>
                <div className="stat-label">Academic Performance</div>
                <div className="stat-value">{personal.cgpa} CGPA</div>
              </motion.div>

              <motion.div className="stat-item" whileHover={{ scale: 1.04 }}>
                <div className="stat-label">Major</div>
                <div className="stat-value">Computer Science</div>
              </motion.div>

              <motion.div className="stat-item" whileHover={{ scale: 1.04 }}>
                <div className="stat-label">Target Role</div>
                <div className="stat-value">Software Developer</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
