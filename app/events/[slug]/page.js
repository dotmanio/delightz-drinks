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
      <div className="section-deep py-32 px-4 text-center text-white min-h-[60vh]">
        <h1 className="text-3xl mb-3">We couldn&apos;t find that event</h1>
        <p className="text-white/70 mb-8">It may have been moved or removed.</p>
        <Link href="/events" className="btn-gold">See all events</Link>
      </div>
    );
  }

  const longDate = new Date(ev.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <article className="section-purple min-h-screen pb-24">
      {/* HERO */}
      <div className="relative h-[55vh] min-h-[340px]">
        <Image src={ev.cover} alt={ev.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E9E] via-[#3B2E9E]/55 to-[#1F1656]/30" />
        <div className="absolute bottom-10 left-0 right-0 max-w-6xl mx-auto px-4">
          <p className="text-brand-gold text-base mb-3">{ev.type}</p>
          <h1 className="text-4xl md:text-6xl text-white leading-[1.1] max-w-3xl">{ev.title}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-6 text-sm">
            <span className="bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-white">{ev.location}</span>
            <span className="bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-white">{longDate}</span>
            <span className="bg-brand-gold text-[#0F0A2E] font-semibold px-4 py-1.5 rounded-full">{ev.guests}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-14">
        <p className="text-white/90 text-xl leading-relaxed mb-16 max-w-3xl">{ev.summary}</p>

        {/* GALLERY */}
        {ev.gallery?.length > 0 && (
          <>
            <h2 className="text-3xl text-white mb-2">Photos</h2>
            <span className="gold-rule mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
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
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </a>
              ))}
            </div>
          </>
        )}

        {/* VIDEO */}
        {ev.video && (
          <div className="mb-20">
            <h2 className="text-3xl text-white mb-2">Video</h2>
            <span className="gold-rule mb-8" />
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe src={ev.video} title={`${ev.title} video`} className="w-full h-full" allowFullScreen />
            </div>
          </div>
        )}

        {/* FEEDBACK */}
        {ev.feedback?.length > 0 && (
          <>
            <h2 className="text-3xl text-white mb-2">What they said</h2>
            <span className="gold-rule mb-8" />
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {ev.feedback.map((fb, i) => (
                <blockquote key={i} className="panel p-8">
                  <p className="text-white/90 text-lg leading-relaxed mb-5">&ldquo;{fb.quote}&rdquo;</p>
                  <footer className="text-sm">
                    <span className="text-brand-gold font-semibold">{fb.name}</span>
                    <span className="text-white/60">, {fb.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="panel-featured text-center p-10 md:p-14">
          <h2 className="text-3xl text-white mb-3">Want something like this?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">Tell us about your event and we&apos;ll send you a quote.</p>
          <a
            href={whatsappLink(`Hi Delightz, I saw the ${ev.title} event on your site and I'd like something similar.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            Book a similar event
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link href="/events" className="text-white/75 hover:text-brand-gold transition">
            Back to all events
          </Link>
        </div>
      </div>
    </article>
  );
}
