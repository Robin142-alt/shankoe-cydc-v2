import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoLightbox from './components/PhotoLightbox';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageKey, setPageKey] = useState(0);

  // Sync with browser URL hash and handle intelligent redirects for legacy hashes
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      
      // Clean section anchors or legacy redirects
      if (rawHash === 'about' || rawHash === 'who-we-are' || rawHash === 'mission-vision' || 
          rawHash === 'our-history' || rawHash === 'where-we-work' || rawHash === 'our-partners' || 
          rawHash === 'theory-of-change' || rawHash === 'our-programs' || rawHash === 'programs') {
        setCurrentPage('about');
        if (rawHash !== 'about') {
          setTimeout(() => {
            const targetId = rawHash === 'programs' ? 'our-programs' : rawHash;
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      } else if (rawHash === 'impact' || rawHash === 'impact-statistics' || rawHash === 'achievements' || rawHash === 'stories') {
        setCurrentPage('impact');
        if (rawHash !== 'impact') {
          setTimeout(() => {
            const el = document.getElementById(rawHash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      } else if (rawHash === 'partner' || rawHash === 'partner-with-us' || rawHash === 'contact') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('partner-with-us');
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
      case 'impact':
        return <ImpactPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      default:
        return <HomePage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
    }
  };

  return (
    <>
      {/* Premium Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`app-root ${isLoading ? 'app-loading' : 'app-loaded'}`}>
        {/* Sticky Navigation Bar: Only Home, About Us, and Impact */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Main Page View with smooth page transition */}
        <main className="main-content-area page-enter" key={`${currentPage}-${pageKey}`}>
          {renderCurrentPage()}
        </main>

        {/* Global Footer with accessible contact info */}
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
