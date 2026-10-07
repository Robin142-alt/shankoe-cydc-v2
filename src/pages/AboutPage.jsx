import React from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Anchor, 
  Scale, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Heart
} from 'lucide-react';
import { BRAND, VISION, MISSION, CORE_VALUES } from '../data/content';
import './AboutPage.css';

export default function AboutPage({ onNavigate, onPhotoClick }) {
  const getValIcon = (id) => {
    switch (id) {
      case 'inclusion': return <HeartHandshake size={22} />;
      case 'integrity': return <ShieldCheck size={22} />;
      case 'empowerment': return <Sparkles size={22} />;
      case 'resilience': return <Anchor size={22} />;
      case 'social-justice': return <Scale size={22} />;
      case 'partnership': return <Users size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const churchPhoto = {
    src: '/assets/photos/shankoe-community-church-group.jpg',
    title: 'Community Leadership & Shankoe Methodist Church',
    caption: 'Pastoral and community leaders standing outside Shankoe church entrance with local youth.',
    category: 'Community & Church'
  };

  const mealPhoto = {
    src: '/assets/photos/shankoe-children-meal-fellowship.jpg',
    title: 'Nurturing Every Child',
    caption: 'Safe gathering and nutrition fellowship for children in Shankoe.',
    category: 'Care & Belonging'
  };

  return (
    <div className="about-page">
      {/* Page Hero Header */}
      <section className="about-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">ABOUT OUR MISSION</span>
          <h1 className="about-page-title">
            Rooted in Community. <br />
            <span className="highlight-gold">Driven by Potential.</span>
          </h1>
          <p className="about-page-lead">
            Shankoe CYDC was founded on a simple conviction: every child and young person in Narok County has inherent dignity and boundless capacity to learn, grow, and thrive.
          </p>
        </div>
      </section>

      {/* 1. Who We Are Section */}
      <section className="section about-who-section">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-text-side">
              <span className="badge-pill">WHO WE ARE</span>
              <h2 className="section-title">
                Walking alongside families in <span className="highlight-gold">Narok County</span>
              </h2>
              <p className="body-paragraph">
                Shankoe Methodist Child and Youth Development Centre operates directly within the Shankoe community in Narok County, Kenya. Supported by the Methodist Church in Kenya and global child development partners, we serve vulnerable children across their critical developmental stages.
              </p>
              <p className="body-paragraph">
                Rather than treating children as passive recipients of aid, we treat them as active, creative participants in their own growth. Through education, nutrition, spiritual care, and practical vocational learning, we help them build resilient foundations for independent adulthood.
              </p>
              
              <div className="about-badge-stats">
                <div className="stat-pill">
                  <MapPin size={16} className="stat-icon" />
                  <span>Narok County, Kenya</span>
                </div>
                <div className="stat-pill">
                  <CheckCircle2 size={16} className="stat-icon" />
                  <span>Methodist Church Partnership</span>
                </div>
              </div>
            </div>

            <div className="about-media-side">
              <div 
                className="about-image-card"
                onClick={() => onPhotoClick(churchPhoto)}
                title="View full photograph"
              >
                <img 
                  src={churchPhoto.src} 
                  alt={churchPhoto.title} 
                  className="about-card-img" 
                />
                <div className="about-card-caption">
                  <span>Authentic Shankoe Community Fellowship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Vision & Mission */}
      <section className="section section-subtle about-vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <span className="vm-badge">OFFICIAL VISION</span>
              <blockquote className="vm-quote">
                “{VISION}”
              </blockquote>
            </div>

            <div className="vm-card mission-card">
              <span className="vm-badge">OFFICIAL MISSION</span>
              <blockquote className="vm-quote">
                “{MISSION}”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-header center">
            <span className="badge-pill">OUR FOUNDATIONS</span>
            <h2 className="section-title">
              Our Core <span className="highlight-gold">Values</span>
            </h2>
            <p className="subtitle">
              The non-negotiable principles that guide every decision, program, and relationship at Shankoe.
            </p>
          </div>

          <div className="values-grid">
            {CORE_VALUES.map((val) => (
              <div key={val.id} className="value-card">
                <div className="value-icon-box">
                  {getValIcon(val.id)}
                </div>
                <h3 className="value-title">{val.title}</h3>
                <div className="value-summary">{val.summary}</div>
                <p className="value-description">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodist Church Identity & Community Roots */}
      <section className="section section-subtle about-community-identity">
        <div className="container">
          <div className="about-split-grid reverse">
            <div className="about-media-side">
              <div 
                className="about-image-card"
                onClick={() => onPhotoClick(mealPhoto)}
                title="View full photograph"
              >
                <img 
                  src={mealPhoto.src} 
                  alt={mealPhoto.title} 
                  className="about-card-img" 
                />
                <div className="about-card-caption">
                  <span>Children sharing meals on Shankoe grounds</span>
                </div>
              </div>
            </div>

            <div className="about-text-side">
              <span className="badge-pill">COMMUNITY & FAITH</span>
              <h2 className="section-title">
                Faith in Action, <br />
                <span className="highlight-gold">Rooted in Dignity</span>
              </h2>
              <p className="body-paragraph">
                The Methodist identity of Shankoe CYDC represents compassion, integrity, and social justice lived out every day. We believe every child is created in the image of God with boundless worth and distinct gifts.
              </p>
              <p className="body-paragraph">
                By uniting the pastoral leadership of Shankoe Methodist Church with structured child development methodologies, we provide a warm, holistic environment where young people grow physically, mentally, and spiritually.
              </p>

              <div className="about-action-row">
                <button 
                  type="button" 
                  className="btn btn-gold"
                  onClick={() => onNavigate('partner')}
                >
                  <Heart size={16} fill="currentColor" />
                  <span>Partner With Shankoe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
