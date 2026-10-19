import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { Language, translations } from './translations';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

const AppContent: React.FC = () => {
  // Default language is English ('en') as required!
  const [lang, setLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  } | undefined>(undefined);

  // Update document title and description when language changes
  useEffect(() => {
    const t = translations[lang];
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{
        checkIn?: string;
        checkOut?: string;
        guests?: string;
      }>;
      if (customEvent.detail) {
        setBookingData(customEvent.detail);
      }
      setIsBookingOpen(true);
    };

    window.addEventListener('edinburgh:openBooking', handleOpenBooking);
    return () => {
      window.removeEventListener('edinburgh:openBooking', handleOpenBooking);
    };
  }, []);

  const openBookingModal = (data?: { checkIn?: string; checkOut?: string; guests?: string }) => {
    if (data) {
      setBookingData(data);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="app-container">
      <Header 
        lang={lang} 
        onSelectLang={setLang} 
        onOpenBooking={() => openBookingModal()} 
      />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home lang={lang} onOpenBooking={openBookingModal} />} />
          {/* Fallback all paths to single landing page */}
          <Route path="*" element={<Home lang={lang} onOpenBooking={openBookingModal} />} />
        </Routes>
      </main>

      <Footer lang={lang} />
      <FloatingContact lang={lang} onOpenBooking={() => openBookingModal()} />
      <StickyMobileBar lang={lang} onOpenBooking={() => openBookingModal()} />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        lang={lang}
        bookingData={bookingData} 
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
