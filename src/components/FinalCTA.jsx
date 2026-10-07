import React from 'react';
import { Heart } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA({ onNavigate }) {
  return (
    <section className="final-cta-compact-section">
      <div className="container final-cta-compact-container">
        <div className="final-cta-compact-box">
          {/* Subtle Ambient Glow */}
          <div className="final-cta-glow-dot" aria-hidden="true" />

          {/* Heading */}
          <h2 className="final-cta-heading">
            Stronger futures are <span className="highlight-gold">built together.</span>
          </h2>

          {/* Partner With Us Button */}
          <button 
            type="button" 
            className="btn btn-gold btn-lg final-cta-btn"
            onClick={() => onNavigate('partner')}
          >
            <Heart size={18} fill="currentColor" />
            <span>Partner With Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}
