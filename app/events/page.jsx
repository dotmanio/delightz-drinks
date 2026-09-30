import Link from 'next/link';
import Image from 'next/image';
import { events } from '../../data/site';

export const metadata = {
  title: 'Our Events | Delightz Drinks And Events',
  description: 'Browse the celebrations Delightz has served.'
};

export default function EventsPage() {
  return (
    <section className="py-20 px-4 bg-brand-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Our Events</h1>
        <p className="text-white/60 mb-12">A look at celebrations we've served.</p>

        {/* Sliding panel — horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 snap-x snap-mandatory">
          {events.map((ev) => (
            <Link
              key={ev.slug}
              href={`/events/${ev.slug}`}
              className="group min-w-[280px] md:min-w-0 snap-start rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-gold transition"
            >
              <div className="relative h-56">
                <Image
                  src={ev.cover}
                  alt={ev.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-brand-gold text-xs uppercase tracking-wider">{ev.type}</p>
                <h3 className="text-lg text-white mt-1">{ev.title}</h3>
                <p className="text-white/50 text-sm mt-1">
                  {ev.location} · {new Date(ev.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}