import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../lib/blog';

interface BlogPostProps {
  onOpenBooking?: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (post) {
      // Dynamiczny Title & Meta Description
      document.title = `${post.title} | Blog Młynówka Domek przy Młynie`;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', post.description || post.title);

      // Schema.org BlogPosting JSON-LD
      const scriptId = 'blog-posting-schema';
      let schemaScript = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = scriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }

      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Person',
          name: 'Właściciele obiektu Młynówka'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Młynówka — Domek przy Młynie',
          url: window.location.origin
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': window.location.href
        }
      };

      schemaScript.text = JSON.stringify(schemaData);

      return () => {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) existingScript.remove();
      };
    }
  }, [post]);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
        detail: { property: 'Młynówka Domek przy Młynie' }
      }));
    }
  };

  if (!post) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 className="section-title">Nie znaleziono artykułu</h1>
        <p className="section-editorial-text">Artykuł o podanym adresie nie istnieje lub został przeniesiony.</p>
        <Link to="/blog" className="btn-sage">Wróć do listy wpisów</Link>
      </div>
    );
  }

  return (
    <article className="blog-post-page">
      
      {/* NAGŁÓWEK WPISU */}
      <header className="post-header-section">
        <div className="container editorial-narrow-container">
          
          {/* Breadcrumbs */}
          <nav className="ukoi-breadcrumbs" aria-label="Ścieżka nawigacji">
            <Link to="/">Strona główna</Link>
            <span className="crumb-sep">/</span>
            <Link to="/blog">Blog</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{post.title}</span>
          </nav>

          <div className="sage-accent-line"></div>

          <h1 className="post-headline">
            {post.title}
          </h1>

          <div className="post-meta-bar">
            <span className="meta-author">Autor: <strong>Gospodarze Młynówki</strong></span>
            <span className="meta-dot">·</span>
            <time className="meta-date" dateTime={post.date}>{post.formattedDate}</time>
            <span className="meta-dot">·</span>
            <span className="meta-reading-time">{post.readingTime} min czytania</span>
          </div>

        </div>
      </header>

      {/* TREŚĆ MARKDOWN */}
      <div className="post-body-section">
        <div className="container editorial-narrow-container">
          
          <div className="ukoi-markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* PRZYCISK POWROTU */}
          <div className="post-back-nav">
            <Link to="/blog" className="post-back-link">
              ← Wróć do wszystkich artykułów
            </Link>
          </div>

        </div>
      </div>

      {/* SEKCJA KONWERSJI (CTA BANNER POD ARTYKUŁEM) */}
      <section className="post-conversion-banner">
        <div className="container editorial-narrow-container text-center">
          <div className="conversion-box">
            <div className="sage-accent-line"></div>
            <h3 className="conversion-title">
              Spędź niezapomniany czas w cieniu Pienin
            </h3>
            <p className="conversion-lead">
              Szukasz ciszy, szumu górskiego potoku i natury tuż za progiem? Cały wolnostojący drewniany domek 70 m² w Krościenku nad Dunajcem czeka na Ciebie i Twoich bliskich.
            </p>

            <div className="conversion-actions">
              <button 
                type="button" 
                className="btn-sage btn-large" 
                onClick={handleBookingClick}
                data-booking-trigger="true"
              >
                ZAREZERWUJ POBYT ONLINE
              </button>
              
              <div className="conversion-quick-links">
                <a href="tel:+48791040091" className="quick-contact-anchor">
                  Zadzwoń: +48 791 040 091
                </a>
                <span className="sep">·</span>
                <a 
                  href="https://wa.me/48791040091?text=Dzie%C5%84%20dobry%2C%20czytam%20Pa%C5%84stwa%20blog%20i%20chc%C4%99%20zapyta%C4%87%20o%20termin%20w%20M%C5%82yn%C3%B3wce" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="quick-contact-anchor"
                >
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
};
