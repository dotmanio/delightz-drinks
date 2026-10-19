import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { site } from '../data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.tagline}`,
  description: site.subline,
  keywords: [
    'event drinks Lagos',
    'bar setup Lagos',
    'drinks catering Nigeria',
    'party drinks service',
    'event bartenders Lagos'
  ],
  openGraph: {
    title: site.name,
    description: site.subline,
    siteName: site.name,
    type: 'website',
    locale: 'en_NG'
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.subline
  }
};

export const viewport = {
  themeColor: '#2A1F73'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.subline,
  url: site.url,
  telephone: `+234${site.phone.slice(1)}`,
  email: site.email,
  areaServed: ['Lagos', 'Nigeria'],
  sameAs: [`https://instagram.com/${site.instagram}`, `https://tiktok.com/@${site.tiktok}`]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
