import React from 'react';
import { Language, translations } from '../translations';
import { inquiryMessage, smsHref, mailHref } from '../contact';
import { LineIcon } from './icons/LineIcon';

interface StickyMobileBarProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang];
  const msg = inquiryMessage(lang);

  const triggerBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('edinburgh:openBooking'));
    }
  };

  return (
    <aside className="ukoi-sticky-mobile-bar" aria-label="Mobile booking action bar">
      <button 
        type="button" 
        className="btn-sage btn-mobile-book" 
        onClick={triggerBooking}
      >
        {t.nav.bookNow}
      </button>

      {/* SMS directly */}
      <a 
        href={smsHref(msg)}
        className="btn-mobile-icon"
        aria-label="Send SMS text to host"
        title="Send SMS"
      >
        <LineIcon name="sms" size={19} />
      </a>

      {/* Email directly */}
      <a 
        href={mailHref(msg, 'The Edinburgh Garden House – inquiry')} 
        className="btn-mobile-icon" 
        aria-label="Email Host"
        title="Email Host"
      >
        <LineIcon name="mail" size={19} />
      </a>
    </aside>
  );
};
