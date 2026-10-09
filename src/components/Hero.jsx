import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Church } from 'lucide-react';
import { BRAND } from '../data/content';
import './Hero.css';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Authentic Shankoe Photo with Cinematic Ambient Movement */}
      <div className="hero-bg-media">
        <img 
          src="/assets/photos/shankoe-children-meal-fellowship.jpg" 
          alt="Children at Shankoe Methodist Child and Youth Centre sharing meals in unity" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="hero-deco-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-deco-orb hero-orb-2" aria-hidden="true" />

      <div className={`container hero-content-container ${loaded ? 'hero-loaded' : ''}`}>
        {/* Church & Community Authority Badge */}
        <div className="hero-tag-badge">
          <Church size={14} className="hero-badge-icon" />
          <span>{BRAND.fullName} • NAROK COUNTY</span>
        </div>

        {/* Main Hero Headline: Promoted Authoritative Statement */}
        <h1 className="hero-title hero-statement-headline">
          Reimagining the future of children and young people through education, health, skills development and strong communities is central to achieving <span className="hero-gold-highlight">lasting and sustainable change</span>.
        </h1>

        {/* Navigation Action Buttons: Direct to About Us & Impact */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn btn-gold hero-cta-btn"
            onClick={() => onNavigate('about')}
          >
            <span>Explore Our Mission</span>
            <ArrowRight size={17} />
          </button>

          <button 
            type="button" 
            className="btn btn-outline-white hero-cta-btn"
            onClick={() => onNavigate('impact')}
          >
            <BarChart3 size={17} />
            <span>View Our Impact</span>
          </button>
        </div>
      </div>
    </section>
  );
}
