import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoLightbox from './components/PhotoLightbox';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import StoriesPage from './pages/StoriesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import PartnerPage from './pages/PartnerPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageKey, setPageKey] = useState(0);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'programs', 'impact', 'stories', 'news', 'contact', 'partner'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
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
      case 'programs':
        return <ProgramsPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'impact':
        return <ImpactPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'stories':
        return <StoriesPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'news':
        return <NewsPage onNavigate={navigateTo} onPhotoClick={handleOpenPhoto} />;
      case 'contact':
        return <ContactPage onPhotoClick={handleOpenPhoto} />;
      case 'partner':
        return <PartnerPage onPhotoClick={handleOpenPhoto} />;
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
