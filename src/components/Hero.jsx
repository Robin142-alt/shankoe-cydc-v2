import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, MapPin, ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay hero content entrance to sync with loading screen
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Cinematic Photo & Overlay */}
      <div className="hero-bg-media">
        <img 
          src="/assets/photos/shankoe-playground-slide.jpg" 
          alt="Children smiling and playing safely on playground slide at Shankoe CYDC" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="hero-deco-orb hero-orb-1" />
      <div className="hero-deco-orb hero-orb-2" />

      <div className={`container hero-content-container ${loaded ? 'hero-loaded' : ''}`}>
        {/* Identity & Location Badge */}
        <div className="hero-badge hero-anim-item" style={{ '--delay': '0.15s' }}>
          <span className="hero-badge-dot pulse-badge" />
          <MapPin size={14} className="hero-badge-icon" />
          <span>Shankoe CYDC • Narok County, Kenya</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title hero-anim-item" style={{ '--delay': '0.3s' }}>
          EMPOWERING CHILDREN <br />
          & YOUNG PEOPLE <br />
          <span className="hero-gold-highlight">TO THRIVE</span>
        </h1>

        {/* Supporting Line */}
        <p className="hero-subtext hero-anim-item" style={{ '--delay': '0.45s' }}>
          Helping children and young people feel safe, learn, build skills and create stronger futures.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="hero-cta-group hero-anim-item" style={{ '--delay': '0.6s' }}>
          <button 
            type="button" 
            className="btn btn-gold btn-lg hero-cta-btn"
            onClick={() => onNavigate('programs')}
          >
            <span>Explore Our Work</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            className="btn btn-outline-white btn-lg hero-cta-btn"
            onClick={() => onNavigate('partner')}
          >
            <Heart size={18} fill="currentColor" />
            <span>Partner With Us</span>
          </button>
        </div>

        {/* Emotional Journey Ribbon */}
        <div className="hero-journey-ribbon hero-anim-item" style={{ '--delay': '0.75s' }}>
          <span className="ribbon-step">EMBRACE</span>
          <span className="ribbon-arrow">→</span>
          <span className="ribbon-step">ENGAGE</span>
          <span className="ribbon-arrow">→</span>
          <span className="ribbon-step">EMPOWER</span>
          <span className="ribbon-arrow">→</span>
          <span className="ribbon-step gold">THRIVE</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a 
        href="#who-we-are" 
        className="hero-scroll-cue" 
        aria-label="Scroll to learn who we are"
      >
        <span className="scroll-cue-text">Discover More</span>
        <ChevronDown size={18} className="scroll-cue-arrow" />
      </a>
    </section>
  );
}
