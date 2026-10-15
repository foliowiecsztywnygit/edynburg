import React, { useState } from 'react';

interface FloatingContactProps {
  onOpenBooking?: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ukoi-floating-contact" id="floatingContact">
      {/* Rozwijane menu kontaktowe */}
      <div className={`contact-bubble-menu ${open ? 'open' : ''}`} id="floatingMenu" aria-hidden={!open}>
        <div className="bubble-menu-top">
          <span className="bubble-status-dot"></span>
          <span className="bubble-status-text">Kontakt z gospodarzami</span>
          <button 
            type="button" 
            className="bubble-close-btn" 
            onClick={() => setOpen(false)} 
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>
        
        <div className="bubble-menu-channels">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bubble-channel-link"
          >
            <svg className="channel-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <div className="channel-desc">
              <strong>Napisz na WhatsApp</strong>
              <small>Błyskawiczna odpowiedź</small>
            </div>
          </a>

          {/* SMS */}
          <a 
            href="sms:+48791040091?body=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" 
            className="bubble-channel-link"
          >
            <svg className="channel-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <div className="channel-desc">
              <strong>Wyślij SMS</strong>
              <small>+48 791 040 091</small>
            </div>
          </a>

          {/* Telefon */}
          <a href="tel:+48791040091" className="bubble-channel-link">
            <svg className="channel-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div className="channel-desc">
              <strong>Zadzwoń: 791 040 091</strong>
              <small>Bezpośrednia rozmowa</small>
            </div>
          </a>
        </div>
      </div>

      {/* Główny przycisk dymka */}
      <button 
        type="button" 
        className="bubble-trigger-button" 
        onClick={() => setOpen(!open)}
        aria-label="Szybki kontakt z Młynówką" 
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <span className="bubble-pulse"></span>
      </button>
    </div>
  );
};
