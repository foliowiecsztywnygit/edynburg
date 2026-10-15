import React from 'react';

interface StickyMobileBarProps {
  onOpenBooking?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
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

  return (
    <aside className="ukoi-sticky-mobile-bar" aria-label="Pasek rezerwacji mobilnej">
      <button 
        type="button" 
        className="btn-sage btn-mobile-book" 
        onClick={triggerBooking}
        data-booking-trigger="true"
      >
        ZAREZERWUJ ONLINE
      </button>
      <a 
        href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-mobile-icon"
        aria-label="Napisz na WhatsApp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </a>
      <a href="tel:+48791040091" className="btn-mobile-icon" aria-label="Zadzwoń do nas">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </aside>
  );
};
