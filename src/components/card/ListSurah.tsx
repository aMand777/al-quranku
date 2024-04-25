'use client';
import React from 'react';
import { Surah } from '@/interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useOpenSurah from '@/hook/useOpenSurah';
import CardListSurah from './CardListSurah';

interface ListSurahProps {
  data: Surah[];
}

function ListSurah({ data }: ListSurahProps) {
  const pathname = usePathname();
  const { isOpenSurah } = useOpenSurah();

  return (
    <div
      className={`hidden bg-base-100 md:block transition overflow-auto duration-500 border-2 border-base-300 ${
        isOpenSurah ? 'w-1/3 translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className={`${isOpenSurah ? 'block' : ' w-0 translate-x-full'} my-5`}>
        {data.length > 1 && (
          data.map((surah: Surah) => (
            <Link
              key={surah.nomor}
              href={`/surah/${surah.nomor}`}
              className={`${
                pathname.substring(7) === surah.nomor.toString()
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              } card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5`}
            >
              <CardListSurah
                nomor={surah.nomor}
                namaLatin={surah.namaLatin}
                tempatTurun={surah.tempatTurun}
                jumlahAyat={surah.jumlahAyat}
                nama={surah.nama}
                audio={surah.audioFull['05']}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ListSurah;
