import Link from 'next/link';
import Image from 'next/image';
import { events } from '../../data/site';

export const metadata = {
  title: 'Our Events | Delightz Drinks And Events',
  description: 'Browse the celebrations Delightz has served.'
};

export default function EventsPage() {
  return (
    <section className="section-purple px-4 pt-24 pb-28 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title text-white">Our events</h1>
        <span className="gold-rule mt-6" />
        <p className="section-lead mt-6 mb-14">A look at the celebrations we&apos;ve served across Lagos.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1F1656]/90 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#2A1F73]/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                  {ev.guests}
                </div>
              </div>
              <div className="p-6">
                <p className="text-brand-gold text-sm mb-1">{ev.type}</p>
                <h2 className="text-xl text-white">{ev.title}</h2>
                <p className="text-white/65 text-sm mt-2">
                  {ev.location}, {new Date(ev.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
