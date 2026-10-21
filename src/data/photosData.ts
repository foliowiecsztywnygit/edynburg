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
  // =========================================================================
  // 1. LIVING ROOM & LOUNGE (Real photos from property)
  // =========================================================================
  {
    id: 'living-room-1',
    src: '/zdjecia/living-room-1.jpg',
    title: {
      en: 'Spacious Lounge with Corner Sofa & Garden Access',
      pl: 'Przestronny salon z narożną sofą i wyjściem na ogród',
      de: 'Geräumiges Wohnzimmer mit Ecksofa & Gartenzugang',
      fr: 'Salon spacieux avec grand canapé d’angle et accès jardin'
    },
    category: 'living',
    categoryLabel: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    },
    description: {
      en: 'Relax in the light-filled main living space featuring a large grey L-shaped sectional sofa, soft carpeting, stylish coffee table, and direct patio doors opening to the private garden.',
      pl: 'Jasny, przestronny pokój dzienny z dużą szarą sofą narożną, miękkim dywanem, designerskim stolikiem kawowym i bezpośrednim wyjściem na prywatny ogród.',
      de: 'Heller, großzügiger Wohnbereich mit bequemer grauer Eckcouch, weichem Teppichboden, stilvollem Couchtisch und direktem Zugang zur Gartenterrasse.',
      fr: 'Espace de vie lumineux avec canapé d’angle gris, moquette douillette, table basse élégante et porte vitrée ouvrant directement sur le jardin privatif.'
    },
    isHeroCandidate: true
  },
  {
    id: 'living-room-2',
    src: '/zdjecia/living-room-2.jpg',
    title: {
      en: 'Entertainment Lounge with Smart TV & Media Console',
      pl: 'Strefa wypoczynkowa ze Smart TV i szafką RTV',
      de: 'TV-Lounge mit Smart-TV & Medienboard',
      fr: 'Espace détente avec Smart TV et meuble multimédia'
    },
    category: 'living',
    categoryLabel: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    },
    description: {
      en: 'Wall-mounted large flat-screen Smart TV with free streaming access, sleek low-profile media credenza, plush decorative cushions, and vibrant contemporary artwork.',
      pl: 'Duży telewizor Smart TV zamontowany na ścianie z dostępem do aplikacji streamingowych, minimalistyczna szafka RTV, miękkie poduszki i nowoczesne obrazy.',
      de: 'Wandmontierter Smart-TV mit Streaming-Zugang, flaches Medienboard, gemütliche Kissen und farbenfrohe zeitgenössische Kunstwerke.',
      fr: 'Grande Smart TV murale avec services de streaming, meuble bas multimédia, coussins moelleux et toiles contemporaines colorées.'
    }
  },
  {
    id: 'living-room-3',
    src: '/zdjecia/living-room-3.jpg',
    title: {
      en: 'Open-Plan Living & Dining Flow',
      pl: 'Otwarta strefa dzienna łącząca salon i jadalnię',
      de: 'Offener Wohn- und Essbereich im Überblick',
      fr: 'Vue d’ensemble salon et coin repas ouvert'
    },
    category: 'living',
    categoryLabel: {
      en: 'Living Room',
      pl: 'Salon i Jadalnia',
      de: 'Wohnzimmer',
      fr: 'Salon'
    },
    description: {
      en: 'Wide angle showcasing the harmonious open flow between the comfortable lounge seating, dining table, and natural daylight from generous windows.',
      pl: 'Szerokie ujęcie prezentujące harmonijne połączenie strefy wypoczynkowej ze stołem jadalnianym oraz obfite naturalne światło dzienne.',
      de: 'Weiter Blick auf das harmonische Zusammenspiel aus gemütlicher Sofalandschaft, Essplatz und viel natürlichem Tageslicht.',
      fr: 'Vue panoramique soulignant la fluidité entre le salon convivial, la table de repas et la lumière naturelle des fenêtres.'
    }
  },
  {
    id: 'dining-area-1',
    src: '/zdjecia/dining-area-1.jpg',
    title: {
      en: 'Family Dining Suite with Chrome Pendant Lights',
      pl: 'Stół jadalniany z chromowanymi lampami wiszącymi',
      de: 'Familien-Esstisch mit verchromten Pendelleuchten',
      fr: 'Table à manger familiale avec suspensions chromées'
    },
    category: 'living',
    categoryLabel: {
      en: 'Dining Area',
      pl: 'Jadalnia',
      de: 'Essbereich',
      fr: 'Coin Repas'
    },
    description: {
      en: 'Elegant wooden dining table with stylish place settings, trio of polished chrome drop pendants, decorative Roman numeral skeleton wall clock, and colourful artwork.',
      pl: 'Drewniany stół jadalniany z estetycznymi podkładkami, kaskadą chromowanych lamp wiszących, loftowym zegarem ściennym i barwną grafiką.',
      de: 'Eleganter Esstisch mit Platzsets, dreifachen Chrom-Pendelleuchten, dekorativer Skelett-Wanduhr mit römischen Ziffern und modernem Wandbild.',
      fr: 'Table de repas en bois avec sets élégants, trio de suspensions chromées, horloge murale industrielle à chiffres romains et tableau d’art.'
    },
    isHeroCandidate: true
  },
  {
    id: 'dining-area-2',
    src: '/zdjecia/dining-area-2.jpg',
    title: {
      en: 'Dining Space Connecting to the Lounge',
      pl: 'Jadalnia połączona ze strefą telewizyjną',
      de: 'Essbereich mit Blick in das Wohnzimmer',
      fr: 'Coin repas donnant sur le coin séjour'
    },
    category: 'living',
    categoryLabel: {
      en: 'Dining Area',
      pl: 'Jadalnia',
      de: 'Essbereich',
      fr: 'Coin Repas'
    },
    description: {
      en: 'Seamless connection between the dining area and the living room sofa, creating a warm, social environment for family meals and evening gatherings.',
      pl: 'Płynne przejście między jadalnią a narożnikiem w salonie, zapewniające komfort i wspólną przestrzeń podczas rodzinnych posiłków.',
      de: 'Fließender Übergang zwischen Essplatz und gemütlichem Sofa – perfekt für gesellige Abendessen und Familienmomente.',
      fr: 'Continuité entre le coin repas et le canapé du séjour, idéale pour partager des repas en famille et des moments conviviaux.'
    }
  },

  // =========================================================================
  // 2. MASTER BEDROOM (Blush Pink Theme with Hollywood Vanity & Highland Cow)
  // =========================================================================
  {
    id: 'bedroom-pink-1',
    src: '/zdjecia/bedroom-pink-1.jpg',
    title: {
      en: 'Master Bedroom Suite with Hollywood Vanity & Wardrobe',
      pl: 'Główna sypialnia z toaletką Hollywood i 3-drzwiową szafą',
      de: 'Hauptschlafzimmer mit Hollywood-Frisiertisch & Kleiderschrank',
      fr: 'Suite principale avec coiffeuse Hollywood et grande armoire'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Różowa',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Welcoming master bedroom entrance highlighting the spacious 3-door wardrobe with metal handles, illuminated Hollywood vanity mirror desk, and soft blush pink palette.',
      pl: 'Wejście do sypialni głównej z pojemną trzydrzwiową szafą, elegancką toaletką z podświetlanym okrągłym lustrem LED i pudrowo-różową ścianą.',
      de: 'Eingang ins Hauptschlafzimmer mit geräumigem 3-türigem Kleiderschrank, beleuchtetem Hollywood-Schminktisch und zarten Pudertönen.',
      fr: 'Entrée de la chambre principale dévoilant une penderie 3 portes, une coiffeuse avec miroir LED rond illuminé et une ambiance poudrée raffinée.'
    },
    isHeroCandidate: true
  },
  {
    id: 'bedroom-pink-2',
    src: '/zdjecia/bedroom-pink-2.jpg',
    title: {
      en: 'King Bed with Floral Bedding & Highland Cow Artwork',
      pl: 'Łóżko King Size w pościeli w róże z obrazem Highland Cow',
      de: 'Kingsize-Bett mit Rosen-Bettwäsche & Highland-Cow-Bild',
      fr: 'Lit King Size paré de fleurs et tableau de Highland Cow'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Różowa',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Inviting King Size bed dressed in fresh floral rose duvet with soft turquoise towels, framed Scottish Highland Cow wall painting, and bedside drawer with lamp.',
      pl: 'Wygodne łoże małżeńskie King Size z kwiecistą pościelą w róże, zestawem turkusowych ręczników, obrazem szkockiej krowy Highland Cow i stolikiem nocnym.',
      de: 'Einladendes Kingsize-Bett mit floraler Bettwäsche, weichen türkisfarbenen Handtüchern, schottischem Hochlandrind-Gemälde und Nachttisch.',
      fr: 'Lit King Size confortable habillé d’une couette florale, serviettes turquoise moelleuses, tableau de vache des Highlands et chevet.'
    }
  },
  {
    id: 'bedroom-pink-3',
    src: '/zdjecia/bedroom-pink-3.jpg',
    title: {
      en: 'Dedicated Hollywood Vanity Station & LED Touch Mirror',
      pl: 'Stanowisko toaletkowe z okrągłym lustrem LED na dotyk',
      de: 'Frisiertisch-Ecke mit rundem LED-Touch-Spiegel',
      fr: 'Espace coiffeuse avec miroir LED tactile et fauteuil'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Różowa',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Dedicated beauty station equipped with a white console table, circular LED illuminated vanity mirror with touch dimmer, and plush upholstered stool.',
      pl: 'Prywatne stanowisko do makijażu z białym stolikiem konsolowym, okrągłym lustrem LED z włącznikiem dotykowym i tapicerowanym krzesłem.',
      de: 'Eigener Schminkplatz mit weißem Konsolentisch, rundem LED-Spiegel mit Touch-Schalter und gepolstertem Stuhl.',
      fr: 'Espace beauté dédié avec console blanche, grand miroir rond à éclairage LED tactile et siège rembourré confortable.'
    }
  },
  {
    id: 'bedroom-pink-4',
    src: '/zdjecia/bedroom-pink-4.jpg',
    title: {
      en: 'Iconic Scottish Highland Cow Wall Art & Headboard',
      pl: 'Obraz szkockiej krowy Highland Cow nad zagłówkiem',
      de: 'Schottisches Hochlandrind-Wandbild über dem Kopfteil',
      fr: 'Tableau iconique de vache des Highlands au-dessus du lit'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Różowa',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Artistic detail of the iconic Scottish Highland Cow framed canvas, celebrating authentic Scottish character against pastel blush decor.',
      pl: 'Autentyczny szkocki akcent – oprawiony obraz kudłatej krowy rasy Highland Cow zawieszony nad wezgłowiem na tle różowej ściany.',
      de: 'Schottischer Akzent: Das charakteristische Hochlandrind als gerahmtes Wandbild über dem weißen Bettkopfteil.',
      fr: 'Touche écossaise authentique avec ce tableau encadré de vache des Highlands dominant la tête de lit blanche.'
    }
  },
  {
    id: 'bedroom-pink-5',
    src: '/zdjecia/bedroom-pink-5.jpg',
    title: {
      en: 'Bright Master Bedroom Window & King Bed Perspective',
      pl: 'Szerokie ujęcie sypialni głównej z oknem i łóżkiem małżeńskim',
      de: 'Weite Perspektive des Hauptschlafzimmers mit Fenster',
      fr: 'Vue lumineuse de la chambre principale avec fenêtre et grand lit'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Master Bedroom',
      pl: 'Sypialnia Różowa',
      de: 'Hauptschlafzimmer',
      fr: 'Chambre Principale'
    },
    description: {
      en: 'Sunny bedroom perspective showcasing the large window welcoming natural Scottish light, dual bedside tables with modern lamps, and generous room dimensions.',
      pl: 'Przestronne ujęcie sypialni ukazujące duże okno wpuszczające naturalne światło dzienne, dwa stoliki nocne z lampkami oraz swobodną przestrzeń.',
      de: 'Großzügige Ansicht mit großem Fenster für viel schottisches Tageslicht, zwei Nachttischen mit Lampen und reichlich Bewegungsfreiheit.',
      fr: 'Vue d’ensemble montrant la grande fenêtre baignée de lumière du jour, deux tables de nuit équipées de lampes et l’espace aéré.'
    }
  },

  // =========================================================================
  // 3. SECOND BEDROOM (Pistachio / Olive Suite with Perimeter LED & Wildlife Art)
  // =========================================================================
  {
    id: 'bedroom-olive-1',
    src: '/zdjecia/bedroom-olive-1.jpg',
    title: {
      en: 'Second King Bedroom with Perimeter Ambient Ceiling LED',
      pl: 'Druga sypialnia King Size z obwodowym oświetleniem LED',
      de: 'Zweites Kingsize-Schlafzimmer mit umlaufendem Decken-LED',
      fr: 'Deuxième chambre King Size avec éclairage LED d’ambiance au plafond'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Olive Suite',
      pl: 'Sypialnia Oliwkowa',
      de: 'Olivgrünes Zimmer',
      fr: 'Suite Olive'
    },
    description: {
      en: 'Calming pistachio and olive green bedroom featuring modern perimeter cove ceiling LED lighting, King Size bed dressed in deep navy bedding, and grey nightstands.',
      pl: 'Kojąca sypialnia w tonacji oliwkowo-pistacjowej z nowoczesnym podsufitowym oświetleniem LED, łóżkiem King Size w granatowej pościeli i szarymi szafkami.',
      de: 'Ruhiges Schlafzimmer in Oliv- und Pistazientönen mit stilvoller Decken-LED-Kranzbeleuchtung, Kingsize-Bett mit marineblauer Bettwäsche und Nachttischen.',
      fr: 'Chambre apaisante aux teintes pistache et olive, sublimée par un bandeau LED encastré au plafond, un grand lit King Size et une parure bleu marine.'
    },
    isHeroCandidate: true
  },
  {
    id: 'bedroom-olive-2',
    src: '/zdjecia/bedroom-olive-2.jpg',
    title: {
      en: 'King Bed Corner with Scottish Wildlife Gallery Prints',
      pl: 'Łóżko King Size z galerią grafik dzikiej przyrody',
      de: 'Kingsize-Bett mit Bildern schottischer Wildtiere',
      fr: 'Lit King Size et galerie d’illustrations de la faune écossaise'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Olive Suite',
      pl: 'Sypialnia Oliwkowa',
      de: 'Olivgrünes Zimmer',
      fr: 'Suite Olive'
    },
    description: {
      en: 'Cozy bedside view showing plush pillows, folded turquoise bath towels, cylinder bedside lamp, and a curated gallery wall with Scottish stag and wildlife prints.',
      pl: 'Przytulny kącik z miękkimi poduszkami, zestawem ręczników kąpielowych, cylindryczną lampką nocną i galerią 3 grafik ze szkockim jeleniem i fauną.',
      de: 'Gemütliche Ecke mit Kissen, frischen Handtüchern, zylindrischer Nachttischlampe und Bilder-Trio mit schottischem Hirsch und Naturmotiven.',
      fr: 'Coin intime avec oreillers douillets, serviettes turquoise, lampe de chevet cylindrique et triptyque encadré représentant le cerf écossais et la faune.'
    }
  },
  {
    id: 'bedroom-olive-3',
    src: '/zdjecia/bedroom-olive-3.jpg',
    title: {
      en: 'Built-in Double Closets & Chest of Drawers',
      pl: 'Podwójne wbudowane szafy i komoda z szufladami',
      de: 'Integrierte Einbauschränke & weiße Schubladenkommode',
      fr: 'Deux grands placards intégrés et commode à tiroirs'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Olive Suite',
      pl: 'Sypialnia Oliwkowa',
      de: 'Olivgrünes Zimmer',
      fr: 'Suite Olive'
    },
    description: {
      en: 'Generous storage space with two built-in double-door white wardrobes, a tall chest of 4 drawers, quality laminate flooring, and framed art.',
      pl: 'Bardzo dużo miejsca na ubrania – dwie białe szafy wnękowe z podwójnymi drzwiami, wysoka komoda z 4 szufladami, panele podłogowe i obrazy.',
      de: 'Reichlich Stauraum mit zwei großen Einbauschränken mit Doppeltüren, einer hohen 4-Schubladen-Kommode und pflegeleichtem Laminatboden.',
      fr: 'Espace de rangement généreux comprenant deux placards intégrés à doubles portes, une haute commode à 4 tiroirs et un sol stratifié soigné.'
    }
  },
  {
    id: 'bedroom-olive-4',
    src: '/zdjecia/bedroom-olive-4.jpg',
    title: {
      en: 'Straight-on View of King Bed & Matching Nightstands',
      pl: 'Centralny widok na łóżko King Size i stoliki nocne',
      de: 'Frontalansicht des Kingsize-Bettes mit Nachttischen',
      fr: 'Vue de face du lit King Size et des tables de chevet'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Olive Suite',
      pl: 'Sypialnia Oliwkowa',
      de: 'Olivgrünes Zimmer',
      fr: 'Suite Olive'
    },
    description: {
      en: 'Frontal perspective highlighting the King Size mattress, crisp navy linens, folded bath sheets, and symmetrical bedside tables with matching lamps.',
      pl: 'Centralne ujęcie ukazujące materac King Size, świeżą granatową pościel, ręczniki dla gości oraz symetryczne szafki nocne z eleganckimi lampkami.',
      de: 'Zentrierte Ansicht des bequemen Kingsize-Bettes mit gepflegter dunkelblauer Bettwäsche, Handtüchern und zwei passenden Nachtleuchten.',
      fr: 'Vue centrale mettant en valeur le matelas King Size, les draps bleu nuit soignés, les draps de bain pliés et les chevets assortis.'
    }
  },
  {
    id: 'bedroom-olive-5',
    src: '/zdjecia/bedroom-olive-5.jpg',
    title: {
      en: 'Bedside Profile & Ambient Cove Lighting',
      pl: 'Profil łóżka, grzejnik ścienny i podświetlenie gzymsu',
      de: 'Bettkante, Heizkörper & Deckenbeleuchtung',
      fr: 'Profil du lit, radiateur mural et bandeau lumineux'
    },
    category: 'bedrooms',
    categoryLabel: {
      en: 'Olive Suite',
      pl: 'Sypialnia Oliwkowa',
      de: 'Olivgrünes Zimmer',
      fr: 'Suite Olive'
    },
    description: {
      en: 'Detailed side angle displaying the warm glow of the overhead ceiling cove light, bedside lamp, window blind, and wall-mounted central heating radiator.',
      pl: 'Boczny kadr ukazujący ciepłą poświatę oświetlenia w gzymsie sufitowym, lampkę nocną, roletę okienną oraz grzejnik centralnego ogrzewania.',
      de: 'Detailansicht mit der warmen Lichtstimmung der Deckenleiste, Nachttischleuchte, Fensterrollo und Wandheizkörper.',
      fr: 'Gros plan révélant la douce ambiance lumineuse créée par la corniche au plafond, la lampe de nuit, le store et le radiateur.'
    }
  },

  // =========================================================================
  // 4. KITCHEN & APPLIANCES (Real photos)
  // =========================================================================
  {
    id: 'kitchen-1',
    src: '/zdjecia/kitchen-1.jpg',
    title: {
      en: 'Full Galley Kitchen with Washing Machine & SIA Fridge',
      pl: 'W pełni wyposażona kuchnia z pralką Haier i lodówką SIA',
      de: 'Voll ausgestattete Küche mit Haier-Waschmaschine & SIA-Kühlschrank',
      fr: 'Cuisine tout équipée avec lave-linge Haier et réfrigérateur SIA'
    },
    category: 'kitchen',
    categoryLabel: {
      en: 'Full Kitchen',
      pl: 'Kuchnia',
      de: 'Küche',
      fr: 'Cuisine'
    },
    description: {
      en: 'Long galley layout with warm wood cabinetry, black worktops, stainless sink under window, black Haier front-loading washing machine, gas stove, and tall SIA fridge-freezer.',
      pl: 'Układ z szafkami w kolorze drewna, ciemnymi blatami, zlewozmywakiem pod oknem z żółtą roletą, czarną pralką Haier, kuchenką gazową i wysoką lodówką SIA.',
      de: 'Praktische Küchenzeile in Holzoptik mit dunklen Arbeitsplatten, Spüle am Fenster, schwarzer Haier-Waschmaschine, Gasherd und großem SIA-Kühlschrank.',
      fr: 'Cuisine fonctionnelle en longueur avec meubles en bois clair, plans de travail sombres, évier sous la fenêtre, lave-linge Haier et grand combiné réfrigérateur SIA.'
    },
    isHeroCandidate: true
  },
  {
    id: 'kitchen-2',
    src: '/zdjecia/kitchen-2.jpg',
    title: {
      en: 'L-Shaped Counter with Gas Hob, Oven & Sink',
      pl: 'Narożny blat roboczy z płytą gazową, piekarnikiem i zlewem',
      de: 'L-förmige Arbeitsplatte mit Gasfeld, Backofen & Spüle',
      fr: 'Plan de travail en L avec table de cuisson gaz, four et évier'
    },
    category: 'kitchen',
    categoryLabel: {
      en: 'Kitchen Area',
      pl: 'Kuchnia',
      de: 'Küche',
      fr: 'Cuisine'
    },
    description: {
      en: 'Well-arranged food prep area featuring a 4-burner gas hob, black Candy oven, stainless steel extractor, kettle, toaster, double sink with drainer, and window view.',
      pl: 'Przestrzeń do gotowania z 4-palnikową płytą gazową, piekarnikiem Candy, okapem ze stali, czajnikiem, tosterem, podwójnym zlewem z ociekaczem i oknem.',
      de: 'Durchdachter Kochbereich mit 4-Flammen-Gaskochfeld, schwarzem Candy-Ofen, Edelstahlhaube, Wasserkocher, Toaster und Doppelspülbecken.',
      fr: 'Zone de cuisson ergonomique avec plaque de cuisson gaz 4 feux, four Candy, hotte aspirante en inox, bouilloire, grille-pain et double évier.'
    }
  },
  {
    id: 'kitchen-3',
    src: '/zdjecia/kitchen-3.jpg',
    title: {
      en: 'Cooking Hub with Candy Oven, Gas Hob & Extractor Hood',
      pl: 'Strefa gotowania z piekarnikiem Candy, płytą gazową i okapem',
      de: 'Kochstation mit Candy-Backofen, Gasherd & Dunstabzug',
      fr: 'Station de cuisson avec four Candy, feux gaz et hotte'
    },
    category: 'kitchen',
    categoryLabel: {
      en: 'Cooking Hub',
      pl: 'Strefa Gotowania',
      de: 'Kochstation',
      fr: 'Zone de Cuisson'
    },
    description: {
      en: 'Close view of the cooking zone highlighting the black Candy oven, gas burners, stainless steel canopy hood, wooden storage cabinets, and complimentary tea box.',
      pl: 'Przybliżenie na strefę kuchenną z czarnym piekarnikiem Candy, palnikami gazowymi, stalowym okapem, szafkami wiszącymi i drewnianym pudełkiem na herbatę.',
      de: 'Nahansicht der Kochstelle mit schwarzem Candy-Backofen, Gasbrennern, Edelstahl-Abzugshaube, Hängeschränken und Teekiste.',
      fr: 'Vue rapprochée de la zone de cuisson mettant en valeur le four Candy, les brûleurs à gaz, la hotte en inox et la boîte à thé de bienvenue.'
    }
  },
  {
    id: 'kitchen-4',
    src: '/zdjecia/kitchen-4.jpg',
    title: {
      en: 'Sink Station, Haier Washing Machine & Microwave',
      pl: 'Stanowisko zlewowe z pralką Haier i mikrofalówką',
      de: 'Spülstation mit Haier-Waschmaschine & Mikrowelle',
      fr: 'Espace évier avec lave-linge Haier et micro-ondes'
    },
    category: 'kitchen',
    categoryLabel: {
      en: 'Laundry & Prep',
      pl: 'Zlew i Pralka',
      de: 'Spül- & Waschbereich',
      fr: 'Évier et Lave-linge'
    },
    description: {
      en: 'Bright prep counter by the garden-facing window with yellow blind, equipped with stainless sink, dish drying rack, microwave oven, washing machine, and first aid kit.',
      pl: 'Jasne stanowisko ze zlewem dwukomorowym i suszarką, oknem z żółtą roletą, kuchenką mikrofalową, pralką Haier oraz apteczką pierwszej pomocy na ścianie.',
      de: 'Helle Arbeitszone am Gartenfenster mit gelbem Rollo, ausgestattet mit Spüle, Geschirrkorb, Mikrowelle, Waschmaschine und Erste-Hilfe-Kasten.',
      fr: 'Espace évier lumineux devant la fenêtre avec store jaune, doté d’un égouttoir, d’un four à micro-ondes, d’un lave-linge Haier et d’une trousse de secours murale.'
    }
  },

  // =========================================================================
  // 5. BATHROOM (Real photos)
  // =========================================================================
  {
    id: 'bathroom-vanity',
    src: '/zdjecia/bathroom-vanity.jpg',
    title: {
      en: 'Modern Vanity Cabinet, Designer Heated Towel Rail & Window',
      pl: 'Nowoczesna szafka z umywalką, czarny grzejnik drabinkowy i okno',
      de: 'Moderner Waschtisch, schwarzer Handtuchheizkörper & Fenster',
      fr: 'Meuble vasque moderne, sèche-serviettes noir design et fenêtre'
    },
    category: 'bathroom',
    categoryLabel: {
      en: 'Bathroom',
      pl: 'Łazienka',
      de: 'Badezimmer',
      fr: 'Salle de Bain'
    },
    description: {
      en: 'Fresh contemporary bathroom featuring a dark grey vanity unit with ceramic sink, mixer tap, toilet, frosted window with privacy blind, and vertical black designer radiator.',
      pl: 'Nowoczesna łazienka z ciemnoszarą szafką podumywalkową z szufladami, ceramiczną umywalką, toaletą, oknem z matową szybą i czarnym grzejnikiem drabinkowym.',
      de: 'Zeitgemäßes Bad mit anthrazitfarbenem Waschtischunterschrank, Keramikbecken, WC, Milchglasfenster mit Rollo und schwarzem Designer-Handtuchwärmer.',
      fr: 'Salle d’eau contemporaine avec meuble vasque gris foncé, lavabo céramique, WC, fenêtre dépolie avec store et sèche-serviettes vertical noir design.'
    },
    isHeroCandidate: true
  },
  {
    id: 'bathroom-tub',
    src: '/zdjecia/bathroom-tub.jpg',
    title: {
      en: 'Full-Length Bathtub with Shower Curtain Rail & Mosaic Border',
      pl: 'Pełnowymiarowa wanna z prysznicem, drążkiem i mozaiką',
      de: 'Vollwertige Badewanne mit Duschstange & Mosaikbordüre',
      fr: 'Baignoire complète avec tringle de douche et frise mosaïque'
    },
    category: 'bathroom',
    categoryLabel: {
      en: 'Bathroom',
      pl: 'Łazienka',
      de: 'Badezimmer',
      fr: 'Salle de Bain'
    },
    description: {
      en: 'Full-size bathtub with chrome mixer tap, overhead shower rail, clean white tiled walls accented with decorative patterned border, chrome grab handles, and bath mat.',
      pl: 'Pełnowymiarowa wanna z baterią prysznicową, drążkiem na zasłonę, czystymi białymi kafelkami z ozdobną bordiurą, uchwytami i matą łazienkową.',
      de: 'Große Badewanne mit Duscharmatur, Vorhangstange, weißen Fliesen mit dekorativer Mosaikbordüre, Haltegriffen und weicher Badematte.',
      fr: 'Baignoire spacieuse avec robinetterie douche, tringle à rideau, carrelage blanc souligné d’une frise décorative, poignées de sécurité et tapis de bain.'
    }
  },

  // =========================================================================
  // 6. PRIVATE REAR GARDEN (Real photo)
  // =========================================================================
  {
    id: 'garden-patio',
    src: '/zdjecia/garden-patio.jpg',
    title: {
      en: 'Enclosed Rear Garden with Patio Lounge Set & Artificial Lawn',
      pl: 'Zamknięty ogród wypoczynkowy ze sztuczną trawą i meblami tarasowymi',
      de: 'Eingezäunter Garten mit Terrassen-Lounge & Kunstrasen',
      fr: 'Jardin privatif clos avec salon de terrasse et pelouse synthétique'
    },
    category: 'garden',
    categoryLabel: {
      en: 'Private Garden',
      pl: 'Prywatny Ogród',
      de: 'Privater Garten',
      fr: 'Jardin Privé'
    },
    description: {
      en: 'Fully fenced private rear garden featuring maintenance-free green artificial lawn, white pebble border, tall vertical timber fence, comfortable outdoor sofa set with coffee table, and exterior pillar lamps.',
      pl: 'W pełni ogrodzony, zaciszny ogród na tyłach domu z zieloną sztuczną trawą, obwódką z białych kamyków, wysokim drewnianym płotem, meblami wypoczynkowymi i lampami słupkowymi.',
      de: 'Vollständig umzäunter, ruhiger Garten mit pflegeleichtem Kunstrasen, weißem Zierkiesrand, hohen Sichtschutzholzwänden, gemütlicher Outdoor-Sitzecke und Säulenleuchten.',
      fr: 'Jardin arrière privatif entièrement clos avec pelouse synthétique verdoyante, liseré de galets blancs, palissade en bois préservant l’intimité, salon d’extérieur et éclairages extérieurs.'
    },
    isHeroCandidate: true
  },

  // =========================================================================
  // 7. DRIVEWAY & EXTERIOR (Real photo)
  // =========================================================================
  {
    id: 'driveway',
    src: '/zdjecia/driveway.png',
    title: {
      en: 'Private Gravel Driveway & Stone Path in Front of House',
      pl: 'Prywatny żwirowy podjazd z kamienną ścieżką przed budynkiem',
      de: 'Eigene Kieseinfahrt mit Steinpfad direkt vor dem Haus',
      fr: 'Allée privée en gravier avec chemin en dalles devant la maison'
    },
    category: 'driveway',
    categoryLabel: {
      en: 'Private Driveway',
      pl: 'Prywatny Podjazd',
      de: 'Private Einfahrt',
      fr: 'Allée & Stationnement'
    },
    description: {
      en: 'Newly renovated private driveway directly outside the front door with fresh gravel parking, paved slate stepping pathway, landscaped pine trees, and tidy outdoor storage. Free parking without city restrictions.',
      pl: 'Nowo zmodernizowany prywatny podjazd przed samym wejściem do budynku ze żwirem, ścieżką z płyt łupkowych, miniaturowymi iglakami i zamykanym schowkiem. Wygodne i bezpłatne parkowanie.',
      de: 'Frisch angelegte private Einfahrt direkt vor der Haustür mit sauberem Kiesbelag, Naturstein-Gehweg, Zierkiefern und ordentlichem Abstellbereich. Kostenloses Parken ohne Stadteinschränkungen.',
      fr: 'Allée de stationnement privée fraîchement aménagée devant la porte avec gravier propre, chemin en dalles de pierre, conifères nains et espace rangement soigné. Stationnement gratuit sans contrainte citadine.'
    },
    isHeroCandidate: true
  }
];

export const heroSliderImages = [
  {
    src: '/zdjecia/living-room-1.jpg',
    alt: 'Spacious living room lounge with L-shaped corner sofa and patio doors to the private garden'
  },
  {
    src: '/zdjecia/bedroom-pink-1.jpg',
    alt: 'Master Bedroom with King Size bed, Hollywood illuminated vanity mirror and 3-door wardrobe'
  },
  {
    src: '/zdjecia/garden-patio.jpg',
    alt: 'Private enclosed rear garden with patio lounge set, artificial grass and timber fencing'
  },
  {
    src: '/zdjecia/bedroom-olive-1.jpg',
    alt: 'Second King bedroom suite with modern perimeter ambient ceiling LED lighting'
  },
  {
    src: '/zdjecia/kitchen-1.jpg',
    alt: 'Fully equipped kitchen with Haier washing machine, gas hob, oven and tall SIA fridge'
  },
  {
    src: '/zdjecia/bathroom-vanity.jpg',
    alt: 'Modern bathroom with vanity basin unit, designer black heated towel rail and frosted window'
  },
  {
    src: '/zdjecia/driveway.png',
    alt: 'Renovated private driveway with free off-street gravel parking and stone pathway'
  }
];
