import Logo from './Logo';
import { site, whatsappLink } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-brand-deep border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Logo variant="white" size={44} />
          <p className="script text-brand-gold text-2xl mt-4">{site.tagline}</p>
        </div>

        <div>
          <h4 className="text-brand-gold font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Manager: {site.manager}</li>
            <li>
              Phone: <a href={`tel:${site.phone}`} className="hover:text-brand-gold">{site.phone}</a>
            </li>
            <li>
              WhatsApp: <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-brand-gold">Chat now</a>
            </li>
            <li>
              Email: <a href={`mailto:${site.email}`} className="hover:text-brand-gold break-all">{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold font-semibold mb-4">Follow</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                Instagram · @{site.instagram}
              </a>
            </li>
            <li>
              <a href={`https://tiktok.com/@${site.tiktok}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold">
                TikTok · @{site.tiktok}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} Delightz Drinks And Events. All rights reserved.
      </div>
    </footer>
  );
}