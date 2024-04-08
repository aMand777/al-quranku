import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import StoreProvider from '@/redux/StoreProvider';
import ChakraProvider from '@/app/ChakraProvider';
import OpenSurahProvider from '@/context/OpenSurah';
import LanguageProvider from '@/context/Language';
import Navbar from '@/components/navigation/Navbar';
import NavMobile from '@/components/navigation/NavMobile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'al-quranku',
  description: 'Mari membaca al-quran',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StoreProvider>
          <LanguageProvider>
            <OpenSurahProvider>
              <ThemeProvider>
                <ChakraProvider>
                  <NextTopLoader color="#FEB714" height={4} showSpinner={false} />
                  <Navbar />
                  <NavMobile />
                  {children}
                </ChakraProvider>
              </ThemeProvider>
            </OpenSurahProvider>
          </LanguageProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
