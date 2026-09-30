import Image from 'next/image';
import Link from 'next/link';
import { events, whatsappLink } from '../../../data/site';

export function generateStaticParams() {
  return events.map((ev) => ({ slug: ev.slug }));
}

export function generateMetadata({ params }) {
  const ev = events.find((e) => e.slug === params.slug);
  if (!ev) return { title: 'Event not found' };
  return {
    title: `${ev.title} | Delightz Drinks And Events`,
    description: ev.summary
  };
}

export default function EventDetail({ params }) {
  const ev = events.find((e) => e.slug === params.slug);
  if (!ev) {
    return (
      <div className="py-32 text-center text-white">
        <h1 className="text-3xl mb-4">Event not found</h1>
        <Link href="/events" className="btn-gold">Back to Events</Link>
      </div>
    );
  }

  return (
    <article className="bg-brand-black min-h-screen pb-20">
      {/* HERO */}
      <div className="relative h-[50vh] min-h-[320px]">
        <Image src={ev.cover} alt={ev.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-6xl mx-auto px-4">
          <p className="text-brand-gold text-sm uppercase tracking-wider mb-2">{ev.type}</p>
          <h1 className="text-4xl md:text-5xl text-white">{ev.title}</h1>
          <p className="text-white/70 mt-3">
            {ev.location} · {new Date(ev.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-white/80 text-lg mb-12 max-w-3xl">{ev.summary}</p>

        {/* GALLERY */}
        <h2 className="text-2xl text-brand-gold mb-6">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {ev.gallery.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group border border-white/10"
            >
              <Image
                src={src}
                alt={`${ev.title} photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </a>
          ))}
        </div>

        {/* VIDEO */}
        {ev.video && (
          <div className="mb-12">
            <h2 className="text-2xl text-brand-gold mb-6">Video</h2>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe src={ev.video} className="w-full h-full" allowFullScreen />
            </div>
          </div>
        )}

        {/* FEEDBACK */}
        <h2 className="text-2xl text-brand-gold mb-6">What They Said</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ev.feedback.map((fb, i) => (
            <blockquote key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/90 italic mb-4">"{fb.quote}"</p>
              <footer className="text-sm">
                <span className="text-brand-gold font-semibold">{fb.name}</span>
                <span className="text-white/50"> · {fb.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep">
          <h3 className="text-2xl text-white mb-4">Want something like this?</h3>
          <a
            href={whatsappLink(`Hi Delightz, I saw the ${ev.title} event on your site and I'd like something similar.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            Book a Similar Event
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link href="/events" className="text-brand-gold hover:underline">← Back to all events</Link>
        </div>
      </div>
    </article>
  );
}