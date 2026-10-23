import React, { useState, useEffect } from 'react';
import { Language, translations } from '../translations';
import { BrandLogo } from './BrandLogo';
import { inquiryMessage, smsHref, mailHref } from '../contact';
import { LineIcon } from './icons/LineIcon';

interface HeaderProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onSelectLang, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const t = translations[lang];
  const msg = inquiryMessage(lang);

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
            <span className="property-switcher-label">🌿 {t.brand.sub}</span>
          </div>

          <div className="top-languages">
            <span style={{ fontSize: '0.8rem', color: 'rgba(31,31,29,0.5)', marginRight: '6px' }}>
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
          <a href="#hero" className="ukoi-logo-wrap" aria-label={t.brand.name}>
            <BrandLogo variant="header" />
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                <a 
                  href={smsHref(msg)} 
                  className="btn-drawer-contact"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px 16px', background: 'var(--c-sage-tint, #EBF2ED)', color: 'var(--c-forest, #1F3A2B)', borderRadius: '4px', fontWeight: 600, fontSize: '0.86rem' }}
                >
                  <LineIcon name="sms" size={17} />
                  <span>SMS: +44 7988 065088</span>
                </a>
                <a 
                  href={mailHref(msg, 'The Edinburgh Garden House – inquiry')} 
                  className="btn-drawer-contact"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px 16px', background: 'var(--ukoi-bg-subtle, #FAFAF8)', color: 'var(--c-forest, #1F3A2B)', border: '1px solid var(--ukoi-border, #E0E2E4)', borderRadius: '4px', fontWeight: 600, fontSize: '0.86rem' }}
                >
                  <LineIcon name="mail" size={17} />
                  <span>Email: jacek31-76@hotmail.com</span>
                </a>
                <small style={{ color: 'var(--ukoi-text-muted, #64645E)', fontSize: '0.74rem', textAlign: 'center', marginTop: '2px' }}>
                  🌿 {t.floating.noCallsNote}
                </small>
              </div>
              <button 
                type="button" 
                className="btn-sage" 
                style={{ width: '100%' }}
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
