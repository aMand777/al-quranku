import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://al-quranku-v1.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://al-quranku-v1.vercel.app/bookmarks',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
