import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { BRAND } from '../data/content';
import './WhoWeAreSection.css';

export default function WhoWeAreSection({ onNavigate, onPhotoClick }) {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const photo = {
    src: '/assets/photos/shankoe-community-church-group.jpg',
    title: 'Community Leadership & Youth Fellowship',
    caption: 'Youth and community leaders gathered outside Shankoe Methodist Church, united in purpose.',
    category: 'Community & Church'
  };

  return (
    <section id="who-we-are" className="section who-we-are-section" ref={sectionRef}>
      <div className="container">
        <div className="who-grid">
          {/* Left Text Column */}
          <div className="who-text-col">
            <h2 className="who-title" data-reveal data-reveal-delay="80">
              A place where potential <br />
              <span className="highlight-gold">becomes possibility.</span>
            </h2>

            <p className="who-lead" data-reveal data-reveal-delay="160">
              Shankoe CYDC supports children and young people in Narok County through education, wellbeing, skills development and community support.
            </p>

            <p className="who-body" data-reveal data-reveal-delay="220">
              Rooted in the local Shankoe community under the Methodist Church in Kenya, we walk alongside families to ensure every young person is protected, nurtured, and given the practical tools to build a dignified, self-reliant future.
            </p>

            <div className="who-highlights" data-reveal data-reveal-delay="300">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Safe, protected environment for every child</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Hands-on practical skills & vocational training</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Wholesome nutrition & daily pastoral care</span>
              </div>
            </div>

            <div className="who-btn-row" data-reveal data-reveal-delay="380">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onNavigate('about')}
              >
                <span>Read Our Story</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Photographic Column */}
          <div className="who-media-col" data-reveal="slide-right" data-reveal-delay="200">
            <div 
              className="who-image-frame"
              onClick={() => onPhotoClick(photo)}
              title="Click to view full photo"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="who-img"
              />
              <div className="who-image-overlay">
                <span className="who-photo-tag">Authentic Shankoe Moment</span>
                <span className="who-photo-caption">Community & Youth Gathering</span>
              </div>
            </div>

            {/* Small Floating Identity Card */}
            <div className="who-float-card">
              <div className="float-card-icon">
                <MapPin size={18} />
              </div>
              <div>
                <div className="float-card-title">Narok County, Kenya</div>
                <div className="float-card-sub">Methodist Church in Kenya • {BRAND.projectCode}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
