import React from 'react';
import { Heart, MapPin, Mail, Clock, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { BRAND, MISSION } from '../data/content';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const handleNav = (pageId, sectionId = null) => {
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

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand & Organization Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <img 
                  src={BRAND.logoTransparent} 
                  alt="Shankoe Methodist Child and Youth Centre Logo" 
                  className="footer-logo-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = BRAND.logo;
                  }}
                />
              </div>
              <div className="footer-brand-text">
                <div className="footer-brand-title">Shankoe Methodist Child and Youth Centre</div>
              </div>
            </div>

            <p className="footer-mission-text">
              “{MISSION}”
            </p>

            <div className="footer-church-tag">
              <span>Operating under the {BRAND.church}</span>
            </div>
          </div>

          {/* Navigation: matches new main nav structure */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => handleNav('home')}>Home</button></li>
              <li><button type="button" onClick={() => handleNav('about')}>About Us</button></li>
              <li><button type="button" onClick={() => handleNav('about', 'who-we-are')}>— Who We Are</button></li>
              <li><button type="button" onClick={() => handleNav('about', 'mission-vision')}>— Mission &amp; Vision</button></li>
              <li><button type="button" onClick={() => handleNav('about', 'our-history')}>— Our History</button></li>
              <li><button type="button" onClick={() => handleNav('about', 'where-we-work')}>— Where We Work</button></li>
              <li><button type="button" onClick={() => handleNav('about', 'our-partners')}>— Our Partners</button></li>
              <li><button type="button" onClick={() => handleNav('work')}>Our Work</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'our-programs')}>— Our Programs</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'theory-of-change')}>— Our Approach</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'impact')}>— Impact</button></li>
              <li><button type="button" onClick={() => handleNav('contact')}>Contact</button></li>
              <li><button type="button" onClick={() => handleNav('partner')}>Partner With Us</button></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Our Programs</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => handleNav('work', 'pathway-education')}>Education</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'pathway-healthcare')}>Healthcare</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'pathway-climate-change')}>Climate Change</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'pathway-skills-development')}>Skills Development</button></li>
              <li><button type="button" onClick={() => handleNav('work', 'pathway-community-strengthening')}>Community Strengthening</button></li>
            </ul>
          </div>

          {/* Accessible Contact Information */}
          <div className="footer-action-col">
            <h4 className="footer-col-heading">Contact Information</h4>
            <p className="footer-action-desc">
              Get in touch with Shankoe Methodist Child and Youth Centre:
            </p>
            
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href={`mailto:${BRAND.contact.email}`} className="footer-contact-link">
                  {BRAND.contact.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>{BRAND.contact.locationText}</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={16} className="footer-contact-icon" />
                <span>{BRAND.contact.hours}</span>
              </div>
            </div>

            <div className="footer-bottom-partner-hint">
              <button 
                type="button" 
                className="btn btn-outline-white btn-sm"
                onClick={() => handleNav('partner')}
              >
                <span>Partner With Us</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {BRAND.fullName} ({BRAND.name}) • All rights reserved. Founded by the {BRAND.church}.
          </div>
          <div className="footer-authenticity-note">
            <ShieldCheck size={14} className="shield-icon" />
            <span>Documented with authentic Shankoe CYDC photography & official church records.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
