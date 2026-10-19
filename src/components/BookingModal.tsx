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

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  propertyName = 'Młynówka — Domek przy Młynie',
  bookingData 
}) => {
  if (!isOpen) return null;

  const isItaly = propertyName.includes('Dolce') || propertyName.includes('Sardyn') || propertyName.includes('Włochy');

  const title = isItaly ? 'Il Dolce Tramonto — Dostępność i Rezerwacja' : 'Młynówka — Dostępność i Rezerwacja';
  const subtitle = isItaly 
    ? 'Trinità d\'Agultu e Vignola, Sardynia · Prywatny apartament z widokiem na zachód słońca'
    : 'Krościenko nad Dunajcem · Cały domek na wyłączność';

  const accentColor = isItaly ? '#C2633C' : '#73947D';

  const whatsappText = isItaly 
    ? `Dzień dobry, pytam o wolny termin w obiekcie Il Dolce Tramonto Apartment na Sardynii${bookingData?.checkIn ? ` (od ${bookingData.checkIn} do ${bookingData.checkOut}, ${bookingData.guests || 2} os.)` : ''}`
    : `Dzień dobry, pytam o wolny termin w domku Młynówka w Pieninach${bookingData?.checkIn ? ` (od ${bookingData.checkIn} do ${bookingData.checkOut}, ${bookingData.guests || 2} os.)` : ''}`;

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
          <div className="sage-accent-line" style={{ backgroundColor: accentColor }}></div>
          <h3 className="modal-title">{title}</h3>
          <p className="modal-sub">{subtitle}</p>
        </div>

        {bookingData?.checkIn && (
          <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '0.88rem', color: accentColor, fontWeight: 600 }}>
            Wybrany termin: {bookingData.checkIn} do {bookingData.checkOut} ({bookingData.guests || 2} os.)
          </div>
        )}

        <div className="modal-integration-info">
          <p><strong>Bezpośrednia rezerwacja bez prowizji:</strong> Skontaktuj się z nami bezpośrednio telefonicznie lub przez WhatsApp, aby potwierdzić dostępność w najlepszej cenie:</p>
        </div>

        <div className="modal-cta-buttons">
          <a 
            href="tel:+48791040091" 
            className="btn-sage"
            style={{ backgroundColor: accentColor, borderColor: accentColor }}
          >
            Zadzwoń: 791 040 091
          </a>
          <a 
            href={`https://wa.me/48791040091?text=${encodeURIComponent(whatsappText)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-sage"
            style={{ backgroundColor: accentColor, borderColor: accentColor }}
          >
            Napisz na WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
