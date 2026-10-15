import React, { useState } from 'react';

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'domek' | 'salon' | 'sypialnie' | 'lazienka' | 'ogrod' | 'dzieci';
  categoryLabel: string;
  description: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: '857438807',
    src: '/mlynowka/857438807.jpg',
    title: 'Domek Młynówka i słoneczny taras',
    category: 'domek',
    categoryLabel: 'Domek i Taras',
    description: 'Reprezentacyjny widok całego domku w stylu nowoczesnej stodoły z zestawem mebli lounge, drewnianymi leżakami i grillem.'
  },
  {
    id: '653703659',
    src: '/mlynowka/653703659.jpg',
    title: 'Panorama posesji z lustrem potoku',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Malowniczy widok na ponad 1 hektar ogrodu, krystaliczny staw i domek na tle zielonych zboczy Pienin.'
  },
  {
    id: '413551315',
    src: '/mlynowka/413551315.jpg',
    title: 'Staw z dzikimi kaczkami i widok na Pieniny',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Naturalna woda na terenie posiadłości z pływającymi kaczkami, w tle zabytkowy młyn i pasmo górskie.'
  },
  {
    id: '856800596',
    src: '/mlynowka/856800596.jpg',
    title: 'Salon z panoramicznymi oknami',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Przestronny parter z widokiem na ogród: ceglana ściana z TV, stół jadalniany, szmaragdowa sofa i wiszący hamak.'
  },
  {
    id: '654540753',
    src: '/mlynowka/654540753.jpg',
    title: 'Część dzienna i stół jadalniany',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Stół z nakryciem dla gości, stolik z palet, schody z bali świerkowych i fotel brazylijski.'
  },
  {
    id: '856800575',
    src: '/mlynowka/856800575.jpg',
    title: 'W pełni wyposażona kuchnia',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Nowoczesny aneks kuchenny z płytą indukcyjną, lodówką, mikrofalówką i cegłą dekoracyjną pod oknem.'
  },
  {
    id: '856800633',
    src: '/mlynowka/856800633.jpg',
    title: 'Kompletne wyposażenie kuchenne',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Szuflady ze sztućcami (w tym naczynia dla maluchów), czajnik ze stali nierdzewnej i naczynia do gotowania.'
  },
  {
    id: '857373655',
    src: '/mlynowka/857373655.jpg',
    title: 'Strefa wypoczynku i loftowe lampy',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Perspektywa z miękkiej sofy w stronę wielkich okien ogrodowych i designerskiego oświetlenia.'
  },
  {
    id: '857373641',
    src: '/mlynowka/857373641.jpg',
    title: 'Ceglana ściana medialna ze Smart TV',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Autentyczna cegła rozbiórkowa w salonie, drewniane półki i kącik telewizyjny.'
  },
  {
    id: '857373642',
    src: '/mlynowka/857373642.jpg',
    title: 'Szmaragdowa sofa i stolik z litego drewna',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Wygodna rozkładana kanapa z motywami leśnymi i pień drzewa wkomponowany w ścianę.'
  },
  {
    id: '857373649',
    src: '/mlynowka/857373649.jpg',
    title: 'Wiszący fotel hamakowy w salonie',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Ulubione miejsce do czytania książek i relaksu z widokiem na przyrodę.'
  },
  {
    id: '857390826',
    src: '/mlynowka/857390826.jpg',
    title: 'Rzut parteru z perspektywy kuchni',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Płynne przejście między kuchnią, jadalnią a częścią wypoczynkową parteru.'
  },
  {
    id: '857373638',
    src: '/mlynowka/857373638.jpg',
    title: 'Słoneczny salon w ciepłym drewnie',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Pionowy kadr wnętrza pokazujący harmonię drewna, bieli podłóg i soczystej zieleni za oknem.'
  },
  {
    id: '413564841',
    src: '/mlynowka/413564841.jpg',
    title: 'Sypialnia z widokiem na góry',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Główna sypialnia na poddaszu z łóżkiem małżeńskim, fotelem, biurkiem i oknem na pasmo Pienin.'
  },
  {
    id: '857349021',
    src: '/mlynowka/857349021.jpg',
    title: 'Druga sypialnia rodzinna (dwa łóżka)',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Przestronna sypialnia na poddaszu z dwoma szerokimi łóżkami i klimatycznymi lampkami nocnymi.'
  },
  {
    id: '857349030',
    src: '/mlynowka/857349030.jpg',
    title: 'Wnętrze sypialni rodzinnej',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Pachnące świerkiem poddasze, drewniane skosy, miękkie tkaniny i szafka ze skrzyni.'
  },
  {
    id: '857333582',
    src: '/mlynowka/857333582.jpg',
    title: 'Przytulny kąt sypialny ze skosem',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Szałwiowe i kremowe poduszki, miękka pościel i ciepłe punktowe światło lampki Edisona.'
  },
  {
    id: '857333592',
    src: '/mlynowka/857333592.jpg',
    title: 'Szafka nocna i lampa retro',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Nastrojowy klimat wieczorny w sypialni — naturalne drewniane wykończenie.'
  },
  {
    id: '857333597',
    src: '/mlynowka/857333597.jpg',
    title: 'Łóżko małżeńskie pod skosem dachu',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Wygodny materac, butelkowa narzuta i świeże ręczniki przygotowane dla gości.'
  },
  {
    id: '857333610',
    src: '/mlynowka/857333610.jpg',
    title: 'Gra świateł w sypialni na poddaszu',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Ciepły blask lampki rzucający promieniste cienie na deskowane ściany domku.'
  },
  {
    id: '857333622',
    src: '/mlynowka/857333622.jpg',
    title: 'Stanowisko do pracy zdalnej (workation)',
    category: 'sypialnie',
    categoryLabel: 'Sypialnie',
    description: 'Designerskie biurko, szmaragdowe krzesło welurowe i szybki internet światłowodowy.'
  },
  {
    id: '857284326',
    src: '/mlynowka/857284326.jpg',
    title: 'Nowoczesna łazienka z prysznicem',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Zaokrąglona narożna kabina prysznicowa, płytki drewnopodobne, umywalka i zestaw świeżych ręczników.'
  },
  {
    id: '857284356',
    src: '/mlynowka/857284356.jpg',
    title: 'Łazienka i widok na przedpokój',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Toaleta podtynkowa, suszarka do włosów, grzejnik drabinkowy i okno doświetlające.'
  },
  {
    id: '857284392',
    src: '/mlynowka/857284392.jpg',
    title: 'Strefa prysznica w łazience',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Bateria prysznicowa, szklane drzwi kabiny i czysta armatura sanitarna.'
  },
  {
    id: '856833055',
    src: '/mlynowka/856833055.jpg',
    title: 'Krystaliczny potok Młynówka',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Czysty górski strumień szumiący tuż przy domku, dający orzeźwienie w letnie dni.'
  },
  {
    id: '418595368',
    src: '/mlynowka/418595368.jpg',
    title: 'Zabytkowy drewniany młyn wodny',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Historia miejsca — tradycyjny budynek młyna wodnego z drewnianą rynną w otoczeniu zieleni.'
  },
  {
    id: '413570160',
    src: '/mlynowka/413570160.jpg',
    title: 'Rozległy ogród z lotu ptaka',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Ponad hektar prywatnej zieleni z potokiem, huśtawką, placem zabaw, paleniskiem i leżakami.'
  },
  {
    id: '413578698',
    src: '/mlynowka/413578698.jpg',
    title: 'Dolina u podnóża Pienin',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Spokojna okolica Krościenka nad Dunajcem, czyste powietrze i zieleń po horyzont.'
  },
  {
    id: '856800626',
    src: '/mlynowka/856800626.jpg',
    title: 'Wejście do domku i tabliczka z wiosłem',
    category: 'domek',
    categoryLabel: 'Domek i Taras',
    description: 'Żwirowa alejka, drewniana elewacja i unikalna ręcznie rzeźbiona tabliczka Młynówka.'
  },
  {
    id: '856800644',
    src: '/mlynowka/856800644.jpg',
    title: 'Domek od strony zbocza wzgórza',
    category: 'domek',
    categoryLabel: 'Domek i Taras',
    description: 'Widok na dwuspadowy dach, murowany grill, huśtawkę i malowniczą dolinę.'
  },
  {
    id: '653709866',
    src: '/mlynowka/653709866.jpg',
    title: 'Domek w cieniu starych jabłoni',
    category: 'domek',
    categoryLabel: 'Domek i Taras',
    description: 'Widok z góry na prywatną przestrzeń wypoczynkową i sad owocowy.'
  },
  {
    id: '856800664',
    src: '/mlynowka/856800664.jpg',
    title: 'Relaks na leżakach i kwiaty',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Drewniane leżaki na żwirowym tarasie z doniczkami z bratkami i widokiem na ogród.'
  },
  {
    id: '856800620',
    src: '/mlynowka/856800620.jpg',
    title: 'Kamienne biesiadne palenisko ogniskowe',
    category: 'dzieci',
    categoryLabel: 'Dla Dzieci i Biesiady',
    description: 'Krąg kamiennych ław wokół bezpiecznego paleniska, kijki na kiełbaski i przygotowany opał.'
  },
  {
    id: '856800648',
    src: '/mlynowka/856800648.jpg',
    title: 'Strefa ogniskowa i widok na taras',
    category: 'dzieci',
    categoryLabel: 'Dla Dzieci i Biesiady',
    description: 'Idealne miejsce na wieczorne ogniska pod rozgwieżdżonym niebem Pienin.'
  },
  {
    id: '856800643',
    src: '/mlynowka/856800643.jpg',
    title: 'Kwieciste obrzeże tarasu i palenisko',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Piękne detale ogrodu — kolorowe bratki, drewniany kosz na drwa i szczyty w tle.'
  },
  {
    id: '752499449',
    src: '/mlynowka/752499449.jpg',
    title: 'Zapasy drewna do ogniska',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Pachnące żywicą szczapy drewna przygotowane do biesiadowania przy ogniu.'
  },
  {
    id: '857382329',
    src: '/mlynowka/857382329.jpg',
    title: 'Plac zabaw i huśtawki dla dzieci',
    category: 'dzieci',
    categoryLabel: 'Dla Dzieci i Biesiady',
    description: 'Drewniany plac zabaw ze zjeżdżalnią, huśtawką, trampoliną i piaskownicą na miękkiej trawie.'
  },
  {
    id: '413595235',
    src: '/mlynowka/413595235.jpg',
    title: 'Szałwiowy konik na biegunach',
    category: 'dzieci',
    categoryLabel: 'Dla Dzieci i Biesiady',
    description: 'Urocza drewniana zabawka czekająca na najmłodszych gości w salonie pod schodami.'
  },
  {
    id: '856800548',
    src: '/mlynowka/856800548.jpg',
    title: 'Zabytkowe odważniki młyńskie',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Oryginalny komplet odważników na stole jadalnym z widokiem na zielone zbocza.'
  },
  {
    id: '857373660',
    src: '/mlynowka/857373660.jpg',
    title: 'Tradycyjna drewniana maślnica',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Zabytkowy ceber dębowy pod schodami — hołd dla tradycji i historii tego miejsca.'
  },
  {
    id: '856800631',
    src: '/mlynowka/856800631.jpg',
    title: 'Boczne skrzydło i widok na dolinę',
    category: 'ogrod',
    categoryLabel: 'Ogród i Potok Młynówka',
    description: 'Otoczenie domku sprzyjające wyciszeniu — szum wody i brak bezpośrednich sąsiadów.'
  },
  {
    id: '856800637',
    src: '/mlynowka/856800637.jpg',
    title: 'Kalendarz regionalny i korytarz',
    category: 'salon',
    categoryLabel: 'Salon i Kuchnia',
    description: 'Przedpokój z widokiem na Krościenko i szlaki wiodące przez Dunajec.'
  }
];

type CategoryKey = 'all' | 'domek' | 'salon' | 'sypialnie' | 'lazienka' | 'ogrod' | 'dzieci';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: 'Wszystkie zdjęcia (42)' },
    { key: 'domek', label: 'Domek i Taras' },
    { key: 'salon', label: 'Salon i Kuchnia' },
    { key: 'sypialnie', label: 'Sypialnie' },
    { key: 'lazienka', label: 'Łazienka' },
    { key: 'ogrod', label: 'Ogród i Potok Młynówka' },
    { key: 'dzieci', label: 'Dla Dzieci i Biesiady' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeCategory);

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
    <section className="gallery-section" id="galeria">
      <div className="container">
        
        <div className="section-header-block text-center">
          <div className="sage-accent-line"></div>
          <span className="section-eyebrow">Autentyczne fotografie obiektu</span>
          <h2 className="section-title">Odkryj każdy zakątek Młynówki</h2>
          <p className="section-editorial-text">
            Bez retuszu, bez sztucznych renderów. Zobacz jak wygląda 70 m² pachnącego świerkiem domku, prywatny taras, ponadhektarowy ogród z potokiem i plac zabaw.
          </p>
        </div>

        {/* FILTRY KATEGORII */}
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
            >
              <div className="gallery-card-img-wrap">
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  loading="lazy" 
                  className="gallery-card-img" 
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-badge">{photo.categoryLabel}</span>
                  <h4 className="gallery-card-title">{photo.title}</h4>
                  <p className="gallery-card-caption">{photo.description}</p>
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

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {currentPhoto && lightboxIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            
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
                  <span className="info-counter">{lightboxIndex + 1} z {filteredPhotos.length}</span>
                  <span className="info-category">{currentPhoto.categoryLabel}</span>
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
