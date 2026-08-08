import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Trophy size={14} />
            Recognition & Benchmarks
          </span>
          <h2 className="section-title">Verified Achievements</h2>
          <p className="section-subtitle">
            National competitive ranks and professional technical certifications earned
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => {
            const CardWrapper = item.fileUrl ? motion.a : motion.div;
            const linkProps = item.fileUrl
              ? { href: item.fileUrl, target: '_blank', rel: 'noopener noreferrer', title: `View ${item.title} Certificate` }
              : {};

            return (
              <CardWrapper
                key={idx}
                {...linkProps}
                className="glass-card achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="achievement-card-header">
                  <span className="achievement-category-tag">
                    <Sparkles size={12} />
                    <span>{item.category}</span>
                  </span>
                  <div className="achievement-badge">{item.badge}</div>
                </div>

                <div className="achievement-card-body">
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-detail">{item.detail}</p>
                </div>

                {item.fileUrl && (
                  <div className="achievement-card-footer">
                    <span className="cert-view-badge">
                      <span>Verify Credential PDF</span>
                      <ExternalLink size={13} />
                    </span>
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
