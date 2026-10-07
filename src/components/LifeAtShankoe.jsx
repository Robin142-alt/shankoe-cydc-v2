import React, { useState, useRef, useEffect } from 'react';
import { Eye, Camera, Tag } from 'lucide-react';
import { PHOTOS_GALLERY } from '../data/content';
import './LifeAtShankoe.css';

export default function LifeAtShankoe({ onPhotoClick }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const categories = ['All', 'Skills & Livelihoods', 'Recreation & Play', 'Wellbeing & Nutrition', 'Community & Church'];

  const filteredPhotos = activeFilter === 'All' 
    ? PHOTOS_GALLERY 
    : PHOTOS_GALLERY.filter(p => p.category === activeFilter);

  // Scroll reveal for header elements
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || '0';
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Animate gallery items on filter change
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = grid.querySelectorAll('.gallery-item');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px) scale(0.95)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      }, 60 * i);
    });
  }, [activeFilter]);

  return (
    <section className="section section-subtle life-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header center">
          <span className="badge-pill" data-reveal data-reveal-delay="0">MOMENTS OF BECOMING</span>
          <h2 className="life-section-title" data-reveal data-reveal-delay="80">
            Life at <span className="highlight-gold">Shankoe</span>
          </h2>
          <p className="subtitle" data-reveal data-reveal-delay="160">
            Authentic moments of children learning, laughing, creating, and sharing life together in Narok County.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters-row" data-reveal data-reveal-delay="240">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Photo Composition (Masonry / Asymmetric Layout) */}
        <div className="editorial-gallery-grid" ref={gridRef}>
          {filteredPhotos.map((photo, index) => {
            const isFeatured = index === 0 || index === 4;
            const isPortrait = photo.orientation === 'Portrait';

            return (
              <div
                key={photo.id}
                className={`gallery-item ${isPortrait ? 'portrait-item' : ''} ${isFeatured ? 'featured-item' : ''}`}
                onClick={() => onPhotoClick(photo)}
                title="Click to view photograph in high resolution"
              >
                <div className="gallery-img-wrap">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-meta-top">
                      <span className="gallery-badge">
                        <Tag size={12} />
                        {photo.category}
                      </span>
                      <span className="gallery-view-icon">
                        <Eye size={16} />
                      </span>
                    </div>

                    <div className="gallery-meta-bottom">
                      <h4 className="gallery-item-title">{photo.title}</h4>
                      <p className="gallery-item-caption">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
