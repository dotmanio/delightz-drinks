'use client';
import { useState } from 'react';
import { pricing, whatsappLink } from '../data/site';

const eventTypes = ['Birthday', 'Wedding', 'Corporate event', 'Festive celebration', 'Other'];
const guestOptions = [...pricing.map((p) => p.tier), 'More than 500 guests'];

const input =
  'w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 ' +
  'focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold';
const label = 'block text-sm text-white/75 mb-2';

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => String(f.get(k) || '').trim();

    const lines = [
      "Hi Delightz, I'd like to book drinks for my event.",
      '',
      `Name: ${get('name')}`,
      `Event: ${get('type')}`,
      `Date: ${get('date')}`,
      `Venue / area: ${get('venue') || 'Not decided yet'}`,
      `Guests: ${get('guests')}`
    ];
    if (get('notes')) lines.push(`Notes: ${get('notes')}`);

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={label}>Your name</label>
        <input id="name" name="name" required autoComplete="name" className={input} placeholder="e.g. Tolu Adeyemi" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="type" className={label}>Type of event</label>
          <select id="type" name="type" required defaultValue="" className={`${input} [&>option]:text-black`}>
            <option value="" disabled>Choose one</option>
            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={label}>Event date</label>
          <input id="date" name="date" type="date" required min={today} className={`${input} [color-scheme:dark]`} />
        </div>
      </div>

      <div>
        <label htmlFor="guests" className={label}>Number of guests</label>
        <select id="guests" name="guests" required defaultValue="" className={`${input} [&>option]:text-black`}>
          <option value="" disabled>Choose one</option>
          {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="venue" className={label}>Venue or area (optional)</label>
        <input id="venue" name="venue" className={input} placeholder="e.g. Ikorodu, Lagos" />
      </div>

      <div>
        <label htmlFor="notes" className={label}>Anything else we should know? (optional)</label>
        <textarea id="notes" name="notes" rows={3} className={input} placeholder="Drinks you have in mind, setup time, special requests" />
      </div>

      <button type="submit" className="btn-gold w-full">Send on WhatsApp</button>

      {sent && (
        <p role="status" className="text-sm text-white/75 text-center">
          WhatsApp should have opened with your details. If it didn&apos;t, allow pop-ups for this site and try again.
        </p>
      )}
    </form>
  );
}
