import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
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

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProperty, setBookingProperty] = useState('Młynówka — Domek przy Młynie');

  useEffect(() => {
    // Globalny nasłuchiwacz zdarzeń otwierających modal rezerwacyjny
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{ property?: string }>;
      if (customEvent.detail?.property) {
        setBookingProperty(customEvent.detail.property);
      }
      setIsBookingOpen(true);
    };

    window.addEventListener('mlynowka:openBooking', handleOpenBooking);
    return () => {
      window.removeEventListener('mlynowka:openBooking', handleOpenBooking);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Header onOpenBooking={() => setIsBookingOpen(true)} />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
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
    </BrowserRouter>
  );
};

export default App;
