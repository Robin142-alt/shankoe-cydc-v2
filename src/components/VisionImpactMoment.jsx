import React, { useRef, useEffect } from 'react';
import { Compass, Sparkles, HeartHandshake } from 'lucide-react';
import { VISION, MISSION } from '../data/content';
import './VisionImpactMoment.css';

export default function VisionImpactMoment() {
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
    <section className="section section-dark vision-moment-section" ref={sectionRef}>
      <div className="container container-narrow">
        {/* Subtle Decorative Icon */}
        <div className="vision-icon-wrap" data-reveal="scale" data-reveal-delay="0">
          <div className="vision-glow" />
          <Compass size={36} className="vision-icon" />
        </div>

        {/* Vision Header */}
        <div className="vision-badge-pill" data-reveal data-reveal-delay="100">OUR GUIDING VISION</div>

        {/* Big Impact Statement */}
        <blockquote className="vision-quote" data-reveal data-reveal-delay="200">
          "{VISION}"
        </blockquote>

        <div className="vision-divider" data-reveal="fade" data-reveal-delay="350" />

        {/* Mission Statement Box */}
        <div className="mission-box" data-reveal data-reveal-delay="450">
          <span className="mission-label">OUR CORE MISSION</span>
          <p className="mission-text">
            "{MISSION}"
          </p>
        </div>
      </div>
    </section>
  );
}
