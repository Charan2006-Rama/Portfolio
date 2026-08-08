import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NODE_ICONS = [GraduationCap, BookOpen, School];

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <GraduationCap size={14} />
            Academic Journey
          </span>
          <h2 className="section-title">Education Timeline</h2>
          <p className="section-subtitle">
            Formal education background and academic milestones
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {education.map((item, idx) => {
            const IconComp = NODE_ICONS[idx] || GraduationCap;
            return (
              <motion.div
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="timeline-node-glow">
                  <div className="timeline-node-icon">
                    <IconComp size={20} />
                  </div>
                </div>

                <div className="glass-card timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <span className="timeline-duration">{item.duration}</span>
                  </div>

                  <div className="timeline-institution">
                    {item.institution} ({item.specialization})
                  </div>

                  <div className="timeline-metric">
                    <Award size={16} />
                    <span>{item.metricsLabel}: {item.metricsValue}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
