import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { NEWS_EVENTS } from '../data/content';
import './NewsPage.css';

export default function NewsPage({ onNavigate, onPhotoClick }) {
  return (
    <div className="news-page">
      {/* Header */}
      <section className="news-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">COMMUNITY UPDATES</span>
          <h1 className="news-page-title">
            News & Centre <span className="highlight-gold">Happenings</span>
          </h1>
          <p className="news-page-lead">
            Stay in touch with ongoing activities, youth workshops, and community events in Shankoe.
          </p>
        </div>
      </section>

      {/* Lightweight News Grid */}
      <section className="section news-grid-section">
        <div className="container container-narrow">
          <div className="news-items-stack">
            {NEWS_EVENTS.map((item) => (
              <div key={item.id} className="news-card">
                <div 
                  className="news-thumb-wrap"
                  onClick={() => onPhotoClick({
                    src: item.photo,
                    title: item.title,
                    caption: item.summary,
                    category: item.category
                  })}
                  title="View photo"
                >
                  <img src={item.photo} alt={item.title} className="news-thumb-img" />
                </div>

                <div className="news-body">
                  <div className="news-meta-row">
                    <span className="news-date-badge">
                      <Calendar size={13} />
                      {item.date}
                    </span>
                    <span className="news-category-badge">
                      <Tag size={13} />
                      {item.category}
                    </span>
                  </div>

                  <h3 className="news-item-title">{item.title}</h3>
                  <p className="news-item-summary">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
