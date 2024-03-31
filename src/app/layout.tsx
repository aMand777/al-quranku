import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/redux/StoreProvider';
import ChakraProvider from '@/app/ChakraProvider';

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
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
