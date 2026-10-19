import Link from 'next/link';
import Image from 'next/image';
import { site, events, pricing, whatsappLink } from '../data/site';
import Logo from '../components/Logo';

export default function HomePage() {
  const featured = events.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0A0A0A] min-h-[90vh] flex items-center justify-center px-4 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-brand-gold text-sm tracking-[0.2em] uppercase mb-6 font-semibold">
            Premium Event Drinks Catering
          </p>
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            {site.headline}
          </h1>
          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {site.subline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
              Book Your Event
            </a>
            <Link href="/events" className="btn-outline">
              See Our Events
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl text-white max-w-3xl mx-auto font-light leading-relaxed">
            Trusted for <strong className="text-brand-gold font-bold">{site.stats.events}</strong> events over <strong className="text-brand-gold font-bold">{site.stats.years}</strong> years, providing custom bar setups and professional service across Nigeria.
          </h2>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-sm tracking-[0.2em] uppercase mb-4 font-semibold">Transparent Pricing</p>
            <h2 className="text-4xl text-white">Service Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((pkg, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#111] border border-white/10 flex flex-col hover:border-brand-gold/50 transition">
                <h3 className="text-xl text-white mb-2 font-serif">{pkg.tier}</h3>
                <p className="text-3xl text-brand-gold font-bold mb-8">{pkg.total}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.breakdown.map((item, j) => (
                    <li key={j} className="flex justify-between text-sm text-white/70 border-b border-white/5 pb-2">
                      <span>{item.item}</span>
                      <span className="font-mono text-white">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <a href={whatsappLink(`Hi Delightz, I'm interested in the ${pkg.tier} package.`)} target="_blank" rel="noreferrer" className="btn-gold text-center text-sm">
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT EVENTS */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-brand-gold text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Gallery</p>
              <h2 className="text-4xl text-white">Recent Events</h2>
            </div>
            <Link href="/events" className="text-white/60 hover:text-brand-gold hidden md:block text-sm uppercase tracking-wider transition">
              See all events →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((ev) => (
              <Link
                key={ev.slug}
                href={`/events/${ev.slug}`}
                className="group rounded-2xl overflow-hidden bg-[#111] border border-white/10 hover:border-brand-gold transition relative"
              >
                <div className="relative h-64">
                  <Image
                    src={ev.cover}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                    {ev.guests}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-brand-gold text-xs uppercase tracking-wider mb-1">{ev.type}</p>
                  <h3 className="text-xl text-white">{ev.title}</h3>
                  <p className="text-white/40 text-sm mt-2">{ev.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}