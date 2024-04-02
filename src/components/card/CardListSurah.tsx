import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Number from './Number';
import { Center } from '@chakra-ui/react';
import DetailSurah from '../popover/DetailSurah';

interface CardListSurahProps {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
}

function CardListSurah({
  nomor,
  nama,
  namaLatin,
  jumlahAyat,
  tempatTurun,
  arti,
  deskripsi,
}: CardListSurahProps) {
  const pathname = usePathname()
  console.log('pathname==>', pathname.includes(nomor.toString()))
  return (
    <Link
      href={`/surah/${nomor}`}
      className={`${
        pathname.includes(nomor.toString()) ? 'ring-offset-2 ring-2 ring-primary' : ''
      } card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5`}
    >
      <div className="w-full flex gap-3 items-center">
        <Center className="w-1/4 h-10 border-base-300 border-r-2">
          <Number number={nomor} size="10" />
        </Center>
        <div className="w-3/4 flex flex-col justify-center gap-2">
          <h2 className="card-title">{namaLatin}</h2>
          <p className="text-sm">
            {arti} - {jumlahAyat} ayat
          </p>
        </div>
        <DetailSurah
          nomor={nomor}
          nama={nama}
          namaLatin={namaLatin}
          jumlahAyat={jumlahAyat}
          tempatTurun={tempatTurun}
          arti={arti}
          deskripsi={deskripsi}
        />
      </div>
    </Link>
  );
}

export default CardListSurah;
