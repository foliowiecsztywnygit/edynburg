import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ukoi-footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Kolumna 1: Brand */}
          <div className="footer-col">
            <div className="footer-brand-title">M Ł Y N Ó W K A</div>
            <p className="footer-brand-desc">
              Nowy drewniany domek w stylu alpejskim (70 m²) na wyłączność. Baza wypadowa w Krościenku nad Dunajcem. Ogród, stary młyn i relaks w Pieninach.
            </p>
            <div className="footer-lang-badge">
              Obsługa: Polski · English · Deutsch
            </div>
          </div>

          {/* Kolumna 2: Lokalizacja */}
          <div className="footer-col">
            <h4 className="footer-col-header">ADRES I LOKALIZACJA</h4>
            <address className="footer-addr">
              ul. Grotowskiego 14<br />
              34-450 Krościenko nad Dunajcem<br />
              woj. małopolskie, Polska<br />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=ul.+Grotowskiego+14,+34-450+Kro%C5%9Bcienko+nad+Dunajcem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-map-pin"
              >
                Nawiguj w Google Maps →
              </a>
            </address>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div className="footer-col">
            <h4 className="footer-col-header">BEZPOŚREDNI KONTAKT</h4>
            <ul className="footer-links-list">
              <li>Telefon: <a href="tel:+48791040091">+48 791 040 091</a></li>
              <li>E-mail: <a href="mailto:dominika_f16_88@tlen.pl">dominika_f16_88@tlen.pl</a></li>
              <li>SMS: <a href="sms:+48791040091?body=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka">+48 791 040 091</a></li>
              <li>WhatsApp: <a href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" target="_blank" rel="noopener noreferrer">+48 791 040 091</a></li>
            </ul>
          </div>

          {/* Kolumna 4: Social media z autentycznymi linkami */}
          <div className="footer-col">
            <h4 className="footer-col-header">SOCIAL MEDIA & BLOG</h4>
            <p className="footer-social-text">Zobacz zdjęcia i relacje na naszych oficjalnych profilach oraz czytaj blog:</p>
            <div className="footer-social-buttons">
              <a 
                href="https://www.instagram.com/mlynowka_domek.przy.mlynie?stkn=MWpnMDliZHRqdDdtbw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Instagram: @mlynowka_domek.przy.mlynie"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1FUcq7B49V/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Facebook: Młynówka Domek przy Młynie"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>Facebook</span>
              </a>
              <Link to="/blog" className="footer-social-link" title="Przewodnik i artykuły SEO">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                <span>Blog & Przewodnik</span>
              </Link>
            </div>
          </div>

        </div>

        <div className="footer-bottom-line">
          <p>© {currentYear} Młynówka Domek przy Młynie. Wszelkie prawa zastrzeżone.</p>
          <div className="footer-bottom-nav">
            <Link to="/#zasady-faq">Regulamin pobytu</Link>
            <span>·</span>
            <Link to="/#zasady-faq">FAQ</Link>
            <span>·</span>
            <Link to="/blog">Blog</Link>
            <span>·</span>
            <a href="#rezerwacja" data-booking-trigger="true">Rezerwacja online</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
