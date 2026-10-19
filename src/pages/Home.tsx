import React, { useState } from 'react';
import { BookingBar } from '../components/BookingBar';
import { PhotoGallery } from '../components/PhotoGallery';
import { HeroSlider } from '../components/HeroSlider';
import { BotanicalDivider } from '../components/BotanicalDivider';
import { Language, translations } from '../translations';

interface HomeProps {
  lang: Language;
  onOpenBooking?: (data?: { checkIn?: string; checkOut?: string; guests?: string }) => void;
}

export const Home: React.FC<HomeProps> = ({ lang, onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const t = translations[lang];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleBookingTrigger = (bookingData?: { checkIn?: string; checkOut?: string; guests?: string }) => {
    if (onOpenBooking) {
      onOpenBooking(bookingData);
    } else {
      window.dispatchEvent(new CustomEvent('edinburgh:openBooking', { detail: bookingData }));
    }
  };

  const whatsappMessage = lang === 'pl'
    ? 'Dzień dobry, piszę ze strony The Edinburgh Garden House z zapytaniem o wolny termin.'
    : lang === 'de'
    ? 'Hallo, ich kontaktiere Sie über die Website The Edinburgh Garden House bezüglich einer Buchung.'
    : lang === 'fr'
    ? 'Bonjour, je vous contacte depuis le site The Edinburgh Garden House pour une demande de réservation.'
    : 'Hello Jacek, I am inquiring about booking availability for The Edinburgh Garden House.';

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="ukoi-hero" id="hero">
        
        {/* HERO BANNER SLIDESHOW (CHANGING PHOTOS WITH CROSSFADE) */}
        <div className="hero-banner-wrapper">
          <div className="container hero-banner-container">
            <HeroSlider lang={lang} />
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="container hero-center-box">
          
          <BotanicalDivider />

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: 'rgba(235, 242, 237, 0.95)', 
            padding: '6px 16px', 
            borderRadius: '20px', 
            color: 'var(--ukoi-sage, #73947D)', 
            fontSize: '0.82rem', 
            fontWeight: 700, 
            letterSpacing: '0.05em',
            marginBottom: '18px' 
          }}>
            <span style={{ fontSize: '0.9rem' }}>🌿</span>
            <span>{t.hero.badge}</span>
            <span style={{ fontSize: '0.9rem' }}>🌿</span>
          </div>

          <h1 className="hero-heading">
            {t.hero.title}
          </h1>

          <p className="hero-lead">
            {t.hero.lead}
          </p>

          <nav className="hero-pipe-menu" aria-label="Section shortcuts">
            <a href="#about">{t.nav.about}</a>
            <span className="pipe">|</span>
            <a href="#spaces">{t.nav.spaces}</a>
            <span className="pipe">|</span>
            <a href="#amenities">{t.nav.amenities}</a>
            <span className="pipe">|</span>
            <a href="#gallery">{t.nav.gallery}</a>
            <span className="pipe">|</span>
            <a href="#location">{t.nav.location}</a>
            <span className="pipe">|</span>
            <a href="#snowsports">{t.nav.snowsports}</a>
            <span className="pipe">|</span>
            <a href="#reviews">{t.nav.reviews}</a>
            <span className="pipe">|</span>
            <a href="#rules-faq">{t.nav.faq}</a>
            <span className="pipe">|</span>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <p className="hero-motto">
            {t.hero.motto}
          </p>

          {/* INTERACTIVE BOOKING BAR */}
          <BookingBar lang={lang} onOpenBooking={handleBookingTrigger} />

          <div className="hero-rating-subtle">
            <span className="rating-val">4.94 ★</span>
            <span className="rating-desc">{t.hero.ratingSnippet}</span>
          </div>

        </div>
      </section>

      {/* 2. ABOUT & 4 EDITORIAL PHOTO CARDS */}
      <section className="ukoi-section text-center" id="about">
        <div className="container">
          
          <BotanicalDivider />
          <div className="center-buttons-row">
            <button 
              type="button" 
              className="btn-sage" 
              onClick={() => handleBookingTrigger()}
            >
              {t.nav.bookNow}
            </button>
          </div>

          <h2 className="section-title">
            {t.highlights.title}
          </h2>
          
          <div className="section-subtitle-link">
            <a href="#location">{t.highlights.subtitle}</a>
          </div>

          <p className="section-editorial-text">
            {t.spacesSection.lead}
          </p>

          <div className="four-photos-grid">
            {/* Card 1: Living Room */}
            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img 
                  src="/zdjecia/living_room_hd.jpg" 
                  alt={t.highlights.cards[0].title} 
                  className="editorial-img" 
                />
                <div className="photo-label-tag">{t.highlights.cards[0].tag}</div>
              </div>
              <p className="photo-card-caption">{t.highlights.cards[0].desc}</p>
            </div>

            {/* Card 2: Driveway */}
            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img 
                  src="/zdjecia/driveway_hd.jpg" 
                  alt={t.highlights.cards[1].title} 
                  className="editorial-img" 
                />
                <div className="photo-label-tag">{t.highlights.cards[1].tag}</div>
              </div>
              <p className="photo-card-caption">{t.highlights.cards[1].desc}</p>
            </div>

            {/* Card 3: Garden */}
            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img 
                  src="/zdjecia/garden_patio_hd.jpg" 
                  alt={t.highlights.cards[2].title} 
                  className="editorial-img" 
                />
                <div className="photo-label-tag">🌸 {t.highlights.cards[2].tag}</div>
              </div>
              <p className="photo-card-caption">{t.highlights.cards[2].desc}</p>
            </div>

            {/* Card 4: King Bedroom (Master Bedroom in HD) */}
            <div className="photo-card-vert">
              <div className="photo-wrapper" style={{ '--aspect': '3/4' } as React.CSSProperties}>
                <img 
                  src="/zdjecia/bedroom_pink_master_hd.jpg" 
                  alt={t.highlights.cards[3].title} 
                  className="editorial-img" 
                />
                <div className="photo-label-tag">{t.highlights.cards[3].tag}</div>
              </div>
              <p className="photo-card-caption">{t.highlights.cards[3].desc}</p>
            </div>
          </div>

          <div className="editorial-quote-block">
            <div className="quote-botanical-badge">
              <span>🌿</span>
              <span>Scottish Botanical Sanctuary</span>
              <span>🌿</span>
            </div>
            <p className="quote-line-lead">{t.spacesSection.quoteLead}</p>
            <p className="quote-line">{t.spacesSection.quoteLine1}</p>
            <p className="quote-line">{t.spacesSection.quoteLine2}</p>
            <p className="quote-line">{t.spacesSection.quoteLine3}</p>
            <p className="quote-line-accent">{t.spacesSection.quoteAccent}</p>
          </div>

        </div>
      </section>

      {/* 3. LAYOUT & SPACES */}
      <section className="ukoi-section bg-subtle botanical-watermark-wrapper" id="spaces">
        {/* Subtle decorative leaf watermarks */}
        <svg className="botanical-watermark top-left" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" />
          <path d="M50 15 C55 35 75 45 85 50 C65 55 55 75 50 85 C45 65 25 55 15 50 C35 45 45 25 50 15 Z" opacity="0.6"/>
        </svg>
        <svg className="botanical-watermark bottom-right" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" />
          <path d="M50 15 C55 35 75 45 85 50 C65 55 55 75 50 85 C45 65 25 55 15 50 C35 45 45 25 50 15 Z" opacity="0.6"/>
        </svg>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="gallery-section-intro text-center">
            <BotanicalDivider />
            <h2 className="section-title">{t.spacesSection.title}</h2>
            <p className="section-editorial-text">{t.spacesSection.subtitle}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '36px'
          }}>
            {t.spacesSection.spaces.map((sp, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '28px 24px',
                  borderRadius: '6px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  border: '1px solid var(--ukoi-border, #E0E2E4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--ukoi-sage-light, #EBF2ED)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--ukoi-sage, #73947D)',
                    fontWeight: 700
                  }}>
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ukoi-text, #1F1F1D)' }}>
                    {sp.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--ukoi-text-muted, #64645E)', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  {sp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COMPLETE PHOTO GALLERY WITH LIGHTBOX */}
      <PhotoGallery lang={lang} />

      {/* 5. AMENITIES MATRIX */}
      <section className="ukoi-editorial-qa" id="amenities">
        <div className="container editorial-narrow-container">
          
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <BotanicalDivider />
            <h2 className="section-title">{t.amenitiesSection.title}</h2>
            <p className="section-editorial-text">{t.amenitiesSection.subtitle}</p>
          </div>

          {t.amenitiesSection.groups.map((group, gIdx) => (
            <div className="qa-block" key={gIdx} style={{ marginBottom: '32px' }}>
              <h3 className="qa-title" style={{ color: 'var(--ukoi-sage, #73947D)' }}>
                {group.category}
              </h3>
              <ul className="qa-bullets" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                {group.items.map((item, iIdx) => (
                  <li key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--ukoi-sage, #73947D)', fontWeight: 700 }}>✓</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{
            padding: '16px 20px',
            backgroundColor: '#FAFAF8',
            border: '1px dashed var(--ukoi-border, #E0E2E4)',
            borderRadius: '4px',
            textAlign: 'center',
            fontSize: '0.88rem',
            color: 'var(--ukoi-text-muted, #64645E)'
          }}>
            {t.amenitiesSection.notIncludedTitle}
          </div>

        </div>
      </section>

      {/* 6. LOCATION, NEIGHBORHOOD & DIRECT BUSES */}
      <section className="ukoi-section bg-subtle" id="location">
        <div className="container">
          
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <BotanicalDivider />
            <h2 className="section-title">{t.locationSection.title}</h2>
            <p className="section-editorial-text">{t.locationSection.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '40px' }}>
            
            {/* Transit */}
            <div style={{ backgroundColor: '#fff', padding: '32px 28px', borderRadius: '6px', border: '1px solid #E0E2E4' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--ukoi-sage, #73947D)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🚌</span> {t.locationSection.transitTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {t.locationSection.transitItems.map((item, idx) => (
                  <div key={idx}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64645E' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood Shops */}
            <div style={{ backgroundColor: '#fff', padding: '32px 28px', borderRadius: '6px', border: '1px solid #E0E2E4' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--ukoi-sage, #73947D)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🛒</span> {t.locationSection.neighborhoodTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {t.locationSection.neighborhoodItems.map((item, idx) => (
                  <div key={idx}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64645E' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attractions */}
            <div style={{ backgroundColor: '#fff', padding: '32px 28px', borderRadius: '6px', border: '1px solid #E0E2E4' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--ukoi-sage, #73947D)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🏰</span> {t.locationSection.attractionsTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {t.locationSection.attractionsItems.map((item, idx) => (
                  <div key={idx}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64645E' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Map Image and Link */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            border: '1px solid #E0E2E4',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center'
          }}>
            <div style={{ padding: '32px' }}>
              <span style={{ 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                color: 'var(--ukoi-sage, #73947D)', 
                fontWeight: 700 
              }}>
                Gilmerton · Edinburgh EH17
              </span>
              <h3 style={{ fontSize: '1.4rem', margin: '10px 0 16px', fontWeight: 600 }}>
                Edinburgh, United Kingdom
              </h3>
              <p style={{ color: '#64645E', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Edinburgh Castle rises above volcanic crags, while the Royal Mile threads through historic streets, pubs, and festival-filled squares. Gilmerton provides a peaceful haven away from city noise while remaining effortlessly connected by direct bus.
              </p>
              <a 
                href="https://maps.google.com/?q=Gilmerton,+Edinburgh+EH17,+UK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-sage"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Google Maps →</span>
              </a>
            </div>
            <div style={{ height: '100%', minHeight: '260px' }}>
              <img 
                src="/edinburgh/map_gilmerton.jpg" 
                alt="Map of Gilmerton, Edinburgh EH17" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. NEARBY ADVENTURE: HILLEND SNOWSPORTS */}
      <section className="ukoi-section" id="snowsports">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 40px' }}>
            <BotanicalDivider />
            <span style={{ 
              backgroundColor: 'var(--ukoi-sage-light, #EBF2ED)', 
              color: 'var(--ukoi-sage, #73947D)', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '0.05em' 
            }}>
              {t.snowsportsSection.badge}
            </span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>{t.snowsportsSection.title}</h2>
            <p className="section-editorial-text">{t.snowsportsSection.subtitle}</p>
            <p style={{ color: '#64645E', fontSize: '0.94rem', marginTop: '10px' }}>{t.snowsportsSection.desc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {t.snowsportsSection.features.map((feat, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: '#FAFAF8', 
                  padding: '28px 24px', 
                  borderRadius: '6px', 
                  border: '1px solid #E0E2E4' 
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
                  {idx === 0 ? '🎢' : idx === 1 ? '⛷️' : '🛟'}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>
                  {feat.title}
                </h3>
                <p style={{ color: '#64645E', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '32px', 
            padding: '20px 24px', 
            borderRadius: '6px', 
            backgroundColor: 'var(--ukoi-sage-light, #EBF2ED)', 
            color: 'var(--ukoi-text, #1F1F1D)',
            textAlign: 'center',
            fontSize: '0.94rem',
            lineHeight: '1.6'
          }}>
            🍻 <strong>{t.snowsportsSection.chillout}</strong>
          </div>

        </div>
      </section>



      {/* 9. REVIEWS SECTION */}
      <section className="ukoi-section" id="reviews">
        <div className="container">
          <div className="text-center">
            <button 
              type="button" 
              className="btn-sage" 
              onClick={() => handleBookingTrigger()}
            >
              {t.nav.bookNow}
            </button>
          </div>

          <div className="reviews-split-layout">
            <div className="reviews-visual-col">
              <div className="reviews-img-wrapper" style={{ '--aspect': '1/1' } as React.CSSProperties}>
                <img 
                  src="/zdjecia/bedroom2_yellow_hd.jpg" 
                  alt="The Edinburgh Garden House - Guest Suite" 
                  className="editorial-img" 
                />
                <div className="score-stamp">
                  <span className="stamp-rating">{t.reviewsSection.ratingValue}</span>
                  <span className="stamp-label">EXCEPTIONAL</span>
                  <span className="stamp-sub">{t.reviewsSection.reviewsCountText}</span>
                </div>
              </div>
            </div>

            <div className="reviews-text-col">
              <div className="sage-double-dash"><span></span><span></span></div>
              <h2 className="reviews-heading">{t.reviewsSection.title}</h2>
              <p className="reviews-intro-p">
                {t.reviewsSection.subtitle}
              </p>

              <div className="scores-compact-list">
                {t.reviewsSection.categories.map((cat, idx) => (
                  <div className="score-line" key={idx}>
                    <span>{cat.label}:</span> <strong>{cat.score}</strong>
                  </div>
                ))}
              </div>

              <div className="reviews-cards-stack">
                {t.reviewsSection.reviewsList.map((rev, idx) => (
                  <blockquote className="guest-review-item" key={idx}>
                    <p className="review-quote">
                      „{rev.text}”
                    </p>
                    <cite className="review-author">— {rev.author} ({rev.meta})</cite>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. HOUSE RULES & FAQ */}
      <section className="ukoi-section bg-subtle" id="rules-faq">
        <div className="container editorial-narrow-container">
          <div className="text-center">
            <BotanicalDivider />
            <h2 className="section-title">{t.rulesFaqSection.title}</h2>
            <p className="section-editorial-text">{t.rulesFaqSection.subtitle}</p>
          </div>

          {/* Rules Table */}
          <div className="rules-clean-table">
            {t.rulesFaqSection.rules.map((rule, idx) => (
              <div className="rule-row" key={idx}>
                <span className="rule-title">{rule.title}</span>
                <span className="rule-desc">{rule.desc}</span>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="clean-faq-list" style={{ marginTop: '40px' }}>
            {t.rulesFaqSection.faqs.map((faq, idx) => (
              <div className={`faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx}>
                <button type="button" className="faq-trigger" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-sign">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. SAGE CONTACT BANNER */}
      <section className="sage-banner-section" id="contact">
        <div className="container sage-banner-container">
          <div className="banner-text-col">
            <div className="banner-dash"></div>
            <h3 className="banner-title">{t.contactBanner.title}</h3>
            <p className="banner-desc">
              {t.contactBanner.desc}
            </p>
          </div>
          <div className="banner-actions-col">
            <a href="tel:+447988065088" className="btn-banner-phone">
              {t.contactBanner.callBtn}
            </a>
            <a 
              href={`https://wa.me/447988065088?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-banner-whatsapp"
            >
              {t.contactBanner.whatsappBtn}
            </a>
          </div>
        </div>
      </section>

      {/* 12. ONLINE BOOKING WIDGET 1:1 */}
      <section className="booking-system-wrapper" id="booking">
        <div className="container text-center">
          <BotanicalDivider />
          <h2 className="section-title">{t.bookingBar.modalTitle}</h2>
          <p className="section-editorial-text">{t.bookingBar.modalSubtitle}</p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
            <BookingBar lang={lang} onOpenBooking={handleBookingTrigger} />
          </div>

          <p className="booking-sub-note">
            Direct host reservation · Instant confirmation · Free private parking on driveway
          </p>
        </div>
      </section>

    </div>
  );
};
