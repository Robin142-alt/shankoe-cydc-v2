import React, { useState } from 'react';
import { BookOpen, Clock, Tag, ArrowRight, Heart } from 'lucide-react';
import { STORIES } from '../data/content';
import './StoriesPage.css';

export default function StoriesPage({ onNavigate, onPhotoClick }) {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleOpenStory = (story) => {
    setSelectedStory(story);
  };

  return (
    <div className="stories-page">
      {/* Header */}
      <section className="stories-header-section section-dark">
        <div className="container container-narrow text-center">
          <span className="badge-pill gold">VOICES & MOMENTS</span>
          <h1 className="stories-page-title">
            Stories of Growth & <br />
            <span className="highlight-gold">Belonging</span>
          </h1>
          <p className="stories-page-lead">
            Every day at Shankoe CYDC holds quiet victories—a recipe mastered, a shared meal, a child stepping with confidence into tomorrow.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section stories-grid-section">
        <div className="container">
          <div className="stories-editorial-grid">
            {STORIES.map((story) => (
              <article key={story.id} className="story-card">
                <div 
                  className="story-image-wrap"
                  onClick={() => onPhotoClick({
                    src: story.photo,
                    title: story.title,
                    caption: story.summary,
                    category: story.category
                  })}
                  title="Click to view full photo"
                >
                  <img src={story.photo} alt={story.title} className="story-img" />
                  <span className="story-category-tag">{story.category}</span>
                </div>

                <div className="story-content">
                  <div className="story-meta-row">
                    <span className="story-read-time">
                      <Clock size={13} />
                      {story.readTime}
                    </span>
                  </div>

                  <h2 className="story-title">{story.title}</h2>
                  <p className="story-summary">{story.summary}</p>
                  <p className="story-detail-snippet">{story.detail}</p>

                  <div className="story-action-row">
                    <button 
                      type="button" 
                      className="story-read-btn"
                      onClick={() => onPhotoClick({
                        src: story.photo,
                        title: story.title,
                        description: `${story.summary} ${story.detail}`,
                        category: story.category
                      })}
                    >
                      <span>View Photo & Story</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section stories-cta text-center section-subtle">
        <div className="container container-narrow">
          <h2 className="section-title">Help Write The Next Chapter</h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>
            When you partner with Shankoe, you create more opportunities for learning, joyful childhood, and vocational dignity.
          </p>
          <button 
            type="button" 
            className="btn btn-gold btn-lg"
            onClick={() => onNavigate('partner')}
          >
            <Heart size={18} fill="currentColor" />
            <span>Support A Shankoe Story</span>
          </button>
        </div>
      </section>
    </div>
  );
}
