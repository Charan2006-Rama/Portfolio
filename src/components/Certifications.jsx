import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Award size={14} />
            Professional Learning
          </span>
          <h2 className="section-title">Certifications & Workshops</h2>
          <p className="section-subtitle">
            Click on any certificate to view or download the verified credential PDF
          </p>
        </motion.div>

        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card cert-card cert-card-link"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              title={`Click to view ${cert.title} Certificate`}
            >
              <div className="cert-icon">
                <FileText size={24} />
              </div>
              <div className="cert-details" style={{ flexGrow: 1 }}>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.type}</p>
                <span className="cert-view-badge">
                  <span>View PDF</span>
                  <ExternalLink size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
