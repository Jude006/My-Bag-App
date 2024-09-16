import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Your website URL
const baseUrl = 'https://my-bag-app.vercel.app/';

// List of routes in your application
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/shop', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.6 },
  { url: '/shop', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  // Add more routes here as needed
];

// Create a readable stream
const stream = new SitemapStream({ hostname: baseUrl });

// Create sitemap file
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data);
  console.log('Sitemap generated successfully.');
}).catch(err => {
  console.error('Sitemap generation failed:', err);
});
