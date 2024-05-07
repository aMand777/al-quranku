import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import StoreProvider from '@/redux/StoreProvider';
import ChakraProvider from '@/app/ChakraProvider';
import NextAuthProvider from '@/app/NextAuthProvider';
import OpenSurahProvider from '@/context/OpenSurah';
import LanguageProvider from '@/context/Language';
import Navbar from '@/components/navigation/Navbar';
import NavMobile from '@/components/navigation/NavMobile';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Al-Quranku',
  description: 'Mari membaca al-quran',
  verification: {
    google: 'MAXtWBxxXZkoRkz3NpzxYcSs5PPm2mRQZuxrpGVaZbI',
  },
  manifest: '/manifest.json',
  authors: [{ name: 'amand', url: 'https://al-quranku-v1.vercel.app' }],
  openGraph: {
    type: 'website',
    url: 'https://al-quranku-v1.vercel.app',
    title: 'al-quranku',
    description: 'Website baca al-quran',
    siteName: 'Al-Quranku',
    images: [{ url: 'https://al-quranku-v1.vercel.app/icon-512.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-base-100 ${inter.className}`}>
        <NextAuthProvider>
          <StoreProvider>
            <LanguageProvider>
              <OpenSurahProvider>
                <ThemeProvider>
                  <ChakraProvider>
                    <NextTopLoader color="#FEB714" height={4} showSpinner={false} />
                    <Toaster />
                    <Navbar />
                    <NavMobile />
                    {children}
                  </ChakraProvider>
                </ThemeProvider>
              </OpenSurahProvider>
            </LanguageProvider>
          </StoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
