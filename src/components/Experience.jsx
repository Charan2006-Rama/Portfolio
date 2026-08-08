import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Briefcase size={14} />
            Professional Experience
          </span>
          <h2 className="section-title">Internships & Work History</h2>
          <p className="section-subtitle">
            Hands-on technical internships developing software applications and cloud infrastructure
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              className="glass-card experience-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="experience-header">
                <div>
                  <div className="experience-company-wrapper">
                    <h3 className="experience-company">{exp.company}</h3>
                    <span className="experience-type-tag">{exp.type}</span>
                  </div>
                  <h4 className="experience-role">{exp.role}</h4>
                </div>

                <div className="experience-meta">
                  <span className="experience-duration-pill">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </span>
                  {exp.location && (
                    <span className="experience-location-pill">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="experience-body">
                <h5 className="experience-subheading">Key Contributions & Responsibilities</h5>
                <ul className="experience-bullet-list">
                  {exp.responsibilities.map((item, rIdx) => (
                    <motion.li
                      key={rIdx}
                      className="experience-bullet-item"
                      whileHover={{ x: 4 }}
                    >
                      <CheckCircle2 size={16} className="experience-check-icon" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Associated Project Callout */}
                {exp.project && (
                  <div className="experience-project-box">
                    <Layers size={16} className="experience-project-icon" />
                    <span><strong>Project / Deliverable:</strong> {exp.project}</span>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="experience-tech-wrapper">
                  <h5 className="experience-subheading">Technologies Used</h5>
                  <div className="tech-tags-wrapper">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Verification Button */}
                {exp.certificateUrl && (
                  <div className="experience-action">
                    <motion.a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
