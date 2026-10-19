'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { whatsappLink } from '../data/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-brand-night/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Delightz home">
          <Logo variant="white" size={40} />
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? 'page' : undefined}
              className={`py-1 border-b-2 transition ${
                isActive(n.href)
                  ? 'text-brand-gold border-brand-gold'
                  : 'text-white/85 border-transparent hover:text-white hover:border-white/40'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold text-sm !py-2.5 !px-5">
            Book on WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-brand-night border-t border-white/10 px-4 pt-2 pb-6 flex flex-col">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? 'page' : undefined}
              className={`py-3.5 border-b border-white/10 text-lg ${
                isActive(n.href) ? 'text-brand-gold' : 'text-white/90'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold text-sm mt-6">
            Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
