import React from 'react';
import { BotanicalDivider } from './BotanicalDivider';
import { Language, translations } from '../translations';
import { BrandLogo } from './BrandLogo';
import { inquiryMessage, smsHref, mailHref, HOST_PHONE_DISPLAY, HOST_EMAIL } from '../contact';
import { LineIcon } from './icons/LineIcon';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[lang].footer;
  const brand = translations[lang].brand;
  const nav = translations[lang].nav;
  const floating = translations[lang].floating;
  const msg = inquiryMessage(lang);

  return (
    <footer className="ukoi-footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="footer-brand-logo-wrap" style={{ marginBottom: '16px' }}>
              <BrandLogo variant="footer" />
            </div>
            <p className="footer-brand-desc">
              {t.brandDesc}
            </p>
            <div className="footer-lang-badge">
              {t.languagesSupported}
            </div>
            <div style={{ marginTop: '14px', fontSize: '0.84rem', color: '#94948C' }}>
              {t.checkInNote}
            </div>
          </div>

          {/* Column 2: Location */}
          <div className="footer-col">
            <h4 className="footer-col-header">{t.addressHeader}</h4>
            <address className="footer-addr">
              {t.addressText.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}<br />
                </React.Fragment>
              ))}
              <a 
                href="https://maps.google.com/?q=Gilmerton,+Edinburgh+EH17,+UK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-map-pin"
              >
                {t.mapsLinkText}
              </a>
            </address>
          </div>

          {/* Column 3: Contact (SMS & Email only, no phone calls) */}
          <div className="footer-col">
            <h4 className="footer-col-header">{t.contactHeader}</h4>
            <ul className="footer-links-list">
              <li>
                <strong>Host:</strong> Jacek (Superhost)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LineIcon name="sms" size={16} />
                <span>SMS:&nbsp;</span>
                <a href={smsHref(msg)}>{HOST_PHONE_DISPLAY}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LineIcon name="mail" size={16} />
                <span>E-mail:&nbsp;</span>
                <a href={mailHref(msg, 'The Edinburgh Garden House – inquiry')}>{HOST_EMAIL}</a>
              </li>
            </ul>
            <div style={{ 
              marginTop: '16px', 
              padding: '10px 14px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '4px', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.8rem',
              color: '#A0A09A',
              lineHeight: '1.45'
            }}>
              🌿 {floating.noCallsNote}
            </div>
          </div>

          {/* Column 4: Quick Navigation & Amenities */}
          <div className="footer-col">
            <h4 className="footer-col-header">{t.quickLinksHeader}</h4>
            <ul className="footer-links-list" style={{ lineHeight: '1.9' }}>
              <li><a href="#about">{nav.about}</a></li>
              <li><a href="#spaces">{nav.spaces}</a></li>
              <li><a href="#amenities">{nav.amenities}</a></li>
              <li><a href="#gallery">{nav.gallery}</a></li>
              <li><a href="#location">{nav.location}</a></li>
              <li><a href="#snowsports">{nav.snowsports}</a></li>
              <li><a href="#reviews">{nav.reviews}</a></li>
              <li><a href="#rules-faq">{nav.faq}</a></li>
              <li><a href="#contact">{nav.contact}</a></li>
            </ul>
          </div>

        </div>

        <div style={{ margin: '36px auto 28px', maxWidth: '300px' }}>
          <BotanicalDivider accentColor="rgba(115, 148, 125, 0.45)" />
        </div>

        <div className="footer-bottom-line">
          <p>© {currentYear} {brand.name}. {t.allRightsReserved}</p>
          <div className="footer-bottom-nav">
            <a href="#rules-faq">{nav.faq}</a>
            <span>·</span>
            <a href="#location">{nav.location}</a>
            <span>·</span>
            <a href="#gallery">{nav.gallery}</a>
            <span>·</span>
            <a href="#contact">{nav.contact}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
