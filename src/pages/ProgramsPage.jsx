import React from 'react';
import { 
  GraduationCap, 
  ChefHat, 
  HeartPulse, 
  ShieldCheck, 
  Trees, 
  ArrowRight,
  Heart,
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';
import { PROGRAMS } from '../data/content';
import './ProgramsPage.css';

export default function ProgramsPage({ onNavigate, onPhotoClick }) {
  const getIcon = (id) => {
    switch (id) {
      case 'education': return <GraduationCap size={28} />;
      case 'health': return <HeartPulse size={28} />;
      case 'skills': return <ChefHat size={28} />;
      case 'community': return <ShieldCheck size={28} />;
      case 'climate': return <Trees size={28} />;
      default: return <GraduationCap size={28} />;
    }
  };

  const bakingPhotos = [
    {
      src: '/assets/photos/shankoe-indoor-baking-skills.jpg',
      title: 'Precision Mixing & Electric Mixer Practice',
      caption: 'Students practicing proper batter preparation and technique.',
      category: 'Skills Development'
    },
    {
      src: '/assets/photos/shankoe-outdoor-baking-measuring.jpg',
      title: 'Ingredient Ratio & Measurement',
      caption: 'Learning the discipline of measuring cups and accurate recipes.',
      category: 'Skills Development'
    },
    {
      src: '/assets/photos/shankoe-fresh-muffins-presentation.jpg',
      title: 'Freshly Baked Muffin Showcase',
      caption: 'Students proudly presenting their completed baked goods.',
      category: 'Skills Development'
    }
  ];

  return (
    <div className="programs-page">
      {/* Header */}
      <section className="programs-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">OFFICIAL PROGRAMS</span>
          <h1 className="programs-page-title">
            Every Child Needs The <br />
            <span className="highlight-gold">Right Support to Thrive.</span>
          </h1>
          <p className="programs-page-lead">
            Reimagining the future of children and young people through education, health, skills development and strong communities is central to achieving lasting and sustainable change.
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
                      {prog.tagline && (
                        <span className="program-tagline-badge">{prog.tagline}</span>
                      )}
                    </div>

                    <h2 className="program-pillar-title">{prog.title}</h2>

                    {/* Full Authentic Paragraphs from Official Document */}
                    <div className="program-paragraphs-wrap">
                      {prog.paragraphs && prog.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="program-paragraph">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* UNICEF Callout Banner for Climate Resilience */}
                    {prog.statCallout && (
                      <div className="program-stat-callout">
                        <div className="stat-callout-header">
                          <span className="stat-source-tag">{prog.statCallout.source}</span>
                          <span className="stat-highlight-figure">{prog.statCallout.stat}</span>
                        </div>
                        <p className="stat-callout-body">{prog.statCallout.text}</p>
                      </div>
                    )}

                    {/* Structured Initiatives (Agents of Change & Family Empowerment) */}
                    {prog.structuredInitiatives && (
                      <div className="program-initiatives-container">
                        {prog.structuredInitiatives.map((init, initIdx) => (
                          <div key={initIdx} className="initiative-card">
                            <h4 className="initiative-heading">{init.title}</h4>
                            {init.points && (
                              <ul className="initiative-points-list">
                                {init.points.map((point, ptIdx) => (
                                  <li key={ptIdx} className="initiative-point-item">
                                    <strong className="point-title">{point.label}:</strong> {point.text}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {init.text && (
                              <p className="initiative-body-text">{init.text}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Core Highlights Checklist */}
                    {prog.highlights && (
                      <div className="program-highlights-wrap">
                        <ul className="program-highlights-list">
                          {prog.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="program-highlight-item">
                              <CheckCircle2 size={16} className="highlight-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="program-row-actions">
                      <button 
                        type="button" 
                        className="btn btn-outline btn-sm"
                        onClick={() => onNavigate('partner')}
                      >
                        <Heart size={15} fill="currentColor" />
                        <span>Support {prog.title}</span>
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
