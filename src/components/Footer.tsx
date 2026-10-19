import React from 'react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[lang].footer;
  const brand = translations[lang].brand;
  const nav = translations[lang].nav;

  const whatsappMessage = lang === 'pl'
    ? 'Dzień dobry, piszę ze strony The Edinburgh Garden House w sprawie rezerwacji.'
    : lang === 'de'
    ? 'Hallo, ich kontaktiere Sie über die Website The Edinburgh Garden House bezüglich einer Buchung.'
    : lang === 'fr'
    ? 'Bonjour, je vous contacte depuis le site The Edinburgh Garden House concernant une réservation.'
    : 'Hello Jacek, I am contacting you via The Edinburgh Garden House website regarding a booking.';

  return (
    <footer className="ukoi-footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="footer-brand-title">
              {brand.name}
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

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-header">{t.contactHeader}</h4>
            <ul className="footer-links-list">
              <li>
                <strong>Host:</strong> Jacek (Superhost)
              </li>
              <li>
                Phone: <a href="tel:+447988065088">+44 7988 065088</a>
              </li>
              <li>
                E-mail: <a href="mailto:jacek31-76@hotmail.com">jacek31-76@hotmail.com</a>
              </li>
              <li>
                WhatsApp:{' '}
                <a 
                  href={`https://wa.me/447988065088?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +44 7988 065088
                </a>
              </li>
              <li>
                SMS:{' '}
                <a href={`sms:+447988065088?body=${encodeURIComponent(whatsappMessage)}`}>
                  +44 7988 065088
                </a>
              </li>
            </ul>
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
