import { site, whatsappLink } from '../../data/site';

export const metadata = {
  title: 'Contact | Delightz Drinks And Events',
  description: 'Get in touch with Delightz Drinks And Events.'
};

export default function ContactPage() {
  return (
    <section className="py-20 px-4 bg-brand-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white mb-3">Get in Touch</h1>
        <p className="text-white/60 mb-12">Let's make your event unforgettable.</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">Manager</p>
              <p className="text-white text-lg">{site.manager}</p>
            </div>

            <div>
              <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">Phone</p>
              <a href={`tel:${site.phone}`} className="text-white hover:text-brand-gold">{site.phone}</a>
            </div>

            <div>
              <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">WhatsApp</p>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-white hover:text-brand-gold">
                +{site.whatsapp}
              </a>
            </div>

            <div>
              <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${site.email}`} className="text-white hover:text-brand-gold break-all">{site.email}</a>
            </div>

            <div>
              <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">Social</p>
              <div className="flex gap-4 text-white">
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                  Instagram
                </a>
                <a href={`https://tiktok.com/@${site.tiktok}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl text-white mb-4">Send a message</h3>
            <p className="text-white/60 text-sm mb-6">
              The quickest way to reach us is WhatsApp. Tap below and let's talk about your event.
            </p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold w-full text-center">
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}