'use client';
import Link from 'next/link';
import { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-50 bg-brand-deep/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Delightz home" className="bg-white rounded-lg p-1.5">
          <Logo variant="full" size={34} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-white/90 hover:text-brand-gold transition">
              {n.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold text-sm">
            Book on WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-deep border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-white/90">
              {n.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold text-sm text-center">
            Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}