import React, { useState, useEffect } from 'react';
import { italyGalleryPhotos, ItalyGalleryPhoto } from '../data/italyPhotos';

type CategoryKey = 'all' | 'balkon' | 'wnetrze' | 'kuchnia' | 'lazienka' | 'basen' | 'okolica';

export const ItalyPhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: `Wszystkie zdjęcia (${italyGalleryPhotos.length})` },
    { key: 'balkon', label: 'Taras & Zachód Słońca (13)' },
    { key: 'wnetrze', label: 'Wnętrze & Antresola (13)' },
    { key: 'kuchnia', label: 'Kuchnia & Jadalnia (8)' },
    { key: 'lazienka', label: 'Łazienka (5)' },
    { key: 'basen', label: 'Baseny & Relaks (5)' },
    { key: 'okolica', label: 'Plaże & Okolica (10)' }
  ];

  // Filtrowanie zdjęć
  const filteredPhotos = italyGalleryPhotos.filter((photo) => {
    const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      photo.title.toLowerCase().includes(q) ||
      photo.description.toLowerCase().includes(q) ||
      photo.categoryLabel.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Obsługa klawiatury w lightboxie
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  // Blokada przewijania przy otwartym lightboxie
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section className="gallery-section" id="galeria">
      <div className="container">
        
        <div className="section-header-block text-center">
          <div className="sage-accent-line italy-accent-line"></div>
          <span className="section-eyebrow" style={{ color: '#C2633C' }}>
            Autentyczna galeria fotograficzna (54 zdjęcia)
          </span>
          <h2 className="section-title">Odkryj każdy zakątek Il Dolce Tramonto</h2>
          <p className="section-editorial-text" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Bez filtrów i retuszu. Prawdziwe fotografie przedstawiające panoramiczny balkon z widokiem na zachód słońca nad Zatoką Asinara, 47 m² klimatyzowanego apartamentu z antresolą, dwa baseny rekreacyjne oraz krystaliczne plaże północnej Sardynii.
          </p>
        </div>

        {/* WYSZUKIWARKA ZDJĘĆ */}
        <div className="gallery-search-wrap">
          <input
            type="text"
            placeholder="Szukaj np. zachód słońca, plaża, basen, antresola..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="gallery-search-input"
            aria-label="Filtruj zdjęcia w galerii"
          />
          {searchQuery && (
            <button
              type="button"
              className="gallery-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Wyczyść filtr"
            >
              ✕
            </button>
          )}
        </div>

        {/* FILTRY KATEGORII */}
        <div className="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.key}
              className={`gallery-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.key);
                setLightboxIndex(null);
              }}
              style={activeCategory === cat.key ? { background: '#C2633C', borderColor: '#C2633C', color: '#fff' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-count-badge">
          Wyświetlanie <strong>{filteredPhotos.length}</strong> z {italyGalleryPhotos.length} fotografii
        </div>

        {/* SIATKA ZDJĘĆ */}
        <div className="gallery-responsive-grid">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Zobacz powiększenie: ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
              }}
            >
              <div className="gallery-card-img-wrap">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="gallery-card-img"
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-badge" style={{ background: '#C2633C' }}>
                    {photo.categoryLabel}
                  </span>
                  <h4 className="gallery-card-title">{photo.title}</h4>
                  <p className="gallery-card-caption">{photo.description}</p>
                  <span className="gallery-zoom-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {currentPhoto && lightboxIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Zamknij podgląd"
            >
              &times;
            </button>

            <button
              type="button"
              className="lightbox-nav-btn prev-btn"
              onClick={prevPhoto}
              aria-label="Poprzednie zdjęcie"
            >
              &#10094;
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="lightbox-main-img"
              />
              <div className="lightbox-info-bar">
                <div className="info-top-row">
                  <span className="info-counter" style={{ color: '#E0825B' }}>
                    {lightboxIndex + 1} z {filteredPhotos.length}
                  </span>
                  <span className="info-category" style={{ color: '#E0825B' }}>
                    {currentPhoto.categoryLabel}
                  </span>
                </div>
                <h3 className="info-title">{currentPhoto.title}</h3>
                <p className="info-desc">{currentPhoto.description}</p>
              </div>
            </div>

            <button
              type="button"
              className="lightbox-nav-btn next-btn"
              onClick={nextPhoto}
              aria-label="Następne zdjęcie"
            >
              &#10095;
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
