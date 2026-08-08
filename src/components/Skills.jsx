import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  FileCode,
  Database,
  Layout,
  Palette,
  Atom,
  Server,
  HardDrive,
  Layers,
  Cloud,
  GitBranch,
  Monitor,
  Send,
  Cpu,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

const ICON_MAP = {
  Code2,
  Terminal,
  FileCode,
  Database,
  Layout,
  Palette,
  Atom,
  Server,
  HardDrive,
  Layers,
  Cloud,
  Github: GithubIcon,
  Monitor,
  Send,
  Cpu
};

const SKILL_COLOR_MAP = {
  "Java": { glow: "#ea580c", bg: "rgba(234, 88, 12, 0.12)", border: "rgba(234, 88, 12, 0.4)" },
  "Python": { glow: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)", border: "rgba(59, 130, 246, 0.4)" },
  "HTML": { glow: "#f97316", bg: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.4)" },
  "CSS": { glow: "#0284c7", bg: "rgba(2, 132, 199, 0.12)", border: "rgba(2, 132, 199, 0.4)" },
  "JavaScript": { glow: "#eab308", bg: "rgba(234, 179, 8, 0.12)", border: "rgba(234, 179, 8, 0.4)" },
  "ReactJS": { glow: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)", border: "rgba(6, 182, 212, 0.4)" },
  "Node.js": { glow: "#10b981", bg: "rgba(16, 185, 129, 0.12)", border: "rgba(16, 185, 129, 0.4)" },
  "Spring Boot": { glow: "#10b981", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
  "PostgreSQL": { glow: "#6366f1", bg: "rgba(99, 102, 241, 0.12)", border: "rgba(99, 102, 241, 0.4)" },
  "SQL": { glow: "#8b5cf6", bg: "rgba(139, 92, 246, 0.12)", border: "rgba(139, 92, 246, 0.4)" },
  "AWS": { glow: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)", border: "rgba(245, 158, 11, 0.4)" },
  "Git": { glow: "#ef4444", bg: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.4)" },
  "GitHub": { glow: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", border: "rgba(168, 85, 247, 0.4)" },
  "VS Code": { glow: "#0284c7", bg: "rgba(2, 132, 199, 0.12)", border: "rgba(2, 132, 199, 0.4)" },
  "Postman": { glow: "#f97316", bg: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.4)" },
  "Google Colab": { glow: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.4)" }
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...skills.map(s => s.category)];

  const allSkillItems = skills.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  const displayedSkills = activeTab === "All"
    ? allSkillItems
    : allSkillItems.filter(item => item.category === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Cpu size={14} />
            Technical Arsenal
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and engineering tools I build software with
          </p>
        </motion.div>

        {/* Floating Category Filter Pill Bar */}
        <motion.div
          className="skills-nav-tabs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => {
            const count = cat === "All"
              ? allSkillItems.length
              : skills.find(s => s.category === cat)?.items.length || 0;

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`skill-tab-btn ${activeTab === cat ? 'active-tab' : ''}`}
              >
                <span>{cat}</span>
                <span className="tab-badge">{count}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Modern Interactive Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-modern-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {displayedSkills.map((skill, idx) => {
              const IconComponent = ICON_MAP[skill.icon] || Code2;
              const colors = SKILL_COLOR_MAP[skill.name] || {
                glow: "#38bdf8",
                bg: "rgba(56, 189, 248, 0.12)",
                border: "rgba(56, 189, 248, 0.4)"
              };

              return (
                <motion.div
                  key={skill.name}
                  className="glass-card skill-modern-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="skill-card-top">
                    <div
                      className="skill-icon-avatar"
                      style={{
                        backgroundColor: colors.bg,
                        borderColor: colors.border,
                        color: colors.glow,
                        boxShadow: `0 0 20px ${colors.bg}`
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <span className="skill-cat-pill">
                      {skill.category}
                    </span>
                  </div>

                  <div className="skill-card-body">
                    <h3 className="skill-modern-title">{skill.name}</h3>
                    <p className="skill-modern-desc">{skill.description}</p>
                  </div>

                  <div className="skill-card-bottom">
                    <div className="skill-verify-line">
                      <CheckCircle2 size={13} style={{ color: colors.glow }} />
                      <span>Verified Skill</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
