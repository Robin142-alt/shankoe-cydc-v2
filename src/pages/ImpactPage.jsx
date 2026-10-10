import React, { useState } from 'react';
import { 
  BarChart3, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Sprout, 
  Users, 
  School, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { IMPACT_STATS, ACHIEVEMENTS, STORIES, BRAND } from '../data/content';
import './ImpactPage.css';

export default function ImpactPage({ onNavigate, onPhotoClick }) {
  const [selectedStory, setSelectedStory] = useState(null);

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={28} />;
      case 'Briefcase': return <Briefcase size={28} />;
      case 'TrendingUp': return <TrendingUp size={28} />;
      case 'Sprout': return <Sprout size={28} />;
      case 'Users': return <Users size={28} />;
      case 'School': return <School size={28} />;
      case 'Calendar': return <Calendar size={28} />;
      default: return <BarChart3 size={28} />;
    }
  };

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={24} />;
      case 'TrendingUp': return <TrendingUp size={24} />;
      case 'Sprout': return <Sprout size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <div className="impact-page">
      {/* 1. Header */}
      <section className="impact-header-section section-dark">
        <div className="container container-narrow text-center">
          <h1 className="impact-page-title" data-reveal>
            Our Measured <span className="highlight-gold">Impact</span>
          </h1>
          <p className="impact-page-lead" data-reveal data-reveal-delay="120">
            We transform the lives of vulnerable children and young people by helping them build brighter, safer futures. For over two decades, our community-based programs in Narok County have produced enduring, documented transformation.
          </p>
        </div>
      </section>

      {/* Sub-Navigation Quick Jump Bar */}
      <nav className="impact-subnav-bar" aria-label="Impact Sections">
        <div className="container impact-subnav-container">
          <a href="#impact-statistics" className="impact-subnav-link">Impact Statistics</a>
          <a href="#achievements" className="impact-subnav-link">Key Achievements</a>
          <a href="#stories" className="impact-subnav-link">Real Stories</a>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* SECTION 1: IMPACT STATISTICS                            */}
      {/* ======================================================== */}
      <section className="section impact-stats-section" id="impact-statistics">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Two Decades of <span className="highlight-gold">Verified Reach</span>
            </h2>
            <p className="subtitle">
              Every statistic represents real children, families, and schools in Narok County whose lives are forever changed.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="official-stats-grid">
            {IMPACT_STATS.map((item, idx) => (
              <div key={item.id} className="official-stat-card" data-reveal data-reveal-delay={`${idx * 80}`}>
                <div className="stat-card-icon-box">
                  {getStatIcon(item.icon)}
                </div>
                <div className="stat-card-number">{item.stat}</div>
                <div className="stat-card-highlight">{item.highlight}</div>
                <p className="stat-card-description">{item.fullDescription}</p>
              </div>
            ))}
          </div>

          {/* Authenticity Certificate Note */}
          <div className="stats-authenticity-card" data-reveal>
            <ShieldCheck size={20} className="auth-shield-icon" />
            <p className="auth-note-text">
              These figures represent official institutional milestones recorded over two decades of ministry by {BRAND.fullName} in collaboration with the Methodist Church in Kenya and local partners.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: ACHIEVEMENTS                                 */}
      {/* ======================================================== */}
      <section className="section section-subtle achievements-section" id="achievements">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Our Major <span className="highlight-gold">Achievements</span>
            </h2>
            <p className="subtitle">
              How our strategic interventions translate into generational stability and self-reliance.
            </p>
          </div>

          <div className="achievements-cards-grid">
            {ACHIEVEMENTS.map((achieve, idx) => (
              <div key={achieve.id} className="achievement-card" data-reveal data-reveal-delay={`${idx * 100}`}>
                <div className="achievement-card-top">
                  <div className="achievement-icon-box">
                    {getAchievementIcon(achieve.icon)}
                  </div>
                  <div className="achievement-metric-badge">
                    {achieve.metric}
                  </div>
                </div>

                <h3 className="achievement-card-title">{achieve.title}</h3>
                <p className="achievement-card-summary">{achieve.summary}</p>

                <ul className="achievement-bullets-list">
                  {achieve.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="achievement-bullet-item">
                      <CheckCircle2 size={16} className="bullet-check" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: STORIES                                      */}
      {/* ======================================================== */}
      <section className="section stories-section" id="stories">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Stories of Growth & <span className="highlight-gold">Belonging</span>
            </h2>
            <p className="subtitle">
              Real moments capturing the dignity, learning, and laughter that flourish every day at Shankoe CYDC.
            </p>
          </div>

          <div className="stories-editorial-grid">
            {STORIES.map((story, idx) => (
              <article key={story.id} className="story-card" data-reveal data-reveal-delay={`${idx * 100}`}>
                <div 
                  className="story-image-wrap"
                  onClick={() => onPhotoClick && onPhotoClick({
                    src: story.photo,
                    title: story.title,
                    caption: story.summary,
                    category: story.category
                  })}
                  title="Click to view full photo"
                >
                  <img src={story.photo} alt={story.title} className="story-img" />
                  <span className="story-category-tag">{story.category}</span>
                </div>

                <div className="story-content">
                  <div className="story-meta-row">
                    <span className="story-read-time">
                      <Clock size={13} />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-summary">{story.summary}</p>
                  <p className="story-detail-snippet">{story.detail}</p>

                  <div className="story-action-row">
                    <button 
                      type="button" 
                      className="story-read-btn"
                      onClick={() => onPhotoClick && onPhotoClick({
                        src: story.photo,
                        title: story.title,
                        description: `${story.summary} ${story.detail}`,
                        category: story.category
                      })}
                    >
                      <span>View Photo & Story</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
