import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  bookingData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingData }) => {
  if (!isOpen) return null;

  return (
    <div className="ukoi-booking-modal open" aria-hidden="false" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-dialog">
        <button 
          type="button" 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Zamknij okno"
        >
          ✕
        </button>

        <div className="modal-header-text">
          <div className="sage-accent-line"></div>
          <h3 className="modal-title">Młynówka — Dostępność i Rezerwacja</h3>
          <p className="modal-sub">Krościenko nad Dunajcem · Cały domek na wyłączność</p>
        </div>

        {bookingData?.checkIn && (
          <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '0.88rem', color: '#73947D', fontWeight: 600 }}>
            Wybrany termin: {bookingData.checkIn} do {bookingData.checkOut} ({bookingData.guests || 2} os.)
          </div>
        )}

        <div className="modal-integration-info">
          <p><strong>System rezerwacji online:</strong> Gotowy do podpięcia widgetu zewnętrznego z atrybutem <code>data-booking-trigger="true"</code>.</p>
          <p>Możesz także zarezerwować pobyt dzwoniąc lub pisząc bezpośrednio do właścicieli:</p>
        </div>

        <div className="modal-cta-buttons">
          <a href="tel:+48791040091" className="btn-sage">Zadzwoń: 791 040 091</a>
          <a 
            href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-sage"
          >
            Napisz na WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
