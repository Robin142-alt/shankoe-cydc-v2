import React, { useRef, useState, useEffect } from 'react';
import { 
  GraduationCap, 
  ChefHat, 
  Utensils, 
  ShieldCheck, 
  Trees, 
  ArrowRight 
} from 'lucide-react';
import './WhatWeDoSection.css';

const WORK_AREAS = [
  {
    id: 'education',
    title: 'Education & Learning',
    shortLine: 'Tutoring, scholastic supplies & school retention.',
    photo: '/assets/photos/shankoe-nutrition-fruit.jpg',
    icon: <GraduationCap size={18} />
  },
  {
    id: 'skills',
    title: 'Vocational Skills',
    shortLine: 'Practical baking, pastry craft & self-reliance.',
    photo: '/assets/photos/shankoe-fresh-muffins-presentation.jpg',
    icon: <ChefHat size={18} />
  },
  {
    id: 'wellbeing',
    title: 'Health & Nutrition',
    shortLine: 'Daily balanced hot meals & physical wellness.',
    photo: '/assets/photos/shankoe-group-meal-lawn.jpg',
    icon: <Utensils size={18} />
  },
  {
    id: 'protection',
    title: 'Child Protection',
    shortLine: 'Safe spaces, dignity & zero tolerance for harm.',
    photo: '/assets/photos/shankoe-playground-slide.jpg',
    icon: <ShieldCheck size={18} />
  },
  {
    id: 'community',
    title: 'Community & Church',
    shortLine: 'Faith leadership, family care & mentorship.',
    photo: '/assets/photos/shankoe-community-church-group.jpg',
    icon: <Trees size={18} />
  }
];

export default function WhatWeDoSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Trigger reveal if already in view or upon scrolling into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`what-we-do-section ${isVisible ? 'is-visible' : ''}`} 
      id="what-we-do"
      ref={sectionRef}
    >
      <div className="container what-we-do-container">
        {/* Compact Section Header with Scroll Reveal */}
        <div className="what-we-do-header">
          <div className="what-header-badge">
            <span className="what-badge-dot" />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="what-we-do-title">
            Five Pillars of <span className="highlight-gold">Holistic Care</span>
          </h2>
        </div>

        {/* 5 Compact Cards: Staggered Scroll Reveal & Micro-Interactions */}
        <div className="what-cards-wrapper" role="region" aria-label="What We Do carousel">
          {WORK_AREAS.map((area, idx) => (
            <article 
              key={area.id}
              className="what-card"
              style={{ '--stagger': `${idx * 90}ms` }}
              onClick={() => onNavigate('programs')}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${area.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate('programs');
                }
              }}
            >
              {/* Genuine Shankoe Photo with Gentle Hover Zoom */}
              <div className="what-card-media">
                <img 
                  src={area.photo} 
                  alt={area.title} 
                  className="what-card-img" 
                  loading="lazy"
                />
                <div className="what-card-overlay" />
                <span className="what-card-icon-badge">
                  {area.icon}
                </span>
              </div>

              {/* Card Body: Title, Very Short Line, Arrow */}
              <div className="what-card-body">
                <h3 className="what-card-title">{area.title}</h3>
                <p className="what-card-line">{area.shortLine}</p>
                <div className="what-card-footer">
                  <span className="what-card-arrow-wrap">
                    <ArrowRight size={15} className="what-card-arrow" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mobile-swipe-indicator" aria-hidden="true">
          <span>Swipe to explore pillars →</span>
        </div>
      </div>
    </section>
  );
}
