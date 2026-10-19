import { site, events } from '../data/site';

export default function sitemap() {
  const now = new Date();
  const pages = ['', '/events', '/services', '/contact'].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8
  }));
  const eventPages = events.map((ev) => ({
    url: `${site.url}/events/${ev.slug}`,
    lastModified: new Date(ev.date),
    changeFrequency: 'yearly',
    priority: 0.6
  }));
  return [...pages, ...eventPages];
}
