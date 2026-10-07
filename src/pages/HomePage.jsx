import React from 'react';
import Hero from '../components/Hero';
import WhoWeAreSection from '../components/WhoWeAreSection';
import EmbraceEngageEmpower from '../components/EmbraceEngageEmpower';
import HowWeHelpSection from '../components/HowWeHelpSection';
import ImpactCounterStrip from '../components/ImpactCounterStrip';
import LifeAtShankoe from '../components/LifeAtShankoe';
import VisionImpactMoment from '../components/VisionImpactMoment';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onNavigate, onPhotoClick }) {
  return (
    <div className="home-page-view">
      {/* 1. HERO */}
      <Hero onNavigate={onNavigate} />

      {/* 2. WHO WE ARE */}
      <WhoWeAreSection onNavigate={onNavigate} onPhotoClick={onPhotoClick} />

      {/* 3. EMBRACE • ENGAGE • EMPOWER */}
      <EmbraceEngageEmpower onNavigate={onNavigate} onPhotoClick={onPhotoClick} />

      {/* 4. HOW WE HELP */}
      <HowWeHelpSection onNavigate={onNavigate} onPhotoClick={onPhotoClick} />

      {/* 5. IMPACT NUMBERS */}
      <ImpactCounterStrip />

      {/* 6. LIFE AT SHANKOE */}
      <LifeAtShankoe onPhotoClick={onPhotoClick} />

      {/* 7. VISION / IMPACT MOMENT */}
      <VisionImpactMoment />

      {/* 8. FINAL CALL TO ACTION */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
