'use client';
import { ReactNode } from 'react';
import useOpenSurah from '@/hook/useOpenSurah';
import SelectSurah from '@/components/drawer/SelectSurah';

function SurahLayout({ children }: { children: ReactNode }) {
  const { isOpenSurah } = useOpenSurah();

  return (
    <>
      <div className="flex container bg-yellow-500 mx-auto">
        <div
          className={`bg-red-500 hidden h-screen md:block transition duration-500 ${
            isOpenSurah ? 'w-1/3' : '-translate-x-full'
          }`}
        >
          <p className={`${isOpenSurah ? 'block' : 'hidden'}`}>Surah Al-fatihah</p>
        </div>
        {children}
      </div>
      <SelectSurah />
    </>
  );
}

export default SurahLayout;
