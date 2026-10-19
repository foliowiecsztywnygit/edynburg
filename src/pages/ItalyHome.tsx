import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookingBar } from '../components/BookingBar';
import { ItalyPhotoGallery } from '../components/ItalyPhotoGallery';

interface ItalyHomeProps {
  onOpenBooking?: (data?: { checkIn?: string; checkOut?: string; property?: string }) => void;
}

export const ItalyHome: React.FC<ItalyHomeProps> = ({ onOpenBooking }) => {
  // Stan aktywnego FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleBookingTrigger = (e?: React.MouseEvent) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (onOpenBooking) {
      onOpenBooking({ property: 'Il Dolce Tramonto Apartment — Sardynia' });
    } else {
      window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
        detail: { property: 'Il Dolce Tramonto Apartment — Sardynia' }
      }));
    }
  };

  const faqItems = [
    {
      q: "Ilu gości może zatrzymać się w obiekcie Il Dolce Tramonto Apartment?",
      a: "Obiekt Il Dolce Tramonto Apartment udostępnia komfortową przestrzeń 47 m² dla maksymalnie 4 gości. W apartamencie znajduje się 1 sypialnia z łóżkiem małżeńskim na antresoli oraz wygodna rozkładana sofa w salonie."
    },
    {
      q: "Jakie są godziny zameldowania i wymeldowania w obiekcie?",
      a: "Zameldowanie rozpoczyna się od godziny 16:00 do 22:00, a wymeldowanie jest możliwe w godzinach 08:00 – 11:00. Przed przyjazdem prosimy o kontakt przez WhatsApp w celu ustalenia dogodnej godziny i przekazania kluczy."
    },
    {
      q: "Czy w obiekcie Il Dolce Tramonto Apartment jest basen?",
      a: "Tak, w kompleksie wakacyjnym do dyspozycji gości znajdują się 2 odkryte baseny z widokiem na wzgórza i morze (dostępne bezpłatnie w sezonie letnim)."
    },
    {
      q: "Czy apartament posiada balkon lub taras z widokiem na morze?",
      a: "Tak, jednym z największych atutów apartamentu jest prywatny balkon i słoneczny taras z meblami ogrodowymi, z którego roztacza się spektakularny, panoramiczny widok na zachód słońca nad Morzem Śródziemnym i Zatoką Asinara."
    },
    {
      q: "Jak daleko obiekt znajduje się od centrum miasta i plaż?",
      a: "Il Dolce Tramonto Apartment położony jest w urokliwym miasteczku Trinità d'Agultu e Vignola (ok. 1,5 km od centrum z restauracjami i kawiarniami). Najbliższe słynne plaże północnej Sardynii (Li Feruli, Li Junchi di Badesi, La Marinedda, Isola Rossa) znajdują się w odległości zaledwie 5–6 km (ok. 8–10 minut autem)."
    },
    {
      q: "Jakie lotniska znajdują się najbliżej apartamentu?",
      a: "Najbliższe lotniska na Sardynii to: Lotnisko Olbia Costa Smeralda (74 km, ok. 1h 15 min autem), Lotnisko Alghero-Fertilia (79 km, ok. 1h 20 min) oraz Lotnisko Figari Sud-Corse na Korsyce (82 km)."
    },
    {
      q: "Czy dostępny jest parking i bezpłatne Wi-Fi?",
      a: "Tak, bezpłatny parking publiczny znajduje się bezpośrednio przed wejściem do apartamentu i nie wymaga wcześniejszej rezerwacji. W całym obiekcie dostępne jest bezpłatne, szybkie Wi-Fi."
    },
    {
      q: "Jakie są zasady dotyczące dzieci, zwierząt i palenia?",
      a: "Dzieci w każdym wieku są mile widziane. W obiekcie obowiązuje całkowity zakaz palenia wewnątrz oraz zakaz organizacji imprez i wieczorów panieńskich/kawalerskich. Zwierzęta nie są akceptowane. Numer licencji turystycznej (CIR): 07038, IT090074C200015822."
    }
  ];

  return (
    <div className="home-page theme-italy">
      
      {/* 1. HERO SECTION — IL DOLCE TRAMONTO SARDEGNA */}
      <section className="ukoi-hero" id="hero">
        
        {/* TŁO HERO: PANORAMA ZACHODU SŁOŃCA NA SARDYNII Z AMBIENTEM ZŁOTEJ GODZINY */}
        <div className="hero-banner-wrapper italy-hero-banner">
          <div className="container hero-banner-container">
            <div className="hero-cover-banner">
              <img 
                src="/sardynia/tlohero.jpg" 
                alt="Il Dolce Tramonto Apartment — spektakularny zachód słońca nad morzem w Sardynii" 
                className="hero-cover-image" 
              />
              <div className="hero-cover-gradient-overlay" />
            </div>
          </div>
        </div>

        {/* BOKS TEKSTOWY HERO */}
        <div className="container hero-center-box">
          
          <div className="sage-accent-line italy-accent-line"></div>

          <h1 className="hero-heading">
            Il Dolce Tramonto. Odkryj magię zachodów słońca nad morzem na Sardynii.
          </h1>

          <p className="hero-lead">
            Trinità d'Agultu e Vignola, północna Sardynia. Przestronny apartament 47 m² dla maksymalnie 4 osób z prywatnym balkonem, panoramicznym widokiem na zachód słońca nad Morzem Śródziemnym, dostępem do 2 basenów oraz bliskością krystalicznych plaż Costa Paradiso i Isola Rossa.
          </p>

          <nav className="hero-pipe-menu" aria-label="Nawigacja sekcji">
            <a href="#o-apartamencie">O APARTAMENCIE</a>
            <span className="pipe">|</span>
            <a href="#wnetrze-i-taras">WNĘTRZE I TARAS</a>
            <span className="pipe">|</span>
            <a href="#galeria">GALERIA ZDJĘĆ</a>
            <span className="pipe">|</span>
            <a href="#udogodnienia">UDOGODNIENIA</a>
            <span className="pipe">|</span>
            <a href="#plaze-i-okolica">PLAŻE I OKOLICA</a>
            <span className="pipe">|</span>
            <a href="#opinie">OPINIE GOŚCI</a>
            <span className="pipe">|</span>
            <a href="#zasady-faq">ZASADY I FAQ</a>
            <span className="pipe">|</span>
            <a href="#kontakt">KONTAKT</a>
          </nav>

          <p className="hero-motto">
            Zatrzymaj się na chwilę i rozkoszuj się słodkim włoskim zachodem słońca — dokładnie tak, jak na to zasługujesz.
          </p>

          {/* WIDŻET WYSZUKIWANIA I REZERWACJI */}
          <BookingBar onOpenBooking={handleBookingTrigger} />

          <div className="hero-rating-subtle">
            <span className="rating-val" style={{ color: '#C2633C' }}>8,5 / 10</span>
            <span className="rating-desc">Bardzo dobry (Booking.com) · Lokalizacja 9,4 / 10 · Personel 8,8 / 10 · 100% sprawdzonych opinii</span>
          </div>

        </div>
      </section>

      {/* 2. O APARTAMENCIE & 4 PIONOWE FOTOGRAFIE W JEDNYM RZĘDZIE */}
      <section className="ukoi-section text-center" id="o-apartamencie">
        <div className="container">
          
          <div className="sage-accent-line italy-accent-line"></div>
          <div className="center-buttons-row">
            <button type="button" className="btn-sage btn-italy" onClick={handleBookingTrigger} data-booking-trigger="true">
              SPRAWDŹ TERMINY W SARDYNII
            </button>
          </div>

          <h2 className="section-title">
            Włoski spokój, widok na bezkresne morze i złote zachody słońca
          </h2>

          <div className="section-subtitle-link">
            <a href="#wnetrze-i-taras" style={{ color: '#C2633C' }}>ZOBACZ SZCZEGÓŁY APARTAMENTU ↓</a>
          </div>

          <p className="section-editorial-text">
            <strong>Il Dolce Tramonto Apartment</strong> w Trinità d'Agultu to wyjątkowe miejsce stworzone do prawdziwego włoskiego <em>dolce vita</em>. 
            Położony na malowniczym wzgórzu północnej Sardynii, oferuje zapierający dech w piersiach widok na Zatokę Asinara, 
            gdzie każdego wieczoru słońce zanurza się w krystalicznych wodach Morza Śródziemnego. 
            Ciesz się lampką lokalnego Vermentino na własnym tarasie, orzeźwiającą kąpielą w basenie i bliskością najpiękniejszych sardyńskich plaż.
          </p>

          {/* 4 PIONOWE FOTOGRAFIE Z AUTENTYCZNYCH ZDJĘĆ */}
          <div className="four-photos-grid">
            
            <div className="photo-card-vert">
              <div className="photo-wrapper">
                <img 
                  src="/sardynia/697993505.jpg" 
                  alt="Prywatny balkon z widokiem na zachód słońca nad morzem" 
                  className="editorial-img" 
                  loading="lazy" 
                />
              </div>
              <h3 className="photo-caption-title">Prywatny Balkon & Zachód Słońca</h3>
              <p className="photo-caption-desc">Panoramiczny widok na Zatokę Asinara, ciche dachy miasteczka i złote wieczorne światło.</p>
            </div>

            <div className="photo-card-vert">
              <div className="photo-wrapper">
                <img 
                  src="/sardynia/697993728.jpg" 
                  alt="Jasny salon z antresolą sypialnianą i drewnianymi schodami" 
                  className="editorial-img" 
                  loading="lazy" 
                />
              </div>
              <h3 className="photo-caption-title">Antresola i Jasny Salon</h3>
              <p className="photo-caption-desc">47 m² przemyślanej przestrzeni dla 4 osób z klimatyzacją, loftem i w pełni wyposażoną kuchnią.</p>
            </div>

            <div className="photo-card-vert">
              <div className="photo-wrapper">
                <img 
                  src="/sardynia/697993552.jpg" 
                  alt="Odkryty basen z widokiem na wzgórza Sardynii" 
                  className="editorial-img" 
                  loading="lazy" 
                />
              </div>
              <h3 className="photo-caption-title">2 Odkryte Baseny</h3>
              <p className="photo-caption-desc">Relaks na leżakach i kąpiel z widokiem na wzgórza i błękit zatoki Morza Śródziemnego.</p>
            </div>

            <div className="photo-card-vert">
              <div className="photo-wrapper">
                <img 
                  src="/sardynia/697993880.jpg" 
                  alt="Lazurowe morze i zatoczki Isola Rossa" 
                  className="editorial-img" 
                  loading="lazy" 
                />
              </div>
              <h3 className="photo-caption-title">Isola Rossa & Dziewicze Plaże</h3>
              <p className="photo-caption-desc">Krystaliczne zatoki La Marinedda, Li Feruli i port Isola Rossa w zasięgu 5–6 km od apartamentu.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WNĘTRZE I TARAS — PRZESTRZEŃ APARTAMENTU */}
      <section className="ukoi-section bg-subtle" id="wnetrze-i-taras">
        <div className="container">
          <div className="editorial-narrow-container text-center">
            
            <div className="sage-accent-line italy-accent-line"></div>
            <h2 className="section-title">Wnętrze stworzone do wakacyjnego wypoczynku</h2>
            
            <p className="section-lead-muted">
              47 m² wygody i funkcjonalności na wyłączność. Idealny wybór dla par, rodzin z dziećmi oraz grup przyjaciół szukających autentycznej bazy wypadowej na Sardynii.
            </p>

            <div className="specs-features-grid">
              
              <div className="spec-card">
                <div className="spec-icon">🏡</div>
                <h4 className="spec-title">Cały obiekt dla Ciebie</h4>
                <p className="spec-desc">47 m² powierzchni mieszkalnej na wyłączność, bez współdzielenia z obcymi.</p>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🌅</div>
                <h4 className="spec-title">Balkon & Taras Słoneczny</h4>
                <p className="spec-desc">Meble ogrodowe i stół na świeżym powietrzu z niepowtarzalnym widokiem na zachód słońca.</p>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🛏️</div>
                <h4 className="spec-title">Sypialnia na Antresoli</h4>
                <p className="spec-desc">Podwójne łóżko małżeńskie na antresoli oraz rozkładana sofa dwuosobowa w salonie (do 4 gości).</p>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🍳</div>
                <h4 className="spec-title">W pełni wyposażona kuchnia</h4>
                <p className="spec-desc">Ekspres do kawy, płyta kuchenna, piekarnik, lodówka, czajnik elektryczny, naczynia i pralka.</p>
              </div>

              <div className="spec-card">
                <div className="spec-icon">❄️</div>
                <h4 className="spec-title">Klimatyzacja & Wi-Fi</h4>
                <p className="spec-desc">Nowoczesna klimatyzacja, ogrzewanie, szybki bezpłatny internet bezprzewodowy oraz TV.</p>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🅿️</div>
                <h4 className="spec-title">Bezpłatny parking</h4>
                <p className="spec-desc">Wygodny parking publiczny tuż przed drzwiami wejściowymi do apartamentu.</p>
              </div>

            </div>

            {/* EDITORIAL SHOWCASE (6 AUTENTYCZNYCH ZDJĘĆ Z OPISAMI) */}
            <div className="editorial-showcase-grid">
              
              <div className="showcase-card">
                <div className="showcase-img-wrap">
                  <img src="/sardynia/697993545.jpg" alt="Nowoczesna kuchnia ze stali nierdzewnej" className="showcase-img" loading="lazy" />
                </div>
                <div className="showcase-info">
                  <h4 className="showcase-title">Włoska kuchnia i wygoda</h4>
                  <p className="showcase-desc">Płyta kuchenna, piekarnik, lodówka i pełne naczynia — wszystko, by przygotować owoce morza i lokalne przysmaki.</p>
                </div>
              </div>

              <div className="showcase-card">
                <div className="showcase-img-wrap">
                  <img src="/sardynia/697993847.jpg" alt="Komfortowa sypialnia przygotowana na przyjazd gości" className="showcase-img" loading="lazy" />
                </div>
                <div className="showcase-info">
                  <h4 className="showcase-title">Czystość i komfort 8,1/10</h4>
                  <p className="showcase-desc">Wygodne łóżko małżeńskie, pachnąca pościel i relaksująca cisza z dala od wielkomiejskiego zgiełku.</p>
                </div>
              </div>

              <div className="showcase-card">
                <div className="showcase-img-wrap">
                  <img src="/sardynia/697993670.jpg" alt="Łazienka z bidetem, prysznicem i pralką" className="showcase-img" loading="lazy" />
                </div>
                <div className="showcase-info">
                  <h4 className="showcase-title">Łazienka z bidetem & pralka</h4>
                  <p className="showcase-desc">Prysznic ze szklaną kabiną, bidet, toaleta, suszarka do włosów oraz prywatna pralka dla pełnej wygody.</p>
                </div>
              </div>

              <div className="showcase-card">
                <div className="showcase-img-wrap">
                  <img src="/sardynia/697993963.jpg" alt="Aperol Spritz na tle zachodu słońca" className="showcase-img" loading="lazy" />
                </div>
                <div className="showcase-info">
                  <h4 className="showcase-title">Aperitivo o złotej godzinie</h4>
                  <p className="showcase-desc">Relaks z kieliszkiem spritza na balkonie, podziwiając ogień zachodzącego słońca nad morzem.</p>
                </div>
              </div>

              <div className="showcase-card">
                <div className="showcase-img-wrap">
                  <img src="/sardynia/697993664.jpg" alt="Basen rezydencji z widokiem na błękit morza" className="showcase-img" loading="lazy" />
                </div>
                <div className="showcase-info">
                  <h4 className="showcase-title">2 Baseny z widokiem na morze</h4>
                  <p className="showcase-desc">Dwa odkryte baseny z kamiennym tarasem i widokiem na Zatokę Asinara — orzeźwienie po dniu na plaży.</p>
                </div>
              </div>

              <div className="showcase-card">
                <div className="showcase-img-wrap">
                  <img src="/sardynia/697993867.jpg" alt="Plaża La Marinedda" className="showcase-img" loading="lazy" />
                </div>
                <div className="showcase-info">
                  <h4 className="showcase-title">Plaża La Marinedda (6 km)</h4>
                  <p className="showcase-desc">Jedna z pereł północnej Sardynii z turkusową wodą i czerwonymi skałami, zaledwie 8 minut autem.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. AUTENTYCZNA INTERAKTYWNA GALERIA LIGHTBOX (54 ZDJĘCIA) */}
      <ItalyPhotoGallery />

      {/* 5. UDOGODNIENIA PEŁNA LISTA (1:1 Z BOOKING.COM) */}
      <section className="ukoi-section" id="udogodnienia">
        <div className="container">
          
          <div className="sage-accent-line italy-accent-line"></div>
          <h2 className="section-title text-center">Kompletne wyposażenie i udogodnienia</h2>
          <p className="section-lead-muted text-center" style={{ maxWidth: '680px', margin: '0 auto 48px auto' }}>
            Wszystko, czego potrzebujesz na beztroski urlop nad Morzem Śródziemnym.
          </p>

          <div className="amenities-categories-grid">
            
            <div className="amenity-column">
              <h3 className="amenity-category-header">
                <span className="amenity-cat-icon">🍳</span> Kuchnia i Jadalnia
              </h3>
              <ul className="amenity-items-list">
                <li>Stół i część jadalniana dla 4 osób</li>
                <li>Ekspres do kawy i zestaw do parzenia herbaty</li>
                <li>Płyta kuchenna gazowa i piekarnik</li>
                <li>Pojemna lodówka z zamrażarką</li>
                <li>Pralka automatyczna do dyspozycji gości</li>
                <li>Czajnik elektryczny i toster</li>
                <li>Przybory kuchenne, garnki, patelnie i naczynia</li>
                <li>Środki czyszczące i środki higieniczne</li>
              </ul>
            </div>

            <div className="amenity-column">
              <h3 className="amenity-category-header">
                <span className="amenity-cat-icon">🌅</span> Balkon, Basen i Relaks
              </h3>
              <ul className="amenity-items-list">
                <li>Prywatny balkon ze spektakularnym widokiem na morze</li>
                <li>Taras słoneczny z meblami ogrodowymi i leżakami</li>
                <li>Część jadalniana na świeżym powietrzu</li>
                <li>Niezapomniane widoki na zachód słońca nad Zatoką Asinara</li>
                <li>2 odkryte baseny w kompleksie (dostępne bezpłatnie)</li>
                <li>Ręczniki kąpielowe i plażowe dla każdego gościa</li>
                <li>Suszarka do ubrań i wieszaki</li>
              </ul>
            </div>

            <div className="amenity-column">
              <h3 className="amenity-category-header">
                <span className="amenity-cat-icon">🛁</span> Komfort i Bezpieczeństwo
              </h3>
              <ul className="amenity-items-list">
                <li>Prywatna łazienka z kabiną prysznicową</li>
                <li>Tradycyjny włoski bidet i toaleta</li>
                <li>Suszarka do włosów i zestaw kosmetyków</li>
                <li>Wydajna klimatyzacja oraz funkcja ogrzewania</li>
                <li>Płaski telewizor Smart TV i bezpłatne Wi-Fi</li>
                <li>Pojemna szafa i garderoba na walizki</li>
                <li>Pokoje dla niepalących i dla alergików</li>
                <li>Bezpłatny parking publiczny przed drzwiami</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PLAŻE, ATRAKCJE I OKOLICA */}
      <section className="ukoi-section bg-subtle" id="plaze-i-okolica">
        <div className="container">
          
          <div className="sage-accent-line italy-accent-line"></div>
          <h2 className="section-title text-center">Najpiękniejsze plaże i atrakcje w zasięgu ręki</h2>
          <p className="section-lead-muted text-center" style={{ maxWidth: '720px', margin: '0 auto 48px auto' }}>
            Trinità d'Agultu to idealna baza wypadowa do odkrywania dziewiczych zatok, plaż z białym piaskiem i lokalnych sardyńskich smaków.
          </p>

          <div className="surroundings-split-grid">
            
            {/* Kolumna 1: Plaże */}
            <div className="surroundings-card">
              <h3 className="surroundings-card-title">🏖️ Słynne plaże w okolicy</h3>
              <ul className="surroundings-distance-list">
                <li>
                  <span className="place-name">Plaża Spiaggia Li Feruli</span>
                  <span className="place-dist">5 km (7 min)</span>
                </li>
                <li>
                  <span className="place-name">Plaża Spiaggia Li Junchi di Badesi</span>
                  <span className="place-dist">6 km (8 min)</span>
                </li>
                <li>
                  <span className="place-name">Plaża Spiaggia La Marinedda (słynna zatoka)</span>
                  <span className="place-dist">6 km (8 min)</span>
                </li>
                <li>
                  <span className="place-name">Plaża Spiaggia Longa (Isola Rossa)</span>
                  <span className="place-dist">6 km (9 min)</span>
                </li>
                <li>
                  <span className="place-name">Plaża Spiaggia di Porto</span>
                  <span className="place-dist">6 km (9 min)</span>
                </li>
                <li>
                  <span className="place-name">Wybrzeże i fiordy Costa Paradiso</span>
                  <span className="place-dist">14 km (18 min)</span>
                </li>
              </ul>
            </div>

            {/* Kolumna 2: Restauracje i Lotniska */}
            <div className="surroundings-card">
              <h3 className="surroundings-card-title">🍽️ Restauracje, Miasto & Lotniska</h3>
              <ul className="surroundings-distance-list">
                <li>
                  <span className="place-name">Centrum Trinità d'Agultu (kościół, sklepy)</span>
                  <span className="place-dist">1,5 km</span>
                </li>
                <li>
                  <span className="place-name">Restauracja Da Paolino</span>
                  <span className="place-dist">1,1 km</span>
                </li>
                <li>
                  <span className="place-name">Pasticceria La Dolce Magia (kawa i ciastka)</span>
                  <span className="place-dist">1,1 km</span>
                </li>
                <li>
                  <span className="place-name">Restauracja Il Sagittario</span>
                  <span className="place-dist">1,2 km</span>
                </li>
                <li>
                  <span className="place-name">✈️ Lotnisko Olbia Costa Smeralda</span>
                  <span className="place-dist">74 km</span>
                </li>
                <li>
                  <span className="place-name">✈️ Lotnisko Alghero-Fertilia</span>
                  <span className="place-dist">79 km</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 7. AUTENTYCZNE OPINIE GOŚCI Z BOOKING.COM */}
      <section className="ukoi-section text-center" id="opinie">
        <div className="container">
          
          <div className="sage-accent-line italy-accent-line"></div>
          <h2 className="section-title">Co mówią nasi goście</h2>
          
          <div className="booking-score-big-box">
            <span className="score-number-big" style={{ color: '#C2633C' }}>8,5 / 10</span>
            <div className="score-desc-block">
              <strong>Bardzo dobry</strong>
              <span>Zweryfikowane opinie gości z portalu Booking.com</span>
            </div>
          </div>

          <div className="ratings-breakdown-row">
            <div className="rating-pill">📍 Lokalizacja: <strong>9,4</strong></div>
            <div className="rating-pill">👤 Personel: <strong>8,8</strong></div>
            <div className="rating-pill">✨ Czystość: <strong>8,1</strong></div>
            <div className="rating-pill">🛋️ Komfort: <strong>8,1</strong></div>
            <div className="rating-pill">💎 Jakość do ceny: <strong>8,1</strong></div>
            <div className="rating-pill">🏊 Udogodnienia: <strong>8,1</strong></div>
          </div>

          <div className="reviews-carousel-grid">
            
            <div className="review-single-card">
              <div className="review-top-meta">
                <span className="reviewer-name">Fabio</span>
                <span className="reviewer-country">🇩🇪 Niemcy · Rodzina</span>
                <span className="review-score-badge" style={{ background: '#C2633C' }}>9,0 / 10</span>
              </div>
              <p className="review-quote">
                „Przyjazny gospodarz, pomógł nam we wszystkim, czego potrzebowaliśmy. Z balkonu roztacza się niesamowity widok na zachód słońca. Apartament jest bardzo dobrze wyposażony, by miło spędzić czas. Zdecydowanie polecam!”
              </p>
              <div className="review-stay-info">Pobyt: 8 nocy · sierpień 2025 · Apartament z 1 sypialnią</div>
            </div>

            <div className="review-single-card">
              <div className="review-top-meta">
                <span className="reviewer-name">David</span>
                <span className="reviewer-country">🇩🇪 Niemcy · Rodzina</span>
                <span className="review-score-badge" style={{ background: '#C2633C' }}>8,0 / 10</span>
              </div>
              <p className="review-quote">
                „Udany pobyt i wspaniały widok na morze! Bardzo funkcjonalne mieszkanie z piękną panoramą zachodu słońca. Dobra baza wypadowa na okoliczne plaże i dwa świetne baseny.”
              </p>
              <div className="review-stay-info">Pobyt: 6 nocy · lipiec 2025</div>
            </div>

            <div className="review-single-card">
              <div className="review-top-meta">
                <span className="reviewer-name">Thomas</span>
                <span className="reviewer-country">🇩🇪 Niemcy · Para</span>
                <span className="review-score-badge" style={{ background: '#C2633C' }}>7,0 / 10</span>
              </div>
              <p className="review-quote">
                „Czysto, dobra lokalizacja blisko plaż na północy Sardynii. Spokojna okolica i prywatny balkon ze stolikiem idealnym na wieczorne wino.”
              </p>
              <div className="review-stay-info">Pobyt: 5 nocy · wrzesień 2025</div>
            </div>

            <div className="review-single-card">
              <div className="review-top-meta">
                <span className="reviewer-name">Radekk85</span>
                <span className="reviewer-country">🇵🇱 Polska · Para</span>
                <span className="review-score-badge" style={{ background: '#C2633C' }}>10,0 / 10</span>
              </div>
              <p className="review-quote">
                „Niezapomniane zachody słońca z kieliszkiem Vermentino na tarasie! Bardzo dobry kontakt z właścicielem, apartament czysty i wygodny, a do plaży zaledwie chwila autem. Z pewnością wrócimy!”
              </p>
              <div className="review-stay-info">Pobyt: 7 nocy · czerwiec 2025</div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. ZASADY POBYTU & FAQ */}
      <section className="ukoi-section bg-subtle" id="zasady-faq">
        <div className="container">
          
          <div className="sage-accent-line italy-accent-line"></div>
          <h2 className="section-title text-center">Zasady pobytu i często zadawane pytania</h2>
          
          {/* KLUCZOWE ZASADY */}
          <div className="house-rules-badges-row">
            <div className="rule-badge">🕒 Zameldowanie: <strong>16:00 – 22:00</strong></div>
            <div className="rule-badge">🕚 Wymeldowanie: <strong>08:00 – 11:00</strong></div>
            <div className="rule-badge">🚭 Zakaz palenia</div>
            <div className="rule-badge">🎉 Zakaz imprez</div>
            <div className="rule-badge">🐾 Zwierzęta: nieakceptowane</div>
            <div className="rule-badge">📜 CIR: <strong>07038, IT090074C200015822</strong></div>
          </div>

          {/* AKORDEON FAQ */}
          <div className="faq-accordion-container">
            {faqItems.map((item, idx) => (
              <div key={idx} className={`faq-item-box ${activeFaq === idx ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-question-btn" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-chevron" style={activeFaq === idx ? { color: '#C2633C' } : {}}>{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer-block">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. KONTAKT & REZERWACJA FOOTER SECTION */}
      <section className="ukoi-section text-center" id="kontakt">
        <div className="container">
          
          <div className="sage-accent-line italy-accent-line"></div>
          <h2 className="section-title">Zarezerwuj swój pobyt na Sardynii</h2>
          <p className="section-lead-muted" style={{ maxWidth: '640px', margin: '0 auto 36px auto' }}>
            Masz pytania dotyczące terminów, dojazdu z lotniska lub rekomendacji plaż? Skontaktuj się z nami bezpośrednio — z przyjemnością pomożemy zaplanować Twój wymarzony urlop.
          </p>

          <div className="center-buttons-row">
            <button 
              type="button" 
              className="btn-sage btn-italy" 
              onClick={handleBookingTrigger}
              data-booking-trigger="true"
            >
              ZAPYTAJ O WOLNY TERMIN
            </button>
            <a 
              href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20obiekcie%20Il%20Dolce%20Tramonto%20Apartment%20na%20Sardynii" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-sage"
              style={{ borderColor: '#C2633C', color: '#C2633C' }}
            >
              NAPISZ NA WHATSAPP
            </a>
          </div>

          <div className="contact-details-subtle" style={{ marginTop: '36px' }}>
            <p><strong>Il Dolce Tramonto Apartment</strong></p>
            <p>Via delle Poste FP3, 07038 Trinità d'Agultu e Vignola (SS), Sardynia, Włochy</p>
            <p>Telefon: <a href="tel:+48791040091">+48 791 040 091</a> · Licencja CIR: IT090074C200015822</p>
          </div>

        </div>
      </section>

    </div>
  );
};
