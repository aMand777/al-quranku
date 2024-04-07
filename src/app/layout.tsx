import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import StoreProvider from '@/redux/StoreProvider';
import ChakraProvider from '@/app/ChakraProvider';
import OpenSurahProvider from '@/context/OpenSurah';
import LanguageProvider from '@/context/Language';
import Navbar from '@/components/navigation/Navbar';

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
              <ChakraProvider>
                <ThemeProvider>
                <Navbar />
                {children}
                </ThemeProvider>
              </ChakraProvider>
            </OpenSurahProvider>
          </LanguageProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
