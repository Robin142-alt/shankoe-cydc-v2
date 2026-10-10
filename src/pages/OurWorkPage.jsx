import React from 'react';
import { 
  Workflow,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Sprout,
  Users,
  School,
  Calendar,
  Award
} from 'lucide-react';
import OurPathwaysSection from '../components/OurPathwaysSection';
import ImpactCounterStrip from '../components/ImpactCounterStrip';
import { 
  BRAND,
  THEORY_OF_CHANGE, 
  IMPACT_STATS,
  ACHIEVEMENTS,
  STORIES
} from '../data/content';
import './OurWorkPage.css';

export default function OurWorkPage({ onNavigate, onPhotoClick }) {

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
    <div className="work-page">
      {/* Page Header */}
      <section className="work-header-section section-dark">
        <div className="container container-narrow text-center">
          <h1 className="work-page-title" data-reveal>
            Our <span className="highlight-gold">Work</span>
          </h1>
          <p className="work-page-lead" data-reveal data-reveal-delay="120">
            Holistic programs, evidence-based approaches, and two decades of proven impact — transforming the lives of vulnerable children and young people across Narok County.
          </p>
        </div>
      </section>

      {/* Sub-Navigation Quick Jump Bar */}
      <nav className="work-subnav-bar" aria-label="Our Work Sections">
        <div className="container work-subnav-container">
          <a href="#our-programs" className="work-subnav-link">Our Programs</a>
          <a href="#theory-of-change" className="work-subnav-link">Our Approach</a>
          <a href="#impact" className="work-subnav-link">Impact</a>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* SECTION 1: OUR PROGRAMS                                  */}
      {/* ======================================================== */}
      <div id="our-programs">
        <OurPathwaysSection onPhotoClick={onPhotoClick} />
      </div>

      {/* ======================================================== */}
      {/* SECTION 2: OUR APPROACH / THEORY OF CHANGE               */}
      {/* ======================================================== */}
      <section className="section section-subtle work-toc-section" id="theory-of-change">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Our Approach / Theory of <span className="highlight-gold">Change</span>
            </h2>
            <p className="subtitle">
              A clear, accountable pathway from initial investment to generational flourishing.
            </p>
          </div>

          {/* Official Theory of Change Statement */}
          <div className="toc-statement-card" data-reveal>
            <div className="toc-statement-header">
              <Workflow size={20} className="toc-icon-gold" />
              <span>OFFICIAL STRATEGIC FORMULATION</span>
            </div>
            <blockquote className="toc-statement-quote">
              "{THEORY_OF_CHANGE.officialStatement}"
            </blockquote>
          </div>

          {/* 3-Step Visual Road Map */}
          <div className="toc-roadmap-grid">
            {THEORY_OF_CHANGE.steps.map((step, idx) => (
              <div key={idx} className="toc-road-card" data-reveal data-reveal-delay={`${idx * 120}`}>
                <div className="toc-road-step-badge">
                  <span>STAGE 0{idx + 1}</span>
                </div>
                <h3 className="toc-road-title">{step.step}</h3>
                <span className="toc-road-theme">{step.theme}</span>

                <ul className="toc-road-list">
                  {step.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="toc-road-item">
                      <CheckCircle2 size={16} className="toc-road-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: IMPACT                                         */}
      {/* ======================================================== */}
      <section className="work-impact-section" id="impact">

        {/* "Proven Results Across Two Decades" animated counter strip */}
        <ImpactCounterStrip onNavigate={onNavigate} />

        {/* Detailed Impact Statistics */}
        <div className="section work-stats-section">
          <div className="container">
            <div className="section-header center">
              <h2 className="section-title">
                Two Decades of <span className="highlight-gold">Verified Reach</span>
              </h2>
              <p className="subtitle">
                Every statistic represents real children, families, and schools in Narok County whose lives are forever changed.
              </p>
            </div>

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

            {/* Authenticity Note */}
            <div className="stats-authenticity-card" data-reveal>
              <ShieldCheck size={20} className="auth-shield-icon" />
              <p className="auth-note-text">
                These figures represent official institutional milestones recorded over two decades of ministry by {BRAND.fullName} in collaboration with the Methodist Church in Kenya and local partners.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="section section-subtle achievements-section" id="achievements">
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
        </div>

        {/* Stories */}
        <div className="section stories-section" id="stories">
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
        </div>
      </section>

      {/* Partner CTA Strip */}
      <section className="work-cta-strip">
        <div className="container">
          <div className="work-cta-card" data-reveal="scale">
            <div className="work-cta-content">
              <h2 className="work-cta-title">
                Partner With <span className="highlight-gold">Us</span>
              </h2>
              <p className="work-cta-lead">
                Stronger futures are built together. Join us in nurturing children and young people across Narok County.
              </p>
            </div>
            <div className="work-cta-action">
              <button 
                type="button" 
                className="btn btn-gold"
                onClick={() => onNavigate('partner')}
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
