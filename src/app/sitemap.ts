import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const allSurah = new Array(114).fill(null);
  const surahData = allSurah.map((_, surah) => ({
    url: `https://al-quranku-v1.vercel.app/surah/${surah+1}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 1,
  }));

  return [
    {
      url: 'https://al-quranku-v1.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...surahData,
  ];
}
