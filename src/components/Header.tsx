import React, { useState, useEffect } from 'react';
import { Language, translations } from '../translations';

interface HeaderProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onSelectLang, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('edinburgh:openBooking'));
    }
  };

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#spaces', label: t.nav.spaces },
    { href: '#amenities', label: t.nav.amenities },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#location', label: t.nav.location },
    { href: '#snowsports', label: t.nav.snowsports },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#rules-faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <>
      {/* TOP BAR: LANGUAGE SELECTOR & CONTACT */}
      <div className="top-bar">
        <div className="container top-bar-container">
          
          <div className="property-switcher">
            <span className="property-switcher-label">📍 {t.brand.sub}</span>
          </div>

          <div className="top-languages">
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginRight: '6px' }}>
              {t.topBar.selectLanguage}
            </span>
            <button
              type="button"
              className={`lang-link ${lang === 'en' ? 'active' : ''}`}
              onClick={() => onSelectLang('en')}
            >
              🇬🇧 English
            </button>
            <span className="lang-sep">|</span>
            <button
              type="button"
              className={`lang-link ${lang === 'pl' ? 'active' : ''}`}
              onClick={() => onSelectLang('pl')}
            >
              🇵🇱 Polski
            </button>
            <span className="lang-sep">|</span>
            <button
              type="button"
              className={`lang-link ${lang === 'de' ? 'active' : ''}`}
              onClick={() => onSelectLang('de')}
            >
              🇩🇪 Deutsch
            </button>
            <span className="lang-sep">|</span>
            <button
              type="button"
              className={`lang-link ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => onSelectLang('fr')}
            >
              🇫🇷 Français
            </button>
          </div>

        </div>
      </div>

      {/* MAIN HEADER */}
      <header className={`ukoi-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container ukoi-header-container">
          
          {/* LOGO */}
          <a href="#hero" className="ukoi-logo" aria-label={t.brand.name}>
            <span className="logo-main">{t.brand.name}</span>
            <span className="logo-sub">{t.brand.sub}</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="desktop-header-nav" style={{ display: 'none' }} aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT TOOLS */}
          <div className="header-right-tools">
            <button 
              type="button" 
              className="btn-header-cta" 
              onClick={triggerBooking}
            >
              {t.nav.bookNow}
            </button>
            <button 
              type="button" 
              className="hamburger-btn" 
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Navigation Menu" 
              aria-expanded={drawerOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>

        </div>

        {/* MOBILE / EXPANDED DRAWER */}
        <div className={`ukoi-drawer ${drawerOpen ? 'open' : ''}`} id="mobileDrawer">
          <div className="drawer-inner">
            <div className="drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.9rem', color: 'var(--ukoi-sage, #73947D)' }}>
                {t.brand.name}
              </span>
              <button 
                type="button" 
                onClick={() => setDrawerOpen(false)}
                style={{ fontSize: '1.4rem', color: '#1F1F1D', padding: '4px 8px' }}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Language Switcher in Drawer */}
            <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--ukoi-border, #E0E2E4)' }}>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94948C', marginBottom: '8px' }}>
                {t.topBar.selectLanguage}
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '3px',
                    border: '1px solid',
                    borderColor: lang === 'en' ? 'var(--ukoi-sage, #73947D)' : '#E0E2E4',
                    background: lang === 'en' ? 'var(--ukoi-sage, #73947D)' : '#fff',
                    color: lang === 'en' ? '#fff' : '#1F1F1D',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}
                  onClick={() => { onSelectLang('en'); setDrawerOpen(false); }}
                >
                  🇬🇧 English
                </button>
                <button
                  type="button"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '3px',
                    border: '1px solid',
                    borderColor: lang === 'pl' ? 'var(--ukoi-sage, #73947D)' : '#E0E2E4',
                    background: lang === 'pl' ? 'var(--ukoi-sage, #73947D)' : '#fff',
                    color: lang === 'pl' ? '#fff' : '#1F1F1D',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}
                  onClick={() => { onSelectLang('pl'); setDrawerOpen(false); }}
                >
                  🇵🇱 Polski
                </button>
                <button
                  type="button"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '3px',
                    border: '1px solid',
                    borderColor: lang === 'de' ? 'var(--ukoi-sage, #73947D)' : '#E0E2E4',
                    background: lang === 'de' ? 'var(--ukoi-sage, #73947D)' : '#fff',
                    color: lang === 'de' ? '#fff' : '#1F1F1D',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}
                  onClick={() => { onSelectLang('de'); setDrawerOpen(false); }}
                >
                  🇩🇪 Deutsch
                </button>
                <button
                  type="button"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '3px',
                    border: '1px solid',
                    borderColor: lang === 'fr' ? 'var(--ukoi-sage, #73947D)' : '#E0E2E4',
                    background: lang === 'fr' ? 'var(--ukoi-sage, #73947D)' : '#fff',
                    color: lang === 'fr' ? '#fff' : '#1F1F1D',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}
                  onClick={() => { onSelectLang('fr'); setDrawerOpen(false); }}
                >
                  🇫🇷 Français
                </button>
              </div>
            </div>

            <nav className="drawer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="drawer-link"
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="drawer-footer-tools" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--ukoi-border, #E0E2E4)' }}>
              <a href="tel:+447988065088" className="drawer-phone">
                📞 +44 7988 065088
              </a>
              <button 
                type="button" 
                className="btn-sage" 
                style={{ width: '100%', marginTop: '12px' }}
                onClick={(e) => {
                  setDrawerOpen(false);
                  triggerBooking(e);
                }}
              >
                {t.nav.bookNow}
              </button>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};
