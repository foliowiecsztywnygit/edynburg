import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isItaly = location.pathname.startsWith('/wlochy') || location.pathname.startsWith('/sardynia');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zamknij drawer po zmianie ścieżki
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const triggerBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const propertyTitle = isItaly 
      ? 'Il Dolce Tramonto Apartment — Sardynia' 
      : 'Młynówka Domek przy Młynie';

    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
        detail: { property: propertyTitle }
      }));
    }
  };

  return (
    <>
      {/* TOP BAR: PRZEŁĄCZNIK OBIEKTÓW & JĘZYKI */}
      <div className="top-bar">
        <div className="container top-bar-container">
          
          {/* PRZEŁĄCZNIK OBIEKTÓW: PIENINY VS SARDYNIA */}
          <div className="property-switcher">
            <span className="property-switcher-label">Wybierz obiekt:</span>
            <Link 
              to="/" 
              className={`property-switch-btn ${!isItaly ? 'active' : ''}`}
              title="Młynówka Domek przy Młynie — Krościenko n. Dunajcem, Pieniny"
            >
              <span>🇵🇱</span>
              <span>Pieniny — Młynówka</span>
            </Link>
            <Link 
              to="/wlochy" 
              className={`property-switch-btn italy ${isItaly ? 'active' : ''}`}
              title="Il Dolce Tramonto Apartment — Trinità d'Agultu, Sardynia"
            >
              <span>🇮🇹</span>
              <span>Sardynia — Il Dolce Tramonto</span>
            </Link>
          </div>

          {/* JĘZYKI */}
          <div className="top-languages">
            <span className="lang-link active">Polski</span>
            <span className="lang-sep">|</span>
            <span className="lang-link">English</span>
            <span className="lang-sep">|</span>
            <span className="lang-link">Italiano</span>
            <span className="lang-sep">|</span>
            <span className="lang-link">Deutsch</span>
          </div>
        </div>
      </div>

      {/* GŁÓWNY MINIMALISTYCZNY NAGŁÓWEK */}
      <header className={`ukoi-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container ukoi-header-container">
          
          {/* LOGO UKOI STYLE */}
          {isItaly ? (
            <Link to="/wlochy" className="ukoi-logo" aria-label="Il Dolce Tramonto Apartment Sardynia">
              <span className="logo-main" style={{ color: '#C2633C' }}>IL DOLCE TRAMONTO</span>
              <span className="logo-sub">APARTMENT · TRINITÀ D'AGULTU · SARDYNIA</span>
            </Link>
          ) : (
            <Link to="/" className="ukoi-logo" aria-label="Młynówka Domek przy Młynie">
              <span className="logo-main">MŁYNÓWKA</span>
              <span className="logo-sub">DOMEK PRZY MŁYNIE · PIENINY</span>
            </Link>
          )}

          {/* PRAWA STRONA: PRZYCISK REZERWACJI I HAMBURGER */}
          <div className="header-right-tools">
            <button 
              type="button" 
              className={`btn-header-cta ${isItaly ? 'btn-italy' : ''}`} 
              onClick={triggerBooking}
              data-booking-trigger="true"
              style={isItaly ? { background: '#C2633C', borderColor: '#C2633C' } : {}}
            >
              ZAREZERWUJ POBYT
            </button>
            <button 
              type="button" 
              className="hamburger-btn" 
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Nawigacja strony" 
              aria-expanded={drawerOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>

        </div>

        {/* MOBILNY / ROZWIJANY PANEL MENU */}
        <div className={`ukoi-drawer ${drawerOpen ? 'open' : ''}`} id="mobileDrawer">
          <div className="drawer-inner">
            <nav className="drawer-nav">
              {isItaly ? (
                <>
                  <a href="#o-apartamencie" className="drawer-link" onClick={() => setDrawerOpen(false)}>O APARTAMENCIE</a>
                  <a href="#wnetrze-i-taras" className="drawer-link" onClick={() => setDrawerOpen(false)}>WNĘTRZE I TARAS</a>
                  <a href="#galeria" className="drawer-link" onClick={() => setDrawerOpen(false)}>GALERIA FOTOGRAFICZNA (54)</a>
                  <a href="#udogodnienia" className="drawer-link" onClick={() => setDrawerOpen(false)}>UDOGODNIENIA</a>
                  <a href="#plaze-i-okolica" className="drawer-link" onClick={() => setDrawerOpen(false)}>PLAŻE I OKOLICA</a>
                  <a href="#opinie" className="drawer-link" onClick={() => setDrawerOpen(false)}>OPINIE GOŚCI (8,5/10)</a>
                  <a href="#zasady-faq" className="drawer-link" onClick={() => setDrawerOpen(false)}>ZASADY I FAQ</a>
                  <div style={{ padding: '16px 0', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '8px' }}>
                    <Link to="/" className="drawer-link" style={{ color: '#73947D', fontWeight: 600 }}>
                      🇵🇱 PRZEŁĄCZ NA: MŁYNÓWKA (PIENINY) →
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <a href="#o-nas" className="drawer-link" onClick={() => setDrawerOpen(false)}>O MŁYNÓWCE</a>
                  <a href="#wnetrze-i-ogrod" className="drawer-link" onClick={() => setDrawerOpen(false)}>WNĘTRZE I OGRÓD</a>
                  <a href="#galeria" className="drawer-link" onClick={() => setDrawerOpen(false)}>GALERIA ZDJĘĆ</a>
                  <a href="#udogodnienia" className="drawer-link" onClick={() => setDrawerOpen(false)}>UDOGODNIENIA</a>
                  <a href="#okolica" className="drawer-link" onClick={() => setDrawerOpen(false)}>OKOLICA I SZLAKI</a>
                  <a href="#opinie" className="drawer-link" onClick={() => setDrawerOpen(false)}>OPINIE GOŚCI</a>
                  <a href="#zasady-faq" className="drawer-link" onClick={() => setDrawerOpen(false)}>ZASADY I FAQ</a>
                  <Link to="/blog" className="drawer-link" onClick={() => setDrawerOpen(false)}>BLOG & PRZEWODNIK</Link>
                  <div style={{ padding: '16px 0', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '8px' }}>
                    <Link to="/wlochy" className="drawer-link" style={{ color: '#C2633C', fontWeight: 600 }}>
                      🇮🇹 PRZEŁĄCZ NA: SARDYNIA (IL DOLCE TRAMONTO) →
                    </Link>
                  </div>
                </>
              )}
            </nav>
            <div className="drawer-footer">
              <button 
                type="button" 
                className={`btn-sage btn-block ${isItaly ? 'btn-italy' : ''}`} 
                onClick={(e) => { setDrawerOpen(false); triggerBooking(e); }}
                data-booking-trigger="true"
                style={isItaly ? { background: '#C2633C', borderColor: '#C2633C' } : {}}
              >
                SPRAWDŹ DOSTĘPNOŚĆ
              </button>
              <a href="tel:+48791040091" className="drawer-phone">Zadzwoń: +48 791 040 091</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
