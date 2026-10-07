import React, { useState } from 'react';
import { 
  ArrowDown, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  FileText, 
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { THEORY_OF_CHANGE } from '../data/content';
import './ImpactPage.css';

export default function ImpactPage({ onNavigate, onPhotoClick }) {
  const [showFullToc, setShowFullToc] = useState(false);

  const impactEvidences = [
    {
      title: "Tangible Vocational Skills",
      photo: "/assets/photos/shankoe-fresh-muffins-presentation.jpg",
      observation: "Children and youth actively learning commercial food preparation, measuring, hygiene, and baking.",
      tag: "Vocational Independence"
    },
    {
      title: "Mental Wellbeing & Joy of Play",
      photo: "/assets/photos/shankoe-playground-slide.jpg",
      observation: "Safe outdoor playground amenities where children play freely, build peer trust, and experience emotional security.",
      tag: "Psychosocial Health"
    },
    {
      title: "Balanced Daily Nutrition",
      photo: "/assets/photos/shankoe-children-meal-fellowship.jpg",
      observation: "Freshly prepared wholesome meals served to all enrolled children, alleviating nutrition gaps in Narok County.",
      tag: "Physical Vitality"
    },
    {
      title: "Community & Church Governance",
      photo: "/assets/photos/shankoe-community-church-group.jpg",
      observation: "Active pastoral and community involvement providing accountability, child safeguarding, and ethical mentorship.",
      tag: "Accountability & Stewardship"
    }
  ];

  return (
    <div className="impact-page">
      {/* Header */}
      <section className="impact-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">ACCOUNTABLE & CREDIBLE</span>
          <h1 className="impact-page-title">
            Our Theory of <br />
            <span className="highlight-gold">Lasting Change</span>
          </h1>
          <p className="impact-page-lead">
            Sustainable impact is not accidental. It happens when child protection, education, nutrition, and practical vocational skills work together within an accountable community.
          </p>
        </div>
      </section>

      {/* Theory of Change Step Flow */}
      <section className="section toc-section">
        <div className="container">
          <div className="section-header center">
            <span className="badge-pill">STEP-BY-STEP TRANSFORMATION</span>
            <h2 className="section-title">
              How Potential <span className="highlight-gold">Becomes Possibility</span>
            </h2>
            <p className="subtitle">
              A transparent, logical pathway designed for deep human flourishing.
            </p>
          </div>

          {/* Visual Step-by-Step Flow */}
          <div className="toc-flow-container">
            {THEORY_OF_CHANGE.steps.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="toc-step-card">
                  <div className="toc-card-header">
                    <span className="toc-step-num">STAGE 0{idx + 1}</span>
                    <h3 className="toc-step-title">{step.step}</h3>
                    <span className="toc-step-theme">{step.theme}</span>
                  </div>

                  <ul className="toc-items-list">
                    {step.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="toc-list-item">
                        <CheckCircle2 size={16} className="toc-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {idx < THEORY_OF_CHANGE.steps.length - 1 && (
                  <div className="toc-flow-connector">
                    <div className="connector-line" />
                    <div className="connector-arrow-box">
                      <ArrowDown size={18} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Official Full Theory of Change Collapsible Card */}
          <div className="official-toc-card">
            <div className="official-toc-header" onClick={() => setShowFullToc(!showFullToc)}>
              <div className="official-toc-title-row">
                <FileText size={20} className="toc-doc-icon" />
                <div>
                  <h4 className="official-toc-title">Official Organizational Theory of Change</h4>
                  <span className="official-toc-sub">Complete strategic formulation for Shankoe CYDC</span>
                </div>
              </div>
              <button 
                type="button" 
                className="toc-toggle-btn"
                aria-label={showFullToc ? 'Hide official text' : 'Show official text'}
              >
                {showFullToc ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>

            {showFullToc && (
              <div className="official-toc-body animate-fade-in">
                <blockquote className="official-toc-quote">
                  “{THEORY_OF_CHANGE.officialStatement}”
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Genuine Observed Outcomes (Evidence-Led, No Invented Numbers) */}
      <section className="section section-subtle impact-evidence-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">DOCUMENTED REALITY</span>
            <h2 className="section-title">
              Evidence of Impact in <span className="highlight-gold">Action</span>
            </h2>
            <p className="subtitle">
              We do not publish fabricated statistics. Instead, we let real outcomes speak with clarity and integrity.
            </p>
          </div>

          <div className="evidence-cards-grid">
            {impactEvidences.map((ev, i) => (
              <div 
                key={i} 
                className="evidence-card"
                onClick={() => onPhotoClick({
                  src: ev.photo,
                  title: ev.title,
                  caption: ev.observation,
                  category: ev.tag
                })}
                title="View authentic evidence photo"
              >
                <div className="evidence-media-wrap">
                  <img src={ev.photo} alt={ev.title} className="evidence-img" />
                  <span className="evidence-badge">{ev.tag}</span>
                </div>
                <div className="evidence-body">
                  <h3 className="evidence-title">{ev.title}</h3>
                  <p className="evidence-obs">{ev.observation}</p>
                  <div className="evidence-footer">
                    <span className="evidence-verified">
                      <ShieldCheck size={14} />
                      Verified Shankoe Project Observation
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Metric Transparency Note */}
          <div className="metric-policy-card">
            <ShieldCheck size={24} className="policy-icon" />
            <div>
              <h4 className="policy-title">Our Commitment to Data Integrity</h4>
              <p className="policy-text">
                Shankoe CYDC complies with strict ethical reporting standards. Verified enrollment figures and annual child health assessments are maintained in project registers and released only through confirmed partner audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section impact-cta text-center">
        <div className="container container-narrow">
          <h2 className="section-title">Be Part of This Change</h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>
            Direct your resources where they foster real human capability and joyful childhood in Narok County.
          </p>
          <button 
            type="button" 
            className="btn btn-gold btn-lg"
            onClick={() => onNavigate('partner')}
          >
            <Heart size={18} fill="currentColor" />
            <span>Partner With Our Impact</span>
          </button>
        </div>
      </section>
    </div>
  );
}
