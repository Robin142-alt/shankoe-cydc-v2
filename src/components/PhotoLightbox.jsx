import React, { useEffect } from 'react';
import { X, MapPin, Tag } from 'lucide-react';
import './PhotoLightbox.css';

export default function PhotoLightbox({ photo, onClose }) {
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="lightbox-close-btn" 
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>

        <div className="lightbox-image-wrap">
          <img 
            src={photo.src || photo.photo} 
            alt={photo.title || photo.alt || "Shankoe CYDC Photograph"} 
            className="lightbox-img" 
          />
        </div>

        <div className="lightbox-caption-wrap">
          <div className="lightbox-header-row">
            <span className="lightbox-category">
              <Tag size={13} />
              {photo.category || "Genuine Documentary Photo"}
            </span>
            <span className="lightbox-location">
              <MapPin size={13} />
              Shankoe CYDC • Narok County
            </span>
          </div>

          <h3 className="lightbox-title">{photo.title}</h3>
          {photo.caption && <p className="lightbox-caption">{photo.caption}</p>}
          {photo.description && <p className="lightbox-caption">{photo.description}</p>}
          {photo.summary && <p className="lightbox-caption">{photo.summary}</p>}
        </div>
      </div>
    </div>
  );
}
