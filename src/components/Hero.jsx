import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import './Hero.css';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToWhatWeDo = (e) => {
    e.preventDefault();
    const el = document.getElementById('what-we-do');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('programs');
    }
  };

  return (
    <section className="hero-section">
      {/* 1 Strong Genuine Shankoe Photo with Subtle Cinematic Ambient Movement */}
      <div className="hero-bg-media">
        <img 
          src="/assets/photos/shankoe-children-meal-fellowship.jpg" 
          alt="Smiling children in Shankoe CYDC uniform sharing meals together in unity" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="hero-deco-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-deco-orb hero-orb-2" aria-hidden="true" />

      <div className={`container hero-content-container ${loaded ? 'hero-loaded' : ''}`}>
        {/* Headline */}
        <h1 className="hero-title">
          Empowering Children <br />
          <span className="hero-gold-highlight">& Young People to Thrive</span>
        </h1>

        {/* Central Home Statement from Official Document */}
        <p className="hero-subtext">
          Reimagining the future of children and young people through education, health, skills development and strong communities is central to achieving lasting and sustainable change.
        </p>

        {/* 2 Buttons */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn btn-gold hero-cta-btn"
            onClick={handleScrollToWhatWeDo}
          >
            <span>Explore Our Work</span>
            <ArrowRight size={17} />
          </button>

          <button 
            type="button" 
            className="btn btn-outline-white hero-cta-btn"
            onClick={() => onNavigate('partner')}
          >
            <Heart size={16} fill="currentColor" />
            <span>Partner With Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}
