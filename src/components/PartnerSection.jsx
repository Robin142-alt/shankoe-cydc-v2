import React, { useState } from 'react';
import { 
  Heart, 
  Send, 
  CheckCircle2, 
  UtensilsCrossed, 
  Apple, 
  BookOpen, 
  Trees, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { BRAND, PARTNERSHIP_AREAS } from '../data/content';
import './PartnerSection.css';

export default function PartnerSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: 'Vocational & Practical Skills',
    message: ''
  });

  const getAreaIcon = (title) => {
    if (title.includes('Vocational')) return <UtensilsCrossed size={22} />;
    if (title.includes('Nutritional')) return <Apple size={22} />;
    if (title.includes('Educational')) return <BookOpen size={22} />;
    return <Trees size={22} />;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);

    try {
      await fetch(`https://formsubmit.co/ajax/${BRAND.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization || 'Individual Supporter',
          partnershipType: formData.partnershipType,
          message: formData.message || 'Expressed interest in partnership',
          _subject: `Partnership Inquiry: ${formData.partnershipType} (${formData.name})`,
          _template: 'table'
        })
      });
    } catch (err) {
      console.warn('Partnership submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const mailtoUrl = `mailto:${BRAND.contact.email}?subject=${encodeURIComponent(`Partnership Inquiry: ${formData.partnershipType}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPartnership Area: ${formData.partnershipType}\n\nMessage:\n${formData.message}`)}`;

  return (
    <section className="partner-section" id="partner-with-us">
      <div className="container">
        {/* Section Header */}
        <div className="partner-header text-center">
          <h2 className="section-title">
            Partner With <span className="highlight-gold">Shankoe CYDC</span>
          </h2>
          <p className="partner-lead">
            Stronger futures are built together. We invite churches, foundations, community leaders, and individuals to walk alongside Shankoe Methodist Child and Youth Centre to nurture vulnerable children and young people across Narok County.
          </p>
        </div>

        {/* 2-Column Layout: Focus Areas + Inquiry Form */}
        <div className="partner-grid">
          {/* Left Column: 4 Partnership Focus Areas */}
          <div className="partner-areas-col">
            <h3 className="partner-col-title">Our Partnership Focus Areas</h3>
            <p className="partner-col-desc">
              Direct your support toward verified pathways where community need and measurable impact intersect.
            </p>

            <div className="partner-cards-list">
              {PARTNERSHIP_AREAS.map((area, idx) => (
                <div key={idx} className="partner-area-card">
                  <div className="partner-area-icon-box">
                    {getAreaIcon(area.title)}
                  </div>
                  <div className="partner-area-content">
                    <h4 className="partner-area-title">{area.title}</h4>
                    <p className="partner-area-desc">{area.description}</p>
                    <div className="partner-area-impact-tag">
                      <CheckCircle2 size={13} className="impact-check-icon" />
                      <span>{area.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Card */}
            <div className="partner-direct-contact-card">
              <div className="direct-card-title">
                <ShieldCheck size={18} className="shield-gold" />
                <span>Direct Institutional Contact</span>
              </div>
              <p className="direct-card-desc">
                Prefer to communicate directly with our leadership team? Reach us through official channels:
              </p>
              <div className="direct-contacts-list">
                <a href={`mailto:${BRAND.contact.email}`} className="direct-contact-item">
                  <Mail size={15} />
                  <span>{BRAND.contact.email}</span>
                </a>
                <div className="direct-contact-item">
                  <MapPin size={15} />
                  <span>{BRAND.contact.locationText}</span>
                </div>
                <div className="direct-contact-item">
                  <Clock size={15} />
                  <span>{BRAND.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="partner-form-col">
            <div className="partner-form-card">
              <div className="form-card-header">
                <h3 className="form-title">Start A Conversation</h3>
                <p className="form-subtitle">
                  Share your interest or inquiry and our leadership team will respond promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="form-success-state animate-fade-in">
                  <div className="success-icon-box">
                    <CheckCircle2 size={44} />
                  </div>
                  <h4 className="success-title">Thank You For Reaching Out!</h4>
                  <p className="success-desc">
                    Your partnership inquiry has been received. Our leadership team at Shankoe Methodist Child and Youth Centre will review your message and contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="success-actions">
                    <a href={mailtoUrl} className="btn btn-outline-primary btn-sm">
                      <Mail size={15} />
                      <span>Open in Email Client</span>
                    </a>
                    <button 
                      type="button" 
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          partnershipType: 'Vocational & Practical Skills',
                          message: ''
                        });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="partner-form">
                  <div className="form-group">
                    <label htmlFor="partner-name" className="form-label">
                      Your Full Name <span className="required-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="partner-name" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Jane Mwangi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="partner-email" className="form-label">
                        Email Address <span className="required-star">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="partner-email" 
                        required 
                        className="form-input" 
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="partner-org" className="form-label">
                        Organization / Church
                      </label>
                      <input 
                        type="text" 
                        id="partner-org" 
                        className="form-input" 
                        placeholder="Individual or Org Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="partner-type" className="form-label">
                      Primary Partnership Area
                    </label>
                    <select 
                      id="partner-type" 
                      className="form-select"
                      value={formData.partnershipType}
                      onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    >
                      <option value="Vocational & Practical Skills">Vocational & Practical Skills Training</option>
                      <option value="Nutritional & Wellbeing Support">Nutritional & Wellbeing Support</option>
                      <option value="Educational Resources & Scholarships">Educational Resources & Higher Ed Scholarships</option>
                      <option value="Climate Resilience & Green Skills">Climate Resilience & Green Skills</option>
                      <option value="Child Safeguarding & Advocacy">Community Child Safeguarding & Advocacy</option>
                      <option value="General Organizational Partnership">General Church / Institutional Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="partner-message" className="form-label">
                      How would you like to collaborate?
                    </label>
                    <textarea 
                      id="partner-message" 
                      rows={4} 
                      className="form-textarea" 
                      placeholder="Share details about your heart for this partnership..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-gold btn-lg w-full submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Partnership Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="form-privacy-note">
                    Official email routing to <strong>{BRAND.contact.email}</strong>. We value your trust and will never share your contact details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
