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
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import FontSizeProvider from '@/context/FontSize';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'al-quranku',
  description: 'Mari membaca al-quran',
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-base-100 ${inter.className}`}>
        <NextAuthProvider>
          <StoreProvider>
            <FontSizeProvider>
              <LanguageProvider>
                <OpenSurahProvider>
                  <ThemeProvider>
                    <ChakraProvider>
                      <NextTopLoader color="#FEB714" height={4} showSpinner={false} />
                      <Toaster />
                      <Navbar session={session} />
                      <NavMobile session={session} />
                      {children}
                    </ChakraProvider>
                  </ThemeProvider>
                </OpenSurahProvider>
              </LanguageProvider>
            </FontSizeProvider>
          </StoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
