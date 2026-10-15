import React, { useState, useRef, useEffect } from 'react';

interface BookingBarProps {
  onOpenBooking?: () => void;
}

interface DateItem {
  year: number;
  month: number; // 0-indexed (9 = Październik)
  day: number;
}

const POLISH_DAYS_UPPER = ['NIEDZIELA', 'PONIEDZIAŁEK', 'WTOREK', 'ŚRODA', 'CZWARTEK', 'PIĄTEK', 'SOBOTA'];
const POLISH_MONTHS_SHORT = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
const POLISH_MONTHS_FULL = [
  'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
  'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
];

export const BookingBar: React.FC<BookingBarProps> = ({ onOpenBooking }) => {
  // Domyślne daty: 15 Paź 2026 i 16 Paź 2026
  const [checkIn, setCheckIn] = useState<DateItem>({ year: 2026, month: 9, day: 15 });
  const [checkOut, setCheckOut] = useState<DateItem>({ year: 2026, month: 9, day: 16 });

  // Stan otwarcia: 'in' = mini-kalendarzyk 1, 'out' = mini-kalendarzyk 2, null = zamknięte
  const [openCalendar, setOpenCalendar] = useState<'in' | 'out' | null>(null);

  // Widok miesiąca dla kalendarza przyjazdu i wyjazdu
  const [inView, setInView] = useState({ year: 2026, month: 9 });
  const [outView, setOutView] = useState({ year: 2026, month: 9 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Zamykanie kalendarzyków po kliknięciu poza komponentem
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
    return POLISH_DAYS_UPPER[d.getDay()];
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

    // Jeśli data wyjazdu jest taka sama lub wcześniejsza niż nowy przyjazd, przesuwamy wyjazd o 1 dzień
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

    // Automatycznie przejdź do drugiego mini-kalendarzyka dla płynnego doświadczenia
    setOpenCalendar('out');
  };

  const handleSelectCheckOut = (day: number) => {
    const candidateOut: DateItem = { year: outView.year, month: outView.month, day };
    
    // Jeśli użytkownik kliknął datę wcześniejszą lub równą przyjazdowi, przestawiamy przyjazd
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
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
        detail: { 
          property: 'Młynówka — Domek przy Młynie',
          dates: `${checkIn.day} ${POLISH_MONTHS_SHORT[checkIn.month]} – ${checkOut.day} ${POLISH_MONTHS_SHORT[checkOut.month]} ${checkOut.year}`
        }
      }));
    }
  };

  // Generowanie siatki dni z dniami wypełniającymi (poniedziałek - niedziela)
  const generateMonthGrid = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // 0 = Poniedziałek
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells: { day: number; isCurrentMonth: boolean; dateItem: DateItem }[] = [];

    // Poprzedni miesiąc
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const prevDate = new Date(year, month - 1, d);
      cells.push({
        day: d,
        isCurrentMonth: false,
        dateItem: { year: prevDate.getFullYear(), month: prevDate.getMonth(), day: d }
      });
    }

    // Bieżący miesiąc
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        day: d,
        isCurrentMonth: true,
        dateItem: { year, month, day: d }
      });
    }

    // Następny miesiąc
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

  return (
    <div className="custom-booking-bar-wrapper" ref={containerRef}>
      <div className="custom-booking-bar">
        
        {/* SEGMENT 1: DATA PRZYJAZDU + JEGO DEDYKOWANY MINI-KALENDARZYK */}
        <div className="bar-date-segment-wrap">
          <button 
            type="button" 
            className={`bar-date-segment ${openCalendar === 'in' ? 'active-cell' : ''}`}
            onClick={() => setOpenCalendar(openCalendar === 'in' ? null : 'in')}
            aria-label="Wybierz termin przyjazdu"
            aria-expanded={openCalendar === 'in'}
          >
            <span className="big-day-number">{checkIn.day}</span>
            <div className="date-meta-col">
              <span className="month-name">{POLISH_MONTHS_SHORT[checkIn.month]}</span>
              <span className="day-name">{getDayOfWeekName(checkIn)}</span>
            </div>
          </button>

          {/* MINI KALENDARZYK 1: DLA PIERWSZEGO TERMINU */}
          {openCalendar === 'in' && (
            <div className="calendar-floating-card card-checkin">
              <div className="cal-card-tag">Termin przyjazdu</div>
              
              <div className="cal-card-header">
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const prev = new Date(inView.year, inView.month - 1, 1);
                    setInView({ year: prev.getFullYear(), month: prev.getMonth() });
                  }}
                  aria-label="Poprzedni miesiąc"
                >
                  ‹
                </button>
                <div className="cal-month-title-wrap">
                  <span className="cal-month-title">{POLISH_MONTHS_FULL[inView.month]}</span>
                  <span className="cal-year-title">{inView.year}</span>
                </div>
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const next = new Date(inView.year, inView.month + 1, 1);
                    setInView({ year: next.getFullYear(), month: next.getMonth() });
                  }}
                  aria-label="Następny miesiąc"
                >
                  ›
                </button>
              </div>

              <div className="cal-days-header">
                <span>PON</span>
                <span>WT</span>
                <span>ŚR</span>
                <span>CZW</span>
                <span>PT</span>
                <span>SOB</span>
                <span>NDZ</span>
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

        {/* STRZAŁKA W ŚRODKU */}
        <div className="bar-arrow-divider" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <polyline points="14 6 20 12 14 18"></polyline>
          </svg>
        </div>

        {/* SEGMENT 2: DATA WYJAZDU + JEGO DEDYKOWANY MINI-KALENDARZYK (ZIELONY SZAŁWIOWY AKCENT) */}
        <div className="bar-date-segment-wrap">
          <button 
            type="button" 
            className={`bar-date-segment highlight-sage ${openCalendar === 'out' ? 'active-cell' : ''}`}
            onClick={() => setOpenCalendar(openCalendar === 'out' ? null : 'out')}
            aria-label="Wybierz termin wyjazdu"
            aria-expanded={openCalendar === 'out'}
          >
            <span className="big-day-number sage-number">{checkOut.day}</span>
            <div className="date-meta-col">
              <span className="month-name sage-text">{POLISH_MONTHS_SHORT[checkOut.month]}</span>
              <span className="day-name">{getDayOfWeekName(checkOut)}</span>
            </div>
          </button>

          {/* MINI KALENDARZYK 2: DLA DRUGIEGO TERMINU */}
          {openCalendar === 'out' && (
            <div className="calendar-floating-card card-checkout">
              <div className="cal-card-tag">Termin wyjazdu</div>
              
              <div className="cal-card-header">
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const prev = new Date(outView.year, outView.month - 1, 1);
                    setOutView({ year: prev.getFullYear(), month: prev.getMonth() });
                  }}
                  aria-label="Poprzedni miesiąc"
                >
                  ‹
                </button>
                <div className="cal-month-title-wrap">
                  <span className="cal-month-title">{POLISH_MONTHS_FULL[outView.month]}</span>
                  <span className="cal-year-title">{outView.year}</span>
                </div>
                <button 
                  type="button" 
                  className="cal-arrow-btn" 
                  onClick={() => {
                    const next = new Date(outView.year, outView.month + 1, 1);
                    setOutView({ year: next.getFullYear(), month: next.getMonth() });
                  }}
                  aria-label="Następny miesiąc"
                >
                  ›
                </button>
              </div>

              <div className="cal-days-header">
                <span>PON</span>
                <span>WT</span>
                <span>ŚR</span>
                <span>CZW</span>
                <span>PT</span>
                <span>SOB</span>
                <span>NDZ</span>
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

        {/* PRZYCISK SZUKAJ W KOLORZE SZAŁWIOWEJ ZIELENI */}
        <button 
          type="button" 
          className="bar-search-btn btn-sage-action"
          onClick={handleSearchClick}
          data-booking-trigger="true"
        >
          SZUKAJ
        </button>

      </div>
    </div>
  );
};
