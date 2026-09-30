import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { site } from '../data/site';

export const metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.subline,
  openGraph: {
    title: site.name,
    description: site.subline,
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}