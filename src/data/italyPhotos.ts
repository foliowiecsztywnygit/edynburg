export interface ItalyGalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'balkon' | 'wnetrze' | 'kuchnia' | 'lazienka' | 'basen' | 'okolica';
  categoryLabel: string;
  description: string;
}

export const italyGalleryPhotos: ItalyGalleryPhoto[] = [
  {
    id: 'hero-sunset',
    src: '/sardynia/hero-sunset.jpg',
    title: 'Spektakularny zachód słońca nad Zatoką Asinara',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Szeroka panorama morza i wyspy Asinara o zachodzie słońca z prywatnego tarasu Il Dolce Tramonto Apartment.'
  },
  {
    id: '697993505',
    src: '/sardynia/697993505.jpg',
    title: 'Balkon ze stolikiem i kieliszkami o zachodzie słońca',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Komfortowe fotele, stolik kawowy z lampką wina i panoramiczny widok na morze oraz dachy Trinità d\'Agultu.'
  },
  {
    id: '697993963',
    src: '/sardynia/697993963.jpg',
    title: 'Dwa kieliszki Aperol Spritz na tle zachodu słońca',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Kultowy kadr z balkonu apartamentu — wieczorny relaks przy zachodzącym słońcu i ciepłej morskiej bryzie.'
  },
  {
    id: '698001617',
    src: '/sardynia/698001617.jpg',
    title: 'Pełna panorama balkonu o zachodzie słońca',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Szeroki kadr ukazujący przestronność prywatnego balkonu i niezakłócony horyzont Morza Śródziemnego.'
  },
  {
    id: '697993635',
    src: '/sardynia/697993635.jpg',
    title: 'Złoty zachód słońca nad horyzontem morskim',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Magiczna gra świateł na falach Morza Śródziemnego widziana bezpośrednio z balkonu apartamentu.'
  },
  {
    id: '697993700',
    src: '/sardynia/697993700.jpg',
    title: 'Kącik wypoczynkowy na balkonie',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Wygodne meble tarasowe idealne do śniadań na świeżym powietrzu i wieczornego relaksu pod gwiazdami.'
  },
  {
    id: '697993783',
    src: '/sardynia/697993783.jpg',
    title: 'Widok na zachodzące słońce i wyspy',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Ciepłe, purpurowo-złote odcienie nieba nad Sardynią i sylwetka wyspy Asinara w oddali.'
  },
  {
    id: '697993837',
    src: '/sardynia/697993837.jpg',
    title: 'Stolik balkonowy z lampką wina',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Prawdziwe \'Il Dolce Tramonto\' — słodki zachód słońca przy lampce lokalnego sardyńskiego wina Vermentino di Gallura.'
  },
  {
    id: '697993890',
    src: '/sardynia/697993890.jpg',
    title: 'Poranna kawa na balkonie z widokiem na morze',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Idealny początek każdego dnia — świeżo zaparzone espresso z panoramą błękitnego wybrzeża Sardynii.'
  },
  {
    id: '697993956',
    src: '/sardynia/697993956.jpg',
    title: 'Wieczorne oświetlenie balkonu z lampionem',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Ciepłe światło latarni tworzące przytulny, romantyczny nastrój po zmierzchu.'
  },
  {
    id: '697993568',
    src: '/sardynia/697993568.jpg',
    title: 'Śródziemnomorska zieleń i cytrusy na balkonie',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Roślinność doniczkowa i lawenda wprowadzające zapach śródziemnomorskiego lata na prywatnym tarasie.'
  },
  {
    id: '698001490',
    src: '/sardynia/698001490.jpg',
    title: 'Widok z balkonu na dachy miasteczka i morze',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Tradycyjna terakotowa architektura Trinità d\'Agultu łagodnie opadająca w stronę lazurowego morza.'
  },
  {
    id: '697993638',
    src: '/sardynia/697993638.jpg',
    title: 'Wieczorny zmierzch z widokiem na Zatokę Asinara',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Spokojny wieczór i subtelne światła wybrzeża Północnej Sardynii widziane z balkonu.'
  },
  // WNĘTRZE & ANTRESOLA
  {
    id: '697993728',
    src: '/sardynia/697993728.jpg',
    title: 'Perspektywa z salonu na antresolę',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Przestronna wysokość sufitu i loftowa drewniana konstrukcja dodająca apartamentowi unikalnego, przestronnego charakteru.'
  },
  {
    id: '697993939',
    src: '/sardynia/697993939.jpg',
    title: 'Antresola widokowa z góry na salon',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Widok z poziomu sypialni na antresoli na salon i okno balkonowe otwierające się na panoramę morza.'
  },
  {
    id: '697993538',
    src: '/sardynia/697993538.jpg',
    title: 'Sypialnia na poddaszu z łóżkiem małżeńskim',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Górny poziom apartamentu ze skośnym drewnianym sufitem, szerokim materacem i nastrojowym oświetleniem.'
  },
  {
    id: '697993679',
    src: '/sardynia/697993679.jpg',
    title: 'Salon z jadalnią i wyjściem na balkon',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Jasna przestrzeń dzienna 47 m² z naturalnym światłem wpadającym przez wielkie przesuwne drzwi tarasowe.'
  },
  {
    id: '697993630',
    src: '/sardynia/697993630.jpg',
    title: 'Rozkładana sofa w strefie dziennej',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Wygodna sofa w salonie z funkcją rozkładania w pełnowymiarowe łóżko dla 2 kolejnych gości.'
  },
  {
    id: '697993773',
    src: '/sardynia/697993773.jpg',
    title: 'Komfortowe łóżko małżeńskie',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Podwójne łóżko z wygodnym materacem, szafkami nocnymi i miękką, pachnącą pościelą.'
  },
  {
    id: '697993847',
    src: '/sardynia/697993847.jpg',
    title: 'Sypialnia przygotowana na przyjazd gości',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Czystość na poziomie 8,1/10 według Booking.com — świeża pościel, miękkie poduszki i nastrojowy klimat.'
  },
  {
    id: '697993613',
    src: '/sardynia/697993613.jpg',
    title: 'Schody drewniane na antresolę',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Solidne, bezpieczne drewniane schody prowadzące z poziomu salonu do strefy sypialnej na antresoli.'
  },
  {
    id: '698001548',
    src: '/sardynia/698001548.jpg',
    title: 'Schody loftowe i konstrukcja antresoli',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Ażurowa konstrukcja zapewniająca poczucie przestrzeni, optymalną cyrkulację powietrza i światła.'
  },
  {
    id: '697993823',
    src: '/sardynia/697993823.jpg',
    title: 'Cicha klimatyzacja w apartamencie',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Wydajny klimatyzator z pilotem, gwarantujący przyjemny chłód w upalne letnie dni oraz ogrzewanie poza sezonem.'
  },
  {
    id: '697993874',
    src: '/sardynia/697993874.jpg',
    title: 'Pojemna szafa na ubrania',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Praktyczne miejsce na walizki, wieszaki i półki na ubrania dla całej 4-osobowej rodziny.'
  },
  {
    id: '698000121',
    src: '/sardynia/698000121.jpg',
    title: 'Smart TV z płaskim ekranem w salonie',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Płaski telewizor z dostępem do kanałów i bezpłatnego, szybkiego Wi-Fi w całym apartamencie.'
  },
  {
    id: '697993925',
    src: '/sardynia/697993925.jpg',
    title: 'Stylowe detale i dekoracje morskie',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Subtelne akcenty marynistyczne i śródziemnomorskie dekoracje dopełniające relaksującą atmosferę.'
  },
  // KUCHNIA & JADALNIA
  {
    id: '697993545',
    src: '/sardynia/697993545.jpg',
    title: 'W pełni wyposażony aneks kuchenny',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Nowoczesny aneks ze stali nierdzewnej z płytą gazową, piekarnikiem, zlewem i kompletem garnków.'
  },
  {
    id: '697993916',
    src: '/sardynia/697993916.jpg',
    title: 'Stół jadalniany z krzesłami dla 4 osób',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Wygodna przestrzeń do wspólnych posiłków przy stole w sercu apartamentu.'
  },
  {
    id: '697993557',
    src: '/sardynia/697993557.jpg',
    title: 'Włoski ekspres do kawy i kącik śniadaniowy',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Ekspres do kawy, zapas kapsułek/kawy oraz komplet filiżanek na wyciągnięcie ręki.'
  },
  {
    id: '697993651',
    src: '/sardynia/697993651.jpg',
    title: 'Duża lodówka z zamrażarką i szafki',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Pojemna lodówka na lokalne sery pecorino, wina Vermentino, owoce i świeże składniki z targu.'
  },
  {
    id: '697993580',
    src: '/sardynia/697993580.jpg',
    title: 'Zastawa stołowa i kieliszki do wina',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Kompletna zastawa: talerze, sztućce, szklanki i kieliszki do wina na wieczorne toasty.'
  },
  {
    id: '697993690',
    src: '/sardynia/697993690.jpg',
    title: 'Przybory kuchenne i naczynia do gotowania',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Patelnie, rondle, durszlak do pasty oraz akcesoria ułatwiające gotowanie jak we własnym domu.'
  },
  {
    id: '697993756',
    src: '/sardynia/697993756.jpg',
    title: 'Czajnik elektryczny i drobne AGD',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Czajnik do herbaty, deski do krojenia i drobne sprzęty kuchenne.'
  },
  {
    id: '698001572',
    src: '/sardynia/698001572.jpg',
    title: 'Piekarnik i płyta grzewcza w aneksie',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Możliwość pieczenia świeżych focacci i przyrządzania pełnych śródziemnomorskich dań.'
  },
  // ŁAZIENKA
  {
    id: '697993670',
    src: '/sardynia/697993670.jpg',
    title: 'Umywalka z lustrem i suszarką do włosów',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Duże lustro ścienne z jasnym oświetleniem LED, półka na kosmetyki oraz suszarka do włosów.'
  },
  {
    id: '697993624',
    src: '/sardynia/697993624.jpg',
    title: 'Prysznic ze szklaną kabiną',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Wygodny natrysk z doskonałym ciśnieniem gorącej wody i szklanymi przesuwnymi drzwiami.'
  },
  {
    id: '697993715',
    src: '/sardynia/697993715.jpg',
    title: 'Pralka automatyczna w łazience',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Prywatna pralka automatyczna — ogromna wygoda po powrocie ze słonecznych plaż Sardynii.'
  },
  {
    id: '697993791',
    src: '/sardynia/697993791.jpg',
    title: 'Tradycyjny włoski bidet i toaleta',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Włoski standard wygody i higieny z papierem toaletowym i środkami czystości.'
  },
  {
    id: '697993947',
    src: '/sardynia/697993947.jpg',
    title: 'Komplet miękkich ręczników kąpielowych',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Zestaw świeżych, puszystych ręczników przygotowanych indywidualnie dla każdego gościa.'
  },
  // BASEN & KOMPLEKS
  {
    id: '697993552',
    src: '/sardynia/697993552.jpg',
    title: 'Basen rekreacyjny z leżakami i widokiem na wzgórza',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Pierwszy z dwóch odkrytych basenów kompleksu z turkusową wodą i strefą do opalania.'
  },
  {
    id: '697993597',
    src: '/sardynia/697993597.jpg',
    title: 'Drugi basen w otoczeniu kamiennej architektury',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Drugi basen rekreacyjny w rezydencji — cichy, kameralny, idealny na popołudniowy relaks.'
  },
  {
    id: '697993645',
    src: '/sardynia/697993645.jpg',
    title: 'Kompleks basenowy z panoramą morza',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Teren rekreacyjny rezydencji ze słonecznym tarasem i widokiem na Zatokę Asinara.'
  },
  {
    id: '697993664',
    src: '/sardynia/697993664.jpg',
    title: 'Basen w pełnym słońcu Sardynii',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Krystalicznie czysta woda basenowa z łagodnym wejściem, odpowiednia dla dorosłych i dzieci.'
  },
  {
    id: '697993741',
    src: '/sardynia/697993741.jpg',
    title: 'Strefa leżaków przy basenie',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Prywatna strefa relaksu na świeżym powietrzu, z której goście apartamentu mogą korzystać bezpłatnie.'
  },
  // OKOLICA & PLAŻE
  {
    id: '697993810',
    src: '/sardynia/697993810.jpg',
    title: 'Zatoka morska i wzgórza północnej Sardynii',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Dziewicza śródziemnomorska przyroda, zalesione wzgórza i szafirowe wody zatoki w pobliżu Trinità d\'Agultu.'
  },
  {
    id: '697993589',
    src: '/sardynia/697993589.jpg',
    title: 'Klimatyczne uliczki Trinità d\'Agultu o zmierzchu',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Tradycyjne kamienne domy i brukowane uliczki miasteczka w ciepłym świetle latarni.'
  },
  {
    id: '697993607',
    src: '/sardynia/697993607.jpg',
    title: 'Dziewicza piaszczysta plaża Li Feruli (5 km)',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Szeroka plaża ze złotym piaskiem i krystalicznie czystą wodą zaledwie 5 minut autem od apartamentu.'
  },
  {
    id: '697993867',
    src: '/sardynia/697993867.jpg',
    title: 'Słynna plaża La Marinedda (6 km)',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Jedna z najpiękniejszych zatok północnej Sardynii, otoczona czerwonymi granitowymi skałami i sosnami.'
  },
  {
    id: '697993880',
    src: '/sardynia/697993880.jpg',
    title: 'Lazurowe morze i zatoczki Isola Rossa (6 km)',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Niewiarygodna przezroczystość wody w odcieniach szmaragdu i kobaltu — raj do snorkelingu i pływania.'
  },
  {
    id: '697993801',
    src: '/sardynia/697993801.jpg',
    title: 'Plaża Spiaggia Longa i port Isola Rossa',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Urokliwy port rybacki z mariną jachtową, promenadą, restauracjami serwującymi świeże ryby i lodziarniami.'
  },
  {
    id: '697993855',
    src: '/sardynia/697993855.jpg',
    title: 'Wybrzeże Costa Paradiso i Zatoka Asinara',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Dzikie wybrzeże Północnej Sardynii z ukrytymi fiordami skalnymi i zachwycającą przyrodą.'
  },
  {
    id: '698001523',
    src: '/sardynia/698001523.jpg',
    title: 'Zachód słońca nad plażą Li Junchi di Badesi (6 km)',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Wielokilometrowa plaża wydmowa z błękitną flagą, idealna na romantyczne wieczorne spacery brzegiem morza.'
  },
  {
    id: '697993973',
    src: '/sardynia/697993973.jpg',
    title: 'Zabytkowy kościół Chiesa di Trinità d\'Agultu',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Charakterystyczna kamienna dzwonnica i serce miasteczka Trinità d\'Agultu, zaledwie 1,5 km od apartamentu.'
  },
  {
    id: '697993979',
    src: '/sardynia/697993979.jpg',
    title: 'Malownicze kamienne uliczki Trinità d\'Agultu',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Klimatyczne zaułki ze starymi domami z granitu, kawiarniami, winiarniami i lokalną piekarnią Pasticceria la Dolce Magia.'
  }
];
