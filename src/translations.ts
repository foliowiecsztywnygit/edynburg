export type Language = 'en' | 'pl' | 'de' | 'fr';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
    sub: string;
  };
  topBar: {
    selectLanguage: string;
    directContact: string;
  };
  nav: {
    about: string;
    spaces: string;
    amenities: string;
    gallery: string;
    location: string;
    attractions: string;
    snowsports: string;
    host: string;
    reviews: string;
    faq: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    motto: string;
    stats: {
      guests: string;
      bedrooms: string;
      beds: string;
      bathrooms: string;
      driveway: string;
      garden: string;
      directBus: string;
      netflix: string;
      wifi: string;
    };
    ratingSnippet: string;
  };
  bookingBar: {
    checkIn: string;
    checkOut: string;
    guests: string;
    guestsCount: (n: number) => string;
    checkAvailability: string;
    selectDates: string;
    modalTitle: string;
    modalSubtitle: string;
    directBookingNote: string;
    callHost: string;
    whatsappHost: string;
    emailHost: string;
    selectedDates: (checkIn: string, checkOut: string, guests: string) => string;
    months: string[];
    days: string[];
  };
  highlights: {
    title: string;
    subtitle: string;
    cards: {
      tag: string;
      title: string;
      desc: string;
    }[];
  };
  spacesSection: {
    title: string;
    subtitle: string;
    lead: string;
    spaces: {
      title: string;
      desc: string;
      icon: string;
    }[];
    quoteLead: string;
    quoteLine1: string;
    quoteLine2: string;
    quoteLine3: string;
    quoteAccent: string;
  };
  gallerySection: {
    title: string;
    subtitle: string;
    allFilter: string;
    categories: {
      all: string;
      living: string;
      bedrooms: string;
      kitchen: string;
      garden: string;
      driveway: string;
    };
    openLightbox: string;
  };
  amenitiesSection: {
    title: string;
    subtitle: string;
    groups: {
      category: string;
      items: { name: string; desc?: string; included: boolean }[];
    }[];
    notIncludedTitle: string;
  };
  locationSection: {
    title: string;
    subtitle: string;
    neighborhoodTitle: string;
    neighborhoodItems: { title: string; desc: string }[];
    transitTitle: string;
    transitItems: { title: string; desc: string }[];
    attractionsTitle: string;
    attractionsItems: { title: string; desc: string }[];
  };
  snowsportsSection: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    features: { title: string; desc: string }[];
    chillout: string;
  };
  hostSection: {
    title: string;
    badge: string;
    name: string;
    role: string;
    stats: {
      rating: string;
      reviews: string;
      hosting: string;
      responseRate: string;
      responseTime: string;
    };
    languages: string;
    work: string;
    bio: string;
    messageBtn: string;
  };
  reviewsSection: {
    title: string;
    subtitle: string;
    ratingValue: string;
    ratingLabel: string;
    reviewsCountText: string;
    categories: { label: string; score: string }[];
    reviewsList: {
      author: string;
      meta: string;
      text: string;
      rating: number;
    }[];
  };
  rulesFaqSection: {
    title: string;
    subtitle: string;
    rules: { title: string; desc: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  contactBanner: {
    title: string;
    desc: string;
    callBtn: string;
    whatsappBtn: string;
    emailBtn: string;
  };
  footer: {
    brandDesc: string;
    languagesSupported: string;
    addressHeader: string;
    addressText: string[];
    mapsLinkText: string;
    contactHeader: string;
    quickLinksHeader: string;
    allRightsReserved: string;
    checkInNote: string;
  };
  floating: {
    hostTitle: string;
    callNow: string;
    whatsappNow: string;
    emailNow: string;
    directTalk: string;
    instantReply: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    meta: {
      title: 'The Edinburgh Garden House | Modern 2-Bed with Garden & Free Parking',
      description: 'Modern 2-bedroom house in Edinburgh (EH17) with private garden, free driveway parking, superfast Wi-Fi, Netflix, and direct bus to the City Centre.'
    },
    brand: {
      name: 'THE EDINBURGH GARDEN HOUSE',
      tagline: 'Modern 2-Bed House with Private Garden, Driveway & Netflix – Direct Bus',
      sub: 'GILMERTON · EDINBURGH EH17 · SCOTLAND'
    },
    topBar: {
      selectLanguage: 'Language:',
      directContact: 'Direct Booking & Inquiries: +44 7988 065088'
    },
    nav: {
      about: 'ABOUT',
      spaces: 'SPACES',
      amenities: 'AMENITIES',
      gallery: 'GALLERY',
      location: 'LOCATION & BUSES',
      attractions: 'ATTRACTIONS',
      snowsports: 'SNOWSPORTS',
      host: 'HOST',
      reviews: 'REVIEWS',
      faq: 'RULES & FAQ',
      contact: 'CONTACT',
      bookNow: 'BOOK YOUR STAY'
    },
    hero: {
      badge: '★ GUEST FAVOURITE · ONE OF THE MOST LOVED HOMES ON AIRBNB',
      title: 'Modern 2-Bed House with Private Garden, Driveway & Netflix – Direct Bus',
      lead: 'Make unforgettable memories at this unique and family-friendly home in Gilmerton, Edinburgh. Enjoy a bright, cozy mid-terrace house with a private driveway, enclosed sunlit garden, and frequent direct bus connections straight into the historic heart of Edinburgh.',
      motto: 'A peaceful retreat with easy city access — your perfect Scottish home away from home.',
      stats: {
        guests: '4 Guests',
        bedrooms: '2 Bedrooms',
        beds: '2 King Size Beds',
        bathrooms: '1 Bathroom',
        driveway: 'Free Private Driveway',
        garden: 'Enclosed Private Garden',
        directBus: 'Direct Bus to City (25 min)',
        netflix: 'Smart TV + Netflix',
        wifi: 'Superfast High-Speed Wi-Fi'
      },
      ratingSnippet: '4.94 / 5.0 (18 authentic guest reviews) · Superhost Jacek'
    },
    bookingBar: {
      checkIn: 'CHECK-IN',
      checkOut: 'CHECKOUT',
      guests: 'GUESTS',
      guestsCount: (n) => `${n} ${n === 1 ? 'guest' : 'guests'}`,
      checkAvailability: 'CHECK DATES / INQUIRE',
      selectDates: 'Select dates',
      modalTitle: 'The Edinburgh Garden House — Reservation & Availability',
      modalSubtitle: 'Gilmerton, Edinburgh EH17 · Entire 2-Bed House with Private Garden & Parking',
      directBookingNote: 'Direct booking guarantee — no third-party platform fees. Contact host Jacek directly via WhatsApp, Phone, or Email for instant confirmation and best rates:',
      callHost: 'Call Jacek: +44 7988 065088',
      whatsappHost: 'Message on WhatsApp',
      emailHost: 'Email: jacek31-76@hotmail.com',
      selectedDates: (inDate, outDate, g) => `Selected: ${inDate} to ${outDate} (${g})`,
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    },
    highlights: {
      title: 'Comfortable Retreat in Edinburgh (EH17)',
      subtitle: 'EXPLORE OUR CONVENIENT GILMERTON LOCATION WITH EASY CITY BYPASS & DIRECT BUSES',
      cards: [
        {
          tag: 'Cozy Living Space',
          title: 'Bright Living Room & Netflix',
          desc: 'Inviting lounge featuring a plush sofa, dining table, and Smart TV with complimentary Netflix for relaxing movie nights.'
        },
        {
          tag: 'Stress-Free Parking',
          title: 'Private Renovated Driveway',
          desc: 'One of the few accommodations in the area featuring a dedicated private driveway directly in front of the house.'
        },
        {
          tag: 'Outdoor Tranquility',
          title: 'Private Enclosed Rear Garden',
          desc: 'Fully fenced, child-friendly garden with artificial turf, gravel surround, and outdoor lounge seating for your morning coffee.'
        },
        {
          tag: 'Hotel-Grade Rest',
          title: 'Luxurious King Size Beds',
          desc: 'Two well-appointed bedrooms with premium King Size mattresses, crisp hotel-standard linens, and room-darkening blinds.'
        }
      ]
    },
    spacesSection: {
      title: 'Thoughtfully Designed for Families & Groups',
      subtitle: 'Entire mid-terrace house on exclusive rental — warm, homely feel combined with modern conveniences.',
      lead: 'Welcome to our bright and well-proportioned house located in the peaceful residential neighborhood of Gilmerton, Edinburgh. Whether you are visiting for festival season, a family vacation, or business, you will find comfort and tranquility.',
      spaces: [
        {
          title: 'Living Room',
          desc: 'A cozy and bright living space featuring a comfortable sofa and a TV—perfect for winding down after a busy day of sightseeing.',
          icon: 'couch'
        },
        {
          title: 'Two King Bedrooms',
          desc: 'Comfortable bedrooms featuring large, luxurious King Size beds with fresh linens, ample wardrobe storage, and blackout blinds for sound sleep.',
          icon: 'bed'
        },
        {
          title: 'Fully Equipped Kitchen',
          desc: 'Complete kitchen equipped with stove, oven, fridge, freezer, microwave, kettle, toaster, coffee, cooking basics, dishes, and dining table.',
          icon: 'utensils'
        },
        {
          title: 'Modern Bathroom',
          desc: 'Clean and modern bathroom stocked with a relaxing bathtub, hot water, hairdryer, shampoo, conditioner, body soap, and fluffy soft towels.',
          icon: 'bath'
        },
        {
          title: 'Private Enclosed Garden',
          desc: 'Access to an exclusive, fully fenced rear garden with patio seating to enjoy a quiet morning coffee or unwind outdoors in safety.',
          icon: 'tree'
        },
        {
          title: 'Free Driveway Parking',
          desc: 'Private, freshly renovated driveway directly in front of the house. No searching or paying for city parking.',
          icon: 'car'
        }
      ],
      quoteLead: 'Homely warmth and modern convenience in historic Edinburgh.',
      quoteLine1: 'Every room is tailored to provide a restorative, hassle-free stay.',
      quoteLine2: 'Fast direct buses right into Princes Street, Old Town, and Edinburgh Waverley.',
      quoteLine3: 'Peaceful evenings in your private garden after exploring Scotland’s capital.',
      quoteAccent: 'Skip expensive city parking and relax in comfort.'
    },
    gallerySection: {
      title: 'The Property in Photos',
      subtitle: 'Take a visual walkthrough of the living spaces, bedrooms, private garden, and driveway.',
      allFilter: 'All Photos',
      categories: {
        all: 'All Areas',
        living: 'Living Room',
        bedrooms: 'Bedrooms',
        kitchen: 'Kitchen & Dining',
        garden: 'Private Garden',
        driveway: 'Driveway & Exterior'
      },
      openLightbox: 'Click to enlarge'
    },
    amenitiesSection: {
      title: 'What This Place Offers',
      subtitle: 'Complete list of amenities and home comforts provided for your stay.',
      groups: [
        {
          category: 'Bathroom',
          items: [
            { name: 'Bath & Shower', included: true },
            { name: 'Hairdryer', included: true },
            { name: 'Cleaning products', included: true },
            { name: 'Shampoo & Conditioner', included: true },
            { name: 'Body soap & Shower gel', included: true },
            { name: 'Hot water', included: true }
          ]
        },
        {
          category: 'Bedroom & Laundry',
          items: [
            { name: 'Washing machine', included: true },
            { name: 'Essentials (Towels, bed sheets, soap, toilet paper)', included: true },
            { name: 'Hangers & Clothes storage', included: true },
            { name: 'Bed linen & Extra pillows/blankets', included: true },
            { name: 'Room-darkening blinds', included: true },
            { name: 'Iron & ironing board', included: true }
          ]
        },
        {
          category: 'Entertainment & Internet',
          items: [
            { name: 'Smart TV with complimentary Netflix', included: true },
            { name: 'Superfast High-Speed Wi-Fi throughout', included: true },
            { name: 'Dedicated workspace for remote work', included: true }
          ]
        },
        {
          category: 'Kitchen & Dining',
          items: [
            { name: 'Full Kitchen (cook your own meals)', included: true },
            { name: 'Fridge & Freezer', included: true },
            { name: 'Microwave, Cooker & Oven', included: true },
            { name: 'Kettle, Toaster & Coffee', included: true },
            { name: 'Cooking basics (pots, pans, oil, salt, pepper)', included: true },
            { name: 'Crockery, cutlery, wine glasses & baking sheet', included: true },
            { name: 'Dining table with chairs', included: true }
          ]
        },
        {
          category: 'Outdoor & Parking',
          items: [
            { name: 'Private entrance (separate building access)', included: true },
            { name: 'Enclosed back garden & patio', included: true },
            { name: 'Outdoor lounge furniture & dining area', included: true },
            { name: 'Free private driveway parking on premises', included: true }
          ]
        },
        {
          category: 'Home Safety & Services',
          items: [
            { name: 'Self check-in with Smart Lock', included: true },
            { name: 'Long-term stays allowed (28+ days)', included: true },
            { name: 'Exterior security cameras (property security)', included: true },
            { name: 'Smoke alarm & Carbon monoxide alarm', included: true },
            { name: 'Fire extinguisher', included: true },
            { name: 'Efficient central heating', included: true }
          ]
        }
      ],
      notIncludedTitle: 'Not Included / Unavailable: Tumble dryer · Air conditioning'
    },
    locationSection: {
      title: 'Location, Neighborhood & Getting Around',
      subtitle: 'Peaceful Gilmerton (EH17) — swift access to Edinburgh City Centre and the Scottish countryside.',
      neighborhoodTitle: 'Neighborhood & Everyday Essentials',
      neighborhoodItems: [
        {
          title: 'Local Grocers & SPAR (3-5 mins walk / ~300m)',
          desc: 'Gilmerton Grocers and SPAR are just around the corner for fast daily essentials and fresh groceries.'
        },
        {
          title: 'Major Supermarkets (3 mins drive / 12 mins walk)',
          desc: 'A large Morrisons Moredun and a budget-friendly ALDI Gilmerton are minutes away for your weekly grocery shop.'
        },
        {
          title: 'Shopping Hubs (<10 mins drive)',
          desc: 'Cameron Toll Shopping Centre and Straiton Retail Park provide major department stores, apparel, and food courts.'
        }
      ],
      transitTitle: 'Getting into Edinburgh City Centre',
      transitItems: [
        {
          title: 'Lothian Buses Route 3 & 29 (Direct · 25-30 mins)',
          desc: 'Board nearby on Lasswade Road / Gilmerton Dykes Street to travel directly into Old Town, iconic Princes Street, and Edinburgh Waverley Train Station. Avoid expensive £30+ parking!'
        },
        {
          title: 'Bus Route 8 (Direct Connection)',
          desc: 'Frequent direct bus connecting you to other vibrant quarters, universities, and arts hubs of Edinburgh.'
        },
        {
          title: 'By Car: Edinburgh City Bypass (A720)',
          desc: 'Instant access to the bypass for quick travel to Edinburgh Airport (approx. 20-25 mins), South Queensferry, and the Highlands.'
        }
      ],
      attractionsTitle: 'Local Attractions & Landmarks',
      attractionsItems: [
        {
          title: 'Gilmerton Cove (5 mins walk)',
          desc: 'Discover Edinburgh’s best-kept secret — a mysterious underground cave network hand-carved in sandstone beneath the neighborhood streets!'
        },
        {
          title: 'Burdiehouse Valley Park (10 mins walk)',
          desc: 'A lush green nature reserve with scenic woodland paths, streams, and walking/jogging trails.'
        },
        {
          title: 'Edinburgh Castle & Royal Mile (20-25 mins bus)',
          desc: 'Catch a bus straight to the heart of world-famous monuments, Scotch whisky experiences, and street festivals.'
        },
        {
          title: 'Royal Infirmary of Edinburgh (5 mins drive)',
          desc: 'Conveniently situated just 5 minutes away — ideal for visiting medical professionals and hospital visitors.'
        }
      ]
    },
    snowsportsSection: {
      badge: 'NEARBY ADVENTURE · 7-10 MINS DRIVE',
      title: 'Midlothian Snowsports Centre at Hillend',
      subtitle: 'Scenic Pentland Hills · Thrills, Panoramic Skyline Views & Family Fun',
      desc: 'Just a 7-10 minute drive away via the A720 Bypass, Hillend Snowsports Centre in the Pentland Hills offers year-round alpine excitement with unforgettable panoramic vistas across Edinburgh:',
      features: [
        {
          title: 'Midlothian Alpine Coaster',
          desc: 'Experience Scotland’s very first alpine coaster! A thrilling gravity-driven toboggan ride twisting down the hillside with breathtaking panoramic views over the Edinburgh skyline.'
        },
        {
          title: 'Skiing & Snowboarding',
          desc: 'Home to Europe’s longest artificial ski slope, offering open slope practice, freestyle, and professional lessons for all ages and skill levels throughout the year.'
        },
        {
          title: 'Snow Tubing Fun',
          desc: 'High-speed exhilaration for the entire family! Whiz down dedicated chutes in giant inflatable tubes, complete with an uphill travelator carpet.'
        }
      ],
      chillout: 'After your adventure, warm up with hot chocolate at Cafe 360, or visit "The Steading" — a renowned traditional Scottish pub with an exceptional beer garden just down the road.'
    },
    hostSection: {
      title: 'Meet Your Host',
      badge: 'AIRBNB SUPERHOST',
      name: 'Jacek',
      role: 'Superhost · Dedicated Local Host',
      stats: {
        rating: '4.94 ★',
        reviews: '18 Reviews',
        hosting: 'Experienced Superhost',
        responseRate: '100% Response Rate',
        responseTime: 'Responds within an hour'
      },
      languages: 'Speaks: English & Polish (Polski)',
      work: 'Profession: Joiner & Carpenter',
      bio: 'Superhosts are experienced, highly rated hosts committed to providing outstanding, seamless stays for their guests. Jacek respects your privacy with independent keyless smart lock check-in, but is always available via phone, WhatsApp, or Airbnb app whenever you need recommendations or assistance.',
      messageBtn: 'Message Host Jacek'
    },
    reviewsSection: {
      title: 'Guest Reviews & Experiences',
      subtitle: 'Guests consistently praise the cleanliness, comfort of King beds, effortless check-in, and convenient location.',
      ratingValue: '4.94',
      ratingLabel: 'EXCEPTIONAL (GUEST FAVOURITE)',
      reviewsCountText: '18 authentic reviews on Airbnb',
      categories: [
        { label: 'Cleanliness', score: '5.0 / 5' },
        { label: 'Bed & Sleeping Comfort', score: '5.0 / 5' },
        { label: 'Check-in & Smart Lock', score: '5.0 / 5' },
        { label: 'Host Hospitality', score: '5.0 / 5' },
        { label: 'Getting Around & Buses', score: '4.9 / 5' },
        { label: 'Value for Money', score: '4.9 / 5' }
      ],
      reviewsList: [
        {
          author: 'Allison',
          meta: 'Eugene, Oregon · Stayed with kids',
          text: 'Very comfortable home with all amenities needed. The location is easy to get to and check in was a breeze! The beds are so comfortable; better than many places I\'ve stayed.',
          rating: 5
        },
        {
          author: 'Max',
          meta: 'Verified Airbnb Guest',
          text: 'Very clean, easy to use, spacious, tidy, utilities work, had everything I needed, shop nearby and only a car journey from city centre.',
          rating: 5
        },
        {
          author: 'Shahdin',
          meta: 'Verified Airbnb Guest (8 years on Airbnb)',
          text: 'Stay was wonderful. The house was clean aromatic and tidy. All the fabrics bed sheet towels were very much clean.. highly recommended!',
          rating: 5
        },
        {
          author: 'Marika',
          meta: 'Verified Airbnb Guest',
          text: 'We stayed for 1 night and property had everything we needed. Thank you so much!',
          rating: 5
        },
        {
          author: 'Aditya',
          meta: 'Verified Airbnb Guest',
          text: 'It was great we would love to come back again!',
          rating: 5
        },
        {
          author: 'Bin',
          meta: 'Verified Airbnb Guest (10 years on Airbnb)',
          text: 'Comfortable house in a quiet street. The landlord was very responsive and resolved everything right away. Great experience.',
          rating: 5
        }
      ]
    },
    rulesFaqSection: {
      title: 'House Rules & Frequently Asked Questions',
      subtitle: 'Clear guidelines ensuring a relaxing, seamless stay for all our guests.',
      rules: [
        {
          title: 'Check-in Time:',
          desc: 'From 16:00 onwards. Keyless self check-in via smart lock allows 100% arrival flexibility.'
        },
        {
          title: 'Checkout Time:',
          desc: 'Before 11:00 AM. Simple departure with smart lock.'
        },
        {
          title: 'Maximum Capacity:',
          desc: 'Maximum 4 guests. Ideal for families, couples, or small groups.'
        },
        {
          title: 'Parking:',
          desc: 'Free private driveway parking directly in front of the house included with every stay.'
        },
        {
          title: 'Smoking & Parties:',
          desc: 'Strictly non-smoking inside the house. No parties or excessive noise.'
        },
        {
          title: 'Safety & Security:',
          desc: 'Exterior security cameras for crime prevention. Smoke alarms, carbon monoxide detectors, and fire extinguisher installed.'
        },
        {
          title: 'Extended Stays:',
          desc: 'Long-term stays allowed (28+ days welcome for business, relocations, or workations).'
        }
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'How does check-in work?',
          a: 'Check-in is 100% self-contained using a secure digital smart lock. We send you the easy access code prior to arrival, so you can arrive anytime after 16:00 without needing to coordinate meeting in person.'
        },
        {
          q: 'Is parking guaranteed and free?',
          a: 'Yes! You have full, private use of our newly paved driveway right at the front door. It accommodates your vehicle free of charge with zero hassle.'
        },
        {
          q: 'How do we get to Edinburgh Castle, Princes Street, and the Royal Mile?',
          a: 'Lothian Buses 3 and 29 depart just a 3-minute walk from the house on Lasswade Road / Gilmerton Dykes Street. They run frequently and bring you directly into the historic centre and Edinburgh Waverley Station in 25-30 minutes, saving you expensive city parking costs.'
        },
        {
          q: 'Is Wi-Fi fast enough for streaming and remote work?',
          a: 'Yes, we provide superfast unlimited high-speed broadband throughout the house, suitable for 4K Netflix streaming, Zoom calls, and working remotely.'
        },
        {
          q: 'Are bed linens and towels provided?',
          a: 'Yes, fresh high-grade hotel linens, king-size pillows, blankets, and plush bath towels are fully prepared for every guest.'
        },
        {
          q: 'Are grocery stores within walking distance?',
          a: 'SPAR and Gilmerton Grocers are only a 3-5 minute walk (300m) away. Larger supermarkets like Morrisons and ALDI are just a 3-minute drive or 12-minute walk.'
        }
      ]
    },
    contactBanner: {
      title: 'Inquire or Book Directly with Host Jacek',
      desc: 'Get the guaranteed best rate, personal hospitality, and direct communication without intermediary booking fees.',
      callBtn: '+44 7988 065088',
      whatsappBtn: 'CHAT ON WHATSAPP',
      emailBtn: 'SEND AN EMAIL'
    },
    footer: {
      brandDesc: 'Modern 2-bedroom house in Gilmerton, Edinburgh (EH17) with private garden, free driveway, superfast Wi-Fi, and direct bus connection to City Centre.',
      languagesSupported: 'Host speaks: English & Polish',
      addressHeader: 'ADDRESS & LOCATION',
      addressText: [
        'Gilmerton, Edinburgh (EH17)',
        'Midlothian, Scotland',
        'United Kingdom'
      ],
      mapsLinkText: 'Open in Google Maps →',
      contactHeader: 'DIRECT CONTACT WITH HOST',
      quickLinksHeader: 'QUICK NAVIGATION',
      allRightsReserved: 'All rights reserved.',
      checkInNote: 'Self check-in after 16:00 · Checkout before 11:00'
    },
    floating: {
      hostTitle: 'Contact Host Jacek',
      callNow: 'Call +44 7988 065088',
      whatsappNow: 'Chat on WhatsApp',
      emailNow: 'Email Host',
      directTalk: 'Direct phone line',
      instantReply: 'Fast personal reply'
    }
  },

  pl: {
    meta: {
      title: 'The Edinburgh Garden House | Nowoczesny Dom z Ogrodem i Parkingiem w Edynburgu',
      description: 'Komfortowy dom z 2 sypialniami w Edynburgu (EH17, Gilmerton). Prywatny ogród, darmowy podjazd na auto, szybkie Wi-Fi, Netflix i bezpośredni autobus do centrum.'
    },
    brand: {
      name: 'THE EDINBURGH GARDEN HOUSE',
      tagline: 'Nowoczesny 2-pokojowy dom z prywatnym ogrodem, podjazdem i Netflixem – bezpośredni autobus',
      sub: 'GILMERTON · EDYNBURG EH17 · SZKOCJA'
    },
    topBar: {
      selectLanguage: 'Język:',
      directContact: 'Rezerwacja bezpośrednia i kontakt: +44 7988 065088'
    },
    nav: {
      about: 'O DOMU',
      spaces: 'UKŁAD I POKOJE',
      amenities: 'UDOGODNIENIA',
      gallery: 'GALERIA',
      location: 'LOKALIZACJA I DOJAZD',
      attractions: 'ATRAKCJE',
      snowsports: 'SPORTY ZIMOWE',
      host: 'GOSPODARZ',
      reviews: 'OPINIE',
      faq: 'ZASADY I FAQ',
      contact: 'KONTAKT',
      bookNow: 'ZAREZERWUJ POBYT'
    },
    hero: {
      badge: '★ WYBÓR GOŚCI · JEDEN Z NAJWYŻEJ OCENIANYCH DOMÓW NA AIRBNB',
      title: 'Nowoczesny 2-pokojowy dom z prywatnym ogrodem, podjazdem i Netflixem – bezpośredni autobus',
      lead: 'Spędź niezapomniane chwile w tym wyjątkowym, przyjaznym dla rodzin domu w spokojnej dzielnicy Gilmerton w Edynburgu (EH17). Do Twojej dyspozycji jasny dom szeregowy, prywatny podjazd na samochód, słoneczny ogród oraz bezpośrednie, częste autobusy prosto do serca Edynburga.',
      motto: 'Oaza spokoju z błyskawicznym dojazdem do centrum — Twój idealny szkocki azyl.',
      stats: {
        guests: 'Do 4 Gości',
        bedrooms: '2 Sypialnie',
        beds: '2 Duże Łóżka King Size',
        bathrooms: '1 Łazienka z wanną',
        driveway: 'Prywatny, bezpłatny podjazd',
        garden: 'Ogrodzony prywatny ogród',
        directBus: 'Autobus prosto do centrum (25 min)',
        netflix: 'Smart TV + darmowy Netflix',
        wifi: 'Światłowodowe szybkie Wi-Fi'
      },
      ratingSnippet: '4.94 / 5.0 (18 autentycznych opinii na Airbnb) · Superhost Jacek'
    },
    bookingBar: {
      checkIn: 'PRZYJAZD',
      checkOut: 'WYJAZD',
      guests: 'GOŚCIE',
      guestsCount: (n) => `${n} ${n === 1 ? 'gość' : n < 5 ? 'goście' : 'gości'}`,
      checkAvailability: 'SPRAWDŹ TERMIN / ZAPYTAJ',
      selectDates: 'Wybierz termin',
      modalTitle: 'The Edinburgh Garden House — Rezerwacja i Dostępność',
      modalSubtitle: 'Gilmerton, Edynburg EH17 · Cały dom na wyłączność z ogrodem i podjazdem',
      directBookingNote: 'Gwarancja rezerwacji bezpośredniej bez prowizji pośredników. Skontaktuj się z gospodarzem Jackiem przez WhatsApp, telefon lub e-mail:',
      callHost: 'Zadzwoń do Jacka: +44 7988 065088',
      whatsappHost: 'Napisz na WhatsApp',
      emailHost: 'E-mail: jacek31-76@hotmail.com',
      selectedDates: (inDate, outDate, g) => `Wybrany termin: ${inDate} do ${outDate} (${g})`,
      months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
      days: ['ND', 'PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO']
    },
    highlights: {
      title: 'Komfortowy wypoczynek w Edynburgu (EH17)',
      subtitle: 'SPRAWDŹ DOSKONAŁĄ LOKALIZACJĘ W GILMERTON PRZY OBWODNICY A720 I LINIACH AUTOBUSOWYCH',
      cards: [
        {
          tag: 'Komfort i relaks',
          title: 'Jasny Salon & Netflix',
          desc: 'Przytulny salon z wygodną sofą, stołem jadalnianym i Smart TV z wliczonym bezpłatnym Netflixem na filmowe wieczory.'
        },
        {
          tag: 'Wygodne parkowanie',
          title: 'Prywatny, odnowiony podjazd',
          desc: 'Jedno z nielicznych miejsc w okolicy z dedykowanym, świeżo odnowionym podjazdem tuż przed wejściem do domu.'
        },
        {
          tag: 'Oaza zieleni',
          title: 'Prywatny, ogrodzony ogród',
          desc: 'W pełni ogrodzony, bezpieczny dla dzieci ogródek z zadbanym trawnikiem, patio i meblami wypoczynkowymi na poranną kawę.'
        },
        {
          tag: 'Wysoki standard snu',
          title: 'Luksusowe łóżka King Size',
          desc: 'Dwie niezależne sypialnie z dużymi, wygodnymi łóżkami King Size, świeżą pościelą i roletami zaciemniającymi.'
        }
      ]
    },
    spacesSection: {
      title: 'Przestrzeń stworzona dla rodzin i grup',
      subtitle: 'Cały dom w zabudowie szeregowej na wyłączność — domowe ciepło i nowoczesne udogodnienia.',
      lead: 'Witamy w naszym jasnym i proporcjonalnym domu w spokojnej dzielnicy Gilmerton w Edynburgu. To doskonałe miejsce dla rodzin, przyjaciół czy osób podróżujących służbowo, łączące ciszę z szybkim dostępem do centrum Edynburga.',
      spaces: [
        {
          title: 'Salon wypoczynkowy',
          desc: 'Przytulna i jasna przestrzeń z wygodną kanapą, stolikiem kawowym i telewizorem — idealna na odpoczynek po całym dniu zwiedzania.',
          icon: 'couch'
        },
        {
          title: '2 Sypialnie King Size',
          desc: 'Komfortowe pokoje z dużymi, luksusowymi łóżkami King Size, świeżą pościelą, szafami i roletami zapewniającymi spokojny sen.',
          icon: 'bed'
        },
        {
          title: 'W pełni wyposażona kuchnia',
          desc: 'Płyta kuchenna, piekarnik, lodówka, zamrażarka, mikrofala, czajnik, toster, naczynia, garnki, kawa i stół jadalniany.',
          icon: 'utensils'
        },
        {
          title: 'Czysta, nowoczesna łazienka',
          desc: 'Wygodna wanna, gorąca woda, suszarka do włosów, zestaw kosmetyków (szampon, odżywka, żel) oraz puszyste ręczniki.',
          icon: 'bath'
        },
        {
          title: 'Prywatny ogród z patio',
          desc: 'Ogrodzony ogród na tyłach domu z zestawem mebli ogrodowych — świetne miejsce na kawę na świeżym powietrzu.',
          icon: 'tree'
        },
        {
          title: 'Bezpłatny podjazd parkingowy',
          desc: 'Prywatny podjazd bezpośrednio przed domem — zapomnij o szukaniu płatnych miejsc parkingowych w mieście.',
          icon: 'car'
        }
      ],
      quoteLead: 'Domowy klimat i wygoda w stolicy Szkocji.',
      quoteLine1: 'Wszystkie detale dopracowane z myślą o bezproblemowym wypoczynku.',
      quoteLine2: 'Bezpośrednie autobusy prosto na Princes Street, Royal Mile i stację Waverley.',
      quoteLine3: 'Cisza i prywatność we własnym ogrodzie po dniu pełnym wrażeń w Edynburgu.',
      quoteAccent: 'Omiń drogie parkingi w centrum i wypocznij w komforcie.'
    },
    gallerySection: {
      title: 'Przestrzeń Domu w Kadrach',
      subtitle: 'Zobacz autentyczne zdjęcia salonu, sypialni, prywatnego ogrodu i podjazdu.',
      allFilter: 'Wszystkie zdjęcia',
      categories: {
        all: 'Wszystkie',
        living: 'Salon',
        bedrooms: 'Sypialnie',
        kitchen: 'Kuchnia i Jadalnia',
        garden: 'Prywatny Ogród',
        driveway: 'Podjazd i Budynek'
      },
      openLightbox: 'Kliknij, aby powiększyć'
    },
    amenitiesSection: {
      title: 'Co Oferuje To Miejsce',
      subtitle: 'Kompletne wyposażenie i udogodnienia przygotowane na Twój pobyt.',
      groups: [
        {
          category: 'Łazienka',
          items: [
            { name: 'Wanna z prysznicem', included: true },
            { name: 'Suszarka do włosów', included: true },
            { name: 'Środki czystości', included: true },
            { name: 'Szampon i odżywka', included: true },
            { name: 'Mydło do ciała i żel pod prysznic', included: true },
            { name: 'Ciepła woda bez limitu', included: true }
          ]
        },
        {
          category: 'Sypialnia i pranie',
          items: [
            { name: 'Pralka automatyczna', included: true },
            { name: 'Podstawowe wyposażenie (ręczniki, pościel, mydło, papier)', included: true },
            { name: 'Wieszaki i szafy na ubrania', included: true },
            { name: 'Świeża pościel, dodatkowe poduszki i koce', included: true },
            { name: 'Rolety zaciemniające pokój', included: true },
            { name: 'Żelazko i deska', included: true }
          ]
        },
        {
          category: 'Rozrywka i Internet',
          items: [
            { name: 'Smart TV z darmowym dostępem do Netflix', included: true },
            { name: 'Bardzo szybkie Wi-Fi w całym domu', included: true },
            { name: 'Dedykowane miejsce do pracy zdalnej', included: true }
          ]
        },
        {
          category: 'Kuchnia i posiłki',
          items: [
            { name: 'W pełni wyposażona kuchnia do gotowania', included: true },
            { name: 'Lodówka i zamrażarka', included: true },
            { name: 'Kuchenka, piekarnik i mikrofalówka', included: true },
            { name: 'Czajnik, toster i zapas kawy', included: true },
            { name: 'Podstawy gotowania (garnki, patelnie, olej, sól, pieprz)', included: true },
            { name: 'Zastawa, sztućce, kieliszki do wina i blacha do pieczenia', included: true },
            { name: 'Stół jadalniany z krzesłami', included: true }
          ]
        },
        {
          category: 'Ogród i parking',
          items: [
            { name: 'Prywatne niezależne wejście', included: true },
            { name: 'Prywatny, ogrodzony ogródek z trawnikiem', included: true },
            { name: 'Meble ogrodowe i strefa wypoczynku na świeżym powietrzu', included: true },
            { name: 'Darmowy prywatny podjazd parkingowy na posesji', included: true }
          ]
        },
        {
          category: 'Bezpieczeństwo i zasady',
          items: [
            { name: 'Samodzielne zameldowanie (Smart Lock)', included: true },
            { name: 'Dozwolone pobyty długoterminowe (28+ dni)', included: true },
            { name: 'Zewnętrzne kamery bezpieczeństwa (ochrona posesji)', included: true },
            { name: 'Czujnik dymu i czujnik tlenku węgla', included: true },
            { name: 'Gaśnica', included: true },
            { name: 'Wydajne ogrzewanie całoroczne', included: true }
          ]
        }
      ],
      notIncludedTitle: 'Niedostępne: Suszarka bębnowa · Klimatyzacja'
    },
    locationSection: {
      title: 'Lokalizacja, Okolica i Komunikacja',
      subtitle: 'Spokojny Gilmerton (EH17) — świetna baza wypadowa do centrum Edynburga i szkockiej natury.',
      neighborhoodTitle: 'Okolica i codzienne zakupy',
      neighborhoodItems: [
        {
          title: 'Sklepy osiedlowe i SPAR (3-5 minut pieszo / ok. 300 m)',
          desc: 'Gilmerton Grocers i SPAR znajdują się tuż za rogiem po szybkie codzienne zakupy i świeże pieczywo.'
        },
        {
          title: 'Duże markety (3 minuty autem / 12 minut spacerem)',
          desc: 'Wielki supermarket Morrisons Moredun oraz tani dyskont ALDI Gilmerton na większe zakupy spożywcze.'
        },
        {
          title: 'Centra handlowe (<10 minut autem)',
          desc: 'Cameron Toll Shopping Centre oraz Straiton Retail Park oferują mnóstwo sklepów, odzież i strefy gastronomiczne.'
        }
      ],
      transitTitle: 'Dojazd do Centrum Edynburga',
      transitItems: [
        {
          title: 'Autobusy Lothian 3 i 29 (Bezpośrednie · 25-30 min)',
          desc: 'Przystanki tuż obok na Lasswade Road / Gilmerton Dykes Street prowadzą bezpośrednio na Stare Miasto (Old Town), Princes Street i stację Edinburgh Waverley. Zapomnij o drogich miejskich parkingach!'
        },
        {
          title: 'Linia autobusowa 8 (Bezpośrednie połączenie)',
          desc: 'Łączy dzielnicę z innymi tętniącymi życiem rejonami Edynburga, uczelniami i centrami kultury.'
        },
        {
          title: 'Samochodem: Obwodnica Edynburga (A720 Bypass)',
          desc: 'Ekspresowy wyjazd na obwodnicę umożliwia szybki dojazd na lotnisko (20-25 min) i wycieczki w szkockie Highlands.'
        }
      ],
      attractionsTitle: 'Lokalne Atrakcje w Sąsiedztwie',
      attractionsItems: [
        {
          title: 'Gilmerton Cove (5 minut pieszo)',
          desc: 'Odkryj najlepiej strzeżony sekret Edynburga — tajemniczy system podziemnych jaskiń wykutych ręcznie w piaskowcu tuż pod dzielnicą!'
        },
        {
          title: 'Burdiehouse Valley Park (10 minut pieszo)',
          desc: 'Malowniczy park krajobrazowy ze ścieżkami przyrodniczymi, idealny na poranny spacer, bieg czy relaks z dziećmi.'
        },
        {
          title: 'Zamek w Edynburgu i Royal Mile (20-25 minut autobusem)',
          desc: 'Prosty dojazd autobusem prosto pod zamek, zabytkowy trakt królewski i słynne szkockie puby.'
        },
        {
          title: 'Szpital Royal Infirmary (5 minut autem)',
          desc: 'Bardzo dogodne położenie zaledwie 5 minut od głównego kompleksu szpitalnego w Edynburgu.'
        }
      ]
    },
    snowsportsSection: {
      badge: 'BLISKA PRZYGODA · 7-10 MINUT AUTEM',
      title: 'Centrum Sportów Zimowych Hillend',
      subtitle: 'Góry Pentland Hills · Alpine Coaster, Narty i Zabawa dla Całej Rodziny',
      desc: 'Zaledwie 7-10 minut drogi obwodnicą A720 znajduje się słynne Midlothian Snowsports Centre w Hillend u podnóża Pentland Hills. To całoroczna atrakcja z niezwykłą panoramą na cały Edynburg:',
      features: [
        {
          title: 'Midlothian Alpine Coaster',
          desc: 'Pierwszy w całej Szkocji alpejski tor saneczkowy! Niezwykle ekscytujący zjazd grawitacyjny ze spektakularnym widokiem na panoramę Edynburga.'
        },
        {
          title: 'Narty i Snowboard',
          desc: 'Najdłuższy sztuczny stok narciarski w Europie! Otwarte zjazdy i lekcje dla dzieci i dorosłych o każdym poziomie zaawansowania przez okrągły rok.'
        },
        {
          title: 'Snow Tubing (Zjazdy na pontonach)',
          desc: 'Kapitalna zabawa dla każdego — dynamiczne zjazdy na wielkich dmuchanych kołach po dedykowanych torach z wyciągiem taśmowym.'
        }
      ],
      chillout: 'Po zabawie rozgrzej się gorącą czekoladą w Cafe 360 lub odwiedź „The Steading” — tradycyjny szkocki pub z wyśmienitym ogródkiem piwnym tuż obok stoku.'
    },
    hostSection: {
      title: 'Poznaj Gospodarza',
      badge: 'SUPERHOST AIRBNB',
      name: 'Jacek',
      role: 'Superhost · Doświadczony Gospodarz',
      stats: {
        rating: '4.94 ★',
        reviews: '18 Opinii',
        hosting: 'Wysoko oceniany Superhost',
        responseRate: '100% Wskaźnik odpowiedzi',
        responseTime: 'Odpowiada w ciągu godziny'
      },
      languages: 'Mówi po: angielsku i polsku',
      work: 'Zawód: Stolarz / Cieśla (Joiner carpenter)',
      bio: 'Tytuł Superhost otrzymują doświadczeni gospodarze z najwyższymi ocenami, dbający o bezproblemowy pobyt gości. Jacek w pełni szanuje prywatność (samodzielne zameldowanie na kod w smart locku), a jednocześnie jest zawsze dostępny pod telefonem, na WhatsAppie i w aplikacji.',
      messageBtn: 'Napisz do Jacka'
    },
    reviewsSection: {
      title: 'Opinie Gości o Obiekcie',
      subtitle: 'Goście szczególnie wyróżniają nienaganną czystość, wygodę łóżek King Size, prosty meldunek i świetną komunikację.',
      ratingValue: '4.94',
      ratingLabel: 'WYJĄTKOWY (WYBÓR GOŚCI)',
      reviewsCountText: '18 autentycznych opinii na Airbnb',
      categories: [
        { label: 'Czystość', score: '5.0 / 5' },
        { label: 'Komfort łóżek i snu', score: '5.0 / 5' },
        { label: 'Zameldowanie (Smart Lock)', score: '5.0 / 5' },
        { label: 'Gościnność i pomoc', score: '5.0 / 5' },
        { label: 'Dojazd i autobusy', score: '4.9 / 5' },
        { label: 'Stosunek jakości do ceny', score: '4.9 / 5' }
      ],
      reviewsList: [
        {
          author: 'Allison',
          meta: 'Eugene, Oregon · Pobyt z dziećmi',
          text: 'Bardzo wygodny dom ze wszystkimi potrzebnymi udogodnieniami. Łatwy dojazd, a zameldowanie to czysta przyjemność! Łóżka są niesamowicie wygodne; lepsze niż w wielu innych miejscach, w których nocowałam.',
          rating: 5
        },
        {
          author: 'Max',
          meta: 'Zweryfikowany gość Airbnb',
          text: 'Bardzo czysto, łatwo, przestronnie i porządnie. Wszystkie sprzęty działają, niczego nam nie brakowało. Sklep tuż obok, a do centrum to tylko krótka podróż.',
          rating: 5
        },
        {
          author: 'Shahdin',
          meta: 'Zweryfikowany gość Airbnb (8 lat na Airbnb)',
          text: 'Pobyt był wspaniały. Dom był czysty, pachnący i zadbany. Wszystkie pościele i ręczniki były idealnie czyste.. gorąco polecam!',
          rating: 5
        },
        {
          author: 'Marika',
          meta: 'Zweryfikowany gość Airbnb',
          text: 'Zatrzymaliśmy się na 1 noc i dom miał absolutnie wszystko, czego potrzebowaliśmy. Dziękujemy bardzo!',
          rating: 5
        },
        {
          author: 'Aditya',
          meta: 'Zweryfikowany gość Airbnb',
          text: 'Było wspaniale, bardzo chętnie wrócimy tu ponownie!',
          rating: 5
        },
        {
          author: 'Bin',
          meta: 'Zweryfikowany gość Airbnb (10 lat na Airbnb)',
          text: 'Cichy, wygodny dom. Właściciel bardzo pomocny i natychmiast reagował na każde pytania. Udany pobyt.',
          rating: 5
        }
      ]
    },
    rulesFaqSection: {
      title: 'Zasady Pobytu i Najczęstsze Pytania (FAQ)',
      subtitle: 'Przejrzyste reguły gwarantujące spokojny i bezpieczny wypoczynek.',
      rules: [
        {
          title: 'Zameldowanie:',
          desc: 'Od godziny 16:00. Samodzielny meldunek za pomocą inteligentnego zamka zapewnia 100% elastyczności przyjazdu.'
        },
        {
          title: 'Wymeldowanie:',
          desc: 'Do godziny 11:00 rano.'
        },
        {
          title: 'Maksymalna liczba osób:',
          desc: 'Maksymalnie 4 gości. Idealny układ dla rodzin, par lub małych grup znajomych.'
        },
        {
          title: 'Parking:',
          desc: 'Bezpłatny prywatny podjazd przed samym wejściem do budynku w cenie pobytu.'
        },
        {
          title: 'Kultura pobytu:',
          desc: 'Całkowity zakaz palenia tytoniu wewnątrz domu. Obiekt nie jest przeznaczony na organizację imprez.'
        },
        {
          title: 'Bezpieczeństwo:',
          desc: 'Zewnętrzne kamery monitoringu (zapobieganie przestępczości). Czujniki dymu i czadu, gaśnica na wyposażeniu.'
        },
        {
          title: 'Długie pobyty:',
          desc: 'Możliwość rezerwacji pobytów długoterminowych (od 28 dni wzwyż).'
        }
      ],
      faqTitle: 'Często Zadawane Pytania',
      faqs: [
        {
          q: 'Jak wygląda zameldowanie?',
          a: 'Zameldowanie jest w 100% bezkontaktowe dzięki smart lockowi z kodem cyfrowym. Kod otrzymasz przed przyjazdem, dzięki czemu możesz przyjechać o dowolnej porze po 16:00 bez stresu i konieczności umawiania się na odbiór kluczy.'
        },
        {
          q: 'Czy parking jest naprawdę prywatny i bezpłatny?',
          a: 'Tak! Przed domem znajduje się świeżo zmodernizowany, prywatny podjazd przeznaczony wyłącznie dla Twojego samochodu, całkowicie bezpłatnie.'
        },
        {
          q: 'Jak najwygodniej dojechać do Zamku i na Royal Mile?',
          a: 'Autobusy Lothian 3 i 29 odjeżdżają zaledwie 3 minuty spacerem od domu. Kursują często i dowożą bezpośrednio pod Old Town, Princes Street i stację Waverley w około 25-30 minut, co pozwala zaoszczędzić na drogich parkingach w centrum.'
        },
        {
          q: 'Czy Wi-Fi nadaje się do pracy zdalnej i filmów?',
          a: 'Tak, w domu działa stabilne, szybkie łącze bezprzewodowe bez limitów — idealne do wideokonferencji i oglądania Netflixa w 4K.'
        },
        {
          q: 'Czy pościel i ręczniki są na miejscu?',
          a: 'Tak, dla każdego gościa przygotowany jest komplet świeżej pościeli hotelowej i miękkich ręczników kąpielowych.'
        },
        {
          q: 'Gdzie można zrobić szybkie zakupy spożywcze?',
          a: 'Sklep SPAR i Gilmerton Grocers są oddalone o 3-5 minut spacerem (300 m). Duży supermarket Morrisons i ALDI to 3 minuty jazdy samochodem.'
        }
      ]
    },
    contactBanner: {
      title: 'Zapytaj o wolny termin bezpośrednio u gospodarza',
      desc: 'Najlepsza gwarantowana cena, indywidualne podejście i brak prowizji platform pośredniczących. Skontaktuj się bezpośrednio z Jackiem.',
      callBtn: '+44 7988 065088',
      whatsappBtn: 'NAPISZ NA WHATSAPP',
      emailBtn: 'WYŚLIJ E-MAIL'
    },
    footer: {
      brandDesc: 'Nowoczesny 2-pokojowy dom w Edynburgu (EH17, Gilmerton) z prywatnym ogrodem, bezpłatnym podjazdem, szybkim Wi-Fi i bezpośrednim autobusem do centrum.',
      languagesSupported: 'Gospodarz mówi po: angielsku i polsku',
      addressHeader: 'ADRES I LOKALIZACJA',
      addressText: [
        'Gilmerton, Edynburg (EH17)',
        'Midlothian, Szkocja',
        'Wielka Brytania'
      ],
      mapsLinkText: 'Otwórz w Google Maps →',
      contactHeader: 'BEZPOŚREDNI KONTAKT',
      quickLinksHeader: 'NAWIGACJA',
      allRightsReserved: 'Wszelkie prawa zastrzeżone.',
      checkInNote: 'Samodzielne zameldowanie od 16:00 · Wymeldowanie do 11:00'
    },
    floating: {
      hostTitle: 'Kontakt z Gospodarzem Jackiem',
      callNow: 'Zadzwoń: +44 7988 065088',
      whatsappNow: 'Napisz na WhatsApp',
      emailNow: 'Wyślij e-mail',
      directTalk: 'Bezpośrednia rozmowa',
      instantReply: 'Szybka odpowiedź'
    }
  },

  de: {
    meta: {
      title: 'The Edinburgh Garden House | Modernes Haus mit Garten & Parkplatz in Edinburgh',
      description: 'Modernes 2-Zimmer-Haus in Edinburgh (EH17) mit privatem Garten, kostenlosem Parkplatz vor dem Haus, schnellem WLAN, Netflix und direktem Bus ins Zentrum.'
    },
    brand: {
      name: 'THE EDINBURGH GARDEN HOUSE',
      tagline: 'Modernes 2-Zimmer-Haus mit privatem Garten, Einfahrt & Netflix – Direkter Bus',
      sub: 'GILMERTON · EDINBURGH EH17 · SCHOTTLAND'
    },
    topBar: {
      selectLanguage: 'Sprache:',
      directContact: 'Direktbuchung & Kontakt: +44 7988 065088'
    },
    nav: {
      about: 'ÜBER DAS HAUS',
      spaces: 'RÄUME',
      amenities: 'AUSSTATTUNG',
      gallery: 'GALERIE',
      location: 'LAGE & BUSSE',
      attractions: 'ATTRAKTIONEN',
      snowsports: 'WINTERSPORT',
      host: 'GASTGEBER',
      reviews: 'BEWERTUNGEN',
      faq: 'REGELN & FAQ',
      contact: 'KONTAKT',
      bookNow: 'JETZT BUCHEN'
    },
    hero: {
      badge: '★ GÄSTEFAVORIT · EINE DER BELIEBTESTEN UNTERKÜNFTE AUF AIRBNB',
      title: 'Modernes 2-Zimmer-Haus mit privatem Garten, Einfahrt & Netflix – Direkter Bus',
      lead: 'Schaffen Sie unvergessliche Erinnerungen in diesem familienfreundlichen Haus in Gilmerton, Edinburgh. Helles Reihenhaus mit privater Einfahrt, sonnigem Garten und regelmäßigen direkten Bussen in das historische Herz von Edinburgh.',
      motto: 'Ruhe und Erholung mit bester Anbindung an die Stadt — Ihr perfektes Zuhause in Schottland.',
      stats: {
        guests: 'Bis zu 4 Gäste',
        bedrooms: '2 Schlafzimmer',
        beds: '2 große Kingsize-Betten',
        bathrooms: '1 Badezimmer',
        driveway: 'Kostenlose private Einfahrt',
        garden: 'Umzäunter privater Garten',
        directBus: 'Direkter Bus ins Zentrum (25 Min.)',
        netflix: 'Smart-TV + kostenloses Netflix',
        wifi: 'Ultraschnelles Highspeed-WLAN'
      },
      ratingSnippet: '4.94 / 5.0 (18 echte Bewertungen auf Airbnb) · Superhost Jacek'
    },
    bookingBar: {
      checkIn: 'ANREISE',
      checkOut: 'ABREISE',
      guests: 'GÄSTE',
      guestsCount: (n) => `${n} ${n === 1 ? 'Gast' : 'Gäste'}`,
      checkAvailability: 'VERFÜGBARKEIT PRÜFEN',
      selectDates: 'Daten wählen',
      modalTitle: 'The Edinburgh Garden House — Reservierung & Kontakt',
      modalSubtitle: 'Gilmerton, Edinburgh EH17 · Gesamtes Haus mit Garten & privatem Parkplatz',
      directBookingNote: 'Direktbuchung ohne Buchungsgebühren. Kontaktieren Sie Gastgeber Jacek direkt per WhatsApp, Telefon oder E-Mail:',
      callHost: 'Jacek anrufen: +44 7988 065088',
      whatsappHost: 'Auf WhatsApp schreiben',
      emailHost: 'E-Mail: jacek31-76@hotmail.com',
      selectedDates: (inDate, outDate, g) => `Gewählter Zeitraum: ${inDate} bis ${outDate} (${g})`,
      months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      days: ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA']
    },
    highlights: {
      title: 'Komfortables Wohnen in Edinburgh (EH17)',
      subtitle: 'PERFEKTE LAGE IN GILMERTON AN DER A720 BYPASS & DIREKTEN BUSLINIEN',
      cards: [
        {
          tag: 'Gemütlichkeit & Komfort',
          title: 'Helles Wohnzimmer & Netflix',
          desc: 'Einladender Wohnbereich mit gemütlichem Sofa, Esstisch und Smart-TV mit kostenlosem Netflix für Filmabende.'
        },
        {
          tag: 'Stressfreies Parken',
          title: 'Eigene renovierte Einfahrt',
          desc: 'Eine der wenigen Unterkünfte der Gegend mit eigenem, frisch renoviertem Parkplatz direkt vor dem Haus.'
        },
        {
          tag: 'Grüne Oase',
          title: 'Privater eingezäunter Garten',
          desc: 'Vollständig umzäunter Garten mit Kunstrasen, Terrasse und Loungemöbeln für Ihren Morgenkaffee.'
        },
        {
          tag: 'Höchster Schlafkomfort',
          title: 'Luxuriöse Kingsize-Betten',
          desc: 'Zwei unabhängige Schlafzimmer mit erstklassigen Kingsize-Betten, frischer Hotelbettwäsche und Verdunkelungsrollos.'
        }
      ]
    },
    spacesSection: {
      title: 'Aufteilung & Räumlichkeiten',
      subtitle: 'Reihenhaus zur alleinigen Nutzung — wohnliche Wärme und moderne Ausstattung.',
      lead: 'Willkommen in unserem hellen und großzügigen Haus im ruhigen Viertel Gilmerton in Edinburgh. Ideal für Familien, Paare oder Geschäftsreisende.',
      spaces: [
        {
          title: 'Wohnzimmer',
          desc: 'Gemütlicher und heller Wohnbereich mit bequemer Couch und TV — ideal zum Entspannen nach einem ereignisreichen Tag.',
          icon: 'couch'
        },
        {
          title: 'Zwei Kingsize-Schlafzimmer',
          desc: 'Bequeme Betten mit hochwertigen Kingsize-Matratzen, frischer Wäsche, viel Kleiderschrankplatz und Verdunkelung.',
          icon: 'bed'
        },
        {
          title: 'Voll ausgestattete Küche',
          desc: 'Herd, Backofen, Kühlschrank, Gefrierfach, Mikrowelle, Wasserkocher, Toaster, Kaffee, Kochgeschirr und Esstisch.',
          icon: 'utensils'
        },
        {
          title: 'Modernes Badezimmer',
          desc: 'Bequeme Badewanne mit Dusche, Föhn, Shampoo, Duschgel und flauschig weichen Handtüchern.',
          icon: 'bath'
        },
        {
          title: 'Privater Garten mit Terrasse',
          desc: 'Eingezäunter Gartenbereich mit Sitzgelegenheiten zum Verweilen im Freien in vollkommener Privatsphäre.',
          icon: 'tree'
        },
        {
          title: 'Kostenlose Einfahrt',
          desc: 'Privater Stellplatz direkt vor der Haustür — sparen Sie sich teure Parkgebühren in der Stadt.',
          icon: 'car'
        }
      ],
      quoteLead: 'Wohlfühlatmosphäre und Komfort in Edinburgh.',
      quoteLine1: 'Durchdacht bis ins kleinste Detail für einen erholsamen Aufenthalt.',
      quoteLine2: 'Direkte Busse ohne Umsteigen zur Princes Street, Royal Mile und Waverley Station.',
      quoteLine3: 'Entspannte Abende im eigenen Garten nach Erkundung der schottischen Hauptstadt.',
      quoteAccent: 'Sparen Sie teures Parken im Zentrum und genießen Sie beste Ruhe.'
    },
    gallerySection: {
      title: 'Impressionen des Hauses',
      subtitle: 'Entdecken Sie das Wohnzimmer, die Schlafzimmer, den Garten und die Einfahrt auf Fotos.',
      allFilter: 'Alle Fotos',
      categories: {
        all: 'Alle',
        living: 'Wohnzimmer',
        bedrooms: 'Schlafzimmer',
        kitchen: 'Küche & Essen',
        garden: 'Privater Garten',
        driveway: 'Einfahrt & Außen'
      },
      openLightbox: 'Klicken zum Vergrößern'
    },
    amenitiesSection: {
      title: 'Ausstattung & Annehmlichkeiten',
      subtitle: 'Alles vorhanden für einen rundum sorglosen Aufenthalt.',
      groups: [
        {
          category: 'Badezimmer',
          items: [
            { name: 'Badewanne mit Dusche', included: true },
            { name: 'Haartrockner', included: true },
            { name: 'Reinigungsmittel', included: true },
            { name: 'Shampoo & Spülung', included: true },
            { name: 'Körperseife & Duschgel', included: true },
            { name: 'Warmwasser rund um die Uhr', included: true }
          ]
        },
        {
          category: 'Schlafzimmer & Wäsche',
          items: [
            { name: 'Waschmaschine', included: true },
            { name: 'Grundausstattung (Handtücher, Bettwäsche, Seife)', included: true },
            { name: 'Kleiderbügel & Stauraum', included: true },
            { name: 'Frische Bettwäsche & zusätzliche Decken', included: true },
            { name: 'Verdunkelungsrollos', included: true },
            { name: 'Bügeleisen', included: true }
          ]
        },
        {
          category: 'Unterhaltung & Internet',
          items: [
            { name: 'Smart-TV mit kostenlosem Netflix', included: true },
            { name: 'Ultraschnelles WLAN im gesamten Haus', included: true },
            { name: 'Eigener Arbeitsplatz für Homeoffice', included: true }
          ]
        },
        {
          category: 'Küche & Kochen',
          items: [
            { name: 'Komplette Einbauküche', included: true },
            { name: 'Kühlschrank & Gefrierfach', included: true },
            { name: 'Herd, Backofen & Mikrowelle', included: true },
            { name: 'Wasserkocher, Toaster & Kaffee', included: true },
            { name: 'Grundausstattung (Töpfe, Pfannen, Öl, Gewürze)', included: true },
            { name: 'Geschirr, Besteck & Weingläser', included: true },
            { name: 'Esstisch mit Stühlen', included: true }
          ]
        },
        {
          category: 'Garten & Parken',
          items: [
            { name: 'Eigener Eingang', included: true },
            { name: 'Eingezäunter Garten mit Terrasse', included: true },
            { name: 'Gartenmöbel & Essbereich im Freien', included: true },
            { name: 'Kostenlose private Einfahrt auf dem Grundstück', included: true }
          ]
        },
        {
          category: 'Sicherheit & Services',
          items: [
            { name: 'Selbst-Check-in via Smart Lock', included: true },
            { name: 'Langzeitaufenthalte möglich (28+ Tage)', included: true },
            { name: 'Sicherheitskameras im Außenbereich', included: true },
            { name: 'Rauchmelder & Kohlenmonoxidmelder', included: true },
            { name: 'Feuerlöscher', included: true },
            { name: 'Zentralheizung', included: true }
          ]
        }
      ],
      notIncludedTitle: 'Nicht vorhanden: Wäschetrockner · Klimaanlage'
    },
    locationSection: {
      title: 'Lage, Umgebung & Verkehrsanbindung',
      subtitle: 'Ruhiges Gilmerton (EH17) — Schnelle Anbindung ins Zentrum und zur schottischen Natur.',
      neighborhoodTitle: 'Einkaufsmöglichkeiten & Nachbarschaft',
      neighborhoodItems: [
        {
          title: 'SPAR & Lebensmittel (3-5 Min. zu Fuß / ca. 300 m)',
          desc: 'SPAR und Gilmerton Grocers sind gleich um die Ecke für den täglichen Bedarf.'
        },
        {
          title: 'Große Supermärkte (3 Min. Fahrt / 12 Min. zu Fuß)',
          desc: 'Großer Morrisons Moredun und preiswerter ALDI Gilmerton in direkter Nähe.'
        },
        {
          title: 'Einkaufszentren (<10 Min. Fahrt)',
          desc: 'Cameron Toll und Straiton Retail Park bieten zahlreiche Bekleidungs- und Fachgeschäfte.'
        }
      ],
      transitTitle: 'Verbindung ins Zentrum von Edinburgh',
      transitItems: [
        {
          title: 'Lothian Busse 3 & 29 (Direkt · 25-30 Min.)',
          desc: 'Haltestelle in der Nähe (Lasswade Road). Fahren direkt in die Altstadt, zur Princes Street und zum Bahnhof Waverley. Kein teures Parkplatzsuchen!'
        },
        {
          title: 'Buslinie 8 (Direkte Verbindung)',
          desc: 'Verbindet Sie zügig mit weiteren pulsierenden Stadtteilen und Universitäten.'
        },
        {
          title: 'Mit dem Auto: Edinburgh City Bypass (A720)',
          desc: 'Schneller Anschluss zur Umgehungsstraße, zum Flughafen Edinburgh (ca. 20-25 Min.) und in die Highlands.'
        }
      ],
      attractionsTitle: 'Attraktionen in der Nähe',
      attractionsItems: [
        {
          title: 'Gilmerton Cove (5 Min. zu Fuß)',
          desc: 'Edinburghs geheimnisvolles Höhlensystem — von Hand aus Sandstein geschlagene Gänge direkt im Viertel!'
        },
        {
          title: 'Burdiehouse Valley Park (10 Min. zu Fuß)',
          desc: 'Schöner Naturpark für Spaziergänge, Joggen und Entspannen im Grünen.'
        },
        {
          title: 'Edinburgh Castle & Royal Mile (20-25 Min. mit dem Bus)',
          desc: 'Mit dem Direktbus direkt vor die Tore des weltberühmten Schlosses und der historischen Straßen.'
        },
        {
          title: 'Royal Infirmary Hospital (5 Min. mit dem Auto)',
          desc: 'Nur 5 Autominuten entfernt — ideal für Besucher des Krankenhauses.'
        }
      ]
    },
    snowsportsSection: {
      badge: 'ABENTEUER IN DER NÄHE · 7-10 MINUTEN FAHRT',
      title: 'Wintersportzentrum Hillend (Pentland Hills)',
      subtitle: 'Midlothian Snowsports Centre · Alpine Coaster & Spaß für die ganze Familie',
      desc: 'Nur 7-10 Autominuten entfernt bietet das bekannte Wintersportzentrum in Hillend das ganze Jahr über alpinen Freizeitspaß mit Panoramablick über Edinburgh:',
      features: [
        {
          title: 'Midlothian Alpine Coaster',
          desc: 'Schottlands allererste Sommerrodelbahn (Alpine Coaster)! Eine rasante Fahrt mit spektakulärem Blick auf die Skyline von Edinburgh.'
        },
        {
          title: 'Ski & Snowboard',
          desc: 'Europas längste Trockenskipiste mit Kursen und freiem Fahren für Groß und Klein das ganze Jahr hindurch.'
        },
        {
          title: 'Snow Tubing (Reifenrutschen)',
          desc: 'Riesiger Spaß für die ganze Familie auf speziellen Tubing-Bahnen mit Förderband.'
        }
      ],
      chillout: 'Nach dem Vergnügen genießen Sie heiße Schokolade im Cafe 360 oder besuchen das traditionsreiche Pub „The Steading“ mit gemütlichem Biergarten.'
    },
    hostSection: {
      title: 'Ihr Gastgeber',
      badge: 'AIRBNB SUPERHOST',
      name: 'Jacek',
      role: 'Superhost · Erfahrener Gastgeber',
      stats: {
        rating: '4.94 ★',
        reviews: '18 Bewertungen',
        hosting: 'Erfahrener Superhost',
        responseRate: '100% Antwortrate',
        responseTime: 'Antwortet innerhalb einer Stunde'
      },
      languages: 'Sprachen: Englisch und Polnisch',
      work: 'Beruf: Tischler / Schreiner',
      bio: 'Superhosts sind erfahrene und bestens bewertete Gastgeber. Jacek respektiert Ihre Privatsphäre mit kontaktlosem Smart-Lock-Zugang, steht Ihnen aber bei allen Fragen jederzeit per Telefon oder WhatsApp zur Seite.',
      messageBtn: 'Gastgeber Jacek kontaktieren'
    },
    reviewsSection: {
      title: 'Bewertungen unserer Gäste',
      subtitle: 'Gäste schätzen besonders die Sauberkeit, die bequemen Kingsize-Betten, den unkomplizierten Check-in und die direkte Busanbindung.',
      ratingValue: '4.94',
      ratingLabel: 'HERVORRAGEND (GÄSTEFAVORIT)',
      reviewsCountText: '18 authentische Bewertungen auf Airbnb',
      categories: [
        { label: 'Sauberkeit', score: '5.0 / 5' },
        { label: 'Schlafkomfort', score: '5.0 / 5' },
        { label: 'Check-in (Smart Lock)', score: '5.0 / 5' },
        { label: 'Gastfreundschaft', score: '5.0 / 5' },
        { label: 'Lage & Busse', score: '4.9 / 5' },
        { label: 'Preis-Leistung', score: '4.9 / 5' }
      ],
      reviewsList: [
        {
          author: 'Allison',
          meta: 'Eugene, Oregon · Mit Kindern gereist',
          text: 'Sehr komfortables Haus mit allen nötigen Annehmlichkeiten. Einfache Anreise und reibungsloser Check-in! Die Betten sind unglaublich bequem; besser als an vielen anderen Orten.',
          rating: 5
        },
        {
          author: 'Max',
          meta: 'Verifizierter Airbnb-Gast',
          text: 'Sehr sauber, geräumig und ordentlich. Alles hat funktioniert. Laden gleich in der Nähe und nur eine kurze Fahrt ins Zentrum.',
          rating: 5
        },
        {
          author: 'Shahdin',
          meta: 'Verifizierter Airbnb-Gast',
          text: 'Wunderbarer Aufenthalt. Das Haus war sauber, frisch und ordentlich. Alle Bettbezüge und Handtücher waren tadellos sauber. Sehr empfehlenswert!',
          rating: 5
        },
        {
          author: 'Marika',
          meta: 'Verifizierter Airbnb-Gast',
          text: 'Wir waren für eine Nacht hier und das Haus hatte alles, was wir brauchten. Vielen herzlichen Dank!',
          rating: 5
        },
        {
          author: 'Aditya',
          meta: 'Verifizierter Airbnb-Gast',
          text: 'Es war großartig, wir kommen sehr gerne wieder!',
          rating: 5
        },
        {
          author: 'Bin',
          meta: 'Verifizierter Airbnb-Gast',
          text: 'Ruhiges, bequemes Haus. Der Gastgeber war sehr hilfsbereit und reagierte sofort auf alle Fragen.',
          rating: 5
        }
      ]
    },
    rulesFaqSection: {
      title: 'Hausregeln & Häufige Fragen (FAQ)',
      subtitle: 'Klare Regeln für einen entspannten und reibungslosen Aufenthalt.',
      rules: [
        {
          title: 'Check-in:',
          desc: 'Ab 16:00 Uhr. Selbst-Check-in via elektronischem Zahlenschloss für 100% Flexibilität.'
        },
        {
          title: 'Check-out:',
          desc: 'Bis 11:00 Uhr vormittags.'
        },
        {
          title: 'Maximale Belegung:',
          desc: 'Maximal 4 Gäste. Ideal für Familien oder kleine Reisegruppen.'
        },
        {
          title: 'Parken:',
          desc: 'Kostenlose private Einfahrt direkt vor dem Haus im Preis inbegriffen.'
        },
        {
          title: 'Rauchen & Feiern:',
          desc: 'Strikte Nichtraucherunterkunft im Innenbereich. Keine Partys oder Veranstaltungen.'
        },
        {
          title: 'Sicherheit:',
          desc: 'Außenkameras zur Einbruchsprävention. Rauch- und Kohlenmonoxidmelder vorhanden.'
        },
        {
          title: 'Langzeitaufenthalte:',
          desc: 'Aufenthalte ab 28 Tagen sind herzlich willkommen.'
        }
      ],
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        {
          q: 'Wie funktioniert der Check-in?',
          a: 'Völlig unkompliziert und kontaktlos per Zahlencode an der Haustür. Sie erhalten den Code vor Ihrer Anreise und können ab 16:00 Uhr jederzeit flexibel ankommen.'
        },
        {
          q: 'Ist der Parkplatz wirklich kostenlos und privat?',
          a: 'Ja, Ihnen steht die frisch gepflasterte private Einfahrt direkt vor der Eingangstür exklusiv und gebührenfrei zur Verfügung.'
        },
        {
          q: 'Wie komme ich am besten zur Royal Mile und zum Schloss?',
          a: 'Die Busse 3 und 29 fahren nur 3 Gehminuten vom Haus entfernt ab und bringen Sie in 25-30 Minuten direkt in die Altstadt und zur Princes Street.'
        },
        {
          q: 'Ist das WLAN schnell genug für Homeoffice?',
          a: 'Ja, schnelles Glasfaser-WLAN steht im gesamten Haus uneingeschränkt für Streaming und Videokonferenzen zur Verfügung.'
        },
        {
          q: 'Werden Handtücher und Bettwäsche gestellt?',
          a: 'Selbstverständlich! Frische Hotelbettwäsche und flauschige Handtücher liegen für alle Gäste bereit.'
        },
        {
          q: 'Gibt es Supermärkte in der Nähe?',
          a: 'Ein SPAR und Gilmerton Grocers sind nur 3-5 Minuten zu Fuß entfernt. Große Supermärkte (Morrisons, ALDI) erreichen Sie in 3 Autominuten.'
        }
      ]
    },
    contactBanner: {
      title: 'Fragen Sie Ihren Wunschtermin direkt beim Gastgeber an',
      desc: 'Beste Raten ohne Plattformgebühren und direkter persönlicher Kontakt mit Gastgeber Jacek.',
      callBtn: '+44 7988 065088',
      whatsappBtn: 'AUF WHATSAPP SCHREIBEN',
      emailBtn: 'E-MAIL SENDEN'
    },
    footer: {
      brandDesc: 'Modernes 2-Zimmer-Haus in Edinburgh (EH17, Gilmerton) mit Garten, kostenlosem Parkplatz, schnellem WLAN und direktem Bus ins Stadtzentrum.',
      languagesSupported: 'Gastgeber spricht: Englisch & Polnisch',
      addressHeader: 'ADRESSE & LAGE',
      addressText: [
        'Gilmerton, Edinburgh (EH17)',
        'Midlothian, Schottland',
        'Vereinigtes Königreich'
      ],
      mapsLinkText: 'In Google Maps öffnen →',
      contactHeader: 'DIREKTER KONTAKT',
      quickLinksHeader: 'SCHNELLE NAVIGATION',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      checkInNote: 'Check-in ab 16:00 Uhr · Check-out bis 11:00 Uhr'
    },
    floating: {
      hostTitle: 'Kontakt zu Gastgeber Jacek',
      callNow: 'Anrufen: +44 7988 065088',
      whatsappNow: 'WhatsApp-Nachricht',
      emailNow: 'E-Mail schreiben',
      directTalk: 'Direktes Telefonat',
      instantReply: 'Schnelle Antwort'
    }
  },

  fr: {
    meta: {
      title: 'The Edinburgh Garden House | Maison moderne avec jardin & parking à Édimbourg',
      description: 'Maison moderne de 2 chambres à Édimbourg (EH17) avec jardin privé, parking gratuit sur allée privée, Wi-Fi ultra-rapide, Netflix et bus direct pour le centre-ville.'
    },
    brand: {
      name: 'THE EDINBURGH GARDEN HOUSE',
      tagline: 'Maison moderne de 2 chambres avec jardin privé, parking & Netflix – Bus direct',
      sub: 'GILMERTON · ÉDIMBOURG EH17 · ÉCOSSE'
    },
    topBar: {
      selectLanguage: 'Langue :',
      directContact: 'Réservation directe & contact : +44 7988 065088'
    },
    nav: {
      about: 'À PROPOS',
      spaces: 'ESPACES',
      amenities: 'ÉQUIPEMENTS',
      gallery: 'GALERIE',
      location: 'ACCÈS & BUS',
      attractions: 'ATTRACTIONS',
      snowsports: 'SPORTS D’HIVER',
      host: 'HÔTE',
      reviews: 'AVIS',
      faq: 'RÈGLEMENT & FAQ',
      contact: 'CONTACT',
      bookNow: 'RÉSERVER'
    },
    hero: {
      badge: '★ COUP DE CŒUR VOYAGEURS · PARMI LES LOGEMENTS LES PLUS APPRÉCIÉS D’AIRBNB',
      title: 'Maison moderne de 2 chambres avec jardin privé, parking & Netflix – Bus direct',
      lead: 'Créez des souvenirs inoubliables dans ce logement chaleureux et familial à Gilmerton, Édimbourg. Profitez d’une maison lumineuse avec allée de stationnement privée, jardin clos ensoleillé et lignes de bus directes et fréquentes vers le centre historique d’Édimbourg.',
      motto: 'Un havre de paix avec un accès facile à la ville — votre refuge idéal en Écosse.',
      stats: {
        guests: 'Jusqu’à 4 Voyageurs',
        bedrooms: '2 Chambres',
        beds: '2 Grands Lits King Size',
        bathrooms: '1 Salle de Bain',
        driveway: 'Allée de parking privée gratuite',
        garden: 'Jardin privé entièrement clos',
        directBus: 'Bus direct vers le centre (25 min)',
        netflix: 'Smart TV + Netflix inclus',
        wifi: 'Wi-Fi haut débit ultra-rapide'
      },
      ratingSnippet: '4.94 / 5.0 (18 avis authentiques sur Airbnb) · Superhost Jacek'
    },
    bookingBar: {
      checkIn: 'ARRIVÉE',
      checkOut: 'DÉPART',
      guests: 'VOYAGEURS',
      guestsCount: (n) => `${n} ${n === 1 ? 'voyageur' : 'voyageurs'}`,
      checkAvailability: 'VÉRIFIER LES DATES',
      selectDates: 'Sélectionner les dates',
      modalTitle: 'The Edinburgh Garden House — Disponibilités & Réservation',
      modalSubtitle: 'Gilmerton, Édimbourg EH17 · Maison entière avec jardin & allée privée',
      directBookingNote: 'Garantie du meilleur tarif sans frais d’intermédiaire. Contactez directement l’hôte Jacek par WhatsApp, téléphone ou e-mail :',
      callHost: 'Appeler Jacek : +44 7988 065088',
      whatsappHost: 'Écrire sur WhatsApp',
      emailHost: 'E-mail : jacek31-76@hotmail.com',
      selectedDates: (inDate, outDate, g) => `Dates choisies : du ${inDate} au ${outDate} (${g})`,
      months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      days: ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM']
    },
    highlights: {
      title: 'Séjour confortable à Édimbourg (EH17)',
      subtitle: 'EMPLACEMENT IDÉAL À GILMERTON PROCHE DU BYPASS A720 ET DES BUS DIRECTS',
      cards: [
        {
          tag: 'Confort & Détente',
          title: 'Salon lumineux & Netflix',
          desc: 'Espace salon douillet avec grand canapé, table à manger et Smart TV avec Netflix offert pour vos soirées cinéma.'
        },
        {
          tag: 'Stationnement serein',
          title: 'Allée privée rénovée',
          desc: 'Un des rares logements du secteur disposant d’une allée de stationnement privée juste devant la maison.'
        },
        {
          tag: 'Espace extérieur',
          title: 'Jardin arrière privatif clos',
          desc: 'Jardin entièrement clôturé avec pelouse synthétique, terrasse et salon d’extérieur pour votre café du matin.'
        },
        {
          tag: 'Sommeil de qualité',
          title: 'Lits King Size luxueux',
          desc: 'Deux chambres indépendantes avec de grands lits King Size confortables, draps de qualité hôtelière et stores occultants.'
        }
      ]
    },
    spacesSection: {
      title: 'Agencement & Espaces de Vie',
      subtitle: 'Maison mitoyenne entièrement à votre disposition — ambiance chaleureuse et confort moderne.',
      lead: 'Bienvenue dans notre maison lumineuse et bien proportionnée située dans le quartier résidentiel et paisible de Gilmerton à Édimbourg. Idéale pour les familles, les amis ou les voyages d’affaires.',
      spaces: [
        {
          title: 'Salon de séjour',
          desc: 'Un espace chaleureux doté d’un grand canapé et d’une télévision — parfait pour décompresser après une journée de visites.',
          icon: 'couch'
        },
        {
          title: '2 Chambres King Size',
          desc: 'Chambres confortables avec grands lits King Size, draps frais, rangements spacieux et stores occultants pour un sommeil paisible.',
          icon: 'bed'
        },
        {
          title: 'Cuisine tout équipée',
          desc: 'Plaque de cuisson, four, réfrigérateur, congélateur, micro-ondes, bouilloire, grille-pain, café, ustensiles et table à manger.',
          icon: 'utensils'
        },
        {
          title: 'Salle de bain moderne',
          desc: 'Baignoire avec douche, eau chaude, sèche-cheveux, shampoing, gel douche et serviettes de bain douces.',
          icon: 'bath'
        },
        {
          title: 'Jardin privé & terrasse',
          desc: 'Accès exclusif à un jardin clos avec salon de jardin pour savourer le grand air en toute tranquillité.',
          icon: 'tree'
        },
        {
          title: 'Allée de parking privée',
          desc: 'Stationnement privatif et gratuit devant la porte — évitez les frais de parking onéreux en ville.',
          icon: 'car'
        }
      ],
      quoteLead: 'Chaleur d’un chez-soi et modernité à Édimbourg.',
      quoteLine1: 'Chaque détail est pensé pour un séjour reposant et sans stress.',
      quoteLine2: 'Bus directs vers Princes Street, le Royal Mile et la gare d’Édimbourg Waverley.',
      quoteLine3: 'Soirées calmes dans votre jardin privé après avoir arpenté la capitale écossaise.',
      quoteAccent: 'Évitez le coût des parkings en centre-ville et profitez d’un calme absolu.'
    },
    gallerySection: {
      title: 'La Maison en Images',
      subtitle: 'Parcourez les photos du salon, des chambres, du jardin privé et de l’allée de stationnement.',
      allFilter: 'Toutes les photos',
      categories: {
        all: 'Toutes',
        living: 'Salon',
        bedrooms: 'Chambres',
        kitchen: 'Cuisine & Repas',
        garden: 'Jardin privé',
        driveway: 'Allée & Façade'
      },
      openLightbox: 'Agrandir'
    },
    amenitiesSection: {
      title: 'Ce que Propose ce Logement',
      subtitle: 'Liste complète des équipements mis à disposition pour votre confort.',
      groups: [
        {
          category: 'Salle de bain',
          items: [
            { name: 'Baignoire avec douche', included: true },
            { name: 'Sèche-cheveux', included: true },
            { name: 'Produits de nettoyage', included: true },
            { name: 'Shampoing & après-shampoing', included: true },
            { name: 'Savon pour le corps & gel douche', included: true },
            { name: 'Eau chaude continue', included: true }
          ]
        },
        {
          category: 'Chambre et linge',
          items: [
            { name: 'Lave-linge', included: true },
            { name: 'Équipements de base (serviettes, draps, savon, papier toilette)', included: true },
            { name: 'Cintres et penderie', included: true },
            { name: 'Linge de lit & couvertures supplémentaires', included: true },
            { name: 'Stores occultants', included: true },
            { name: 'Fer à repasser', included: true }
          ]
        },
        {
          category: 'Divertissement & Internet',
          items: [
            { name: 'Smart TV avec Netflix inclus', included: true },
            { name: 'Wi-Fi ultra-rapide dans toute la maison', included: true },
            { name: 'Espace de travail dédié', included: true }
          ]
        },
        {
          category: 'Cuisine & repas',
          items: [
            { name: 'Cuisine complète pour préparer vos repas', included: true },
            { name: 'Réfrigérateur & congélateur', included: true },
            { name: 'Cuisinière, four & micro-ondes', included: true },
            { name: 'Bouilloire, grille-pain & café', included: true },
            { name: 'Ustensiles de base (casseroles, poêles, huile, sel, poivre)', included: true },
            { name: 'Vaisselle, couverts & verres à vin', included: true },
            { name: 'Table de repas avec chaises', included: true }
          ]
        },
        {
          category: 'Extérieur & parking',
          items: [
            { name: 'Entrée privée indépendante', included: true },
            { name: 'Jardin arrière clos avec terrasse', included: true },
            { name: 'Mobilier de jardin & coin repas extérieur', included: true },
            { name: 'Allée de stationnement privée gratuite sur place', included: true }
          ]
        },
        {
          category: 'Sécurité & services',
          items: [
            { name: 'Arrivée autonome avec serrure connectée (Smart Lock)', included: true },
            { name: 'Séjours longue durée autorisés (28+ jours)', included: true },
            { name: 'Caméras de sécurité extérieures (prévention)', included: true },
            { name: 'Détecteur de fumée & détecteur de monoxyde de carbone', included: true },
            { name: 'Extincteur', included: true },
            { name: 'Chauffage central efficace', included: true }
          ]
        }
      ],
      notIncludedTitle: 'Non inclus : Sèche-linge · Climatisation'
    },
    locationSection: {
      title: 'Localisation, Quartier & Transports',
      subtitle: 'Quartier paisible de Gilmerton (EH17) — liaison rapide avec le centre-ville et la nature écossaise.',
      neighborhoodTitle: 'Commerces & vie de quartier',
      neighborhoodItems: [
        {
          title: 'Épiceries locales & SPAR (3-5 min à pied / ~300 m)',
          desc: 'SPAR et Gilmerton Grocers sont à quelques pas pour vos courses de proximité et le pain frais.'
        },
        {
          title: 'Grands supermarchés (3 min en voiture / 12 min à pied)',
          desc: 'Grand Morrisons Moredun et ALDI Gilmerton à proximité immédiate pour faire le plein de provisions.'
        },
        {
          title: 'Centres commerciaux (<10 min en voiture)',
          desc: 'Cameron Toll et Straiton Retail Park offrent de nombreuses grandes enseignes et boutiques.'
        }
      ],
      transitTitle: 'Rejoindre le centre-ville d’Édimbourg',
      transitItems: [
        {
          title: 'Bus Lothian 3 & 29 (Ligne directe · 25-30 min)',
          desc: 'Arrêt tout proche sur Lasswade Road. Vous dépose directement dans la vieille ville (Old Town), sur Princes Street et à la gare d’Édimbourg Waverley. Évitez les parkings hors de prix !'
        },
        {
          title: 'Ligne de bus 8 (Liaison directe)',
          desc: 'Relie directement d’autres quartiers dynamiques et pôles culturels de la ville.'
        },
        {
          title: 'En voiture : Contournement d’Édimbourg (A720 Bypass)',
          desc: 'Accès immédiat à la voie rapide vers l’aéroport d’Édimbourg (20-25 min) et les célèbres Highlands.'
        }
      ],
      attractionsTitle: 'Attractions & curiosités à proximité',
      attractionsItems: [
        {
          title: 'Gilmerton Cove (5 min à pied)',
          desc: 'Découvrez le secret le mieux gardé d’Édimbourg : un mystérieux réseau de grottes creusées à la main dans le grès sous les rues du quartier !'
        },
        {
          title: 'Parc naturel Burdiehouse Valley (10 min à pied)',
          desc: 'Un parc boisé très agréable avec sentiers pour la marche, le jogging et la détente.'
        },
        {
          title: 'Château d’Édimbourg & Royal Mile (20-25 min en bus)',
          desc: 'Bus direct vers le cœur historique, les musées, les pubs écossais et les célèbres festivals.'
        },
        {
          title: 'Hôpital Royal Infirmary (5 min en voiture)',
          desc: 'Situé à seulement 5 minutes en voiture, idéal pour les professionnels et visiteurs.'
        }
      ]
    },
    snowsportsSection: {
      badge: 'AVENTURE À PROXIMITÉ · 7-10 MINUTES EN VOITURE',
      title: 'Station de Sports d’Hiver de Hillend',
      subtitle: 'Collines des Pentlands · Alpine Coaster & Sensations pour Toute la Famille',
      desc: 'À seulement 7-10 minutes en voiture via l’A720, le Midlothian Snowsports Centre à Hillend offre des activités alpines toute l’année avec une vue panoramique sur tout Édimbourg :',
      features: [
        {
          title: 'Midlothian Alpine Coaster',
          desc: 'La toute première luge alpine d’Écosse ! Une descente sensationnelle sur rail avec vue panoramique imprenable sur la skyline d’Édimbourg.'
        },
        {
          title: 'Ski & Snowboard',
          desc: 'La plus longue piste de ski synthétique d’Europe, avec cours et sessions libres pour tous les âges toute l’année.'
        },
        {
          title: 'Snow Tubing (Glisse en bouées)',
          desc: 'Activité ultra-ludique pour toute la famille : dévalez les pistes dans de grandes bouées gonflables avec tapis roulant pour remonter.'
        }
      ],
      chillout: 'Après les pistes, réchauffez-vous avec un chocolat chaud au Café 360 ou découvrez « The Steading », un pub écossais traditionnel doté d’un superbe biergarten.'
    },
    hostSection: {
      title: 'Votre Hôte',
      badge: 'SUPERHOST AIRBNB',
      name: 'Jacek',
      role: 'Superhost · Hôte local expérimenté',
      stats: {
        rating: '4.94 ★',
        reviews: '18 Avis',
        hosting: 'Superhost expérimenté',
        responseRate: 'Taux de réponse : 100%',
        responseTime: 'Répond en moins d’une heure'
      },
      languages: 'Langues parlées : Anglais & Polonais',
      work: 'Profession : Menuisier / Charpentier',
      bio: 'Les Superhosts sont des hôtes expérimentés et très bien notés, soucieux du bon déroulement de votre séjour. Jacek respecte totalement votre intimité avec une arrivée autonome par code, tout en restant toujours disponible par téléphone ou WhatsApp.',
      messageBtn: 'Envoyer un message à Jacek'
    },
    reviewsSection: {
      title: 'Avis des Voyageurs',
      subtitle: 'Les voyageurs apprécient la propreté irréprochable, le grand confort des lits King Size, l’arrivée autonome facile et la desserte en bus.',
      ratingValue: '4.94',
      ratingLabel: 'EXCEPTIONNEL (COUP DE CŒUR)',
      reviewsCountText: '18 avis vérifiés sur Airbnb',
      categories: [
        { label: 'Propreté', score: '5.0 / 5' },
        { label: 'Confort de la literie', score: '5.0 / 5' },
        { label: 'Arrivée (Smart Lock)', score: '5.0 / 5' },
        { label: 'Accueil & réactivité', score: '5.0 / 5' },
        { label: 'Liaisons en bus', score: '4.9 / 5' },
        { label: 'Rapport qualité-prix', score: '4.9 / 5' }
      ],
      reviewsList: [
        {
          author: 'Allison',
          meta: 'Eugene, Oregon · Séjour en famille',
          text: 'Maison très confortable avec tous les équipements nécessaires. Emplacement facile d’accès et arrivée ultra-simple ! Les lits sont tellement confortables, bien meilleurs que dans beaucoup d’endroits où j’ai séjourné.',
          rating: 5
        },
        {
          author: 'Max',
          meta: 'Voyageur vérifié Airbnb',
          text: 'Très propre, spacieux, bien rangé et tout fonctionne parfaitement. Magasins à proximité et à seulement un court trajet du centre-ville.',
          rating: 5
        },
        {
          author: 'Shahdin',
          meta: 'Voyageur vérifié Airbnb',
          text: 'Séjour formidable. La maison était propre, sentait bon et était impeccable. Tous les draps et serviettes étaient d’une propreté parfaite. Hautement recommandé !',
          rating: 5
        },
        {
          author: 'Marika',
          meta: 'Voyageur vérifié Airbnb',
          text: 'Nous avons passé une nuit et le logement avait tout ce dont nous avions besoin. Merci beaucoup !',
          rating: 5
        },
        {
          author: 'Aditya',
          meta: 'Voyageur vérifié Airbnb',
          text: 'C’était fantastique, nous reviendrions avec grand plaisir !',
          rating: 5
        },
        {
          author: 'Bin',
          meta: 'Voyageur vérifié Airbnb',
          text: 'Maison calme et confortable. L’hôte a été très réactif et a répondu sans délai à toutes nos questions.',
          rating: 5
        }
      ]
    },
    rulesFaqSection: {
      title: 'Règlement Intérieur & Foire Aux Questions',
      subtitle: 'Des règles simples pour un séjour serein et sans imprévus.',
      rules: [
        {
          title: 'Arrivée :',
          desc: 'À partir de 16h00. Arrivée autonome par serrure électronique pour une totale flexibilité.'
        },
        {
          title: 'Départ :',
          desc: 'Avant 11h00.'
        },
        {
          title: 'Capacité maximale :',
          desc: '4 voyageurs maximum. Idéal pour les familles, les couples ou les petits groupes.'
        },
        {
          title: 'Stationnement :',
          desc: 'Allée de stationnement privée gratuite directement devant la maison incluse.'
        },
        {
          title: 'Règles de vie :',
          desc: 'Logement strictement non-fumeur à l’intérieur. Fêtes et événements interdits.'
        },
        {
          title: 'Sécurité :',
          desc: 'Caméras extérieures de prévention. Détecteurs de fumée, monoxyde de carbone et extincteur.'
        },
        {
          title: 'Longs séjours :',
          desc: 'Séjours de 28 jours ou plus acceptés.'
        }
      ],
      faqTitle: 'Questions Fréquentes',
      faqs: [
        {
          q: 'Comment se passe l’arrivée ?',
          a: 'L’arrivée est 100 % autonome grâce à une serrure connectée sécurisée. Vous recevez votre code personnel avant le voyage pour arriver à l’heure qui vous convient après 16h00.'
        },
        {
          q: 'Le parking est-il réellement privé et gratuit ?',
          a: 'Oui ! Vous disposez de l’allée privée récemment rénovée juste devant la porte, entièrement réservée pour votre voiture et gratuite.'
        },
        {
          q: 'Comment rejoindre le Château d’Édimbourg et le Royal Mile ?',
          a: 'Les bus Lothian 3 et 29 s’arrêtent à 3 minutes à pied de la maison (Lasswade Road) et vous conduisent directement dans la vieille ville et sur Princes Street en 25 à 30 minutes sans frais de parking.'
        },
        {
          q: 'Le Wi-Fi est-il adapté au télétravail ?',
          a: 'Oui, nous proposons une connexion fibre haut débit dans toute la maison, idéale pour le streaming 4K et les visioconférences.'
        },
        {
          q: 'Les draps et serviettes sont-ils fournis ?',
          a: 'Oui, du linge de lit de qualité hôtelière et des serviettes de bain douces sont préparés pour chaque invité.'
        },
        {
          q: 'Y a-t-il des commerces à proximité ?',
          a: 'Un SPAR et une épicerie sont à 3-5 minutes à pied (300 m). Les grands supermarchés (Morrisons, ALDI) sont à 3 minutes en voiture.'
        }
      ]
    },
    contactBanner: {
      title: 'Réservez en direct auprès de votre hôte Jacek',
      desc: 'Bénéficiez du meilleur tarif garanti, d’un échange direct et d’aucun frais de plateforme.',
      callBtn: '+44 7988 065088',
      whatsappBtn: 'CONTACTER SUR WHATSAPP',
      emailBtn: 'ENVOYER UN E-MAIL'
    },
    footer: {
      brandDesc: 'Maison moderne de 2 chambres à Édimbourg (EH17, Gilmerton) avec jardin privé, parking gratuit, Wi-Fi ultra-rapide et bus direct vers le centre.',
      languagesSupported: 'L’hôte parle : anglais et polonais',
      addressHeader: 'ADRESSE & LOCALISATION',
      addressText: [
        'Gilmerton, Édimbourg (EH17)',
        'Midlothian, Écosse',
        'Royaume-Uni'
      ],
      mapsLinkText: 'Ouvrir dans Google Maps →',
      contactHeader: 'CONTACT DIRECT AVEC L’HÔTE',
      quickLinksHeader: 'NAVIGATION RAPIDE',
      allRightsReserved: 'Tous droits réservés.',
      checkInNote: 'Arrivée autonome dès 16h00 · Départ avant 11h00'
    },
    floating: {
      hostTitle: 'Contact Hôte Jacek',
      callNow: 'Appeler : +44 7988 065088',
      whatsappNow: 'Discuter sur WhatsApp',
      emailNow: 'Envoyer un e-mail',
      directTalk: 'Ligne directe',
      instantReply: 'Réponse rapide'
    }
  }
};
