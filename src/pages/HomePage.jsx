import React from 'react';
import Hero from '../components/Hero';
import WhatWeDoSection from '../components/WhatWeDoSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page-view">
      {/* 1. HERO */}
      <Hero onNavigate={onNavigate} />

      {/* 2. WHAT WE DO */}
      <WhatWeDoSection onNavigate={onNavigate} />

      {/* 3. FINAL CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
