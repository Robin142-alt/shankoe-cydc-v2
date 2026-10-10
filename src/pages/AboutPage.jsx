import React from 'react';
import { 
  Heart, 
  Target, 
  History, 
  MapPin, 
  Handshake, 
  Workflow, 
  GraduationCap, 
  Sparkles, 
  Scale, 
  HeartHandshake, 
  ShieldCheck, 
  Users, 
  Church, 
  School, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { 
  BRAND, 
  VISION, 
  MISSION, 
  THEOLOGY_STATEMENT, 
  WHO_WE_ARE_TEXT, 
  HISTORY_TEXT, 
  CORE_VALUES, 
  THEORY_OF_CHANGE,
  OUR_PARTNERS 
} from '../data/content';
import KenyaMap from '../components/KenyaMap';
import OurPathwaysSection from '../components/OurPathwaysSection';
import './AboutPage.css';

export default function AboutPage({ onNavigate, onPhotoClick }) {
  const getValIcon = (id) => {
    switch (id) {
      case 'compassion': return <Heart size={22} />;
      case 'justice': return <Scale size={22} />;
      case 'hope': return <Sparkles size={22} />;
      case 'inclusion': return <HeartHandshake size={22} />;
      case 'integrity': return <ShieldCheck size={22} />;
      case 'partnership': return <Users size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const getPartnerIcon = (iconName) => {
    switch (iconName) {
      case 'Church': return <Church size={24} />;
      case 'School': return <School size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Globe': return <Globe size={24} />;
      default: return <Handshake size={24} />;
    }
  };

  const churchPhoto = {
    src: '/assets/photos/shankoe-community-church-group.jpg',
    title: 'Community Leadership & Shankoe Methodist Church',
    caption: 'Pastoral leaders and community fellowship gathered outside Shankoe Methodist Church.',
    category: 'Community & Church'
  };

  const mealPhoto = {
    src: '/assets/photos/shankoe-children-meal-fellowship.jpg',
    title: 'Nurturing Every Child & Young Person',
    caption: 'Safe gathering and nutrition fellowship for children in Shankoe.',
    category: 'Care & Belonging'
  };

  return (
    <div className="about-page">
      {/* 1. Page Header */}
      <section className="about-header-section section-dark">
        <div className="container container-narrow text-center">
          <h1 className="about-page-title">
            About {BRAND.fullName}
          </h1>
          <p className="about-page-lead">
            Rooted in the belief that Children and Youth Ministry is the vital lifeline of the church and community, Shankoe CYDC nurtures vulnerable children and young people both spiritually and socially.
          </p>
        </div>
      </section>

      {/* Quick In-Page Anchor Navigation Bar */}
      <nav className="about-subnav-bar" aria-label="About Us Sections">
        <div className="container about-subnav-container">
          <a href="#who-we-are" className="about-subnav-link">Who We Are</a>
          <a href="#mission-vision" className="about-subnav-link">Mission & Vision</a>
          <a href="#our-history" className="about-subnav-link">Our History</a>
          <a href="#where-we-work" className="about-subnav-link">Where We Work</a>
          <a href="#our-partners" className="about-subnav-link">Our Partners</a>
          <a href="#theory-of-change" className="about-subnav-link">Approach & Theory of Change</a>
          <a href="#our-programs" className="about-subnav-link">Our Programs</a>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* SECTION 1: WHO WE ARE                                   */}
      {/* ======================================================== */}
      <section className="section about-who-section" id="who-we-are">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-text-side">
              <h2 className="section-title">
                A Child-Centred, <span className="highlight-gold">Community-Based Institution</span>
              </h2>
              <div className="body-paragraph rich-text">
                <p>
                  We are a child-centred, community-based institution founded by the <strong>Methodist Church in Kenya - Shankoe</strong> with a mandate to support Children and Youth Ministry.
                </p>
                <p>
                  Children and Youth Ministry remain the lifeline of every Church, and for the Church to thrive, it must take care of its children and young people both spiritually and socially.
                </p>
                <p>
                  Theology and development for children and young people begins with the belief that every young person has inherent dignity, gifts, and the right to flourish. {BRAND.fullName} supports this growth by creating safe and welcoming spaces, listening to children’s voices, and involving them in decisions that affect their lives.
                </p>
                <p>
                  By partnering with families, schools, and local services, the Centre supports in providing education, care, and opportunities for young people to develop their abilities and contribute to their communities. A theology rooted in compassion, justice, and hope encourages communities to protect children, include those who are often overlooked, and nurture their spiritual, emotional, social, and intellectual wellbeing.
                </p>
              </div>

              <div className="about-badge-stats">
                <div className="stat-pill">
                  <MapPin size={16} className="stat-icon" />
                  <span>Narok County, Kenya</span>
                </div>
                <div className="stat-pill">
                  <Church size={16} className="stat-icon" />
                  <span>Methodist Church in Kenya</span>
                </div>
                <div className="stat-pill">
                  <Heart size={16} className="stat-icon" />
                  <span>Child-Centred Ministry</span>
                </div>
              </div>
            </div>

            <div className="about-media-side">
              <div 
                className="about-image-card"
                onClick={() => onPhotoClick && onPhotoClick(churchPhoto)}
                title="View full photograph"
              >
                <img 
                  src={churchPhoto.src} 
                  alt={churchPhoto.title} 
                  className="about-card-img" 
                />
                <div className="about-card-caption">
                  <span>Authentic Shankoe Methodist Fellowship & Community Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: MISSION & VISION                             */}
      {/* ======================================================== */}
      <section className="section section-subtle about-vm-section" id="mission-vision">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Mission & <span className="highlight-gold">Vision</span>
            </h2>
            <p className="subtitle">
              Guided by Christ's compassion and dedicated to whole-person human flourishing.
            </p>
          </div>

          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-card-top">
                <Target size={28} className="vm-icon" />
                <span className="vm-badge">OUR VISION</span>
              </div>
              <blockquote className="vm-quote">
                “{VISION}”
              </blockquote>
              <p className="vm-card-sub">
                Envisioning safety, boundless dignity, and equal opportunity for every girl and boy.
              </p>
            </div>

            <div className="vm-card mission-card">
              <div className="vm-card-top">
                <Heart size={28} className="vm-icon" />
                <span className="vm-badge">OUR MISSION</span>
              </div>
              <blockquote className="vm-quote">
                “{MISSION}”
              </blockquote>
              <p className="vm-card-sub">
                Embracing, engaging, and empowering across every developmental milestone.
              </p>
            </div>
          </div>

          {/* Core Foundations & Values */}
          <div className="values-container-block">
            <div className="values-header text-center">
              <h3 className="values-section-title">Our Foundational Values</h3>
              <p className="values-section-subtitle">
                The non-negotiable principles guiding every program, relationship, and decision at Shankoe CYDC.
              </p>
            </div>

            <div className="values-grid">
              {CORE_VALUES.map((val) => (
                <div key={val.id} className="value-card">
                  <div className="value-icon-box">
                    {getValIcon(val.id)}
                  </div>
                  <h4 className="value-title">{val.title}</h4>
                  <div className="value-summary">{val.summary}</div>
                  <p className="value-description">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: OUR HISTORY                                  */}
      {/* ======================================================== */}
      <section className="section about-history-section" id="our-history">
        <div className="container">
          <div className="about-split-grid reverse">
            <div className="about-media-side">
              <div 
                className="about-image-card"
                onClick={() => onPhotoClick && onPhotoClick(mealPhoto)}
                title="View full photograph"
              >
                <img 
                  src={mealPhoto.src} 
                  alt={mealPhoto.title} 
                  className="about-card-img" 
                />
                <div className="about-card-caption">
                  <span>Over Two Decades of Daily Care and Nurturing</span>
                </div>
              </div>
            </div>

            <div className="about-text-side">
              <h2 className="section-title">
                Over Two Decades of <span className="highlight-gold">Transforming Lives</span>
              </h2>
              <div className="body-paragraph rich-text">
                <p>
                  For over two decades, {BRAND.fullName} has transformed the lives of vulnerable children and young people by helping them build brighter, safer futures.
                </p>
                <p>
                  Founded by the Methodist Church in Kenya - Shankoe with a mandate to support Children and Youth Ministry, the Centre recognizes that children and young people are the lifeline of the church and society. For communities to thrive, their children must be cared for both spiritually and socially.
                </p>
                <p>
                  A theology rooted in compassion, justice, and hope has continuously driven the Centre to include those who are often overlooked—nurturing their spiritual, emotional, social, and intellectual wellbeing. Over the years, the Centre has continually expanded to support education, health, skills development, community strengthening, and climate change resilience programs.
                </p>
              </div>

              {/* Historical Milestones Strip */}
              <div className="history-milestones-row">
                <div className="milestone-box">
                  <span className="milestone-year">20+</span>
                  <span className="milestone-label">Years of Dedicated Service</span>
                </div>
                <div className="milestone-box">
                  <span className="milestone-year">693</span>
                  <span className="milestone-label">Children & Young People Supported to Universities</span>
                </div>
                <div className="milestone-box">
                  <span className="milestone-year">131</span>
                  <span className="milestone-label">Safe Schools Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: WHERE WE WORK (Accurate Kenya Map)           */}
      {/* ======================================================== */}
      <section className="section section-dark where-we-work-section" id="where-we-work">
        <div className="container">
          <div className="section-header center light-text">
            <h2 className="section-title">
              Anchored in <span className="highlight-gold">Narok County, Kenya</span>
            </h2>
            <p className="subtitle text-light-muted">
              Operating from the Shankoe Methodist Church Compound in Trans Mara West, serving pastoralist settlements and safeguarding children across 131 partner schools.
            </p>
          </div>

          {/* Interactive Kenya Map Highlighting Narok County */}
          <KenyaMap />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: OUR PARTNERS                                 */}
      {/* ======================================================== */}
      <section className="section about-partners-section" id="our-partners">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Our <span className="highlight-gold">Partners</span>
            </h2>
          </div>

          <div className="partners-logo-grid">
            {OUR_PARTNERS.map((partner) => (
              <div key={partner.id} className="partner-logo-card">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="partner-logo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      if (partner.logoFallback) {
                        e.target.src = partner.logoFallback;
                      } else {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div 
                  className="partner-logo-text-fallback" 
                  style={{ display: partner.logo ? 'none' : 'flex' }}
                >
                  {partner.name}
                </div>
                <span className="partner-logo-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: OUR APPROACH / THEORY OF CHANGE              */}
      {/* ======================================================== */}
      <section className="section section-subtle about-toc-section" id="theory-of-change">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Our Theory of <span className="highlight-gold">Change</span>
            </h2>
            <p className="subtitle">
              A clear, accountable pathway from initial investment to generational flourishing.
            </p>
          </div>

          {/* Official Theory of Change Statement */}
          <div className="toc-statement-card">
            <div className="toc-statement-header">
              <Workflow size={20} className="toc-icon-gold" />
              <span>OFFICIAL STRATEGIC FORMULATION</span>
            </div>
            <blockquote className="toc-statement-quote">
              “{THEORY_OF_CHANGE.officialStatement}”
            </blockquote>
          </div>

          {/* 3-Step Visual Road Map */}
          <div className="toc-roadmap-grid">
            {THEORY_OF_CHANGE.steps.map((step, idx) => (
              <div key={idx} className="toc-road-card">
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
      {/* SECTION 7: OUR PROGRAMS (Presenting Our Pathways)       */}
      {/* ======================================================== */}
      <div id="our-programs">
        <OurPathwaysSection onPhotoClick={onPhotoClick} />
      </div>
    </div>
  );
}
