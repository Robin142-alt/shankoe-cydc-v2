import React, { useState, useRef, useEffect } from 'react';
import { Shield, Sparkles, Trophy, ArrowRight, Heart } from 'lucide-react';
import { PILLARS_JOURNEY } from '../data/content';
import './EmbraceEngageEmpower.css';

export default function EmbraceEngageEmpower({ onNavigate, onPhotoClick }) {
  const [activeStage, setActiveStage] = useState(0);
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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const stagePhotos = [
    {
      src: '/assets/photos/shankoe-children-meal-fellowship.jpg',
      title: 'Embrace: Safe, Valued, Supported',
      caption: 'Children gathering safely on the lawn, knowing they belong and are unconditionally cared for.',
      category: 'Care & Belonging'
    },
    {
      src: '/assets/photos/shankoe-indoor-baking-skills.jpg',
      title: 'Engage: Learn, Participate, Grow',
      caption: 'Young learners active in hands-on baking and practical skills training with mentors.',
      category: 'Learning & Participation'
    },
    {
      src: '/assets/photos/shankoe-fresh-muffins-presentation.jpg',
      title: 'Empower: Skills, Confidence, Opportunity',
      caption: 'Proud smiles as youth display their own baked creations, ready for future self-reliance.',
      category: 'Empowerment & Capability'
    }
  ];

  return (
    <section className="section section-subtle embrace-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <h2 className="embrace-section-title" data-reveal data-reveal-delay="80">
            The Journey of <span className="highlight-gold">Becoming</span>
          </h2>
          <p className="subtitle" data-reveal data-reveal-delay="160">
            How Shankoe CYDC walks with children from first arrival to independent, hopeful adulthood.
          </p>
        </div>

        {/* Pathway Interactive Cards */}
        <div className="pathway-grid">
          {PILLARS_JOURNEY.map((item, index) => {
            const isActive = activeStage === index;
            const photo = stagePhotos[index];

            return (
              <div 
                key={item.stage} 
                className={`pathway-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStage(index)}
                data-reveal="scale"
                data-reveal-delay={240 + index * 120}
              >
                {/* Visual Header */}
                <div className="pathway-image-wrap">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="pathway-photo"
                  />
                  <div className="pathway-overlay" />
                  <span className="pathway-stage-badge">{item.stage}</span>
                </div>

                {/* Card Content */}
                <div className="pathway-body">
                  <div className="pathway-tag">{item.tag}</div>
                  <h3 className="pathway-headline">{item.headline}</h3>
                  <p className="pathway-subtext">{item.subtext}</p>

                  <div className="pathway-footer">
                    <button 
                      type="button" 
                      className="pathway-link-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onPhotoClick(photo);
                      }}
                    >
                      <span>View authentic moment</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Ribbon */}
        <div className="embrace-summary-strip" data-reveal data-reveal-delay="600">
          <div className="summary-strip-content">
            <Heart size={20} className="summary-icon" fill="currentColor" />
            <span className="summary-text">
              "Every child deserves to feel they belong, to learn their worth, and to build the skills to thrive."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
