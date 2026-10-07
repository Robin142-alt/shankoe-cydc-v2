import React, { useState } from 'react';
import { 
  Heart, 
  HandHeart, 
  Sparkles, 
  UtensilsCrossed, 
  Apple, 
  BookOpen, 
  Building, 
  Send,
  CheckCircle2,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { BRAND, PARTNERSHIP_AREAS } from '../data/content';
import './PartnerPage.css';

export default function PartnerPage({ onPhotoClick }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: 'Vocational & Skills Support',
    message: ''
  });

  const getAreaIcon = (title) => {
    if (title.includes('Vocational')) return <UtensilsCrossed size={22} />;
    if (title.includes('Nutritional')) return <Apple size={22} />;
    if (title.includes('Educational')) return <BookOpen size={22} />;
    return <Building size={22} />;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const partnerPhoto = {
    src: '/assets/photos/shankoe-playground-slide.jpg',
    title: 'Stronger Futures Built Together',
    caption: 'Children at Shankoe CYDC thriving in a protected, joyous community.',
    category: 'Partnership & Impact'
  };

  return (
    <div className="partner-page">
      {/* Header */}
      <section className="partner-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">COLLABORATE FOR POTENTIAL</span>
          <h1 className="partner-page-title">
            Stronger Futures Are <br />
            <span className="highlight-gold">Built Together.</span>
          </h1>
          <p className="partner-page-lead">
            We invite churches, organizations, and individuals to join hands with Shankoe CYDC in expanding education, practical skills, and joyful wellbeing for children in Narok County.
          </p>
        </div>
      </section>

      {/* Main Partnership Grid */}
      <section className="section partner-body-section">
        <div className="container">
          <div className="partner-split-layout">
            {/* Left Column: Partnership Pillars */}
            <div className="partner-info-col">
              <span className="badge-pill">PATHWAYS TO IMPACT</span>
              <h2 className="section-title">
                How We Can <span className="highlight-gold">Partner</span>
              </h2>
              <p className="partner-intro-text">
                When you collaborate with Shankoe, your support directly fuels concrete capabilities: baking equipment, daily nutrition, study materials, and protective mentorship.
              </p>

              <div className="partner-areas-stack">
                {PARTNERSHIP_AREAS.map((area, i) => (
                  <div key={i} className="partner-area-card">
                    <div className="area-icon-box">
                      {getAreaIcon(area.title)}
                    </div>
                    <div className="area-content">
                      <h4 className="area-title">{area.title}</h4>
                      <p className="area-desc">{area.description}</p>
                      <span className="area-impact-tag">
                        <CheckCircle2 size={13} />
                        {area.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo Card */}
              <div 
                className="partner-photo-card"
                onClick={() => onPhotoClick(partnerPhoto)}
                title="View authentic photo"
              >
                <img src={partnerPhoto.src} alt={partnerPhoto.title} className="partner-photo-img" />
                <div className="partner-photo-overlay">
                  <span>Joy, safety, and mutual support at Shankoe CYDC</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="partner-form-col">
              <div className="partner-form-card">
                <div className="form-card-header">
                  <div className="form-icon-pill">
                    <HandHeart size={20} />
                  </div>
                  <h3 className="form-card-title">Start a Partnership Conversation</h3>
                  <p className="form-card-sub">
                    Reach out to our leadership team. We welcome intentional, respectful collaboration.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="form-success-box animate-fade-in">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={40} className="success-check-icon" />
                    </div>
                    <h4 className="success-title">Thank You, {formData.name}!</h4>
                    <p className="success-text">
                      Your partnership inquiry regarding <strong>{formData.partnershipType}</strong> has been received by the Shankoe CYDC administration. We will connect with you promptly.
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-outline btn-sm"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="partner-form">
                    <div className="form-group">
                      <label htmlFor="partner-name">Your Full Name *</label>
                      <input 
                        type="text" 
                        id="partner-name" 
                        required 
                        placeholder="e.g. Sarah Mwangi"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="partner-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="partner-email" 
                        required 
                        placeholder="name@organization.org"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="partner-org">Organization / Church / Individual</label>
                      <input 
                        type="text" 
                        id="partner-org" 
                        placeholder="e.g. Nairobi Grace Church"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="partner-type">Area of Interest</label>
                      <select 
                        id="partner-type"
                        value={formData.partnershipType}
                        onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                      >
                        <option value="Vocational & Skills Support">Vocational & Skills (Baking/Culinary)</option>
                        <option value="Nutritional & Meal Support">Nutritional & Meal Support</option>
                        <option value="Educational Resources & Retainment">Educational Materials & Tutoring</option>
                        <option value="Child Safeguarding & Infrastructure">Safe Spaces & Infrastructure</option>
                        <option value="General Partnership & Dialogue">General Dialogue & Exploration</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="partner-msg">How would you like to collaborate?</label>
                      <textarea 
                        id="partner-msg" 
                        rows={4} 
                        placeholder="Tell us about your organization's heart for children in Narok County..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button type="submit" className="btn btn-gold btn-lg w-full">
                      <Send size={16} />
                      <span>Submit Partnership Inquiry</span>
                    </button>

                    <p className="form-privacy-note">
                      <ShieldCheck size={13} />
                      Your details are held confidentially by Shankoe CYDC under the Methodist Church in Kenya.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
