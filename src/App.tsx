import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { ItalyHome } from './pages/ItalyHome';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';

// Komponent automatycznie przewijający na górę przy zmianie strony
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
  const location = useLocation();
  const isItaly = location.pathname.startsWith('/wlochy') || location.pathname.startsWith('/sardynia');
  const defaultProperty = isItaly 
    ? 'Il Dolce Tramonto Apartment — Sardynia' 
    : 'Młynówka — Domek przy Młynie';

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProperty, setBookingProperty] = useState(defaultProperty);

  useEffect(() => {
    setBookingProperty(defaultProperty);
  }, [defaultProperty]);

  useEffect(() => {
    // Globalny nasłuchiwacz zdarzeń otwierających modal rezerwacyjny
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{ property?: string }>;
      if (customEvent.detail?.property) {
        setBookingProperty(customEvent.detail.property);
      } else {
        setBookingProperty(defaultProperty);
      }
      setIsBookingOpen(true);
    };

    window.addEventListener('mlynowka:openBooking', handleOpenBooking);
    return () => {
      window.removeEventListener('mlynowka:openBooking', handleOpenBooking);
    };
  }, [defaultProperty]);

  return (
    <div className="app-container">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
          <Route path="/pieniny" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
          <Route path="/wlochy" element={<ItalyHome onOpenBooking={() => setIsBookingOpen(true)} />} />
          <Route path="/sardynia" element={<ItalyHome onOpenBooking={() => setIsBookingOpen(true)} />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost onOpenBooking={() => setIsBookingOpen(true)} />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact onOpenBooking={() => setIsBookingOpen(true)} />
      <StickyMobileBar onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        propertyName={bookingProperty} 
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
