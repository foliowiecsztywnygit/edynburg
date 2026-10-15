import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blog';

export const BlogList: React.FC = () => {
  const posts = getAllPosts();

  useEffect(() => {
    document.title = 'Blog & Przewodnik po Pieninach | Młynówka — Domek przy Młynie';
    window.scrollTo(0, 0);

    // Dynamiczny opis meta
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Dziennik i przewodnik Młynówki w Krościenku nad Dunajcem. Odkryj szlaki w Pieninach, porady turystyczne i historię zabytkowego młyna.');
  }, []);

  return (
    <div className="blog-list-page">
      
      {/* NAGŁÓWEK STRONY BLOGA */}
      <section className="blog-hero-section text-center">
        <div className="container">
          
          {/* Breadcrumbs */}
          <nav className="ukoi-breadcrumbs" aria-label="Ścieżka nawigacji">
            <Link to="/">Strona główna</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Blog</span>
          </nav>

          <div className="sage-accent-line"></div>
          
          <h1 className="section-title">
            Dziennik Młynówki — Przewodniki i Szlaki Pienin
          </h1>
          
          <p className="section-editorial-text">
            Autorskie artykuły, wskazówki dla wędrowców, opowieści o zabytkowym młynie i sekrety Krościenka nad Dunajcem. Zainspiruj się przed podróżą w Pieniny.
          </p>

        </div>
      </section>

      {/* SIATKA POSTÓW BLOGOWYCH */}
      <section className="blog-grid-section">
        <div className="container">
          
          {posts.length === 0 ? (
            <div className="blog-empty-state text-center">
              <p>Aktualnie przygotowujemy nowe artykuły. Odwiedź nas wkrótce!</p>
              <Link to="/" className="btn-sage" style={{ marginTop: '20px' }}>Wróć do strony głównej</Link>
            </div>
          ) : (
            <div className="ukoi-blog-grid">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.formattedDate}</span>
                    <span className="meta-dot">·</span>
                    <span className="blog-card-readtime">{post.readingTime} min czytania</span>
                  </div>

                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="blog-card-desc">
                    {post.description}
                  </p>

                  <div className="blog-card-footer">
                    <Link to={`/blog/${post.slug}`} className="blog-read-link">
                      <span>Czytaj artykuł</span>
                      <span className="link-arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* DOLNY BANER ZAPROSZENIA DO MŁYNÓWKI */}
      <section className="sage-banner-section" style={{ marginTop: '80px' }}>
        <div className="container sage-banner-container">
          <div className="banner-text-col">
            <div className="banner-dash"></div>
            <h3 className="banner-title">Odwiedź Młynówkę osobiście</h3>
            <p className="banner-desc">
              Zarezerwuj całoroczny drewniany domek 70 m² na wyłączność. Baza wypadowa na szlaki w Pieninach z ponad hektarem ogrodu i szumem potoku.
            </p>
          </div>
          <div className="banner-actions-col">
            <Link to="/#rezerwacja" className="btn-banner-phone" data-booking-trigger="true">
              SPRAWDŹ DOSTĘPNOŚĆ
            </Link>
            <a 
              href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20pytam%20o%20wolny%20termin%20w%20domku%20M%C5%82yn%C3%B3wka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-banner-whatsapp"
            >
              NAPISZ NA WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
