import React from 'react';
import { ArrowRight, MapPin, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ImpactCounterStrip from '../components/ImpactCounterStrip';
import { BRAND, WHO_WE_ARE_TEXT } from '../data/content';
import './HomePage.css';

export default function HomePage({ onNavigate, onPhotoClick }) {
  const whoPhoto = {
    src: '/assets/photos/shankoe-community-church-group.jpg',
    title: 'Methodist Church Fellowship & Leadership in Shankoe',
    caption: 'Pastoral leaders and community members outside Shankoe Methodist Church.',
    category: 'Community & Church'
  };

  return (
    <div className="home-page-view">
      {/* 1. HERO */}
      <Hero onNavigate={onNavigate} />

      {/* 2. OFFICIAL IMPACT AT A GLANCE (Authoritative Figures from Word Doc) */}
      <ImpactCounterStrip onNavigate={onNavigate} />

      {/* 3. WHO WE ARE BRIEF INTRODUCTION */}
      <section className="section home-who-section">
        <div className="container">
          <div className="home-who-grid">
            <div className="home-who-text">
              <h2 className="section-title">
                Rooted in Faith. <br />
                <span className="highlight-gold">Driven by Human Potential.</span>
              </h2>
              <p className="body-paragraph">
                {WHO_WE_ARE_TEXT.slice(0, 385)}...
              </p>
              <p className="body-paragraph">
                A theology rooted in compassion, justice, and hope encourages communities to protect children, include those who are often overlooked, and nurture their spiritual, emotional, social, and intellectual wellbeing.
              </p>

              <div className="home-who-actions">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onNavigate('about')}
                >
                  <span>Learn About Our Story & Vision</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="home-who-media">
              <div 
                className="home-who-card"
                onClick={() => onPhotoClick && onPhotoClick(whoPhoto)}
                title="View full photograph"
              >
                <img 
                  src={whoPhoto.src} 
                  alt={whoPhoto.title} 
                  className="home-who-img" 
                />
                <div className="home-who-caption">
                  <span>Shankoe Methodist Church • Safe Spaces for Children & Young People</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNER WITH US: Subtle, elegant invitation banner leading to dedicated page */}
      <section className="home-partner-cta-strip">
        <div className="container">
          <div className="home-partner-cta-card">
            <div className="home-partner-cta-content">
              <h2 className="home-partner-cta-title">
                Partner With <span className="highlight-gold">Shankoe CYDC</span>
              </h2>
              <p className="home-partner-cta-lead">
                Stronger futures are built together. We invite churches, foundations, community leaders, and individuals to collaborate with us to nurture children and young people across Narok County.
              </p>
            </div>
            <div className="home-partner-cta-action">
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
