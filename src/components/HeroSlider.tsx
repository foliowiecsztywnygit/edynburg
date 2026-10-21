import React, { useState, useEffect } from 'react';
import { Language } from '../translations';

export interface HeroSlide {
  src: string;
  caption: Record<Language, string>;
  tag: Record<Language, string>;
}

export const heroSlides: HeroSlide[] = [
  {
    src: '/zdjecia/living-room-1.jpg',
    caption: {
      en: 'Bright and spacious living room with plush L-shaped sofa, soft carpet and direct garden patio access',
      pl: 'Jasny i przestronny salon z narożną sofą, miękkim dywanem i bezpośrednim wyjściem na ogród',
      de: 'Helles und geräumiges Wohnzimmer mit Ecksofa, weichem Teppich und direktem Zugang zur Gartenterrasse',
      fr: 'Salon lumineux et spacieux avec canapé d’angle, moquette douillette et accès direct au jardin'
    },
    tag: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    }
  },
  {
    src: '/zdjecia/bedroom-pink-1.jpg',
    caption: {
      en: 'Master Bedroom with King Size bed, Hollywood illuminated vanity mirror & 3-door wardrobe',
      pl: 'Główna sypialnia z łóżkiem King Size, podświetlaną toaletką Hollywood i szafą',
      de: 'Hauptschlafzimmer mit Kingsize-Bett, beleuchtetem Hollywood-Spiegel & 3-türigem Kleiderschrank',
      fr: 'Chambre principale avec lit King Size, coiffeuse illuminée Hollywood et penderie 3 portes'
    },
    tag: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Główna',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    }
  },
  {
    src: '/zdjecia/garden-patio.jpg',
    caption: {
      en: 'Private enclosed rear garden with patio lounge set, artificial lawn & white pebbles',
      pl: 'Prywatny, ogrodzony ogródek z meblami wypoczynkowymi, sztuczną trawą i białym żwirem',
      de: 'Privater umzäunter Garten mit Terrassen-Lounge, Kunstrasen & weißem Zierkies',
      fr: 'Jardin privatif clos avec salon de terrasse, pelouse synthétique et galets blancs'
    },
    tag: {
      en: 'Private Garden',
      pl: 'Prywatny Ogród',
      de: 'Privater Garten',
      fr: 'Jardin Privé'
    }
  },
  {
    src: '/zdjecia/bedroom-olive-1.jpg',
    caption: {
      en: 'Second King bedroom with modern ceiling perimeter LED cove lighting & gallery wall',
      pl: 'Druga sypialnia King Size z nowoczesnym podsufitowym oświetleniem LED i galerią grafik',
      de: 'Zweites Kingsize-Schlafzimmer mit Decken-LED-Kranzbeleuchtung & Bildergalerie',
      fr: 'Deuxième chambre King Size avec bandeau LED au plafond et galerie de tableaux'
    },
    tag: {
      en: 'Second Bedroom',
      pl: 'Druga Sypialnia',
      de: 'Zweites Schlafzimmer',
      fr: 'Deuxième Chambre'
    }
  },
  {
    src: '/zdjecia/kitchen-1.jpg',
    caption: {
      en: 'Fully equipped galley kitchen with Haier washing machine, gas hob, oven & SIA fridge-freezer',
      pl: 'W pełni wyposażona kuchnia z pralką Haier, płytą gazową, piekarnikiem i lodówką SIA',
      de: 'Voll ausgestattete Küche mit Haier-Waschmaschine, Gasherd, Backofen und SIA-Kühlschrank',
      fr: 'Cuisine tout équipée avec lave-linge Haier, table de cuisson gaz, four et réfrigérateur SIA'
    },
    tag: {
      en: 'Full Kitchen',
      pl: 'Wyposażona Kuchnia',
      de: 'Komplette Küche',
      fr: 'Cuisine Équipée'
    }
  },
  {
    src: '/zdjecia/bathroom-vanity.jpg',
    caption: {
      en: 'Modern bathroom with vanity basin unit, designer black heated towel rail & frosted window',
      pl: 'Nowoczesna łazienka z szafką umywalkową, czarnym grzejnikiem drabinkowym i oknem',
      de: 'Modernes Badezimmer mit Waschtischunterschrank, schwarzem Handtuchwärmer & Fenster',
      fr: 'Salle de bain moderne avec meuble vasque, sèche-serviettes noir design et fenêtre dépolie'
    },
    tag: {
      en: 'Bathroom',
      pl: 'Nowoczesna Łazienka',
      de: 'Badezimmer',
      fr: 'Salle de Bain'
    }
  },
  {
    src: '/zdjecia/driveway.png',
    caption: {
      en: 'Freshly renovated private driveway with free off-street parking directly in front of the house',
      pl: 'Prywatny, świeżo zmodernizowany podjazd z darmowym parkingiem przed samym domem',
      de: 'Frisch renovierte private Einfahrt mit kostenlosem Parkplatz direkt vor dem Haus',
      fr: 'Allée de stationnement privée rénovée avec parking gratuit directement devant la maison'
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
