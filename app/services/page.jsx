import { services, whatsappLink } from '../../data/site';

export const metadata = {
  title: 'Services | Delightz Drinks And Events',
  description: 'Drinks supply, professional servers, and full event setup.'
};

export default function ServicesPage() {
  return (
    <section className="py-20 px-4 bg-brand-black min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Our Services</h1>
        <p className="text-white/60 mb-14">Everything you need for a fully stocked, smoothly run event bar.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
              <div className="text-5xl mb-5">{s.icon}</div>
              <h3 className="text-xl text-brand-gold font-bold mb-3">{s.title}</h3>
              <p className="text-white/70 text-sm mb-6 flex-1">{s.desc}</p>
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

        <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep">
          <h3 className="text-2xl text-white mb-3">Online booking coming soon</h3>
          <p className="text-white/70 mb-6">For now, tell us about your event on WhatsApp.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
}