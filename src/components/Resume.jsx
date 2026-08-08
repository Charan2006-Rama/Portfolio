import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Award, Briefcase, GraduationCap, CheckCircle2, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const { personal, experiences, education } = portfolioData;
  const resumePdfUrl = "/Balivada_Rama_Charan_Resume.pdf";

  return (
    <section id="resume" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <FileText size={14} />
            Official Resume
          </span>
          <h2 className="section-title">Resume & Curriculum Vitae</h2>
          <p className="section-subtitle">
            Preview my official resume or download the verified PDF document
          </p>
        </motion.div>

        <div className="resume-grid">
          {/* LEFT: Resume Document Action & Preview Card */}
          <motion.div
            className="glass-card resume-preview-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="resume-card-badge">
              <FileText size={18} />
              <span>Official PDF Document</span>
            </div>

            <h3 className="resume-doc-title">Balivada_Rama_Charan_Resume.pdf</h3>
            <p className="resume-doc-desc">
              Comprehensive single-page software engineering resume formatted for ATS scanners and technical recruiter evaluations.
            </p>

            <div className="resume-meta-info">
              <div className="resume-meta-item">
                <span className="meta-label">Format</span>
                <span className="meta-value">PDF Document</span>
              </div>
              <div className="resume-meta-item">
                <span className="meta-label">Candidate</span>
                <span className="meta-value">Balivada Rama Charan</span>
              </div>
              <div className="resume-meta-item">
                <span className="meta-label">Degree</span>
                <span className="meta-value">B.Tech CSE (CGPA 7.93)</span>
              </div>
            </div>

            <div className="resume-action-buttons">
              <motion.a
                href={resumePdfUrl}
                download="Balivada_Rama_Charan_Resume.pdf"
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                <span>Download PDF Resume</span>
              </motion.a>

              <motion.a
                href={resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={18} />
                <span>View Full PDF</span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: Quick Summary Snapshot Card */}
          <motion.div
            className="glass-card resume-summary-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="summary-card-title">Resume Summary Snapshot</h3>

            <div className="summary-block">
              <div className="summary-block-header">
                <GraduationCap size={18} className="summary-icon" />
                <h4>Education & Academic Credentials</h4>
              </div>
              <p className="summary-block-text">
                <strong>B.Tech Computer Science & Engineering</strong> — Sir C R Reddy College of Engineering (2023–2027, Year 4 Sem 7, CGPA: 7.93).
              </p>
            </div>

            <div className="summary-block">
              <div className="summary-block-header">
                <Briefcase size={18} className="summary-icon" />
                <h4>Internship Experience</h4>
              </div>
              <ul className="summary-list">
                <li>
                  <CheckCircle2 size={14} className="summary-check" />
                  <span><strong>Dexterity:</strong> Full Stack Web Developer Intern (Feb 2025 – Apr 2025)</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="summary-check" />
                  <span><strong>DataValley:</strong> Cloud & DevOps Intern (May 2026 – Jun 2026)</span>
                </li>
              </ul>
            </div>

            <div className="summary-block">
              <div className="summary-block-header">
                <Award size={18} className="summary-icon" />
                <h4>Key Technical Stack</h4>
              </div>
              <div className="summary-pills-wrapper">
                <span className="summary-pill">Java</span>
                <span className="summary-pill">Python</span>
                <span className="summary-pill">React.js</span>
                <span className="summary-pill">Node.js</span>
                <span className="summary-pill">SQL & PostgreSQL</span>
                <span className="summary-pill">AWS Cloud</span>
                <span className="summary-pill">Git & GitHub</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
