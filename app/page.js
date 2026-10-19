import Link from 'next/link';
import Image from 'next/image';
import { site, events, pricing, whatsappLink } from '../data/site';

const bring = [
  { title: 'Trained servers', text: 'Bartenders and servers who keep glasses full and lines short.' },
  { title: 'Ice, always cold', text: 'Ice blocks and cubes, kept in chest coolers all event long.' },
  { title: 'Full bar setup', text: 'We deliver, set up and run the bar, then clean up when the party ends.' },
  { title: 'Delivery to your venue', text: 'Bar, ice and staff arrive together, anywhere in Lagos and beyond.' }
];

const steps = [
  { title: 'Message us', text: 'Send your date, venue and guest count on WhatsApp.' },
  { title: 'Get your quote', text: 'We confirm the package that fits your guest list.' },
  { title: 'We set up', text: 'We deliver, set up the bar and run it on the day.' },
  { title: 'You enjoy', text: 'Host your guests while we handle every glass.' }
];

/* Edit these answers so they match how you really work. */
const faqs = [
  {
    q: 'What does a package include?',
    a: 'Every package covers transportation, bartenders and servers, ice blocks and cubes, chest coolers and our service charge. The breakdown is listed on each package above.'
  },
  {
    q: 'Do you supply the drinks too?',
    a: 'Yes. We can source and deliver beers, spirits, wine, soft drinks and mixers to your venue. Message us your guest count and preferences and we will quote the drinks for you.'
  },
  {
    q: 'Which areas do you serve?',
    a: 'We cover events across Lagos and the rest of Nigeria. Send us your venue and we will confirm.'
  },
  {
    q: 'How do I book?',
    a: 'Tap any Book button to open WhatsApp with your message ready. Tell us the date, venue and number of guests and we will take it from there.'
  },
  {
    q: 'My event has more than 500 guests.',
    a: 'We quote large events individually. Message us the details and we will put a custom package together.'
  }
];

export default function HomePage() {
  const featured = events.slice(0, 3);
  const heroImage = events[0].cover;
  const popularIndex = pricing.length > 2 ? 1 : -1;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 pt-24 pb-32 overflow-hidden bg-brand-purple">
        {/* Hero photo. Change heroImage to use a different event photo. */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#3B2E9E]/70 via-[#2A1F73]/78 to-[#1F1656]/95" />

        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <p className="hero-rise text-brand-gold text-base md:text-lg tracking-widest mb-6 font-medium">
            Premium event drinks catering
          </p>
          <h1 className="hero-rise-2 text-5xl md:text-7xl text-white mb-6 leading-[1.08] font-bold drop-shadow-lg">
            {site.headline}
          </h1>
          <p className="hero-rise-2 script text-4xl md:text-5xl text-brand-gold mb-8">
            {site.tagline}
          </p>
          <p className="hero-rise-3 text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {site.subline}
          </p>
          <div className="hero-rise-3 flex flex-wrap gap-4 justify-center">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold shadow-xl">
              Book your event
            </a>
            <Link href="/events" className="btn-outline bg-black/20 backdrop-blur">
              See our events
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-night border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x divide-white/10 text-center">
          <div className="px-6">
            <p className="font-[family-name:var(--font-playfair)] text-5xl text-brand-gold font-bold">{site.stats.events}</p>
            <p className="mt-2 text-white/70">Events served</p>
          </div>
          <div className="px-6">
            <p className="font-[family-name:var(--font-playfair)] text-5xl text-brand-gold font-bold">{site.stats.years}</p>
            <p className="mt-2 text-white/70">Years in business</p>
          </div>
          <div className="px-6">
            <p className="font-[family-name:var(--font-playfair)] text-5xl text-brand-gold font-bold">50–500</p>
            <p className="mt-2 text-white/70">Guests per event</p>
          </div>
        </div>
      </section>

      {/* WHAT WE BRING */}
      <section className="section-deep py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-white max-w-2xl">Everything your bar needs, brought to you</h2>
          <span className="gold-rule mt-6" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {bring.map((b) => (
              <div key={b.title} className="border-t border-white/15 pt-6">
                <h3 className="text-xl text-white mb-3">{b.title}</h3>
                <p className="text-white/70 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="packages" className="section-night py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Service packages</h2>
            <span className="gold-rule mx-auto mt-6" />
            <p className="section-lead mx-auto mt-6">
              Clear prices, no surprises. Every package covers transport, staff, ice and coolers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricing.map((pkg, i) => {
              const popular = i === popularIndex;
              return (
                <div
                  key={i}
                  className={`relative p-8 flex flex-col ${popular ? 'panel-featured md:-translate-y-3' : 'panel'}`}
                >
                  {popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-[#0F0A2E] text-xs font-semibold px-4 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl text-white mb-2">{pkg.tier}</h3>
                  <p className="text-4xl text-brand-gold font-bold mb-8">{pkg.total}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.breakdown.map((item, j) => (
                      <li key={j} className="flex justify-between gap-4 text-sm text-white/75 border-b border-white/10 pb-2">
                        <span>{item.item}</span>
                        <span className="text-white tabular-nums whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hi Delightz, I'm interested in the ${pkg.tier} package.`)}
                    target="_blank"
                    rel="noreferrer"
                    className={popular ? 'btn-gold text-sm' : 'btn-outline text-sm'}
                  >
                    Book this package
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-10 panel p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl text-white mb-2">More than 500 guests?</h3>
              <p className="text-white/70">Large events get a custom quote built around your guest list and venue.</p>
            </div>
            <a
              href={whatsappLink("Hi Delightz, I'd like a custom quote for an event with more than 500 guests.")}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm shrink-0"
            >
              Request a custom quote
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-deep py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-white">How booking works</h2>
          <span className="gold-rule mt-6" />
          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold text-brand-gold font-[family-name:var(--font-playfair)] text-lg">
                  {i + 1}
                </span>
                <h3 className="text-xl text-white mt-5 mb-2">{s.title}</h3>
                <p className="text-white/70 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RECENT EVENTS */}
      <section className="section-purple py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="section-title text-white">Recent events</h2>
              <span className="gold-rule mt-6" />
            </div>
            <Link href="/events" className="text-white/75 hover:text-brand-gold hidden md:block text-sm transition">
              See all events
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((ev) => (
              <Link
                key={ev.slug}
                href={`/events/${ev.slug}`}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-gold transition relative"
              >
                <div className="relative h-72">
                  <Image
                    src={ev.cover}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1F1656]/90 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#2A1F73]/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                    {ev.guests}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-brand-gold text-sm mb-1">{ev.type}</p>
                  <h3 className="text-xl text-white">{ev.title}</h3>
                  <p className="text-white/65 text-sm mt-2">{ev.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/events" className="btn-outline text-sm">See all events</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-night py-24 px-4">
        <div className="max-w-3xl mx-auto faq">
          <h2 className="section-title text-white">Questions, answered</h2>
          <span className="gold-rule mt-6 mb-10" />
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section-deep py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-white">Planning an event? Let&apos;s sort the drinks.</h2>
          <p className="section-lead mx-auto mt-5">
            Tell us your date, venue and guest count and we will reply with your quote.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold mt-10 shadow-xl">
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
