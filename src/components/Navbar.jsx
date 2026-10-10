import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Heart,
  Users,
  Target,
  History,
  MapPin,
  Handshake,
  Workflow,
  GraduationCap,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { BRAND } from '../data/content';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileWorkExpanded, setMobileWorkExpanded] = useState(false);

  const aboutTimerRef = useRef(null);
  const workTimerRef = useRef(null);

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
    setWorkDropdownOpen(false);
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

  // About Us dropdown items — exactly the 5 required
  const aboutDropdownItems = [
    { id: 'who-we-are', label: 'Who We Are', desc: 'Child-centred church institution', icon: <Users size={16} /> },
    { id: 'mission-vision', label: 'Mission & Vision', desc: 'Core purpose & theological mandate', icon: <Target size={16} /> },
    { id: 'our-history', label: 'Our History', desc: '20+ years of faithful service', icon: <History size={16} /> },
    { id: 'where-we-work', label: 'Where We Work', desc: 'Narok County, Kenya', icon: <MapPin size={16} /> },
    { id: 'our-partners', label: 'Our Partners', desc: 'Transformational partnerships', icon: <Handshake size={16} /> },
  ];

  // Our Work dropdown items — Our Programs, Approach/ToC, Impact
  const workDropdownItems = [
    { id: 'our-programs', label: 'Our Programs', desc: 'Holistic programs of care', icon: <GraduationCap size={16} />, page: 'work' },
    { id: 'theory-of-change', label: 'Our Approach / Theory of Change', desc: 'Logical pathway for flourishing', icon: <Workflow size={16} />, page: 'work' },
    { id: 'impact', label: 'Impact', desc: 'Proven results across two decades', icon: <BarChart3 size={16} />, page: 'work' },
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

  const handleWorkMouseEnter = () => {
    clearTimeout(workTimerRef.current);
    setWorkDropdownOpen(true);
  };

  const handleWorkMouseLeave = () => {
    workTimerRef.current = setTimeout(() => {
      setWorkDropdownOpen(false);
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
            aria-label="Shankoe Methodist Child and Youth Centre Home"
          >
            <div className="brand-logo-wrapper">
              <img 
                src={BRAND.logoTransparent} 
                alt="Shankoe Methodist Child and Youth Centre Logo" 
                className="brand-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = BRAND.logo;
                }}
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">Shankoe Methodist</span>
              <span className="brand-sub">Child and Youth Centre</span>
            </div>
          </button>

          {/* Desktop Navigation: Home | About Us | Our Work | Contact | Donate */}
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

                {aboutDropdownOpen && (
                  <div className="dropdown-menu-card animate-dropdown-fade">
                    <div className="dropdown-menu-header">
                      <span className="dropdown-category-title">ABOUT SHANKOE</span>
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

              {/* 3. Our Work with Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={handleWorkMouseEnter}
                onMouseLeave={handleWorkMouseLeave}
              >
                <div className="dropdown-trigger-wrapper">
                  <button
                    type="button"
                    className={`nav-link-btn ${currentPage === 'work' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('work')}
                    aria-expanded={workDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>Our Work</span>
                    <ChevronDown size={15} className={`chevron-icon ${workDropdownOpen ? 'rotate' : ''}`} />
                    {currentPage === 'work' && <span className="active-dot" />}
                  </button>
                </div>

                {workDropdownOpen && (
                  <div className="dropdown-menu-card work-dropdown animate-dropdown-fade">
                    <div className="dropdown-menu-header">
                      <span className="dropdown-category-title">OUR WORK</span>
                      <p className="dropdown-category-sub">Programs, approach & proven impact</p>
                    </div>

                    <div className="dropdown-items-grid single-col">
                      {workDropdownItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="dropdown-menu-item"
                          onClick={() => handleLinkClick(item.page, item.id)}
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

              {/* 4. Contact */}
              <li>
                <button
                  type="button"
                  className={`nav-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                  {currentPage === 'contact' && <span className="active-dot" />}
                </button>
              </li>

              {/* 5. Donate CTA */}
              <li>
                <button
                  type="button"
                  className="nav-donate-btn"
                  onClick={() => handleLinkClick('partner')}
                >
                  <Heart size={14} className="donate-heart-icon" />
                  <span>Donate</span>
                </button>
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
              <div className="drawer-title">Shankoe Methodist</div>
              <div className="drawer-desc">Child and Youth Centre</div>
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

            {/* 3. Our Work with Accordion */}
            <li className="mobile-accordion-item">
              <div className="mobile-accordion-header">
                <button
                  type="button"
                  className={`mobile-link-btn ${currentPage === 'work' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('work')}
                >
                  <span>Our Work</span>
                </button>
                <button
                  type="button"
                  className="mobile-accordion-toggle"
                  onClick={() => setMobileWorkExpanded(!mobileWorkExpanded)}
                  aria-label="Toggle Our Work submenu"
                >
                  <ChevronDown size={18} className={`chevron-icon ${mobileWorkExpanded ? 'rotate' : ''}`} />
                </button>
              </div>

              {mobileWorkExpanded && (
                <ul className="mobile-sublinks-list">
                  {workDropdownItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="mobile-sublink-btn"
                        onClick={() => handleLinkClick(item.page, item.id)}
                      >
                        <span className="sublink-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* 4. Contact */}
            <li>
              <button
                type="button"
                className={`mobile-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => handleLinkClick('contact')}
              >
                <span>Contact</span>
                <ArrowRight size={16} className="link-arrow" />
              </button>
            </li>

            {/* 5. Donate */}
            <li>
              <button
                type="button"
                className="mobile-donate-btn"
                onClick={() => handleLinkClick('partner')}
              >
                <Heart size={16} />
                <span>Donate</span>
              </button>
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
