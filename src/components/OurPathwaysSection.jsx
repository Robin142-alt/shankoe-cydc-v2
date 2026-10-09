import React, { useState } from 'react';
import { 
  GraduationCap, 
  HeartPulse, 
  Trees, 
  ChefHat, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { PATHWAYS } from '../data/content';
import './OurPathwaysSection.css';

export default function OurPathwaysSection({ onPhotoClick, onNavigate = null, isStandalone = false }) {
  const [selectedPathway, setSelectedPathway] = useState('education');

  const getIcon = (id) => {
    switch (id) {
      case 'education': return <GraduationCap size={22} />;
      case 'healthcare': return <HeartPulse size={22} />;
      case 'climate-change': return <Trees size={22} />;
      case 'skills-development': return <ChefHat size={22} />;
      case 'community-strengthening': return <ShieldCheck size={22} />;
      default: return <GraduationCap size={22} />;
    }
  };

  const currentItem = PATHWAYS.find(p => p.id === selectedPathway) || PATHWAYS[0];

  return (
    <section className="our-pathways-section" id="our-pathways">
      <div className="container">
        {/* Section Header */}
        <div className="pathways-header text-center">
          <h2 className="section-title">
            Our <span className="highlight-gold">Pathways</span>
          </h2>
          <p className="pathways-lead">
            Replacing rigid silos with interconnected pathways of care: Education, Healthcare, Climate Change, Skills Development, and Community Strengthening.
          </p>
        </div>

        {/* Pathway Selection Tabs */}
        <div className="pathway-tabs-bar" role="tablist" aria-label="Pathways selector">
          {PATHWAYS.map((path) => (
            <button
              key={path.id}
              type="button"
              role="tab"
              aria-selected={selectedPathway === path.id}
              className={`pathway-tab-btn ${selectedPathway === path.id ? 'active' : ''}`}
              onClick={() => setSelectedPathway(path.id)}
            >
              <span className="tab-btn-icon">{getIcon(path.id)}</span>
              <span className="tab-btn-label">{path.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Pathway Detail Card */}
        <div className="pathway-detail-card" id={`pathway-${currentItem.id}`}>
          <div className="pathway-detail-grid">
            {/* Visual Media Side */}
            <div className="pathway-media-side">
              <div 
                className="pathway-img-wrap"
                onClick={() => onPhotoClick && onPhotoClick({
                  src: currentItem.photo,
                  title: `${currentItem.title} Pathway`,
                  caption: currentItem.summary,
                  category: 'Our Pathways'
                })}
                title="Click to view full photo"
              >
                <img 
                  src={currentItem.photo} 
                  alt={currentItem.alt || currentItem.title} 
                  className="pathway-img" 
                />
                <div className="pathway-badge-floating">
                  <span>{currentItem.tagline}</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="pathway-content-side">
              <div className="pathway-category-row">
                <span className="pathway-number-badge">PATHWAY</span>
                <span className="pathway-title-sub">{currentItem.tagline}</span>
              </div>

              <h3 className="pathway-card-title">{currentItem.title}</h3>
              <p className="pathway-card-summary">{currentItem.summary}</p>

              {currentItem.paragraphs && currentItem.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="pathway-paragraph">{p}</p>
              ))}

              {/* Key Highlights */}
              <div className="pathway-highlights-box">
                <h4 className="highlights-title">Core Interventions & Commitments:</h4>
                <ul className="highlights-list">
                  {currentItem.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="highlight-item">
                      <CheckCircle2 size={16} className="highlight-check" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Compact Grid for Quick Overview */}
        <div className="pathways-overview-grid">
          {PATHWAYS.map((path) => (
            <div 
              key={path.id}
              className={`pathway-mini-card ${selectedPathway === path.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedPathway(path.id);
                const el = document.getElementById(`pathway-${path.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }}
            >
              <div className="mini-card-icon">
                {getIcon(path.id)}
              </div>
              <h4 className="mini-card-title">{path.title}</h4>
              <p className="mini-card-desc">{path.summary}</p>
              <span className="mini-card-link">
                <span>Explore more</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
