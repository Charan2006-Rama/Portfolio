import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <FolderGit2 size={14} />
            Featured Work
          </span>
          <h2 className="section-title">Projects & Applications</h2>
          <p className="section-subtitle">
            Demonstrating software development skills through functional project implementations
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card project-featured-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {project.featured && <span className="featured-banner">Featured Project</span>}

              <div className="project-main-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tagline">{project.tagline}</div>
                <p className="project-desc">{project.description}</p>

                {/* Key Features List */}
                <h4 className="features-title">Key Architectural Features</h4>
                <div className="features-grid">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="feature-item"
                      whileHover={{ x: 4 }}
                    >
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="tech-tags-wrapper">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Action Link */}
                <div className="project-actions">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GithubIcon size={18} />
                    <span>View GitHub Profile / Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
