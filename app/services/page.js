import { services, whatsappLink } from '../../data/site';

export const metadata = {
  title: 'Services | Delightz Drinks And Events',
  description: 'Drinks supply, professional servers, and full event setup.'
};

export default function ServicesPage() {
  return (
    <section className="py-24 px-4 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm tracking-[0.2em] uppercase mb-4 font-semibold">What We Do</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Our Services</h1>
          <p className="text-white/60">Everything you need for a fully stocked, smoothly run event bar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-2xl bg-[#111] border border-white/10 flex flex-col hover:border-brand-gold/50 transition duration-300">
              <div className="text-5xl mb-5">{s.icon}</div>
              <h3 className="text-xl text-white font-serif mb-3">{s.title}</h3>
              <p className="text-white/60 text-sm mb-8 flex-1">{s.desc}</p>
              <a
                href={whatsappLink(`Hi Delightz, I'd like to book: ${s.title}`)}
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-sm text-center"
              >
                Book this
              </a>
            </div>
          ))}
        </div>

        <div className="text-center p-12 rounded-3xl bg-[#111] border border-white/10">
          <h3 className="text-3xl text-white mb-4 font-serif">Need a custom package?</h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">Tell us your event date and guest count, and we'll put together a package that fits your budget.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
}