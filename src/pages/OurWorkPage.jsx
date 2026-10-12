import React from 'react';
import { 
  Workflow,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import OurPathwaysSection from '../components/OurPathwaysSection';
import ImpactCounterStrip from '../components/ImpactCounterStrip';
import { 
  BRAND,
  THEORY_OF_CHANGE
} from '../data/content';
import './OurWorkPage.css';

export default function OurWorkPage({ onNavigate, onPhotoClick }) {

  return (
    <div className="work-page">
      {/* Page Header */}
      <section className="work-header-section section-dark">
        <div className="container container-narrow text-center">
          <h1 className="work-page-title" data-reveal>
            Our <span className="highlight-gold">Work</span>
          </h1>
          <p className="work-page-lead" data-reveal data-reveal-delay="120">
            Holistic programs, evidence-based approaches, and two decades of proven impact — transforming the lives of vulnerable children and young people across rural communities in Kenya.
          </p>
        </div>
      </section>

      {/* Sub-Navigation Quick Jump Bar */}
      <nav className="work-subnav-bar" aria-label="Our Work Sections">
        <div className="container work-subnav-container">
          <a href="#our-programs" className="work-subnav-link">Our Programs</a>
          <a href="#theory-of-change" className="work-subnav-link">Our Approach</a>
          <a href="#impact" className="work-subnav-link">Impact Snapshot</a>
          <button 
            type="button" 
            className="work-subnav-link work-subnav-highlight"
            onClick={() => onNavigate('impact')}
          >
            Full Impact Report →
          </button>
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
      {/* SECTION 3: IMPACT SNAPSHOT                               */}
      {/* ======================================================== */}
      <section className="work-impact-section" id="impact">

        {/* Animated counter teaser — full detail lives on the Impact page */}
        <ImpactCounterStrip onNavigate={onNavigate} />

        {/* Link-through to full Impact page */}
        <div className="work-impact-cta-row">
          <div className="container">
            <div className="work-impact-cta-inner" data-reveal>
              <p className="work-impact-cta-text">
                Explore the full story behind these numbers — verified statistics, key achievements, and real stories from children and families we serve.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => onNavigate('impact')}
              >
                <span>See Full Impact Report</span>
                <ArrowRight size={16} />
              </button>
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
                Stronger futures are built together. Join us in nurturing children and young people across rural communities in Kenya.
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
