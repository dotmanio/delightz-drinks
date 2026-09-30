export const site = {
  name: 'Delightz Drinks And Events',
  shortName: 'Delightz',
  tagline: '…No Drinks, No Party!!!',
  subline: 'Premium drinks & event service for every celebration.',
  manager: 'Adekunle Oluwatomisin',
  phone: '09018515931',
  whatsapp: '2349018515931',
  email: 'adekunletomisin1234@gmail.com',
  instagram: 'delightz_drinks',
  tiktok: 'delightz_drinks'
};

export const whatsappLink = (message = "Hi Delightz, I'd like to book drinks for my event.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const events = [
  {
    slug: 'olawole-80th',
    title: "Mr. Olawole's 80th",
    date: '2024-11-16',
    location: 'Lagos',
    type: '80th Birthday',
    summary: 'Full bar setup, 6 servers, premium spirits and champagne for 120 guests.',
    cover: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200',
      'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=1200'
    ],
    video: null,
    feedback: [
      { name: 'Mrs. Olawole', role: 'Host', quote: 'Delightz handled everything — drinks, servers, setup. Our guests are still talking about it.' },
      { name: 'Tunde A.', role: 'Guest', quote: 'Best bar service I have seen at a Nigerian party. Professional and fast.' }
    ]
  },
  {
    slug: 'adebayo-wedding',
    title: 'Adebayo Wedding',
    date: '2024-09-21',
    location: 'Ibadan',
    type: 'Wedding',
    summary: 'Cocktail bar, wine service and 8 servers for a 300-guest wedding.',
    cover: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200'
    ],
    video: null,
    feedback: [
      { name: 'Mr. & Mrs. Adebayo', role: 'Couple', quote: 'The bar was the highlight of our reception. Thank you Delightz.' }
    ]
  },
  {
    slug: 'chioma-graduation',
    title: "Chioma's Graduation",
    date: '2024-07-13',
    location: 'Lagos',
    type: 'Graduation Party',
    summary: 'Chilled beers, soft drinks and cocktails for 80 guests.',
    cover: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200'
    ],
    video: null,
    feedback: [
      { name: 'Chioma O.', role: 'Graduate', quote: 'Everything was cold, on time, and the servers were so polite.' }
    ]
  },
  {
    slug: 'eko-corporate',
    title: 'Eko Corporate Mixer',
    date: '2024-05-04',
    location: 'Victoria Island',
    type: 'Corporate Event',
    summary: 'Premium wine and cocktail bar for a 150-guest corporate mixer.',
    cover: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200'
    ],
    video: null,
    feedback: [
      { name: 'Eko Group', role: 'Client', quote: 'Very professional. We will use Delightz for every company event.' }
    ]
  },
  {
    slug: 'ibrahim-naming',
    title: 'Ibrahim Naming Ceremony',
    date: '2024-03-09',
    location: 'Abuja',
    type: 'Naming Ceremony',
    summary: 'Soft drinks, juice bar and 4 servers for 100 guests.',
    cover: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=1200',
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200'
    ],
    video: null,
    feedback: [
      { name: 'Alhaji Ibrahim', role: 'Host', quote: 'They arrived early and everything was perfect.' }
    ]
  },
  {
    slug: 'ngozi-birthday',
    title: "Ngozi's 40th",
    date: '2024-01-27',
    location: 'Lagos',
    type: '40th Birthday',
    summary: 'Champagne toast service and full cocktail bar for 60 guests.',
    cover: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200'
    ],
    video: null,
    feedback: [
      { name: 'Ngozi E.', role: 'Celebrant', quote: 'Delightz made my 40th unforgettable. The champagne service was classy.' }
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