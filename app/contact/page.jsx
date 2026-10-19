import { site, whatsappLink } from '../../data/site';
import EnquiryForm from '../../components/EnquiryForm';

export const metadata = {
  title: 'Contact | Delightz Drinks And Events',
  description: 'Get in touch with Delightz Drinks And Events.'
};

const rows = (s) => [
  { label: 'Manager', value: s.manager },
  { label: 'Phone', value: s.phone, href: `tel:${s.phone}` },
  { label: 'WhatsApp', value: `+${s.whatsapp}`, href: whatsappLink(), external: true },
  { label: 'Email', value: s.email, href: `mailto:${s.email}`, wrap: true }
];

export default function ContactPage() {
  return (
    <section className="section-deep px-4 pt-24 pb-28 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="section-title text-white">Let&apos;s plan your event</h1>
        <span className="gold-rule mt-6" />
        <p className="section-lead mt-6 mb-16">
          Message us your date, venue and number of guests and we&apos;ll get back to you with a quote.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {rows(site).map((r) => (
              <div key={r.label} className="py-5 grid grid-cols-[7rem_1fr] gap-4 items-baseline">
                <dt className="text-white/55 text-sm">{r.label}</dt>
                <dd className={`text-lg text-white ${r.wrap ? 'break-all' : ''}`}>
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="hover:text-brand-gold transition"
                    >
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
            <div className="py-5 grid grid-cols-[7rem_1fr] gap-4 items-baseline">
              <dt className="text-white/55 text-sm">Social</dt>
              <dd className="text-lg text-white flex gap-6">
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold transition">
                  Instagram
                </a>
                <a href={`https://tiktok.com/@${site.tiktok}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold transition">
                  TikTok
                </a>
              </dd>
            </div>
          </dl>

          <div className="panel-featured p-8 md:p-10">
            <h2 className="text-2xl text-white mb-2">Tell us about your event</h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Fill this in and we&apos;ll open WhatsApp with your details ready to send.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
