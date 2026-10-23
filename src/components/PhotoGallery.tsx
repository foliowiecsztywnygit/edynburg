import React, { useState } from 'react';
import { Language, translations } from '../translations';
import { propertyPhotos, PropertyPhoto } from '../data/photosData';
import { BotanicalDivider } from './BotanicalDivider';
import { FloralSpray } from './florals/FloralSpray';

interface PhotoGalleryProps {
  lang: Language;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const t = translations[lang].gallerySection;

  const categories = [
    { key: 'all', label: t.categories.all },
    { key: 'living', label: t.categories.living },
    { key: 'bedrooms', label: t.categories.bedrooms },
    { key: 'kitchen', label: t.categories.kitchen },
    { key: 'bathroom', label: t.categories.bathroom },
    { key: 'garden', label: t.categories.garden },
    { key: 'driveway', label: t.categories.driveway }
  ];

  const filteredPhotos: PropertyPhoto[] = activeCategory === 'all' 
    ? propertyPhotos 
    : propertyPhotos.filter(p => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section className="gallery-section floral-host" id="gallery">
      <FloralSpray side="left" position="top" variant="b" />
      <FloralSpray side="right" position="top" variant="a" />
      <div className="container">
        
        <div className="section-header-block text-center">
          <BotanicalDivider />
          <span className="section-eyebrow">The Edinburgh Garden House · EH17</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-editorial-text">{t.subtitle}</p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-tabs">
          {categories.map(cat => (
            <button
              type="button"
              key={cat.key}
              className={`gallery-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Photo Grid */}
        <div className="gallery-responsive-grid">
          {filteredPhotos.map((photo, idx) => (
            <div 
              key={photo.id} 
              className="gallery-card"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${photo.title[lang]}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
            >
              <div className="gallery-card-img-wrap">
                <img 
                  src={photo.src} 
                  alt={photo.title[lang]} 
                  loading="lazy" 
                  className="gallery-card-img" 
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-badge">{photo.categoryLabel[lang]}</span>
                  <h4 className="gallery-card-title">{photo.title[lang]}</h4>
                  <p className="gallery-card-caption">{photo.description[lang]}</p>
                  <span className="gallery-zoom-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {currentPhoto && (
          <div 
            className="gallery-lightbox open" 
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Full-screen photo viewer"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close" 
                onClick={closeLightbox}
                aria-label="Close"
              >
                ✕
              </button>

              <button 
                type="button" 
                className="lightbox-arrow prev" 
                onClick={prevPhoto}
                aria-label="Previous photo"
              >
                ‹
              </button>

              <button 
                type="button" 
                className="lightbox-arrow next" 
                onClick={nextPhoto}
                aria-label="Next photo"
              >
                ›
              </button>

              <div className="lightbox-img-wrap">
                <img 
                  src={currentPhoto.src} 
                  alt={currentPhoto.title[lang]} 
                  className="lightbox-img" 
                />
              </div>

              <div className="lightbox-caption">
                <div className="lightbox-meta">
                  <span className="lightbox-badge">{currentPhoto.categoryLabel[lang]}</span>
                  <span className="lightbox-counter">
                    {(lightboxIndex ?? 0) + 1} / {filteredPhotos.length}
                  </span>
                </div>
                <h3 className="lightbox-title">{currentPhoto.title[lang]}</h3>
                <p className="lightbox-desc">{currentPhoto.description[lang]}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
