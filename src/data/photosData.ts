import { Language } from '../translations';

export interface PropertyPhoto {
  id: string;
  src: string;
  title: Record<Language, string>;
  category: 'living' | 'bedrooms' | 'kitchen' | 'bathroom' | 'garden' | 'driveway';
  categoryLabel: Record<Language, string>;
  description: Record<Language, string>;
  isHeroCandidate?: boolean;
}

export const propertyPhotos: PropertyPhoto[] = [
  // --- BEDROOM 1 (BLUSH / PINK MASTER BEDROOM) ---
  {
    id: 'bedroom-pink-master',
    src: '/zdjecia/bedroom_pink_master_hd.jpg',
    title: {
      en: 'Master Bedroom with Dressing Vanity & Hollywood Mirror',
      pl: 'Główna sypialnia z toaletką i lustrem w stylu Hollywood',
      de: 'Hauptschlafzimmer mit Frisiertisch & Hollywood-Spiegel',
      fr: 'Chambre principale avec coiffeuse & miroir style Hollywood'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Główna Sypialnia',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Spacious master bedroom featuring a King Size bed with fresh linens and plush turquoise towels, dressing table with illuminated vanity mirror, and wardrobe.',
      pl: 'Przestronna sypialnia główna z łóżkiem King Size, świeżą pościelą i turkusowymi ręcznikami, toaletką z podświetlanym lustrem i szafą.',
      de: 'Großzügiges Hauptschlafzimmer mit Kingsize-Bett, frischer Bettwäsche, Frisiertisch mit beleuchtetem Schminkspiegel und Kleiderschrank.',
      fr: 'Grande chambre principale avec lit King Size, draps frais et serviettes douces, coiffeuse avec miroir lumineux et penderie.'
    },
    isHeroCandidate: true
  },
  {
    id: 'bedroom-pink-bed',
    src: '/zdjecia/bedroom_pink_bed_hd.jpg',
    title: {
      en: 'King Size Bed with Highland Cow Wall Art',
      pl: 'Łóżko King Size z obrazem Highland Cow',
      de: 'Kingsize-Bett mit schottischem Highland-Cow-Bild',
      fr: 'Lit King Size avec tableau Highland Cow'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Główna Sypialnia',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Comfortable King Size bed with bedside nightstands, window with natural Scottish daylight, and authentic Highlands decor.',
      pl: 'Wygodne łóżko małżeńskie ze stolikiem nocnym, oknem i szkockim akcentem dekoracyjnym.',
      de: 'Komfortables Kingsize-Bett mit Nachttisch, Fenster mit Tageslicht und schottischem Flair.',
      fr: 'Lit King Size confortable avec table de nuit, fenêtre lumineuse et touche décorative écossaise.'
    }
  },
  {
    id: 'bedroom-pink-vanity',
    src: '/zdjecia/bedroom_pink_vanity_hd.jpg',
    title: {
      en: 'Illuminated Dressing Table & Wardrobe',
      pl: 'Podświetlana toaletka i szafa trzydrzwiowa',
      de: 'Beleuchteter Schminktisch & Kleiderschrank',
      fr: 'Coiffeuse illuminée et grande penderie'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Główna Sypialnia',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Dedicated vanity area with Hollywood lighting and hair dryer, perfect for getting ready.',
      pl: 'Wygodne stanowisko toaletkowe z profesjonalnym oświetleniem lustra i suszarką do włosów.',
      de: 'Frisiertisch mit Hollywood-Beleuchtung und Haartrockner, ideal zum Zurechtmachen.',
      fr: 'Espace coiffeuse avec éclairage professionnel et sèche-cheveux, idéal pour se préparer.'
    }
  },

  // --- BEDROOM 2 (WARM OCHRE & PISTACHIO BEDROOM WITH AMBIENT LED) ---
  {
    id: 'bedroom-yellow-ambient',
    src: '/zdjecia/bedroom2_yellow_hd.jpg',
    title: {
      en: 'Second King Bedroom with Ceiling Ambient LED',
      pl: 'Druga sypialnia King Size z podświetleniem LED',
      de: 'Zweites Kingsize-Schlafzimmer mit LED-Beleuchtung',
      fr: 'Deuxième chambre King Size avec ruban LED'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Second Bedroom',
      pl: 'Druga Sypialnia',
      de: 'Zweites Schlafzimmer',
      fr: 'Deuxième Chambre'
    },
    description: {
      en: 'Warm yellow & pistachio bedroom with modern perimeter LED ceiling lighting, King Size bed, and gallery wall.',
      pl: 'Ciepła sypialnia w odcieniach oliwkowo-żółtych z nastrojowym oświetleniem LED, łóżkiem King Size i galerią grafik.',
      de: 'Warmes Schlafzimmer mit moderner Decken-LED-Lichtleiste, Kingsize-Bett und Bildergalerie.',
      fr: 'Chambre chaleureuse avec ruban LED d’ambiance au plafond, lit King Size et cadres décoratifs.'
    },
    isHeroCandidate: true
  },

  // --- LIVING ROOM & DINING AREA ---
  {
    id: 'living-room-hero-main',
    src: '/zdjecia/living_room_hd.jpg',
    title: {
      en: 'Bright Living Room & Dining Area',
      pl: 'Jasny salon z narożną sofą i jadalnią',
      de: 'Helles Wohnzimmer mit Ecksofa & Esstisch',
      fr: 'Salon lumineux avec canapé d’angle & coin repas'
    },
    category: 'living',
    categoryLabel: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    },
    description: {
      en: 'Spacious lounge with large plush sofa, contemporary dining table, modern wall art, and ambient lights.',
      pl: 'Przestronny salon z miękką kanapą narożną, nowoczesnym stołem jadalnianym i designerskim oświetleniem.',
      de: 'Großzügiger Wohnbereich mit bequemer Eckcouch, Esstisch, moderner Wandkunst und gemütlichem Licht.',
      fr: 'Grand salon avec canapé d’angle douillet, table à manger contemporaine et tableaux décoratifs.'
    },
    isHeroCandidate: true
  },
  {
    id: 'living-room-dining-window',
    src: '/zdjecia/dining_area_hd.jpg',
    title: {
      en: 'Family Dining Suite Overlooking Garden',
      pl: 'Stół jadalniany z widokiem na ogród',
      de: 'Familien-Essbereich mit Blick in den Garten',
      fr: 'Coin repas familial donnant sur le jardin'
    },
    category: 'living',
    categoryLabel: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    },
    description: {
      en: 'Large dining table seating 4-6 guests with designer pendant lamps and direct panoramic view of the sunny rear garden.',
      pl: 'Duży stół dla 4-6 osób z lampami wiszącymi i bezpośrednim widokiem na słoneczny ogród.',
      de: 'Großer Esstisch für 4-6 Personen mit Pendelleuchten und direktem Blick in den grünen Garten.',
      fr: 'Grande table de repas pour 4 à 6 personnes avec suspensions design et vue directe sur le jardin.'
    },
    isHeroCandidate: true
  },
  {
    id: 'living-room-tv-angle',
    src: '/zdjecia/living_room_tv_hd.jpg',
    title: {
      en: 'Smart TV Lounge & Complimentary Netflix',
      pl: 'Strefa kina domowego ze Smart TV i Netflixem',
      de: 'Heimkino-Ecke mit Smart-TV & Netflix',
      fr: 'Espace salon avec Smart TV & Netflix inclus'
    },
    category: 'living',
    categoryLabel: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    },
    description: {
      en: 'Wall-mounted Smart TV with complimentary Netflix, coffee table, and comfortable seating for relaxed movie nights.',
      pl: 'Smart TV na ścianie z wliczonym darmowym Netflixem, stolik kawowy i wygodne miejsca na seanse filmowe.',
      de: 'Wandmontierter Smart-TV mit kostenlosem Netflix, Couchtisch und bequemer Sitzgelegenheit für Filmabende.',
      fr: 'Smart TV murale avec Netflix offert, table basse et assises confortables pour vos soirées films.'
    }
  },

  // --- KITCHEN & DINING ---
  {
    id: 'kitchen-full-view',
    src: '/zdjecia/kitchen_hd.jpg',
    title: {
      en: 'Fully Equipped Kitchen & Appliances',
      pl: 'W pełni wyposażona kuchnia ze sprzętami',
      de: 'Voll ausgestattete Küche mit allen Geräten',
      fr: 'Cuisine tout équipée avec appareils électroménagers'
    },
    category: 'kitchen',
    categoryLabel: {
      en: 'Kitchen',
      pl: 'Kuchnia',
      de: 'Küche',
      fr: 'Cuisine'
    },
    description: {
      en: 'Comprehensive kitchen setup with cooker, oven, stainless steel extractor hood, and large fridge/freezer.',
      pl: 'Kompletne wyposażenie kuchenne z płytą, piekarnikiem, okapem i dużą lodówko-zamrażarką.',
      de: 'Komplette Küchenausstattung mit Herd, Backofen, Dunstabzugshaube und großem Kühl-/Gefrierschrank.',
      fr: 'Cuisine aménagée avec cuisinière, four, hotte aspirante en inox et grand combiné réfrigérateur/congélateur.'
    },
    isHeroCandidate: true
  },
  {
    id: 'kitchen-sink-window',
    src: '/zdjecia/kitchen_sink_hd.jpg',
    title: {
      en: 'Stainless Sink & Bright Window View',
      pl: 'Zlew ze stali nierdzewnej pod jasnym oknem',
      de: 'Edelstahlspüle & helles Küchenfenster',
      fr: 'Évier en inox & fenêtre de cuisine lumineuse'
    },
    category: 'kitchen',
    categoryLabel: {
      en: 'Kitchen',
      pl: 'Kuchnia',
      de: 'Küche',
      fr: 'Cuisine'
    },
    description: {
      en: 'Sink area equipped with electric kettle, drying rack, and sunlight pouring in from the Edinburgh garden.',
      pl: 'Strefa zlewozmywaka z czajnikiem elektrycznym, suszarką do naczyń i oknem na posesję.',
      de: 'Spülbereich mit Wasserkocher, Abtropfgestell und Tageslicht.',
      fr: 'Espace évier avec bouilloire électrique, égouttoir et belle lumière naturelle.'
    }
  },

  // --- BATHROOM ---
  {
    id: 'bathroom-full',
    src: '/zdjecia/bathroom_hd.jpg',
    title: {
      en: 'Modern Bathroom with Bathtub & Vanity',
      pl: 'Nowoczesna łazienka z wanną i szafką umywalkową',
      de: 'Modernes Badezimmer mit Badewanne & Waschtisch',
      fr: 'Salle de bain moderne avec baignoire & meuble vasque'
    },
    category: 'bathroom',
    categoryLabel: {
      en: 'Bathroom',
      pl: 'Łazienka',
      de: 'Badezimmer',
      fr: 'Salle de Bain'
    },
    description: {
      en: 'Clean bathroom with full-size bath, overhead shower, vanity unit with sink, heated towel rail, and window.',
      pl: 'Czysta łazienka z pełnowymiarową wanną z prysznicem, szafką z umywalką, grzejnikiem drabinkowym i oknem.',
      de: 'Gepflegtes Bad mit Badewanne, Dusche, Waschtisch mit Unterschrank, Handtuchwärmer und Fenster.',
      fr: 'Salle de bain soignée avec baignoire-douche, meuble sous vasque, sèche-serviettes chauffant et fenêtre.'
    },
    isHeroCandidate: true
  },
  {
    id: 'bathroom-tub-shower',
    src: '/zdjecia/bathroom_tub_hd.jpg',
    title: {
      en: 'Bathtub & Overhead Rain Shower with Heated Towels',
      pl: 'Wanna z prysznicem deszczowym i ciepłymi ręcznikami',
      de: 'Badewanne & Regendusche mit Handtuchwärmer',
      fr: 'Baignoire et douche effet pluie avec serviettes chaudes'
    },
    category: 'bathroom',
    categoryLabel: {
      en: 'Bathroom',
      pl: 'Łazienka',
      de: 'Badezimmer',
      fr: 'Salle de Bain'
    },
    description: {
      en: 'Full-size bathtub with glass shower screen, thermostatic shower, heated radiator, and fresh towels.',
      pl: 'Pełnowymiarowa wanna ze szklaną osłoną prysznicową, deszczownicą i podgrzewaczem ręczników.',
      de: 'Große Badewanne mit Glasduschwand, Thermostatdusche und flauschigen Handtüchern.',
      fr: 'Grande baignoire avec paroi en verre, douche thermostatique et serviettes moelleuses.'
    }
  },

  // --- PRIVATE REAR GARDEN ---
  {
    id: 'garden-patio-wide',
    src: '/zdjecia/garden_patio_hd.jpg',
    title: {
      en: 'Enclosed Rear Garden with Patio Lounge Set',
      pl: 'Prywatny ogród z meblami wypoczynkowymi',
      de: 'Eingezäunter Garten mit Loungemöbeln',
      fr: 'Jardin privatif clos avec salon de détente'
    },
    category: 'garden',
    categoryLabel: {
      en: 'Private Garden',
      pl: 'Prywatny Ogród',
      de: 'Privater Garten',
      fr: 'Jardin Privé'
    },
    description: {
      en: 'Private, fully fenced backyard with artificial grass, decorative white stones, and comfortable outdoor seating.',
      pl: 'Prywatny, w pełni ogrodzony ogródek ze sztuczną trawą, jasnym żwirem i wygodnymi meblami ogrodowymi.',
      de: 'Privater, voll umzäunter Garten mit pflegeleichtem Kunstrasen und bequemen Gartenmöbeln.',
      fr: 'Jardin privatif entièrement clôturé avec pelouse synthétique et salon de jardin accueillant.'
    },
    isHeroCandidate: true
  },
  {
    id: 'garden-lounge-close',
    src: '/zdjecia/garden_lounge_hd.jpg',
    title: {
      en: 'Sunny Outdoor Coffee & Relaxation Patio',
      pl: 'Strefa relaksu i kawy na świeżym powietrzu',
      de: 'Sonnige Kaffee- & Entspannungsecke im Freien',
      fr: 'Terrasse ensoleillée pour café & détente'
    },
    category: 'garden',
    categoryLabel: {
      en: 'Private Garden',
      pl: 'Prywatny Ogród',
      de: 'Privater Garten',
      fr: 'Jardin Privé'
    },
    description: {
      en: 'Outdoor sofa, armchairs, and coffee table surrounded by greenery and privacy fence — the perfect spot for morning coffee or an evening drink.',
      pl: 'Kanapa ogrodowa, fotele i stolik kawowy w otoczeniu zieleni i wysokiego płotu — idealne miejsce na relaks.',
      de: 'Gartensofa, Sessel und Kaffeetisch — ideal für den Morgenkaffee oder ein Abendgetränk.',
      fr: 'Canapé d’extérieur, fauteuils et table basse — parfait pour le café du matin ou un verre le soir.'
    }
  },

  // --- DRIVEWAY & EXTERIOR ---
  {
    id: 'driveway-front-wide',
    src: '/zdjecia/driveway_hd.jpg',
    title: {
      en: 'Private Renovated Driveway in Front of House',
      pl: 'Prywatny, odnowiony podjazd przed domem',
      de: 'Eigene renovierte Einfahrt direkt vor dem Haus',
      fr: 'Allée de stationnement privée rénovée devant la maison'
    },
    category: 'driveway',
    categoryLabel: {
      en: 'Driveway & Exterior',
      pl: 'Podjazd i Budynek',
      de: 'Einfahrt & Außenbereich',
      fr: 'Allée & Extérieur'
    },
    description: {
      en: 'Freshly renovated private driveway directly outside the entrance. Save money and skip city parking fees.',
      pl: 'Świeżo zmodernizowany prywatny podjazd przed samym wejściem do domu. Wygodne i bezpłatne parkowanie.',
      de: 'Frisch renovierte private Einfahrt direkt vor der Haustür. Kostenlos und stressfrei parken.',
      fr: 'Allée privée fraîchement rénovée juste devant la porte. Stationnement gratuit et sans tracas.'
    },
    isHeroCandidate: true
  }
];

export const heroSliderImages = [
  {
    src: '/zdjecia/living_room_hd.jpg',
    alt: 'Bright living room with plush sofa and dining area'
  },
  {
    src: '/zdjecia/bedroom_pink_master_hd.jpg',
    alt: 'Master Bedroom with King Size bed and Hollywood vanity mirror'
  },
  {
    src: '/zdjecia/garden_patio_hd.jpg',
    alt: 'Private enclosed rear garden with patio lounge set'
  },
  {
    src: '/zdjecia/bedroom2_yellow_hd.jpg',
    alt: 'Second King bedroom with ceiling ambient LED lighting'
  },
  {
    src: '/zdjecia/kitchen_hd.jpg',
    alt: 'Fully equipped modern kitchen with oven and fridge'
  },
  {
    src: '/zdjecia/bathroom_hd.jpg',
    alt: 'Sparkling clean bathroom with bathtub and shower'
  },
  {
    src: '/zdjecia/driveway_hd.jpg',
    alt: 'Private driveway and house facade in Gilmerton Edinburgh'
  }
];
