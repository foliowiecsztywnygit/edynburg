import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../translations';

// External booking redirect URL - paste your reservation system URL here if you have one
export const BOOKING_SYSTEM_URL = '';

interface BookingBarProps {
  lang?: Language;
  bookingUrl?: string;
  onOpenBooking?: (data?: { checkIn?: string; checkOut?: string; guests?: string }) => void;
}

interface DateItem {
  year: number;
  month: number; // 0-indexed
  day: number;
}

const DAYS_UPPER: Record<Language, string[]> = {
  en: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
  pl: ['NIEDZIELA', 'PONIEDZIAŁEK', 'WTOREK', 'ŚRODA', 'CZWARTEK', 'PIĄTEK', 'SOBOTA'],
  de: ['SONNTAG', 'MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG'],
  fr: ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI']
};

const MONTHS_SHORT: Record<Language, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  pl: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
};

const MONTHS_FULL: Record<Language, string[]> = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  pl: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
};

const DAYS_HEADER: Record<Language, string[]> = {
  en: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  pl: ['PON', 'WT', 'ŚR', 'CZW', 'PT', 'SOB', 'NDZ'],
  de: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'],
  fr: ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']
};

const LABELS: Record<Language, { checkInTag: string; checkOutTag: string; searchBtn: string }> = {
  en: { checkInTag: 'Check-in date', checkOutTag: 'Check-out date', searchBtn: 'SEARCH' },
  pl: { checkInTag: 'Termin przyjazdu', checkOutTag: 'Termin wyjazdu', searchBtn: 'SZUKAJ' },
  de: { checkInTag: 'Anreisedatum', checkOutTag: 'Abreisedatum', searchBtn: 'SUCHEN' },
  fr: { checkInTag: 'Date d’arrivée', checkOutTag: 'Date de départ', searchBtn: 'RÉSERVER' }
};

export const BookingBar: React.FC<BookingBarProps> = ({ 
  lang = 'en', 
  bookingUrl = BOOKING_SYSTEM_URL,
  onOpenBooking 
}) => {
  const now = new Date();
  const initIn = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const initOut = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);

  const [checkIn, setCheckIn] = useState<DateItem>({
    year: initIn.getFullYear(),
    month: initIn.getMonth(),
    day: initIn.getDate()
  });

  const [checkOut, setCheckOut] = useState<DateItem>({
    year: initOut.getFullYear(),
    month: initOut.getMonth(),
    day: initOut.getDate()
  });

  const [openCalendar, setOpenCalendar] = useState<'in' | 'out' | null>(null);

  const [inView, setInView] = useState({ year: checkIn.year, month: checkIn.month });
  const [outView, setOutView] = useState({ year: checkOut.year, month: checkOut.month });

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown calendars when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenCalendar(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const getDayOfWeekName = (date: DateItem) => {
    const d = new Date(date.year, date.month, date.day);
    return DAYS_UPPER[lang][d.getDay()];
  };

  const isSameDay = (d1: DateItem, d2: DateItem) => {
    return d1.year === d2.year && d1.month === d2.month && d1.day === d2.day;
  };

  const isBefore = (d1: DateItem, d2: DateItem) => {
    if (d1.year !== d2.year) return d1.year < d2.year;
    if (d1.month !== d2.month) return d1.month < d2.month;
    return d1.day < d2.day;
  };

  const handleSelectCheckIn = (day: number) => {
    const newIn: DateItem = { year: inView.year, month: inView.month, day };
    setCheckIn(newIn);

    if (!isBefore(newIn, checkOut)) {
      const nextDay = new Date(newIn.year, newIn.month, newIn.day + 1);
      const newOut = {
        year: nextDay.getFullYear(),
        month: nextDay.getMonth(),
        day: nextDay.getDate()
      };
      setCheckOut(newOut);
      setOutView({ year: newOut.year, month: newOut.month });
    }

    setOpenCalendar('out');
  };

  const handleSelectCheckOut = (day: number) => {
    const candidateOut: DateItem = { year: outView.year, month: outView.month, day };
    
    if (isBefore(candidateOut, checkIn) || isSameDay(candidateOut, checkIn)) {
      setCheckIn(candidateOut);
      const next = new Date(candidateOut.year, candidateOut.month, candidateOut.day + 1);
      setCheckOut({
        year: next.getFullYear(),
        month: next.getMonth(),
        day: next.getDate()
      });
    } else {
      setCheckOut(candidateOut);
    }
    setOpenCalendar(null);
  };

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenCalendar(null);

    const formattedIn = `${checkIn.year}-${String(checkIn.month + 1).padStart(2, '0')}-${String(checkIn.day).padStart(2, '0')}`;
    const formattedOut = `${checkOut.year}-${String(checkOut.month + 1).padStart(2, '0')}-${String(checkOut.day).padStart(2, '0')}`;
    const textIn = `${checkIn.day} ${MONTHS_SHORT[lang][checkIn.month]} ${checkIn.year}`;
    const textOut = `${checkOut.day} ${MONTHS_SHORT[lang][checkOut.month]} ${checkOut.year}`;

    // If an external reservation system URL is configured, redirect directly to it
    const targetUrl = bookingUrl || BOOKING_SYSTEM_URL;
    if (targetUrl && targetUrl.trim() !== '') {
      const separator = targetUrl.includes('?') ? '&' : '?';
      const redirectUrl = `${targetUrl}${separator}checkin=${formattedIn}&checkout=${formattedOut}&guests=2`;
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Default action: trigger booking modal or custom event
    if (onOpenBooking) {
      onOpenBooking({ checkIn: textIn, checkOut: textOut, guests: '2' });
    } else {
      window.dispatchEvent(new CustomEvent('edinburgh:openBooking', {
        detail: { 
          property: 'The Edinburgh Garden House',
          dates: `${textIn} – ${textOut}`,
          checkIn: textIn,
          checkOut: textOut,
          guests: '2'
        }
      }));
    }
  };

  const generateMonthGrid = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // 0 = Monday
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells: { day: number; isCurrentMonth: boolean; dateItem: DateItem }[] = [];

    // Previous month filler days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const prevDate = new Date(year, month - 1, d);
      cells.push({
        day: d,
        isCurrentMonth: false,
        dateItem: { year: prevDate.getFullYear(), month: prevDate.getMonth(), day: d }
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        day: d,
        isCurrentMonth: true,
        dateItem: { year, month, day: d }
      });
    }

    // Next month filler days
    const remaining = (7 - (cells.length % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      const nextDate = new Date(year, month + 1, d);
      cells.push({
        day: d,
        isCurrentMonth: false,
        dateItem: { year: nextDate.getFullYear(), month: nextDate.getMonth(), day: d }
      });
    }

    return cells;
  };

  const tLabels = LABELS[lang] || LABELS.en;

  return (
    <div className="custom-booking-bar-wrapper" ref={containerRef}>
      <div className="custom-booking-bar">
        
        {/* SEGMENT 1: CHECK-IN DATE + POPUP CALENDAR */}
        <div className="bar-date-segment-wrap">
          <button 
            type="button" 
            className={`bar-date-segment ${openCalendar === 'in' ? 'active-cell' : ''}`}
            onClick={() => setOpenCalendar(openCalendar === 'in' ? null : 'in')}
            aria-label={tLabels.checkInTag}
            aria-expanded={openCalendar === 'in'}
          >
            <span className="big-day-number">{checkIn.day}</span>
            <div className="date-meta-col">
              <span className="month-name">{MONTHS_SHORT[lang][checkIn.month]}</span>
              <span className="day-name">{getDayOfWeekName(checkIn)}</span>
            </div>
          </button>

          {/* FLOATING CALENDAR 1: CHECK-IN */}
          {openCalendar === 'in' && (
            <div className="calendar-floating-card card-checkin">
              <div className="cal-card-tag">{tLabels.checkInTag}</div>
              
              <div className="cal-card-header">
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const prev = new Date(inView.year, inView.month - 1, 1);
                    setInView({ year: prev.getFullYear(), month: prev.getMonth() });
                  }}
                  aria-label="Previous month"
                >
                  ‹
                </button>
                <div className="cal-month-title-wrap">
                  <span className="cal-month-title">{MONTHS_FULL[lang][inView.month]}</span>
                  <span className="cal-year-title">{inView.year}</span>
                </div>
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const next = new Date(inView.year, inView.month + 1, 1);
                    setInView({ year: next.getFullYear(), month: next.getMonth() });
                  }}
                  aria-label="Next month"
                >
                  ›
                </button>
              </div>

              <div className="cal-days-header">
                {DAYS_HEADER[lang].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              <div className="cal-days-grid">
                {generateMonthGrid(inView.year, inView.month).map((cell, idx) => {
                  const isSelected = cell.isCurrentMonth && isSameDay(cell.dateItem, checkIn);
                  const isCheckOutDay = cell.isCurrentMonth && isSameDay(cell.dateItem, checkOut);
                  const inRange = cell.isCurrentMonth && isBefore(checkIn, cell.dateItem) && isBefore(cell.dateItem, checkOut);

                  return (
                    <button
                      type="button"
                      key={idx}
                      className={`cal-day-cell ${!cell.isCurrentMonth ? 'other-month' : ''} ${isSelected ? 'selected-sage' : ''} ${isCheckOutDay ? 'secondary-select' : ''} ${inRange ? 'in-range' : ''}`}
                      onClick={() => cell.isCurrentMonth && handleSelectCheckIn(cell.day)}
                      disabled={!cell.isCurrentMonth}
                    >
                      <span className="day-number-text">{cell.day}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* MIDDLE ARROW DIVIDER */}
        <div className="bar-arrow-divider" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <polyline points="14 6 20 12 14 18"></polyline>
          </svg>
        </div>

        {/* SEGMENT 2: CHECK-OUT DATE + POPUP CALENDAR */}
        <div className="bar-date-segment-wrap">
          <button 
            type="button" 
            className={`bar-date-segment highlight-sage ${openCalendar === 'out' ? 'active-cell' : ''}`}
            onClick={() => setOpenCalendar(openCalendar === 'out' ? null : 'out')}
            aria-label={tLabels.checkOutTag}
            aria-expanded={openCalendar === 'out'}
          >
            <span className="big-day-number sage-number">{checkOut.day}</span>
            <div className="date-meta-col">
              <span className="month-name sage-text">{MONTHS_SHORT[lang][checkOut.month]}</span>
              <span className="day-name">{getDayOfWeekName(checkOut)}</span>
            </div>
          </button>

          {/* FLOATING CALENDAR 2: CHECK-OUT */}
          {openCalendar === 'out' && (
            <div className="calendar-floating-card card-checkout">
              <div className="cal-card-tag">{tLabels.checkOutTag}</div>
              
              <div className="cal-card-header">
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const prev = new Date(outView.year, outView.month - 1, 1);
                    setOutView({ year: prev.getFullYear(), month: prev.getMonth() });
                  }}
                  aria-label="Previous month"
                >
                  ‹
                </button>
                <div className="cal-month-title-wrap">
                  <span className="cal-month-title">{MONTHS_FULL[lang][outView.month]}</span>
                  <span className="cal-year-title">{outView.year}</span>
                </div>
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const next = new Date(outView.year, outView.month + 1, 1);
                    setOutView({ year: next.getFullYear(), month: next.getMonth() });
                  }}
                  aria-label="Next month"
                >
                  ›
                </button>
              </div>

              <div className="cal-days-header">
                {DAYS_HEADER[lang].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              <div className="cal-days-grid">
                {generateMonthGrid(outView.year, outView.month).map((cell, idx) => {
                  const isSelected = cell.isCurrentMonth && isSameDay(cell.dateItem, checkOut);
                  const isCheckInDay = cell.isCurrentMonth && isSameDay(cell.dateItem, checkIn);
                  const inRange = cell.isCurrentMonth && isBefore(checkIn, cell.dateItem) && isBefore(cell.dateItem, checkOut);
                  const isPastCheckIn = cell.isCurrentMonth && isBefore(cell.dateItem, checkIn);

                  return (
                    <button
                      type="button"
                      key={idx}
                      className={`cal-day-cell ${!cell.isCurrentMonth ? 'other-month' : ''} ${isSelected ? 'selected-sage' : ''} ${isCheckInDay ? 'secondary-select' : ''} ${inRange ? 'in-range' : ''} ${isPastCheckIn ? 'disabled-date' : ''}`}
                      onClick={() => cell.isCurrentMonth && handleSelectCheckOut(cell.day)}
                      disabled={!cell.isCurrentMonth}
                    >
                      <span className="day-number-text">{cell.day}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* SEARCH BUTTON IN SAGE GREEN */}
        <button 
          type="button" 
          className="bar-search-btn btn-sage-action"
          onClick={handleSearchClick}
          data-booking-trigger="true"
        >
          {tLabels.searchBtn}
        </button>

      </div>
    </div>
  );
};
