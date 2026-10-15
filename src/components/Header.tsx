import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

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
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
        detail: { property: 'Młynówka Domek przy Młynie' }
      }));
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      {/* TOP BAR: JĘZYKI */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-languages">
            <span className="lang-link active">Polski</span>
            <span className="lang-sep">|</span>
            <span className="lang-link">English</span>
            <span className="lang-sep">|</span>
            <span className="lang-link">Deutsch</span>
          </div>
        </div>
      </div>

      {/* GŁÓWNY MINIMALISTYCZNY NAGŁÓWEK */}
      <header className={`ukoi-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container ukoi-header-container">
          
          {/* LOGO UKOI STYLE */}
          <Link to="/" className="ukoi-logo" aria-label="Młynówka Domek przy Młynie">
            <span className="logo-main">M Ł Y N Ó W K A</span>
            <span className="logo-sub">DOMEK PRZY MŁYNIE · PIENINY</span>
          </Link>

          {/* PRAWA STRONA: PRZYCISK REZERWACJI I HAMBURGER */}
          <div className="header-right-tools">
            <button 
              type="button" 
              className="btn-header-cta" 
              onClick={triggerBooking}
              data-booking-trigger="true"
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
              {isHome ? (
                <>
                  <a href="#o-nas" className="drawer-link" onClick={() => setDrawerOpen(false)}>O MŁYNÓWCE</a>
                  <a href="#wnetrze-i-ogrod" className="drawer-link" onClick={() => setDrawerOpen(false)}>WNĘTRZE I OGRÓD</a>
                  <a href="#udogodnienia" className="drawer-link" onClick={() => setDrawerOpen(false)}>UDOGODNIENIA</a>
                  <a href="#okolica" className="drawer-link" onClick={() => setDrawerOpen(false)}>OKOLICA I SZLAKI</a>
                  <a href="#opinie" className="drawer-link" onClick={() => setDrawerOpen(false)}>OPINIE GOŚCI</a>
                  <a href="#zasady-faq" className="drawer-link" onClick={() => setDrawerOpen(false)}>ZASADY I FAQ</a>
                  <Link to="/blog" className="drawer-link" onClick={() => setDrawerOpen(false)}>BLOG & PRZEWODNIK</Link>
                  <a href="#kontakt" className="drawer-link" onClick={() => setDrawerOpen(false)}>KONTAKT</a>
                </>
              ) : (
                <>
                  <Link to="/" className="drawer-link">STRONA GŁÓWNA</Link>
                  <Link to="/#o-nas" className="drawer-link">O MŁYNÓWCE</Link>
                  <Link to="/#wnetrze-i-ogrod" className="drawer-link">WNĘTRZE I OGRÓD</Link>
                  <Link to="/#udogodnienia" className="drawer-link">UDOGODNIENIA</Link>
                  <Link to="/#okolica" className="drawer-link">OKOLICA I SZLAKI</Link>
                  <Link to="/blog" className="drawer-link">BLOG & PRZEWODNIK</Link>
                  <Link to="/#kontakt" className="drawer-link">KONTAKT</Link>
                </>
              )}
            </nav>
            <div className="drawer-footer">
              <button 
                type="button" 
                className="btn-sage btn-block" 
                onClick={(e) => { setDrawerOpen(false); triggerBooking(e); }}
                data-booking-trigger="true"
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
