import React from 'react';
import { BotanicalDivider } from './BotanicalDivider';
import { Language, translations } from '../translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  bookingData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  lang,
  bookingData 
}) => {
  if (!isOpen) return null;

  const t = translations[lang].bookingBar;

  const whatsappMessage = lang === 'pl'
    ? `Dzień dobry, piszę ze strony internetowej The Edinburgh Garden House w sprawie rezerwacji${bookingData?.checkIn ? ` (termin: ${bookingData.checkIn} - ${bookingData.checkOut}, ${bookingData.guests})` : ''}. Proszę o informację o dostępności.`
    : lang === 'de'
    ? `Hallo, ich interessiere mich für eine Buchung im The Edinburgh Garden House${bookingData?.checkIn ? ` (${bookingData.checkIn} bis ${bookingData.checkOut}, ${bookingData.guests})` : ''}. Ist das Haus verfügbar?`
    : lang === 'fr'
    ? `Bonjour, je vous contacte concernant une réservation pour The Edinburgh Garden House${bookingData?.checkIn ? ` (du ${bookingData.checkIn} au ${bookingData.checkOut}, ${bookingData.guests})` : ''}. Le logement est-il disponible ?`
    : `Hello Jacek, I am inquiring about booking The Edinburgh Garden House${bookingData?.checkIn ? ` (dates: ${bookingData.checkIn} to ${bookingData.checkOut}, ${bookingData.guests})` : ''}. Is it available?`;

  return (
    <div 
      className="ukoi-booking-modal open" 
      aria-hidden="false" 
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog">
        <button 
          type="button" 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="modal-header-text">
          <BotanicalDivider />
          <h3 className="modal-title">{t.modalTitle}</h3>
          <p className="modal-sub">{t.modalSubtitle}</p>
        </div>

        {bookingData?.checkIn && (
          <div style={{ 
            textAlign: 'center', 
            margin: '12px 0 20px', 
            padding: '10px 16px',
            borderRadius: '4px',
            backgroundColor: 'var(--ukoi-sage-light, #EBF2ED)',
            fontSize: '0.92rem', 
            color: 'var(--ukoi-sage, #73947D)', 
            fontWeight: 600 
          }}>
            {t.selectedDates(bookingData.checkIn, bookingData.checkOut || '', bookingData.guests || '')}
          </div>
        )}

        <div className="modal-integration-info">
          <p>{t.directBookingNote}</p>
        </div>

        <div className="modal-cta-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/447988065088?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-sage"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>{t.whatsappHost}</span>
          </a>

          {/* Call Host */}
          <a 
            href="tel:+447988065088" 
            className="btn-sage"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>{t.callHost}</span>
          </a>

          {/* Email Host */}
          <a 
            href={`mailto:jacek31-76@hotmail.com?subject=${encodeURIComponent('Edinburgh Garden House Booking Inquiry')}&body=${encodeURIComponent(whatsappMessage)}`}
            className="btn-sage"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px',
              backgroundColor: '#5F7F68' 
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>{t.emailHost}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
