import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // loading → reveal → done

  useEffect(() => {
    // Phase 1: Show loading animation
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 1200);

    // Phase 2: Fade out and complete
    const completeTimer = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`loading-screen ${phase === 'reveal' ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo-container">
          <img
            src="/assets/logo/shankoe-cydc-logo-transparent.png"
            alt="Shankoe CYDC"
            className="loading-logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/logo/shankoe-cydc-logo.jpg';
            }}
          />
          <div className="loading-logo-glow" />
        </div>

        <div className="loading-brand-text">
          <span className="loading-name">SHANKOE CYDC</span>
          <span className="loading-sub">Methodist Child & Youth Centre</span>
        </div>

        <div className="loading-progress-bar">
          <div className="loading-progress-fill" />
        </div>

        <div className="loading-journey-steps">
          <span className="journey-word active">Embrace</span>
          <span className="journey-dot">·</span>
          <span className="journey-word">Engage</span>
          <span className="journey-dot">·</span>
          <span className="journey-word">Empower</span>
          <span className="journey-dot">·</span>
          <span className="journey-word gold">Thrive</span>
        </div>
      </div>
    </div>
  );
}
