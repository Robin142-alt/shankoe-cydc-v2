import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Heart } from 'lucide-react';
import { BRAND } from '../data/content';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'stories', label: 'Stories' },
    { id: 'news', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo & Brand Identity */}
          <button 
            type="button" 
            className="brand-logo-btn" 
            onClick={() => handleLinkClick('home')}
            aria-label="Shankoe CYDC Home"
          >
            <div className="brand-logo-wrapper">
              <img 
                src={BRAND.logoTransparent} 
                alt="Shankoe CYDC Methodist Logo" 
                className="brand-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = BRAND.logo;
                }}
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">SHANKOE CYDC</span>
              <span className="brand-sub">Methodist Child & Youth Centre • Narok</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className={`nav-link-btn ${currentPage === link.id ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                    {currentPage === link.id && <span className="active-dot" />}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button: Partner With Us */}
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-gold btn-sm partner-btn"
              onClick={() => handleLinkClick('partner')}
            >
              <Heart size={16} fill="currentColor" />
              <span>Partner With Us</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)} 
      />

      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="drawer-brand">
            <img 
              src={BRAND.logoTransparent} 
              alt="Shankoe Logo" 
              className="drawer-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = BRAND.logo;
              }}
            />
            <div>
              <div className="drawer-title">SHANKOE CYDC</div>
              <div className="drawer-desc">Narok County, Kenya</div>
            </div>
          </div>
          <button 
            type="button" 
            className="drawer-close-btn" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <ul className="mobile-links-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`mobile-link-btn ${currentPage === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="link-arrow" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="btn btn-gold btn-lg w-full"
              onClick={() => handleLinkClick('partner')}
            >
              <Heart size={18} fill="currentColor" />
              <span>Partner With Us</span>
            </button>
            <p className="drawer-tagline">“Every child deserves the support to thrive.”</p>
          </div>
        </nav>
      </div>
    </>
  );
}
