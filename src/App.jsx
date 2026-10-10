import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoLightbox from './components/PhotoLightbox';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactPage from './pages/ContactPage';
import PartnerPage from './pages/PartnerPage';
import { useGlobalReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageKey, setPageKey] = useState(0);

  // Global scroll-reveal: fires on every page transition
  useGlobalReveal(pageKey);

  // Sync with browser URL hash and handle intelligent redirects
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      
      if (rawHash === 'about' || rawHash === 'who-we-are' || rawHash === 'mission-vision' || 
          rawHash === 'our-history' || rawHash === 'where-we-work' || rawHash === 'our-partners') {
        setCurrentPage('about');
        if (rawHash !== 'about') {
          setTimeout(() => {
            const el = document.getElementById(rawHash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      } else if (rawHash === 'work' || rawHash === 'our-programs' || rawHash === 'programs' || 
                 rawHash === 'theory-of-change' || rawHash === 'our-approach' || rawHash === 'impact') {
        setCurrentPage('work');
        if (rawHash !== 'work') {
          setTimeout(() => {
            const targetId = rawHash === 'programs' ? 'our-programs' : rawHash === 'our-approach' ? 'theory-of-change' : rawHash;
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      } else if (rawHash === 'contact') {
        setCurrentPage('contact');
      } else if (rawHash === 'partner' || rawHash === 'partner-with-us' || rawHash === 'donate') {
        setCurrentPage('partner');
      } else if (rawHash === 'impact-statistics' || rawHash === 'achievements' || rawHash === 'stories') {
        // Legacy: redirect old impact sub-sections to work page
        setCurrentPage('work');
        setTimeout(() => {
          const el = document.getElementById('impact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((pageId) => {
    setCurrentPage(pageId);
    setPageKey(prev => prev + 1);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenPhoto = useCallback((photo) => {
    setLightboxPhoto(photo);
  }, []);

  const handleClosePhoto = useCallback(() => {
    setLightboxPhoto(null);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'work':
        return <OurWorkPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'partner':
        return <PartnerPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      default:
        return <HomePage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
    }
  };

  return (
    <>
      {/* Premium Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`app-root ${isLoading ? 'app-loading' : 'app-loaded'}`}>
        {/* Sticky Navigation Bar */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Main Page View with smooth page transition */}
        <main className="main-content-area page-enter" key={`${currentPage}-${pageKey}`}>
          {renderCurrentPage()}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Interactive Photo Lightbox Modal */}
        {lightboxPhoto && (
          <PhotoLightbox photo={lightboxPhoto} onClose={handleClosePhoto} />
        )}

        {/* Floating Scroll-to-Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}
