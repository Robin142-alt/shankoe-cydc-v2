import React from 'react';
import { Heart, MapPin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND, MISSION } from '../data/content';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const handleNav = (pageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <img 
                  src={BRAND.logoTransparent} 
                  alt="Shankoe CYDC Logo" 
                  className="footer-logo-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = BRAND.logo;
                  }}
                />
              </div>
              <div>
                <div className="footer-brand-title">SHANKOE CYDC</div>
                <div className="footer-brand-sub">Methodist Child & Youth Centre</div>
              </div>
            </div>

            <p className="footer-mission-text">
              “{MISSION}”
            </p>

            <div className="footer-meta-badge">
              <MapPin size={15} className="meta-icon" />
              <span>Narok County, Kenya • Project {BRAND.projectCode}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Explore</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => handleNav('home')}>Home</button></li>
              <li><button type="button" onClick={() => handleNav('about')}>About Our Story</button></li>
              <li><button type="button" onClick={() => handleNav('programs')}>Programs & Skills</button></li>
              <li><button type="button" onClick={() => handleNav('impact')}>Our Impact & Theory</button></li>
              <li><button type="button" onClick={() => handleNav('stories')}>Life Stories</button></li>
            </ul>
          </div>

          {/* Five Pillars */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Key Programs</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => handleNav('programs')}>Education</button></li>
              <li><button type="button" onClick={() => handleNav('programs')}>Health</button></li>
              <li><button type="button" onClick={() => handleNav('programs')}>Skills Development</button></li>
              <li><button type="button" onClick={() => handleNav('programs')}>Community Strengthening</button></li>
              <li><button type="button" onClick={() => handleNav('programs')}>Climate Change Resilience</button></li>
            </ul>
          </div>

          {/* Partner & Connect */}
          <div className="footer-action-col">
            <h4 className="footer-col-heading">Join The Journey</h4>
            <p className="footer-action-desc">
              Stronger futures are built together. Connect with us to support child potential in Narok County.
            </p>
            <div className="footer-btns">
              <button 
                type="button" 
                className="btn btn-gold btn-sm w-full-mobile"
                onClick={() => handleNav('partner')}
              >
                <Heart size={15} fill="currentColor" />
                <span>Partner With Us</span>
              </button>
              <button 
                type="button" 
                className="btn btn-outline-white btn-sm w-full-mobile"
                onClick={() => handleNav('contact')}
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Shankoe CYDC • All rights reserved. Operating under Methodist Church in Kenya.
          </div>
          <div className="footer-authenticity-note">
            <ShieldCheck size={14} className="shield-icon" />
            <span>Documented with authentic Shankoe CYDC photography & genuine project records.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
