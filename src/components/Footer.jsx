import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Balivada Rama Charan. B.Tech Computer Science & Engineering Student.
        </p>

        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top of page">
          <span>Back to top</span>
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
