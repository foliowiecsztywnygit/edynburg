import React, { useState, useEffect } from 'react';
import { Language } from '../translations';

export interface HeroSlide {
  src: string;
  caption: Record<Language, string>;
  tag: Record<Language, string>;
}

export const heroSlides: HeroSlide[] = [
  {
    src: '/zdjecia/living_room_hd.jpg',
    caption: {
      en: 'Bright and spacious living room with plush sofa, dining table & Smart TV',
      pl: 'Jasny i przestronny salon z narożną sofą, stołem jadalnianym i Smart TV',
      de: 'Helles und geräumiges Wohnzimmer mit Ecksofa, Esstisch & Smart-TV',
      fr: 'Salon lumineux et spacieux avec canapé d’angle, table à manger et Smart TV'
    },
    tag: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    }
  },
  {
    src: '/zdjecia/bedroom_pink_master_hd.jpg',
    caption: {
      en: 'Master Bedroom with King Size bed, dressing vanity & Hollywood mirror',
      pl: 'Główna sypialnia z łóżkiem King Size, toaletką i lustrem Hollywood',
      de: 'Hauptschlafzimmer mit Kingsize-Bett, Frisiertisch & Hollywood-Spiegel',
      fr: 'Chambre principale avec lit King Size, coiffeuse et miroir Hollywood'
    },
    tag: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Główna',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    }
  },
  {
    src: '/zdjecia/garden_patio_hd.jpg',
    caption: {
      en: 'Private enclosed rear garden with patio lounge set & artificial lawn',
      pl: 'Prywatny, ogrodzony ogródek z meblami wypoczynkowymi i trawnikiem',
      de: 'Privater umzäunter Garten mit Terrassen-Lounge & Kunstrasen',
      fr: 'Jardin privatif clos avec salon de terrasse et pelouse synthétique'
    },
    tag: {
      en: 'Private Garden',
      pl: 'Prywatny Ogród',
      de: 'Privater Garten',
      fr: 'Jardin Privé'
    }
  },
  {
    src: '/zdjecia/bedroom2_yellow_hd.jpg',
    caption: {
      en: 'Second King bedroom with ceiling ambient LED lighting and gallery wall',
      pl: 'Druga sypialnia King Size z podświetleniem LED i galerią grafik',
      de: 'Zweites Kingsize-Schlafzimmer mit LED-Beleuchtung & Bildergalerie',
      fr: 'Deuxième chambre King Size avec ruban LED et cadres décoratifs'
    },
    tag: {
      en: 'Second Bedroom',
      pl: 'Druga Sypialnia',
      de: 'Zweites Schlafzimmer',
      fr: 'Deuxième Chambre'
    }
  },
  {
    src: '/zdjecia/kitchen_hd.jpg',
    caption: {
      en: 'Fully equipped kitchen with oven, cooker, fridge-freezer & washing machine',
      pl: 'W pełni wyposażona kuchnia z piekarnikiem, płytą, lodówką i pralką',
      de: 'Voll ausgestattete Küche mit Backofen, Herd, Kühlschrank und Waschmaschine',
      fr: 'Cuisine tout équipée avec four, plaque, réfrigérateur et lave-linge'
    },
    tag: {
      en: 'Full Kitchen',
      pl: 'Wyposażona Kuchnia',
      de: 'Komplette Küche',
      fr: 'Cuisine Équipée'
    }
  },
  {
    src: '/zdjecia/bathroom_hd.jpg',
    caption: {
      en: 'Modern sparkling clean bathroom with bathtub, overhead shower & heated towel rail',
      pl: 'Nowoczesna, lśniąca łazienka z wanną, prysznicem i grzejnikiem na ręczniki',
      de: 'Modernes Badezimmer mit Badewanne, Dusche & Handtuchwärmer',
      fr: 'Salle de bain moderne avec baignoire, douche et sèche-serviettes chauffant'
    },
    tag: {
      en: 'Bathroom',
      pl: 'Nowoczesna Łazienka',
      de: 'Badezimmer',
      fr: 'Salle de Bain'
    }
  },
  {
    src: '/zdjecia/driveway_hd.jpg',
    caption: {
      en: 'Freshly renovated private driveway with free parking directly in front of the house',
      pl: 'Prywatny, świeżo odnowiony podjazd z darmowym parkingiem przed domem',
      de: 'Frisch renovierte private Einfahrt mit kostenlosem Parkplatz vor dem Haus',
      fr: 'Allée de stationnement privée rénovée avec parking gratuit devant la maison'
    },
    tag: {
      en: 'Private Driveway',
      pl: 'Prywatny Podjazd',
      de: 'Private Einfahrt',
      fr: 'Allée Privée'
    }
  }
];

interface HeroSliderProps {
  lang: Language;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div 
      className="hero-cover-banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Photo Slideshow"
    >
      {/* Slides Images Stack with Crossfade */}
      {heroSlides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.1, 0, 0.2, 1)',
              transform: isActive ? 'scale(1.02)' : 'scale(1)',
              zIndex: isActive ? 1 : 0,
              pointerEvents: isActive ? 'auto' : 'none'
            }}
          >
            <img
              src={slide.src}
              alt={slide.caption[lang]}
              className="hero-cover-image"
              loading={idx === 0 ? 'eager' : 'lazy'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        );
      })}

      {/* Gradient Overlays for readability and depth */}
      <div 
        className="hero-cover-gradient-overlay" 
        style={{ zIndex: 2 }}
      />
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 20, 0.6) 0%, rgba(15, 23, 20, 0.15) 40%, rgba(0,0,0,0) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Floating Caption & Badge in Bottom Corner */}
      <div 
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '24px',
          right: '80px',
          zIndex: 3,
          color: '#FFFFFF',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: 'rgba(115, 148, 125, 0.9)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            {heroSlides[currentIndex].tag[lang]}
          </span>
          <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
            {currentIndex + 1} / {heroSlides.length}
          </span>
        </div>
        <p style={{
          fontSize: 'clamp(0.88rem, 1.4vw, 1.05rem)',
          fontWeight: 500,
          lineHeight: '1.4',
          margin: 0
        }}>
          {heroSlides[currentIndex].caption[lang]}
        </p>
      </div>

      {/* Interactive Arrows */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          color: '#1F1F1D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFFFF';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          color: '#1F1F1D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFFFF';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ›
      </button>

      {/* Pagination Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '24px',
          zIndex: 3,
          display: 'flex',
          gap: '6px'
        }}
      >
        {heroSlides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            style={{
              width: dotIdx === currentIndex ? '22px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: dotIdx === currentIndex ? 'var(--ukoi-sage, #73947D)' : 'rgba(255, 255, 255, 0.65)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

    </div>
  );
};
