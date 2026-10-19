import React, { useState } from 'react';
import { Language, translations } from '../translations';

interface FloatingContactProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ lang }) => {
  const [open, setOpen] = useState(false);
  const t = translations[lang].floating;

  const whatsappMessage = lang === 'pl'
    ? 'Dzień dobry, pytam o dostępność domu The Edinburgh Garden House.'
    : lang === 'de'
    ? 'Hallo, ich frage nach der Verfügbarkeit von The Edinburgh Garden House.'
    : lang === 'fr'
    ? 'Bonjour, je souhaite connaître les disponibilités pour The Edinburgh Garden House.'
    : 'Hello Jacek, I am inquiring about availability for The Edinburgh Garden House.';

  return (
    <div className="ukoi-floating-contact" id="floatingContact">
      {/* Contact Bubble Menu */}
      <div className={`contact-bubble-menu ${open ? 'open' : ''}`} id="floatingMenu" aria-hidden={!open}>
        <div className="bubble-menu-top">
          <span className="bubble-status-dot"></span>
          <span className="bubble-status-text">{t.hostTitle}</span>
          <button 
            type="button" 
            className="bubble-close-btn" 
            onClick={() => setOpen(false)} 
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        
        <div className="bubble-menu-channels">
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/447988065088?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="bubble-channel-link"
          >
            <svg className="channel-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <div className="channel-desc">
              <strong>{t.whatsappNow}</strong>
              <small>{t.instantReply}</small>
            </div>
          </a>

          {/* Phone Call */}
          <a href="tel:+447988065088" className="bubble-channel-link">
            <svg className="channel-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div className="channel-desc">
              <strong>{t.callNow}</strong>
              <small>{t.directTalk}</small>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:jacek31-76@hotmail.com?subject=Inquiry%20The%20Edinburgh%20Garden%20House`} className="bubble-channel-link">
            <svg className="channel-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <div className="channel-desc">
              <strong>{t.emailNow}</strong>
              <small>jacek31-76@hotmail.com</small>
            </div>
          </a>
        </div>
      </div>

      {/* Main Bubble Trigger Button */}
      <button 
        type="button" 
        className="bubble-trigger-button" 
        onClick={() => setOpen(!open)}
        aria-label="Direct contact with host" 
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <span className="bubble-pulse"></span>
      </button>
    </div>
  );
};
