import React, { useRef, useEffect } from 'react';
import { ArrowRight, Heart, Mail } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA({ onNavigate }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || '0';
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section final-cta-section" ref={sectionRef}>
      <div className="container">
        <div className="final-cta-card" data-reveal="scale" data-reveal-delay="0">
          <div className="final-cta-bg-glow" />

          <div className="final-cta-content">
            <span className="badge-pill gold">JOIN HANDS WITH US</span>

            <h2 className="final-cta-title">
              Stronger futures are <br />
              <span className="highlight-gold">built together.</span>
            </h2>

            <p className="final-cta-subtext">
              Every child has God-given dignity and capability. When you partner with Shankoe CYDC, you give young people the tools, safety, and training to step into independent, hopeful lives.
            </p>

            <div className="final-cta-buttons">
              <button 
                type="button" 
                className="btn btn-gold btn-lg"
                onClick={() => onNavigate('partner')}
              >
                <Heart size={18} fill="currentColor" />
                <span>Partner With Shankoe</span>
              </button>

              <button 
                type="button" 
                className="btn btn-outline-white btn-lg"
                onClick={() => onNavigate('contact')}
              >
                <Mail size={18} />
                <span>Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
