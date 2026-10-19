import Link from 'next/link';

export const metadata = {
  title: 'Page not found | Delightz Drinks And Events'
};

export default function NotFound() {
  return (
    <section className="section-deep px-4 py-32 text-center min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto">
        <p className="script text-brand-gold text-5xl mb-4">Oops…</p>
        <h1 className="section-title text-white">This page isn&apos;t on the menu</h1>
        <p className="section-lead mx-auto mt-5">
          The link may be broken or the page may have moved. Head back home or see the events we&apos;ve served.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-gold">Back to home</Link>
          <Link href="/events" className="btn-outline">See our events</Link>
        </div>
      </div>
    </section>
  );
}
