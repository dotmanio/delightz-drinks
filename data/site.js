export const site = {
  name: 'Delightz Drinks And Events',
  shortName: 'Delightz',
  url: 'https://delightz-drinks.vercel.app',
  tagline: '…No Drinks, No Party.',
  headline: 'We handle the drinks. You enjoy the party.',
  subline: 'Premium drinks, professional servers, and full bar setup for events across Lagos and Nigeria.',
  manager: 'Adekunle Oluwatomisin',
  phone: '07059937443',
  whatsapp: '2349018515931',
  email: 'adekunletomisin1234@gmail.com',
  instagram: 'delightz_drinks',
  tiktok: 'delightz_drinks',
  stats: {
    events: '20+',
    years: '2'
  }
};

export const whatsappLink = (message = "Hi Delightz, I'd like to book drinks for my event.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const events = [
  {
    slug: 'capo-ileya',
    title: 'Capo Ileya',
    date: '2024-06-16',
    location: 'Lagos',
    type: 'Ileya Celebration',
    guests: '150 Guests',
    summary: 'A lively Ileya celebration with family and friends — full bar service and refreshments.',
    cover: '/events/capo-ileya/01.jpg',
    gallery: [
      '/events/capo-ileya/01.jpg', '/events/capo-ileya/02.jpg',
      '/events/capo-ileya/03.jpg', '/events/capo-ileya/04.jpg',
      '/events/capo-ileya/05.jpg', '/events/capo-ileya/06.jpg',
      '/events/capo-ileya/07.jpg', '/events/capo-ileya/08.jpg'
    ],
    video: null,
    feedback: [
      { name: 'Host', role: 'Client', quote: 'Delightz handled the drinks perfectly. Everyone was happy.' }
    ]
  },
  {
    slug: 'abass-ileya-promotion',
    title: 'Mr Abass Ileya Promotion Celebration',
    date: '2024-06-16',
    location: 'Lagos',
    type: 'Ileya + Promotion',
    guests: '200 Guests',
    summary: 'A double celebration — Ileya festivities combined with a promotion party. Full bar service.',
    cover: '/events/abass-ileya-promotion/01.jpg',
    gallery: [
      '/events/abass-ileya-promotion/01.jpg', '/events/abass-ileya-promotion/02.jpg',
      '/events/abass-ileya-promotion/03.jpg', '/events/abass-ileya-promotion/04.jpg',
      '/events/abass-ileya-promotion/05.jpg', '/events/abass-ileya-promotion/06.jpg'
    ],
    video: null,
    feedback: [
      { name: 'Mr Abass', role: 'Host', quote: 'Very professional service from start to finish.' }
    ]
  },
  {
    slug: 'dancing-queen-50years',
    title: 'The Dancing Queen @ 50',
    date: '2024-02-10',
    location: 'Lagos',
    type: '50th Birthday',
    guests: '100 Guests',
    summary: 'A milestone 50th birthday celebration for a keen dancer — drinks, cocktails and a lively bar.',
    cover: '/events/dancing-queen-50years/01.jpg',
    gallery: [
      '/events/dancing-queen-50years/01.jpg', '/events/dancing-queen-50years/02.jpg',
      '/events/dancing-queen-50years/03.jpg', '/events/dancing-queen-50years/04.jpg',
      '/events/dancing-queen-50years/05.jpg', '/events/dancing-queen-50years/06.jpg',
      '/events/dancing-queen-50years/07.jpg', '/events/dancing-queen-50years/08.jpg',
      '/events/dancing-queen-50years/09.jpg'
    ],
    video: null,
    feedback: [
      { name: 'The Dancing Queen', role: 'Celebrant', quote: 'Delightz made my 50th unforgettable.' }
    ]
  }
];

export const pricing = [
  {
    tier: '50–100 Guests',
    total: '₦220,000',
    breakdown: [
      { item: 'Transportation', price: '₦80,000' },
      { item: 'Bartenders & servers (3–4)', price: '₦40,000' },
      { item: 'Ice blocks / cubes', price: '₦40,000' },
      { item: 'Chest / ice cooler', price: '₦30,000' },
      { item: 'Service charge', price: '₦30,000' }
    ]
  },
  {
    tier: '100–200 Guests',
    total: '₦310,000',
    breakdown: [
      { item: 'Transportation', price: '₦90,000' },
      { item: 'Bartenders & servers (5–6)', price: '₦60,000' },
      { item: 'Ice blocks / cubes', price: '₦60,000' },
      { item: 'Chest / ice cooler', price: '₦50,000' },
      { item: 'Service charge', price: '₦50,000' }
    ]
  },
  {
    tier: '200–500 Guests',
    total: '₦450,000',
    breakdown: [
      { item: 'Transportation', price: '₦120,000' },
      { item: 'Bartenders & servers (8–10)', price: '₦100,000' },
      { item: 'Ice blocks / cubes', price: '₦80,000' },
      { item: 'Chest / ice cooler', price: '₦70,000' },
      { item: 'Service charge', price: '₦80,000' }
    ]
  }
];

export const services = [
  {
    title: 'Drinks Supply',
    desc: 'Beers, spirits, wine, soft drinks, mixers and ice — sourced and delivered to your venue.',
    icon: '🍾'
  },
  {
    title: 'Servers & Bartenders',
    desc: 'Professional, uniformed, event-trained servers who keep glasses full and guests happy.',
    icon: '🥂'
  },
  {
    title: 'Setup & Delivery',
    desc: 'We deliver, set up the bar, run it, and clean up. You just enjoy your event.',
    icon: '🎉'
  }
];