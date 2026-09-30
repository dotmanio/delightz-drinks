import { whatsappLink } from '../data/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 3.9 17.1L2.5 22l5-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-3 .8.8-2.9-.2-.3A9 9 0 1 1 12 20.5Zm5-6.6c-.3-.1-1.7-.8-1.9-.9s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7.1a7.4 7.4 0 0 1-2.2-1.3 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5s0-.4 0-.5-.7-1.6-.9-2.2-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4A3.6 3.6 0 0 0 6.4 9c0 1.5 1.1 3 1.2 3.2s2.2 3.4 5.3 4.7a6.2 6.2 0 0 0 2.5.5 2.8 2.8 0 0 0 1.9-.8 2.2 2.2 0 0 0 .5-1.4c0-.2 0-.4-.3-.5Z" />
      </svg>
    </a>
  );
}