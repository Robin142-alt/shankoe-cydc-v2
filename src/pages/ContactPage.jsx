import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
import { BRAND } from '../data/content';
import './ContactPage.css';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">GET IN TOUCH</span>
          <h1 className="contact-page-title">
            Let's <span className="highlight-gold">Connect.</span>
          </h1>
          <p className="contact-page-lead">
            We welcome inquiries from community members, churches, families, and prospective partners.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Information Cards */}
            <div className="contact-details-col">
              <span className="badge-pill">OUR LOCATION & CENTRE</span>
              <h2 className="section-title">
                Always Welcoming in <br />
                <span className="highlight-gold">Narok County</span>
              </h2>

              <p className="contact-intro">
                Shankoe CYDC is based within the Shankoe Methodist Church grounds, serving children, youth, and families across the surrounding communities.
              </p>

              <div className="contact-info-cards-stack">
                <div className="info-card">
                  <div className="info-card-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="info-card-title">Centre Address</h4>
                    <p className="info-card-text">{BRAND.contact.locationText}</p>
                    <span className="info-card-meta">Project Code: {BRAND.projectCode}</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="info-card-title">Direct Email</h4>
                    <p className="info-card-text">{BRAND.contact.email}</p>
                    <span className="info-card-meta">Inquiries responded within 24–48 hours</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="info-card-title">Office & Centre Hours</h4>
                    <p className="info-card-text">{BRAND.contact.hours}</p>
                    <span className="info-card-meta">Saturday special programme sessions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Short Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h3 className="contact-form-title">Send a Direct Message</h3>
                <p className="contact-form-sub">Fill out the quick form below and our team will get back to you.</p>

                {sent ? (
                  <div className="contact-success-state animate-fade-in">
                    <div className="success-icon-bubble">
                      <CheckCircle2 size={38} className="success-check" />
                    </div>
                    <h4 className="success-heading">Message Sent Successfully</h4>
                    <p className="success-copy">
                      Thank you, <strong>{formData.name}</strong>. Your message has been received by Shankoe CYDC staff. We look forward to connecting with you.
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-outline btn-sm"
                      onClick={() => setSent(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-element">
                    <div className="form-group">
                      <label htmlFor="c-name">Your Name *</label>
                      <input 
                        type="text" 
                        id="c-name" 
                        required 
                        placeholder="e.g. John K. Naserian"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="c-email" 
                        required 
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-subj">Subject</label>
                      <input 
                        type="text" 
                        id="c-subj" 
                        placeholder="e.g. Inquiring about skills workshops or visiting"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-msg">Message *</label>
                      <textarea 
                        id="c-msg" 
                        rows={4} 
                        required 
                        placeholder="Write your note here..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-full">
                      <Send size={16} />
                      <span>Send Message</span>
                    </button>

                    <p className="contact-assurance">
                      <ShieldCheck size={13} />
                      Your details are handled with care and strict respect for your privacy.
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
