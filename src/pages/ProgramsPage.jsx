import React from 'react';
import { 
  GraduationCap, 
  ChefHat, 
  Utensils, 
  ShieldCheck, 
  Trees, 
  ArrowRight,
  Heart,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PROGRAMS } from '../data/content';
import './ProgramsPage.css';

export default function ProgramsPage({ onNavigate, onPhotoClick }) {
  const getIcon = (id) => {
    switch (id) {
      case 'education': return <GraduationCap size={28} />;
      case 'skills': return <ChefHat size={28} />;
      case 'wellbeing': return <Utensils size={28} />;
      case 'protection': return <ShieldCheck size={28} />;
      case 'community': return <Trees size={28} />;
      default: return <GraduationCap size={28} />;
    }
  };

  const bakingPhotos = [
    {
      src: '/assets/photos/shankoe-indoor-baking-skills.jpg',
      title: 'Precision Mixing & Electric Mixer Practice',
      caption: 'Students practicing proper batter preparation and technique.',
      category: 'Skills & Livelihoods'
    },
    {
      src: '/assets/photos/shankoe-outdoor-baking-measuring.jpg',
      title: 'Ingredient Ratio & Measurement',
      caption: 'Learning the discipline of measuring cups and accurate recipes.',
      category: 'Skills & Livelihoods'
    },
    {
      src: '/assets/photos/shankoe-fresh-muffins-presentation.jpg',
      title: 'Freshly Baked Muffin Showcase',
      caption: 'Students proudly presenting their completed baked goods.',
      category: 'Skills & Livelihoods'
    }
  ];

  return (
    <div className="programs-page">
      {/* Header */}
      <section className="programs-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">HOLISTIC SUPPORT PATHWAYS</span>
          <h1 className="programs-page-title">
            Every Child Needs The <br />
            <span className="highlight-gold">Right Support to Thrive.</span>
          </h1>
          <p className="programs-page-lead">
            We provide structured, caring interventions that address the whole child—educational retention, practical vocational capability, health, and a safe, protective community.
          </p>
        </div>
      </section>

      {/* Five Program Pillars Section */}
      <section className="section programs-list-section">
        <div className="container">
          <div className="programs-vertical-list">
            {PROGRAMS.map((prog, index) => {
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={prog.id} 
                  id={prog.id}
                  className={`program-row-item ${isEven ? 'row-reversed' : ''}`}
                >
                  {/* Photo Side */}
                  <div className="program-row-media">
                    <div 
                      className="program-image-frame"
                      onClick={() => onPhotoClick({
                        src: prog.photo,
                        title: prog.title,
                        caption: prog.summary,
                        category: prog.title
                      })}
                      title="Click to view full photo"
                    >
                      <img 
                        src={prog.photo} 
                        alt={prog.alt} 
                        className="program-row-img" 
                      />
                      <div className="program-media-overlay">
                        <span>Authentic Shankoe Activity</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="program-row-text">
                    <div className="program-pillar-badge">
                      <span className="pillar-num">0{index + 1}</span>
                      <span className="pillar-icon">{getIcon(prog.id)}</span>
                    </div>

                    <h2 className="program-pillar-title">{prog.title}</h2>
                    <p className="program-pillar-summary">{prog.summary}</p>

                    <div className="program-qa-box">
                      <div className="qa-item">
                        <h4 className="qa-heading">What do we do?</h4>
                        <p className="qa-answer">{prog.whatWeDo}</p>
                      </div>

                      <div className="qa-item">
                        <h4 className="qa-heading">Why does it matter?</h4>
                        <p className="qa-answer">{prog.whyItMatters}</p>
                      </div>
                    </div>

                    <div className="program-row-actions">
                      <button 
                        type="button" 
                        className="btn btn-outline btn-sm"
                        onClick={() => onNavigate('partner')}
                      >
                        <Heart size={15} fill="currentColor" />
                        <span>Support This Program</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spotlight: Practical Baking & Vocational Training */}
      <section className="section section-subtle baking-spotlight-section">
        <div className="container">
          <div className="section-header center">
            <span className="badge-pill gold">VOCATIONAL SPOTLIGHT</span>
            <h2 className="section-title">
              Hands-On Baking & <span className="highlight-gold">Culinary Mastery</span>
            </h2>
            <p className="subtitle">
              Building vocational self-reliance, food safety knowledge, and real pride of craftsmanship in our youth.
            </p>
          </div>

          <div className="spotlight-photos-grid">
            {bakingPhotos.map((photo, i) => (
              <div 
                key={i} 
                className="spotlight-photo-card"
                onClick={() => onPhotoClick(photo)}
                title="View photograph in high resolution"
              >
                <div className="spotlight-img-wrap">
                  <img src={photo.src} alt={photo.title} className="spotlight-img" />
                </div>
                <div className="spotlight-info">
                  <h4 className="spotlight-title">{photo.title}</h4>
                  <p className="spotlight-caption">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="spotlight-note-box">
            <Sparkles size={22} className="spotlight-note-icon" />
            <p className="spotlight-note-text">
              By teaching tangible culinary skills and commercial hygiene standards, youth at Shankoe CYDC gain abilities that open immediate enterprise and hospitality opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section programs-cta-section text-center">
        <div className="container container-narrow">
          <h2 className="section-title">Want to help expand these pathways?</h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>
            From kitchen supplies and baking ingredients to scholastic books, your partnership makes real capability possible.
          </p>
          <button 
            type="button" 
            className="btn btn-gold btn-lg"
            onClick={() => onNavigate('partner')}
          >
            <Heart size={18} fill="currentColor" />
            <span>Partner With Shankoe Programs</span>
          </button>
        </div>
      </section>
    </div>
  );
}
