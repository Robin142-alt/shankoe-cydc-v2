import React, { useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  ChefHat, 
  Utensils, 
  ShieldCheck, 
  Trees, 
  ArrowRight 
} from 'lucide-react';
import { PROGRAMS } from '../data/content';
import './HowWeHelpSection.css';

export default function HowWeHelpSection({ onNavigate, onPhotoClick }) {
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
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const getIcon = (id) => {
    switch (id) {
      case 'education': return <GraduationCap size={24} />;
      case 'skills': return <ChefHat size={24} />;
      case 'wellbeing': return <Utensils size={24} />;
      case 'protection': return <ShieldCheck size={24} />;
      case 'community': return <Trees size={24} />;
      default: return <GraduationCap size={24} />;
    }
  };

  return (
    <section className="section how-we-help-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge-pill" data-reveal data-reveal-delay="0">HOW WE HELP</span>
          <h2 className="help-section-title" data-reveal data-reveal-delay="80">
            Five Areas of Lasting <span className="highlight-gold">Support</span>
          </h2>
          <p className="subtitle" data-reveal data-reveal-delay="160">
            Every child needs well-rounded support to develop mind, body, and spirit.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="programs-cards-grid">
          {PROGRAMS.map((prog, index) => (
            <div 
              key={prog.id} 
              className={`program-card ${index === 0 ? 'featured-card' : ''}`}
              data-reveal="scale"
              data-reveal-delay={200 + index * 100}
            >
              <div className="program-card-top">
                <div className="program-icon-box">
                  {getIcon(prog.id)}
                </div>
                <span className="program-number">0{index + 1}</span>
              </div>

              <h3 className="program-title">{prog.title}</h3>
              <p className="program-summary">{prog.summary}</p>

              {/* Photo preview thumbnail */}
              <div 
                className="program-mini-thumb"
                onClick={() => onPhotoClick({
                  src: prog.photo,
                  title: prog.title,
                  caption: prog.summary,
                  category: prog.title
                })}
                title="View authentic activity photo"
              >
                <img 
                  src={prog.photo} 
                  alt={prog.alt} 
                  className="mini-thumb-img" 
                />
                <span className="thumb-indicator">View Photo</span>
              </div>

              <div className="program-card-action">
                <button 
                  type="button" 
                  className="program-detail-btn"
                  onClick={() => onNavigate('programs')}
                >
                  <span>Explore Program</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
