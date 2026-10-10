import React from 'react';
import { 
  Heart, 
  Target, 
  History, 
  MapPin, 
  Handshake, 
  Sparkles, 
  Scale, 
  HeartHandshake, 
  ShieldCheck, 
  Users, 
  Church, 
  School, 
  Globe, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { 
  BRAND, 
  VISION, 
  MISSION, 
  WHO_WE_ARE_TEXT, 
  HISTORY_TEXT, 
  CORE_VALUES,
  OUR_PARTNERS,
  KENYA_2005_CONTEXT 
} from '../data/content';
import KenyaMap from '../components/KenyaMap';
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

  const getHistoryIcon = (id) => {
    switch (id) {
      case 'education': return <GraduationCap size={20} />;
      case 'health': return <Heart size={20} />;
      case 'hiv': return <Users size={20} />;
      case 'protection': return <ShieldCheck size={20} />;
      case 'inequality': return <Scale size={20} />;
      default: return <History size={20} />;
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
          <h1 className="about-page-title" data-reveal>
            About {BRAND.fullName}
          </h1>
          <p className="about-page-lead" data-reveal data-reveal-delay="120">
            Rooted in the belief that Children and Youth Ministry is the vital lifeline of the church and community, Shankoe CYDC nurtures vulnerable children and young people both spiritually and socially.
          </p>
        </div>
      </section>

      {/* Quick In-Page Anchor Navigation Bar */}
      <nav className="about-subnav-bar" aria-label="About Us Sections">
        <div className="container about-subnav-container">
          <a href="#who-we-are" className="about-subnav-link">Who We Are</a>
          <a href="#mission-vision" className="about-subnav-link">Mission &amp; Vision</a>
          <a href="#our-history" className="about-subnav-link">Our History</a>
          <a href="#where-we-work" className="about-subnav-link">Where We Work</a>
          <a href="#our-partners" className="about-subnav-link">Our Partners</a>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* SECTION 1: WHO WE ARE                                   */}
      {/* ======================================================== */}
      <section className="section about-who-section" id="who-we-are">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-text-side">
              <h2 className="section-title" data-reveal="slide-left">
                Rooted in Faith. <span className="highlight-gold">Empowering Every Child.</span>
              </h2>
              <div className="body-paragraph rich-text">
                <p data-reveal data-reveal-delay="100">
                  Every child deserves the chance to belong, grow and fulfil their potential. Founded by the <strong>Methodist Church in Kenya – Shankoe</strong>, the Centre is a child-centred, community-based institution dedicated to strengthening ministry for children and young people.
                </p>
                <p data-reveal data-reveal-delay="180">
                  Our work is rooted in faith, compassion, justice and hope. We nurture spiritual, social, emotional and intellectual wellbeing, protect children, champion inclusion and create supportive communities where every child and young person can discover their potential and thrive.
                </p>
                <p data-reveal data-reveal-delay="240">
                  Theology and development for children and young people begins with the belief that every young person has inherent dignity, gifts, and the right to flourish. {BRAND.fullName} supports this growth by creating safe and welcoming spaces, listening to children's voices, and involving them in decisions that affect their lives.
                </p>
                <p data-reveal data-reveal-delay="300">
                  By partnering with families, schools, and local services, the Centre provides education, care, and opportunities for children and young people to develop their abilities and contribute meaningfully to their communities.
                </p>
              </div>


            </div>

            <div className="about-media-side" data-reveal="slide-right">
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
            <div className="values-header text-center" data-reveal>
              <h3 className="values-section-title">Our Foundational Values</h3>
              <p className="values-section-subtitle">
                The non-negotiable principles guiding every program, relationship, and decision at Shankoe CYDC.
              </p>
            </div>

            <div className="values-grid">
              {CORE_VALUES.map((val, idx) => (
                <div key={val.id} className="value-card" data-reveal data-reveal-delay={`${idx * 80}`}>
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
            <div className="about-media-side" data-reveal="slide-left">
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
              <h2 className="section-title" data-reveal="slide-right">
                Over Two Decades of <span className="highlight-gold">Transforming Lives</span>
              </h2>
              <div className="body-paragraph rich-text">
                <p data-reveal data-reveal-delay="80">
                  For over two decades, {BRAND.fullName} has transformed the lives of vulnerable children and young people by helping them build brighter, safer futures.
                </p>
                <p data-reveal data-reveal-delay="160">
                  Founded by the Methodist Church in Kenya - Shankoe with a mandate to support Children and Youth Ministry, the Centre recognizes that children and young people are the lifeline of the church and society. For communities to thrive, their children must be cared for both spiritually and socially.
                </p>
                <p data-reveal data-reveal-delay="240">
                  A theology rooted in compassion, justice, and hope has continuously driven the Centre to include those who are often overlooked—nurturing their spiritual, emotional, social, and intellectual wellbeing. Over the years, the Centre has continually expanded to support education, health, skills development, community strengthening, and climate change resilience programs.
                </p>
              </div>

              {/* Historical Milestones Strip */}
              <div className="history-milestones-row">
                <div className="milestone-box" data-reveal data-reveal-delay="100">
                  <span className="milestone-year">20+</span>
                  <span className="milestone-label">Years of Dedicated Service</span>
                </div>
                <div className="milestone-box" data-reveal data-reveal-delay="200">
                  <span className="milestone-year">693</span>
                  <span className="milestone-label">Children & Young People Supported to Universities</span>
                </div>
                <div className="milestone-box" data-reveal data-reveal-delay="300">
                  <span className="milestone-year">131</span>
                  <span className="milestone-label">Safe Schools Reached</span>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Background: Circumstances in Kenya Circa 2005 */}
          <div className="history-context-block" data-reveal>
            <div className="history-context-header text-center">
              <div className="history-context-badge">
                <History size={15} />
                <span>HISTORICAL BACKGROUND • KENYA CIRCA 2005</span>
              </div>
              <h3 className="history-context-heading">
                The Realities That Shaped Our Calling
              </h3>
              <p className="history-context-sub">
                When Shankoe CYDC was founded, vulnerable children and young people across Kenya faced severe systemic challenges. Understanding the national landscape at the time explains the critical circumstances that prompted the Methodist Church in Kenya – Shankoe to act:
              </p>
            </div>

            <div className="history-context-grid">
              {KENYA_2005_CONTEXT.map((item, idx) => (
                <div key={item.id} className={`history-context-card ${item.id === 'inequality' ? 'history-context-card-wide' : ''}`} data-reveal data-reveal-delay={`${idx * 80}`}>
                  <div className="history-context-card-top">
                    <div className="history-card-icon-wrap">
                      {getHistoryIcon(item.id)}
                    </div>
                    <h4 className="history-card-title">{item.topic}</h4>
                  </div>
                  <p className="history-card-text">{item.details}</p>
                </div>
              ))}
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
            <h2 className="section-title" data-reveal>
              Our <span className="highlight-gold">Partners</span>
            </h2>
            <p className="subtitle about-partners-principle" data-reveal data-reveal-delay="100">
              Strong partnerships with families, communities and other organisations help children and young people thrive. Through collaboration, shared knowledge, resources and trusting relationships, the Centre strengthens support systems and creates safer, more inclusive opportunities.
            </p>
          </div>

          <div className="partners-logo-grid">
            {OUR_PARTNERS.map((partner, idx) => (
              <div key={partner.id} className="partner-logo-card" data-reveal data-reveal-delay={`${idx * 70}`}>
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
    </div>
  );
}
