import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  Users,
  Target,
  History,
  MapPin,
  Handshake,
  Workflow,
  GraduationCap,
  BarChart3,
  Award,
  BookOpen
} from 'lucide-react';
import { BRAND } from '../data/content';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [impactDropdownOpen, setImpactDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(true);
  const [mobileImpactExpanded, setMobileImpactExpanded] = useState(false);

  const aboutTimerRef = useRef(null);
  const impactTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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

  const handleLinkClick = (pageId, sectionId = null) => {
    setAboutDropdownOpen(false);
    setImpactDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(pageId);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // About Us dropdown items as required
  const aboutDropdownItems = [
    { id: 'who-we-are', label: 'Who We Are', desc: 'Child-centred church institution', icon: <Users size={16} /> },
    { id: 'mission-vision', label: 'Mission & Vision', desc: 'Core purpose & theological mandate', icon: <Target size={16} /> },
    { id: 'our-history', label: 'Our History', desc: '20+ years of faithful service', icon: <History size={16} /> },
    { id: 'where-we-work', label: 'Where We Work', desc: 'Narok County, Kenya map', icon: <MapPin size={16} /> },
    { id: 'our-partners', label: 'Our Partners', desc: '131 schools, MCK & communities', icon: <Handshake size={16} /> },
    { id: 'theory-of-change', label: 'Our Approach / Theory of Change', desc: 'Logical pathway for flourishing', icon: <Workflow size={16} /> },
    { id: 'our-programs', label: 'Our Programs', desc: 'Our verified Pathways of care', icon: <GraduationCap size={16} /> },
  ];

  // Impact dropdown items as required
  const impactDropdownItems = [
    { id: 'impact-statistics', label: 'Impact Statistics', desc: 'Authoritative data & reach', icon: <BarChart3 size={16} /> },
    { id: 'achievements', label: 'Achievements', desc: 'Higher ed, business & safeguarding', icon: <Award size={16} /> },
    { id: 'stories', label: 'Stories', desc: 'Real voices & inspiring journeys', icon: <BookOpen size={16} /> },
  ];

  const handleAboutMouseEnter = () => {
    clearTimeout(aboutTimerRef.current);
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimerRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
  };

  const handleImpactMouseEnter = () => {
    clearTimeout(impactTimerRef.current);
    setImpactDropdownOpen(true);
  };

  const handleImpactMouseLeave = () => {
    impactTimerRef.current = setTimeout(() => {
      setImpactDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo & Official Brand Identity */}
          <button 
            type="button" 
            className="brand-logo-btn" 
            onClick={() => handleLinkClick('home')}
            aria-label="Shankoe CYDC Home"
          >
            <div className="brand-logo-wrapper">
              <img 
                src={BRAND.logoTransparent} 
                alt="Shankoe CYDC Logo" 
                className="brand-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = BRAND.logo;
                }}
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">{BRAND.name}</span>
              <span className="brand-sub">Methodist Child and Youth Centre • Narok</span>
            </div>
          </button>

          {/* Desktop Navigation Links: ONLY Home, About Us, and Impact */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              {/* 1. Home */}
              <li>
                <button
                  type="button"
                  className={`nav-link-btn ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                  {currentPage === 'home' && <span className="active-dot" />}
                </button>
              </li>

              {/* 2. About Us with Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <div className="dropdown-trigger-wrapper">
                  <button
                    type="button"
                    className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('about')}
                    aria-expanded={aboutDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>About Us</span>
                    <ChevronDown size={15} className={`chevron-icon ${aboutDropdownOpen ? 'rotate' : ''}`} />
                    {currentPage === 'about' && <span className="active-dot" />}
                  </button>
                </div>

                {/* Dropdown Menu */}
                {aboutDropdownOpen && (
                  <div className="dropdown-menu-card animate-dropdown-fade">
                    <div className="dropdown-menu-header">
                      <span className="dropdown-category-title">ABOUT SHANKOE CYDC</span>
                      <p className="dropdown-category-sub">Methodist Church in Kenya • Founded over 20 years ago</p>
                    </div>

                    <div className="dropdown-items-grid">
                      {aboutDropdownItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="dropdown-menu-item"
                          onClick={() => handleLinkClick('about', item.id)}
                        >
                          <div className="dropdown-item-icon-box">
                            {item.icon}
                          </div>
                          <div className="dropdown-item-text">
                            <span className="dropdown-item-title">{item.label}</span>
                            <span className="dropdown-item-desc">{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* 3. Impact with Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={handleImpactMouseEnter}
                onMouseLeave={handleImpactMouseLeave}
              >
                <div className="dropdown-trigger-wrapper">
                  <button
                    type="button"
                    className={`nav-link-btn ${currentPage === 'impact' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('impact')}
                    aria-expanded={impactDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>Impact</span>
                    <ChevronDown size={15} className={`chevron-icon ${impactDropdownOpen ? 'rotate' : ''}`} />
                    {currentPage === 'impact' && <span className="active-dot" />}
                  </button>
                </div>

                {/* Dropdown Menu */}
                {impactDropdownOpen && (
                  <div className="dropdown-menu-card impact-dropdown animate-dropdown-fade">
                    <div className="dropdown-menu-header">
                      <span className="dropdown-category-title">OUR VERIFIED IMPACT</span>
                      <p className="dropdown-category-sub">Authoritative statistics, milestones & authentic stories</p>
                    </div>

                    <div className="dropdown-items-grid single-col">
                      {impactDropdownItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="dropdown-menu-item"
                          onClick={() => handleLinkClick('impact', item.id)}
                        >
                          <div className="dropdown-item-icon-box">
                            {item.icon}
                          </div>
                          <div className="dropdown-item-text">
                            <span className="dropdown-item-title">{item.label}</span>
                            <span className="dropdown-item-desc">{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="header-actions">
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              <div className="drawer-title">{BRAND.name}</div>
              <div className="drawer-desc">{BRAND.fullName}</div>
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
            {/* 1. Home */}
            <li>
              <button
                type="button"
                className={`mobile-link-btn ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                <span>Home</span>
                <ArrowRight size={16} className="link-arrow" />
              </button>
            </li>

            {/* 2. About Us with Accordion */}
            <li className="mobile-accordion-item">
              <div className="mobile-accordion-header">
                <button
                  type="button"
                  className={`mobile-link-btn ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('about')}
                >
                  <span>About Us</span>
                </button>
                <button
                  type="button"
                  className="mobile-accordion-toggle"
                  onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                  aria-label="Toggle About Us submenu"
                >
                  <ChevronDown size={18} className={`chevron-icon ${mobileAboutExpanded ? 'rotate' : ''}`} />
                </button>
              </div>

              {mobileAboutExpanded && (
                <ul className="mobile-sublinks-list">
                  {aboutDropdownItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="mobile-sublink-btn"
                        onClick={() => handleLinkClick('about', item.id)}
                      >
                        <span className="sublink-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* 3. Impact with Accordion */}
            <li className="mobile-accordion-item">
              <div className="mobile-accordion-header">
                <button
                  type="button"
                  className={`mobile-link-btn ${currentPage === 'impact' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('impact')}
                >
                  <span>Impact</span>
                </button>
                <button
                  type="button"
                  className="mobile-accordion-toggle"
                  onClick={() => setMobileImpactExpanded(!mobileImpactExpanded)}
                  aria-label="Toggle Impact submenu"
                >
                  <ChevronDown size={18} className={`chevron-icon ${mobileImpactExpanded ? 'rotate' : ''}`} />
                </button>
              </div>

              {mobileImpactExpanded && (
                <ul className="mobile-sublinks-list">
                  {impactDropdownItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="mobile-sublink-btn"
                        onClick={() => handleLinkClick('impact', item.id)}
                      >
                        <span className="sublink-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <div className="drawer-contact-quick">
              <span className="quick-label">Location:</span>
              <span className="quick-val">Narok County, Kenya</span>
              <span className="quick-email">{BRAND.contact.email}</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
