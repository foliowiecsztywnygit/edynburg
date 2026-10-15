/**
 * MŁYNÓWKA — DOMEK PRZY MŁYNIE
 * JavaScript Controller (Minimalistyczny styl ukoi.pl)
 * Obsługa widżetu wyszukiwania dat, galerii, akordeonu FAQ,
 * dymku kontaktu i przekierowania do zewnętrznego systemu rezerwacji.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ----------------------------------------------------
     1. STICKY HEADER
  ---------------------------------------------------- */
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ----------------------------------------------------
     2. MENU MOBILNE (DRAWER)
  ---------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    const toggleMenu = () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileDrawer.classList.add('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----------------------------------------------------
     3. PŁYNNE PRZEWIJANIE KOTWICOWE (SMOOTH SCROLL)
  ---------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#0') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight + 10 : 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ----------------------------------------------------
     4. WIDŻET WYSZUKIWANIA I WYBORU DAT (UKOI 1:1)
  ---------------------------------------------------- */
  const checkInInput = document.getElementById('checkInInput');
  const checkOutInput = document.getElementById('checkOutInput');
  const checkInDayEl = document.getElementById('checkInDay');
  const checkInMonthEl = document.getElementById('checkInMonth');
  const checkInYearEl = document.getElementById('checkInYear');
  const checkOutDayEl = document.getElementById('checkOutDay');
  const checkOutMonthEl = document.getElementById('checkOutMonth');
  const checkOutYearEl = document.getElementById('checkOutYear');
  const guestsSelect = document.getElementById('guestsSelect');

  const polishMonthsShort = [
    'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze',
    'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'
  ];

  const updateDateDisplay = (dateString, dayEl, monthEl, yearEl) => {
    if (!dateString) return;
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);

      if (dayEl) dayEl.textContent = day;
      if (monthEl) monthEl.textContent = polishMonthsShort[monthIdx] || parts[1];
      if (yearEl) yearEl.textContent = year;
    }
  };

  if (checkInInput) {
    checkInInput.addEventListener('change', () => {
      updateDateDisplay(checkInInput.value, checkInDayEl, checkInMonthEl, checkInYearEl);
      
      // Dopasowanie daty wyjazdu (minimum następny dzień)
      if (checkOutInput && checkOutInput.value <= checkInInput.value) {
        const nextDay = new Date(checkInInput.value);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayStr = nextDay.toISOString().split('T')[0];
        checkOutInput.value = nextDayStr;
        updateDateDisplay(nextDayStr, checkOutDayEl, checkOutMonthEl, checkOutYearEl);
      }
    });

    // Uruchomienie natywnego pickera przy kliknięciu w blok
    const checkInBlock = checkInInput.closest('.search-date-block');
    if (checkInBlock) {
      checkInBlock.addEventListener('click', () => {
        try {
          if (typeof checkInInput.showPicker === 'function') {
            checkInInput.showPicker();
          } else {
            checkInInput.focus();
          }
        } catch (err) {
          checkInInput.focus();
        }
      });
    }
  }

  if (checkOutInput) {
    checkOutInput.addEventListener('change', () => {
      updateDateDisplay(checkOutInput.value, checkOutDayEl, checkOutMonthEl, checkOutYearEl);
    });

    const checkOutBlock = checkOutInput.closest('.search-date-block');
    if (checkOutBlock) {
      checkOutBlock.addEventListener('click', () => {
        try {
          if (typeof checkOutInput.showPicker === 'function') {
            checkOutInput.showPicker();
          } else {
            checkOutInput.focus();
          }
        } catch (err) {
          checkOutInput.focus();
        }
      });
    }
  }

  /* ----------------------------------------------------
     5. JĘZYKI (PL / EN / DE)
  ---------------------------------------------------- */
  const langButtons = document.querySelectorAll('.lang-link');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const lang = this.getAttribute('data-lang');
      window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
    });
  });

  /* ----------------------------------------------------
     6. HERO FOTO CAROUSEL (UKOI SLIDER)
  ---------------------------------------------------- */
  const heroViewport = document.getElementById('heroCarousel');
  const heroPrev = document.getElementById('heroPrevBtn');
  const heroNext = document.getElementById('heroNextBtn');
  const heroDots = document.querySelectorAll('#heroDots .dot');

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      caption: "[ FOTOGRAFIA GŁÓWNA: DREWNIANY DOMEK W STYLU ALPEJSKIM NA TLE OGRODU I PIENIN ]"
    },
    {
      src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2400&q=85",
      caption: "[ FOTOGRAFIA: ZABYTKOWY MŁYN ORAZ SZUMIĄCY POTOK MŁYNÓWKI W OGRODZIE ]"
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85",
      caption: "[ FOTOGRAFIA: SŁONECZNY TARAS WYPOCZYNKOWY Z WIDOKIEM NA GÓRY ]"
    }
  ];

  if (heroViewport && heroImages.length > 0) {
    let heroIndex = 0;
    const heroImgEl = heroViewport.querySelector('.hero-photo');
    const heroCaptionEl = heroViewport.querySelector('.photo-placeholder-caption span');

    const updateHeroSlide = (idx) => {
      heroIndex = (idx + heroImages.length) % heroImages.length;
      if (heroImgEl) heroImgEl.src = heroImages[heroIndex].src;
      if (heroCaptionEl) heroCaptionEl.textContent = heroImages[heroIndex].caption;
      heroDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === heroIndex);
      });
    };

    if (heroPrev) heroPrev.addEventListener('click', () => updateHeroSlide(heroIndex - 1));
    if (heroNext) heroNext.addEventListener('click', () => updateHeroSlide(heroIndex + 1));
    heroDots.forEach((dot, i) => dot.addEventListener('click', () => updateHeroSlide(i)));

    setInterval(() => updateHeroSlide(heroIndex + 1), 7000);
  }

  /* ----------------------------------------------------
     7. AKORDEON FAQ
  ---------------------------------------------------- */
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-trigger');
          const otherAns = other.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ----------------------------------------------------
     8. PŁYWAJĄCY DYMEK KONTAKTOWY (UKOI STYLE)
  ---------------------------------------------------- */
  const bubbleBtn = document.getElementById('floatingBubbleBtn');
  const bubbleMenu = document.getElementById('floatingMenu');
  const bubbleClose = document.getElementById('floatingMenuClose');

  if (bubbleBtn && bubbleMenu) {
    const toggleBubble = (e) => {
      e.stopPropagation();
      const isOpen = bubbleMenu.classList.contains('open');
      if (isOpen) {
        closeBubble();
      } else {
        openBubble();
      }
    };

    const openBubble = () => {
      bubbleMenu.classList.add('open');
      bubbleMenu.setAttribute('aria-hidden', 'false');
      bubbleBtn.setAttribute('aria-expanded', 'true');
    };

    const closeBubble = () => {
      bubbleMenu.classList.remove('open');
      bubbleMenu.setAttribute('aria-hidden', 'true');
      bubbleBtn.setAttribute('aria-expanded', 'false');
    };

    bubbleBtn.addEventListener('click', toggleBubble);
    if (bubbleClose) bubbleClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeBubble();
    });

    document.addEventListener('click', (e) => {
      if (!bubbleMenu.contains(e.target) && !bubbleBtn.contains(e.target)) {
        closeBubble();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeBubble();
        closeModal();
      }
    });
  }

  /* ----------------------------------------------------
     9. EXTERNAL BOOKING TRIGGER INTEGRATION
  ---------------------------------------------------- */
  const bookingTriggers = document.querySelectorAll('[data-booking-trigger="true"]');
  const bookingModal = document.getElementById('bookingModalOverlay');
  const modalClose = document.getElementById('modalCloseBtn');

  const openBooking = (e) => {
    if (e) e.preventDefault();

    const selectedDates = {
      checkIn: checkInInput ? checkInInput.value : '2026-10-15',
      checkOut: checkOutInput ? checkOutInput.value : '2026-10-16',
      guests: guestsSelect ? guestsSelect.value : '2',
      property: 'Młynówka Domek przy Młynie',
      location: 'Krościenko nad Dunajcem'
    };

    window.dispatchEvent(new CustomEvent('mlynowka:openBooking', {
      detail: selectedDates
    }));

    if (window.MlynowkaBooking && typeof window.MlynowkaBooking.open === 'function') {
      window.MlynowkaBooking.open(selectedDates);
      return;
    }

    if (bookingModal) {
      bookingModal.classList.add('open');
      bookingModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (bookingModal) {
      bookingModal.classList.remove('open');
      bookingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  bookingTriggers.forEach(btn => btn.addEventListener('click', openBooking));
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  window.openBookingModal = openBooking;
  window.closeBookingModal = closeModal;

  /* ----------------------------------------------------
     10. ROK W STOPCE
  ---------------------------------------------------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
