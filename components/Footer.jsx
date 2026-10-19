import Link from 'next/link';
import Logo from './Logo';
import { site, whatsappLink } from '../data/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="bg-brand-night border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <Logo variant="white" size={44} />
          <p className="script text-brand-gold text-3xl mt-5">{site.tagline}</p>
          <p className="text-white/65 text-sm mt-4 leading-relaxed">
            Premium event drinks catering across Lagos and Nigeria.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg mb-5">Explore</h4>
          <ul className="space-y-3 text-white/75 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-gold transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg mb-5">Contact</h4>
          <ul className="space-y-3 text-white/75 text-sm">
            <li>{site.manager}, Manager</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-brand-gold transition">{site.phone}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-brand-gold transition">Chat on WhatsApp</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-gold transition break-all">{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg mb-5">Follow us</h4>
          <ul className="space-y-3 text-white/75 text-sm">
            <li>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold transition">
                Instagram @{site.instagram}
              </a>
            </li>
            <li>
              <a href={`https://tiktok.com/@${site.tiktok}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold transition">
                TikTok @{site.tiktok}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} Delightz Drinks And Events. All rights reserved.
      </div>
    </footer>
  );
}
