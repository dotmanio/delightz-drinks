import Link from 'next/link';
import Image from 'next/image';
import { site, events, whatsappLink } from '../data/site';
import Logo from '../components/Logo';

export default function HomePage() {
  const featured = events.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-brand-purple via-brand-deep to-brand-black min-h-[85vh] flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <div className="flex justify-center mb-8">
            <Logo variant="white" size={140} />
          </div>
          <h1 className="script text-brand-gold text-5xl md:text-7xl mb-4">
            {site.tagline}
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10">{site.subline}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events" className="btn-gold">View Our Events</Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-brand-black py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🍾', title: 'Drinks Supply', desc: 'Beers, spirits, wine, soft drinks, mixers and ice.' },
            { icon: '🥂', title: 'Professional Servers', desc: 'Uniformed, event-trained, always on time.' },
            { icon: '🎉', title: 'Event Setup', desc: 'We deliver, set up, run the bar and clean up.' }
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-gold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl text-white">Recent Events</h2>
              <p className="text-white/60 mt-2">A taste of what we've served.</p>
            </div>
            <Link href="/events" className="text-brand-gold hover:underline hidden md:block">
              See all events →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((ev) => (
              <Link
                key={ev.slug}
                href={`/events/${ev.slug}`}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-gold transition"
              >
                <div className="relative h-56">
                  <Image
                    src={ev.cover}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-brand-gold text-xs uppercase tracking-wider">{ev.type}</p>
                  <h3 className="text-lg text-white mt-1">{ev.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{ev.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-20 px-4 bg-gradient-to-b from-brand-black to-brand-deep">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Online Ordering Coming Soon</h2>
          <p className="text-white/70 mb-8">
            Soon you'll be able to order drinks for your event directly from this site.
            For now, message us on WhatsApp and we'll take care of everything.
          </p>
          <a href={whatsappLink("Hi Delightz, I'd like to hear about online ordering.")} target="_blank" rel="noreferrer" className="btn-gold">
            Get Notified on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}