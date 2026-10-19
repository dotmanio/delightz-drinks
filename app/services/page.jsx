import { services, whatsappLink } from '../../data/site';

export const metadata = {
  title: 'Services | Delightz Drinks And Events',
  description: 'Drinks supply, professional servers, and full event setup.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-purple relative overflow-hidden px-4 pt-24 pb-20">
        <div className="absolute inset-0 hero-fade" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto">
          <h1 className="section-title text-white max-w-2xl">A fully stocked bar, run properly from start to finish</h1>
          <span className="gold-rule mt-6" />
          <p className="section-lead mt-6">
            Drinks, people and setup, handled by one team, so your only job on the day is to host.
          </p>
        </div>
      </section>

      <section className="section-deep px-4 py-20 min-h-[60vh]">
        <div className="max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid md:grid-cols-[1fr_2fr_auto] gap-6 md:gap-10 items-start md:items-center py-10 border-t border-white/15 last:border-b"
            >
              <h2 className="text-2xl md:text-3xl text-white">{s.title}</h2>
              <p className="text-white/75 leading-relaxed max-w-xl">{s.desc}</p>
              <a
                href={whatsappLink(`Hi Delightz, I'd like to book: ${s.title}`)}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-sm"
              >
                Book this service
              </a>
            </div>
          ))}

          <div className="mt-20 panel-featured p-10 md:p-14 text-center">
            <h2 className="text-3xl text-white mb-4">Need a custom package?</h2>
            <p className="text-white/75 mb-8 max-w-lg mx-auto leading-relaxed">
              Tell us your event date and guest count, and we&apos;ll put together a package that fits your budget.
            </p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
              Chat with us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
