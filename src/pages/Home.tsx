import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookingBar } from '../components/BookingBar';
import { PhotoGallery } from '../components/PhotoGallery';

interface HomeProps {
  onOpenBooking?: (data?: { checkIn?: string; checkOut?: string; property?: string }) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  // Karuzela hero z autentycznymi zdjęciami z folderu /młynówka
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    {
      src: "/mlynowka/857438807.jpg",
      caption: "MŁYNÓWKA — CAŁOROCZNY DOMEK 70 M² W KROŚCIENKU NAD DUNAJCEM ZE SŁONECZNYM TARASEM"
    },
    {
      src: "/mlynowka/653703659.jpg",
      caption: "PONAD 1 HEKTAR ZIELONEGO OGRODU Z LUSTREM WODY POTOKU MŁYNÓWKA NA TLE PIENIN"
    },
    {
      src: "/mlynowka/856800596.jpg",
      caption: "SŁONECZNY SALON Z PANORAMICZNYMI OKNAMI, CEGLANĄ ŚCIANĄ, SOFĄ I WISZĄCYM HAMAKIEM"
    },
    {
      src: "/mlynowka/418595368.jpg",
      caption: "HISTORIA MIEJSCA — ZABYTKOWY DREWNIANY MŁYN WODNY I TRADYCJA PIENIŃSKIEJ GOŚCINNOŚCI"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Stan FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleBookingTrigger = (e?: React.MouseEvent) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
        detail: { property: 'Młynówka — Domek przy Młynie' }
      }));
    }
  };

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="ukoi-hero" id="hero">
        <div className="container hero-center-box">
          
          <div className="sage-accent-line"></div>

          <h1 className="hero-heading">
            Młynówka. Odpocznij w cieniu zabytkowego młyna i gór Pienin.
          </h1>

          <p className="hero-lead">
            Krościenko nad Dunajcem. Drewniany całoroczny domek w stylu nowoczesnej stodoły — 70 m² prywatnej przestrzeni na wyłączność oraz ponad hektar zielonego ogrodu z własną, szumiącą młynówką.
          </p>

          <nav className="hero-pipe-menu" aria-label="Nawigacja sekcji">
            <a href="#o-nas">O MŁYNÓWCE</a>
            <span className="pipe">|</span>
            <a href="#wnetrze-i-ogrod">WNĘTRZE I OGRÓD</a>
            <span className="pipe">|</span>
            <a href="#udogodnienia">UDOGODNIENIA</a>
            <span className="pipe">|</span>
            <a href="#galeria">GALERIA ZDJĘĆ</a>
            <span className="pipe">|</span>
            <a href="#okolica">OKOLICA I SZLAKI</a>
            <span className="pipe">|</span>
            <a href="#opinie">OPINIE GOŚCI</a>
            <span className="pipe">|</span>
            <Link to="/blog">BLOG</Link>
            <span className="pipe">|</span>
            <a href="#zasady-faq">ZASADY I FAQ</a>
            <span className="pipe">|</span>
            <a href="#kontakt">KONTAKT</a>
          </nav>

          <p className="hero-motto">
            Podaruj sobie ukojenie — dokładnie takie, jakiego teraz potrzebujesz.
          </p>

          {/* WIDŻET WYSZUKIWANIA 1:1 Z OBRAZKA UŻYTKOWNIKA Z INTERAKTYWNYM KALENDARZEM */}
          <BookingBar onOpenBooking={handleBookingTrigger} />

          <div className="hero-rating-subtle">
            <span className="rating-val">9,8 / 10</span>
            <span className="rating-desc">Wyjątkowy (43 autentyczne opinie gości)</span>
          </div>

        </div>

        {/* Hero Photo Carousel */}
        <div className="hero-gallery-container">
          <div className="hero-carousel-viewport">
            {heroImages.map((img, idx) => (
              <div key={idx} className={`hero-slide ${idx === heroIndex ? 'active' : ''}`}>
                <img src={img.src} alt="Młynówka Domek przy Młynie w Pieninach" className="hero-photo" />
                <div className="photo-placeholder-caption">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-gallery-controls">
            <button 
              type="button" 
              className="gallery-arrow" 
              onClick={() => setHeroIndex((heroIndex - 1 + heroImages.length) % heroImages.length)}
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
            <div className="gallery-dots">
              {heroImages.map((_, i) => (
                <span 
                  key={i} 
                  className={`dot ${i === heroIndex ? 'active' : ''}`}
                  onClick={() => setHeroIndex(i)}
                />
              ))}
            </div>
            <button 
              type="button" 
              className="gallery-arrow" 
              onClick={() => setHeroIndex((heroIndex + 1) % heroImages.length)}
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* 2. O NAS & 4 PIONOWE FOTOGRAFIE */}
      <section className="ukoi-section text-center" id="o-nas">
        <div className="container">
          
          <div className="sage-accent-line"></div>
          <div className="center-buttons-row">
            <button type="button" className="btn-sage" onClick={handleBookingTrigger} data-booking-trigger="true">
              ZAREZERWUJ TERMIN
            </button>
          </div>

          <h2 className="section-title">
            Całoroczny domek do wynajęcia w ciszy Pienin.
          </h2>
          
          <div className="section-subtitle-link">
            <a href="#okolica">SPRAWDŹ NASZĄ LOKALIZACJĘ: KROŚCIENKO NAD DUNAJCEM</a>
          </div>

          <p className="section-editorial-text">
            Młynówka to komfortowe miejsce dla tych, którzy kochają naturę — zarówno jeśli w chłodniejsze dni szukasz ukojenia w ciepłym drewnianym wnętrzu z widokiem na góry, jak i dla tych, którzy chodzą na spacery w każdą pogodę. Młynówka to miejsce, w którym <strong>zadbasz o swoje wnętrze</strong> i <strong>prawdziwy relaks</strong>.
          </p>

          <div className="four-photos-grid">
            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img src="/mlynowka/654540753.jpg" alt="Salon i jadalnia w Młynówce" className="editorial-img" />
                <div className="photo-label-tag">70 m² na wyłączność</div>
              </div>
              <p className="photo-card-caption">Drewniany, wolnostojący domek w stylu nowoczesnej stodoły.</p>
            </div>

            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img src="/mlynowka/856833055.jpg" alt="Potok młynówki płynący przez posesję" className="editorial-img" />
                <div className="photo-label-tag">Krystaliczny potok</div>
              </div>
              <p className="photo-card-caption">Ponad hektar zielonego ogrodu z własnym szumiącym potokiem.</p>
            </div>

            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img src="/mlynowka/413564841.jpg" alt="Sypialnia z widokiem na góry" className="editorial-img" />
                <div className="photo-label-tag">Łóżka &gt; 2 m długości</div>
              </div>
              <p className="photo-card-caption">2 niezależne sypialnie na piętrze dla 6 gości.</p>
            </div>

            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img src="/mlynowka/856800620.jpg" alt="Biesiadne palenisko ogniskowe" className="editorial-img" />
                <div className="photo-label-tag">Ognisko & Grill</div>
              </div>
              <p className="photo-card-caption">Tradycyjny krąg ogniskowy i prywatny grill pod domkiem.</p>
            </div>
          </div>

          <div className="editorial-quote-block">
            <p className="quote-line-lead">Hotelowy standard w sercu pienińskiej natury.</p>
            <p className="quote-line">Każdy detal zaprojektowaliśmy tak, aby sprzyjał odpoczynkowi.</p>
            <p className="quote-line">Domek to nowoczesne drewniane wnętrze z wielkimi oknami i widokiem na spokój.</p>
            <p className="quote-line">Poranna kawa przy śpiewie ptaków. Wieczorne rozmowy przy świetle księżyca i szumie potoku.</p>
            <p className="quote-line-accent">Zamiast zgiełku miasta — kojący kontakt z przyrodą i zabytkowy Młyn.</p>
          </div>

        </div>
      </section>

      {/* 3. GALERIA 4x3 - REALNE ZDJĘCIA */}
      <section className="ukoi-gallery-section" id="wnetrze-i-ogrod">
        <div className="container">
          <div className="gallery-section-intro text-center">
            <div className="sage-accent-line"></div>
            <h2 className="section-title">Przestrzeń Młynówki w kadrach</h2>
            <p className="section-editorial-text">
              70 m² wnętrza, taras słoneczny, plac zabaw, rzeka i zabytkowy Młyn.
            </p>
          </div>

          <div className="ukoi-photos-matrix">
            <div className="matrix-item"><img src="/mlynowka/857438807.jpg" alt="Domek Młynówka" /><span className="matrix-caption">Domek Młynówka</span></div>
            <div className="matrix-item"><img src="/mlynowka/856800664.jpg" alt="Taras i leżaki" /><span className="matrix-caption">Taras słoneczny</span></div>
            <div className="matrix-item"><img src="/mlynowka/413564841.jpg" alt="Sypialnia główna" /><span className="matrix-caption">Sypialnia główna</span></div>
            <div className="matrix-item"><img src="/mlynowka/856800644.jpg" alt="Prywatny grill" /><span className="matrix-caption">Prywatny grill</span></div>
            <div className="matrix-item"><img src="/mlynowka/856800575.jpg" alt="Kuchnia i jadalnia" /><span className="matrix-caption">Kuchnia & jadalnia</span></div>
            <div className="matrix-item"><img src="/mlynowka/856800548.jpg" alt="Odważniki młyńskie" /><span className="matrix-caption">Klimatyczne detale</span></div>
            <div className="matrix-item"><img src="/mlynowka/857382329.jpg" alt="Plac zabaw" /><span className="matrix-caption">Plac zabaw (&gt;1 ha)</span></div>
            <div className="matrix-item"><img src="/mlynowka/418595368.jpg" alt="Zabytkowy Młyn" /><span className="matrix-caption">Zabytkowy Młyn</span></div>
            <div className="matrix-item"><img src="/mlynowka/857284326.jpg" alt="Nowoczesna łazienka" /><span className="matrix-caption">Wygodna łazienka</span></div>
            <div className="matrix-item"><img src="/mlynowka/856833055.jpg" alt="Szum potoku Młynówka" /><span className="matrix-caption">Szum młynówki</span></div>
            <div className="matrix-item"><img src="/mlynowka/413551315.jpg" alt="Staw z kaczkami" /><span className="matrix-caption">Staw & Pieniny</span></div>
            <div className="matrix-item"><img src="/mlynowka/856800620.jpg" alt="Miejsce na ognisko" /><span className="matrix-caption">Miejsce na ognisko</span></div>
          </div>
        </div>
      </section>

      {/* 4. REDAKCYJNE Q&A I UDOGODNIENIA */}
      <section className="ukoi-editorial-qa" id="udogodnienia">
        <div className="container editorial-narrow-container">
          
          <div className="qa-block">
            <h3 className="qa-title">Czym jest Młynówka?</h3>
            <p className="qa-text">
              Młynówka to starannie zaprojektowany, nowy drewniany domek w stylu alpejskim, w którym <strong>mniej znaczy więcej</strong>. Położony na ponad hektarowej, zielonej działce z przepływającą przez ogród historyczną młynówką, pozwala chłonąć pienińską naturę bez wychodzenia na zewnątrz.
            </p>
            <ul className="qa-bullets">
              <li><strong>Cały wolnostojący budynek 70 m² na wyłączność</strong> z prywatnym wejściem, wygłuszeniem i wydajnym ogrzewaniem całorocznym.</li>
              <li><strong>2 niezależne sypialnie na piętrze</strong> z bardzo długimi łóżkami (&gt;2 m), świeżą pościelą i gniazdkami przy łóżkach.</li>
              <li><strong>Salon z narożną sofą rozkładaną</strong> oraz biurkiem do pracy zdalnej. Łącznie do 6 wygodnych miejsc do spania.</li>
              <li><strong>W pełni wyposażona kuchnia ze strefą jadalnianą:</strong> lodówka, płyta, mikrofala, toster, naczynia i krzesełko do karmienia.</li>
              <li><strong>Prywatna, wygodna łazienka</strong> z prysznicem, kompletem ręczników, suszarką do włosów i suszarką do odzieży.</li>
              <li><strong>Superszybkie, stabilne Wi-Fi 295 Mb/s</strong> przetestowane pod kątem streamingu 4K (Netflix) i bezproblemowych wideorozmów.</li>
            </ul>
          </div>

          <div className="qa-block">
            <h3 className="qa-title">Dodatkowo w ogrodzie:</h3>
            <p className="qa-text">
              Nasi goście mają do dyspozycji <strong>słoneczny taras wypoczynkowy z leżakami i meblami ogrodowymi</strong>, prywatny grill bezpośrednio pod domkiem, tradycyjne, bezpieczne <strong>kamienne miejsce na ognisko z ławami</strong> oraz rozbudowany <strong>plac zabaw dla dzieci</strong> (huśtawki, zjeżdżalnia, duża trampolina, piaskownica). Na miejscu czeka także sprzęt do badmintona, gry planszowe i książki.
            </p>
          </div>

          <div className="qa-block" id="okolica">
            <h3 className="qa-title">Gdzie znajdziesz Młynówkę?</h3>
            <p className="qa-text">
              Domek położony jest w <strong>Krościenku nad Dunajcem przy ul. Grotowskiego 14</strong> — zaledwie 10 minut spokojnego spaceru (600 m) dzieli Cię od Rynku, sklepów i lokalnych restauracji, a market spożywczy znajduje się jeszcze bliżej.
            </p>
            <p className="qa-text">
              To unikalny punkt na mapie: jesteś w centrum, a jednak w absolutnej enklawie ciszy. Wprost spod domku wychodzisz na <strong>żółty szlak turystyczny na Trzy Korony, Sokolicę i Zamkową Górę</strong>, a wzdłuż rzeki biegnie słynna trasa rowerowa do <strong>Szczawnicy (5 km)</strong> i na <strong>Czerwony Klasztor</strong> na Słowacji. Co więcej: licencjonowany przewoźnik na spływ Dunajcem <strong>odbiera naszych gości spod samej bramy domku</strong>.
            </p>
          </div>

          <div className="qa-block">
            <h3 className="qa-title">Jak spędzisz czas w Młynówce?</h3>
            <p className="qa-text">W Młynówce nie musisz robić nic — wystarczy, że będziesz. Możesz:</p>
            <ul className="qa-bullets">
              <li>Patrzeć przez okna na zielony ogród, rzekę lub szczyty Pienin.</li>
              <li>Rozkoszować się spokojnymi porankami ze świeżą kawą na tarasie.</li>
              <li>Spacerować po okolicy, zdobywać Trzy Korony lub czytać książkę przy szumie młynówki.</li>
              <li>Spędzać wieczory przy ognisku i grillu, z dala od hałasu i miejskiego pośpiechu.</li>
              <li>Zwiedzić zabytkowy Młyn w towarzystwie gospodarzy i posłuchać dawnych anegdot.</li>
              <li>Regenerować siły, by z nową energią wrócić do codziennych obowiązków.</li>
            </ul>
            <p className="qa-text-center">To miejsce, gdzie znajdziesz ciszę, harmonię i przestrzeń do bycia w pełni sobą.</p>
          </div>

          <div className="qa-block">
            <h3 className="qa-title">Co wyróżnia Młynówkę?</h3>
            <p className="qa-text">
              <strong>Średniowieczny rodowód i tradycja:</strong> kultywujemy dziedzictwo zapoczątkowane przez naszych przodków w pierwszej stacji PTTK w Krościenku nad Dunajcem. Część historii udokumentowano na obrazach wewnątrz domku.<br />
              <strong>Komfort dla alergików:</strong> wnętrza hipoalergiczne, zakaz palenia tytoniu i brak obecności zwierząt gwarantują krystaliczną czystość powietrza.<br />
              <strong>Ocena grupowa 10,0 / 10:</strong> idealna konfiguracja dla rodzin z dziećmi i grup do 6 osób.<br />
              <strong>Światłowód 295 Mb/s:</strong> idealne warunki na tzw. workation z widokiem na góry.
            </p>
          </div>

        </div>
      </section>

      {/* 5. KOMPLETNA RESPONSYWNA GALERIA ZE WSZYSTKIMI 42 ZDJĘCIAMI I LIGHTBOXEM */}
      <PhotoGallery />

      {/* 6. ZASADY POBYTU I FAQ */}
      <section className="ukoi-section bg-subtle" id="zasady-faq">
        <div className="container editorial-narrow-container">
          <div className="text-center">
            <div className="sage-accent-line"></div>
            <h2 className="section-title">Zasady pobytu oraz FAQ</h2>
            <p className="section-editorial-text">Jasne i przejrzyste zasady gwarantujące beztroski wypoczynek.</p>
          </div>

          <div className="rules-clean-table">
            <div className="rule-row">
              <span className="rule-title">Zameldowanie:</span>
              <span className="rule-desc">Od 16:00 do 20:00 (prosimy o uprzednią informację o planowanej godzinie przybycia).</span>
            </div>
            <div className="rule-row">
              <span className="rule-title">Wymeldowanie:</span>
              <span className="rule-desc">Od 07:00 do 10:00. Ekspresowe wymeldowanie.</span>
            </div>
            <div className="rule-row">
              <span className="rule-title">Dzieci i dostawki:</span>
              <span className="rule-desc">Dzieci w każdym wieku mile widziane. Bezpłatne łóżeczko dziecięce (do 1 roku) oraz dodatkowe łóżka na życzenie.</span>
            </div>
            <div className="rule-row">
              <span className="rule-title">Zwierzęta i wiek:</span>
              <span className="rule-desc">Brak ograniczeń wiekowych przy zameldowaniu. Ze względu na gości ze skłonnością do alergii zwierzęta nie są akceptowane.</span>
            </div>
            <div className="rule-row">
              <span className="rule-title">Kultura pobytu:</span>
              <span className="rule-desc">Całkowity zakaz palenia w domku. Cisza nocna obowiązuje w godzinach 23:00 – 08:00.</span>
            </div>
            <div className="rule-row">
              <span className="rule-title">Płatności:</span>
              <span className="rule-desc">Karty płatnicze (Visa, Mastercard). Gotówka nie jest akceptowana. Wystawiamy faktury.</span>
            </div>
          </div>

          <div className="clean-faq-list">
            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
              <button type="button" className="faq-trigger" onClick={() => toggleFaq(0)}>
                <span>Czy łącze Wi-Fi poradzi sobie z pracą zdalną i streamingiem?</span>
                <span className="faq-sign">+</span>
              </button>
              {activeFaq === 0 && (
                <div className="faq-answer" style={{ maxHeight: '200px' }}>
                  <p>Tak. Domek wyposażono w przetestowane łącze światłowodowe 295 Mb/s. Umożliwia ono równoległy streaming filmów 4K i stabilne wideorozmowy.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <button type="button" className="faq-trigger" onClick={() => toggleFaq(1)}>
                <span>Gdzie parkujemy samochód?</span>
                <span className="faq-sign">+</span>
              </button>
              {activeFaq === 1 && (
                <div className="faq-answer" style={{ maxHeight: '200px' }}>
                  <p>Na terenie posesji dostępny jest bezpłatny, bezpieczny prywatny parking dla gości domku bez konieczności rezerwacji.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <button type="button" className="faq-trigger" onClick={() => toggleFaq(2)}>
                <span>Jak zorganizować spływ Dunajcem?</span>
                <span className="faq-sign">+</span>
              </button>
              {activeFaq === 2 && (
                <div className="faq-answer" style={{ maxHeight: '200px' }}>
                  <p>Przewoźnik odbiera naszych gości bezpośrednio spod bramy domku, dzięki czemu nie musisz martwić się o logistykę ani parkowanie w Szczawnicy czy Sromowcach.</p>
                </div>
              )}
            </div>

            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <button type="button" className="faq-trigger" onClick={() => toggleFaq(3)}>
                <span>Czy w domku jest ciepło poza sezonem letnim?</span>
                <span className="faq-sign">+</span>
              </button>
              {activeFaq === 3 && (
                <div className="faq-answer" style={{ maxHeight: '200px' }}>
                  <p>Tak, domek jest w pełni całoroczny. Nowoczesne, wydajne ogrzewanie zapewnia idealny komfort termiczny także jesienią i zimą.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 7. OCENY I OPINIE */}
      <section className="ukoi-section" id="opinie">
        <div className="container">
          <div className="text-center">
            <button type="button" className="btn-sage" onClick={handleBookingTrigger} data-booking-trigger="true">
              ZAREZERWUJ POBYT
            </button>
          </div>

          <div className="reviews-split-layout">
            <div className="reviews-visual-col">
              <div className="reviews-img-wrapper" style={{ '--aspect': '1/1' } as React.CSSProperties}>
                <img src="/mlynowka/857438807.jpg" alt="Domek Młynówka" className="editorial-img" />
                <div className="score-stamp">
                  <span className="stamp-rating">9,8</span>
                  <span className="stamp-label">WYJĄTKOWY</span>
                  <span className="stamp-sub">43 autentyczne opinie</span>
                </div>
              </div>
            </div>

            <div className="reviews-text-col">
              <div className="sage-double-dash"><span></span><span></span></div>
              <h2 className="reviews-heading">Opinie o Młynówce</h2>
              <p className="reviews-intro-p">
                Młynówka została oceniona przez gości na <strong>9,8 / 10 (Wyjątkowy)</strong>, uzyskując maksymalną notę <strong>10,0 / 10 za personel i gościnność</strong> oraz <strong>10,0 / 10 jako lokalizacja dla grup</strong>.
              </p>

              <div className="scores-compact-list">
                <div className="score-line"><span>Personel i pomoc gospodarzy:</span> <strong>10,0 / 10</strong></div>
                <div className="score-line"><span>Lokalizacja i cisza:</span> <strong>9,9 / 10</strong></div>
                <div className="score-line"><span>Czystość i stan obiektu:</span> <strong>9,9 / 10</strong></div>
                <div className="score-line"><span>Stosunek jakości do ceny:</span> <strong>9,8 / 10</strong></div>
                <div className="score-line"><span>Udogodnienia i wyposażenie:</span> <strong>9,7 / 10</strong></div>
                <div className="score-line"><span>Komfort snu:</span> <strong>9,6 / 10</strong></div>
              </div>

              <div className="reviews-cards-stack">
                <blockquote className="guest-review-item">
                  <p className="review-quote">
                    „Trafiliśmy w wyjątkowe miejsce. Piękny domek położony w centrum, a jednak na uboczu. Po całym roku pracy szczególnie cenimy sobie prywatność, szukamy miejsc, w których możemy zapomnieć o zgiełku i pracy. Młynówka spełniła wszystkie nasze oczekiwania.”
                  </p>
                  <cite className="review-author">— Anna (Polska)</cite>
                </blockquote>

                <blockquote className="guest-review-item">
                  <p className="review-quote">
                    „Bardzo przyjemna lokalizacja — blisko do centrum Krościenka oraz sklepów. Duży ogródek z bardzo fajnym miejscem na ognisko i grilla. Wygodna łazienka.”
                  </p>
                  <cite className="review-author">— Jolanta (Polska)</cite>
                </blockquote>

                <blockquote className="guest-review-item">
                  <p className="review-quote">
                    „Piękne miejsce, bardzo mili i pomocni właściciele. W domku duża przestrzeń, wszystkie potrzebne sprzęty, a poza tym grill i ognisko. Wspaniały rodzinny pobyt. Szczerze polecamy.”
                  </p>
                  <cite className="review-author">— Łucja (Polska)</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BANER SZAŁWIOWY */}
      <section className="sage-banner-section" id="kontakt">
        <div className="container sage-banner-container">
          <div className="banner-text-col">
            <div className="banner-dash"></div>
            <h3 className="banner-title">Zapytaj o wolny termin w Młynówce</h3>
            <p className="banner-desc">
              Baza wypadowa w Krościenku nad Dunajcem. Ogród, stary młyn i górski spokój. Skontaktuj się bezpośrednio z właścicielami domku.
            </p>
          </div>
          <div className="banner-actions-col">
            <a href="tel:+48791040091" className="btn-banner-phone">+48 791 040 091</a>
            <a 
              href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-banner-whatsapp"
            >
              NAPISZ NA WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* 9. KONTENER REZERWACJI ONLINE Z WIDŻETEM 1:1 */}
      <section className="booking-system-wrapper" id="rezerwacja">
        <div className="container text-center">
          <div className="sage-accent-line"></div>
          <h2 className="section-title">Rezerwacja online bez pośredników</h2>
          <p className="section-editorial-text">Gwarancja najniższej ceny bezpośrednio u gospodarzy Młynówki.</p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
            <BookingBar onOpenBooking={handleBookingTrigger} />
          </div>

          <p className="booking-sub-note">Obsługa kart płatniczych Visa / Mastercard · Natychmiastowe potwierdzenie</p>
        </div>
      </section>

    </div>
  );
};
