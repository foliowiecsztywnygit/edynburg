import React, { useState } from 'react';
import { Language, translations } from '../translations';
import { inquiryMessage, smsHref, mailHref, HOST_PHONE_DISPLAY, HOST_EMAIL } from '../contact';
import { LineIcon } from './icons/LineIcon';

interface FloatingContactProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ lang }) => {
  const [open, setOpen] = useState(false);
  const t = translations[lang].floating;
  const msg = inquiryMessage(lang);

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
          {/* SMS channel */}
          <a 
            href={smsHref(msg)}
            className="bubble-channel-link"
          >
            <div className="channel-icon-circle sms-circle">
              <LineIcon name="sms" size={18} />
            </div>
            <div className="channel-desc">
              <strong>{t.smsNow}</strong>
              <small>{HOST_PHONE_DISPLAY}</small>
            </div>
          </a>

          {/* Email channel */}
          <a 
            href={mailHref(msg, 'The Edinburgh Garden House – inquiry')} 
            className="bubble-channel-link"
          >
            <div className="channel-icon-circle mail-circle">
              <LineIcon name="mail" size={18} />
            </div>
            <div className="channel-desc">
              <strong>{t.emailNow}</strong>
              <small>{HOST_EMAIL}</small>
            </div>
          </a>

          {/* Work / No calls polite note */}
          <div className="bubble-notice-note">
            <span>🌿</span>
            <small>{t.noCallsNote}</small>
          </div>
        </div>
      </div>

      {/* Main Bubble Trigger Button */}
      <button 
        type="button" 
        className="bubble-trigger-button" 
        onClick={() => setOpen(!open)}
        aria-label="Direct contact with host by SMS or email" 
        aria-expanded={open}
      >
        <LineIcon name="sms" size={22} />
        <span className="bubble-pulse"></span>
      </button>
    </div>
  );
};
