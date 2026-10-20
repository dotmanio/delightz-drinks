'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const SEEN_KEY = 'delightz-intro-seen';
const MAX_WAIT_MS = 9000; // safety net: the site is never held back longer than this
const FADE_MS = 700;

export default function IntroSplash() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [phase, setPhase] = useState('show'); // show -> fading -> gone
  const videoRef = useRef(null);

  const finish = useCallback(() => {
    setPhase((p) => (p === 'show' ? 'fading' : p));
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {}
  }, []);

  // Decide whether to play, lock scrolling, and start the safety timer
  useEffect(() => {
    if (!isHome) return;

    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1';
    } catch {}
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduceMotion) {
      setPhase('gone');
      return;
    }

    document.documentElement.style.overflow = 'hidden';
    const safety = setTimeout(finish, MAX_WAIT_MS);

    const v = videoRef.current;
    if (v) {
      v.muted = true;
      const p = v.play();
      // If the browser refuses to autoplay (e.g. battery saver), don't leave visitors stuck
      if (p && typeof p.catch === 'function') p.catch(() => setTimeout(finish, 1200));
    }

    return () => {
      clearTimeout(safety);
      document.documentElement.style.overflow = '';
    };
  }, [isHome, finish]);

  // Release scrolling as soon as the fade starts, then remove the overlay
  useEffect(() => {
    if (phase === 'show') return;
    document.documentElement.style.overflow = '';
    if (phase === 'fading') {
      const t = setTimeout(() => setPhase('gone'), FADE_MS);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (!isHome || phase === 'gone') return null;

  return (
    <div
      role="dialog"
      aria-label="Delightz Drinks And Events intro"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity ease-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#1B2599', transitionDuration: `${FADE_MS}ms` }}
    >
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        preload="auto"
        poster="/intro-poster.jpg"
        onEnded={finish}
        onError={finish}
        className="w-[90vw] max-w-[520px] aspect-video object-contain"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-6 right-6 rounded-full border border-white/40 bg-black/20 px-5 py-2 text-sm text-white backdrop-blur transition hover:bg-white hover:text-[#1B2599]"
      >
        Skip intro
      </button>
    </div>
  );
}
