import React from 'react';
import { BotanicalDivider } from './BotanicalDivider';
import { Language, translations } from '../translations';
import { inquiryMessage, smsHref, mailHref } from '../contact';
import { LineIcon } from './icons/LineIcon';

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
  const msg = inquiryMessage(lang, bookingData);

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
            backgroundColor: 'var(--c-sage-tint, #EBF2ED)',
            fontSize: '0.92rem', 
            color: 'var(--c-forest, #1F3A2B)', 
            fontWeight: 600 
          }}>
            {t.selectedDates(bookingData.checkIn, bookingData.checkOut || '', bookingData.guests || '')}
          </div>
        )}

        <div className="modal-integration-info">
          <p>{t.directBookingNote}</p>
        </div>

        <div className="modal-cta-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          {/* SMS Button */}
          <a 
            href={smsHref(msg)}
            className="btn-sage btn-contact-sms"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
          >
            <LineIcon name="sms" size={20} />
            <span>{t.smsHost}</span>
          </a>

          {/* Email Button */}
          <a 
            href={mailHref(msg, 'The Edinburgh Garden House Booking Inquiry')}
            className="btn-sage btn-contact-mail"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px',
              backgroundColor: 'var(--c-forest, #1F3A2B)' 
            }}
          >
            <LineIcon name="mail" size={20} />
            <span>{t.emailHost}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
