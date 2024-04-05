import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useOpenSurah from '@/hook/useOpenSurah';
import { Center } from '@chakra-ui/react';
import IconNumber from './IconNumber';

interface CardListSurahProps {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
}

function CardListSurah({ nomor, nama, namaLatin, jumlahAyat, tempatTurun }: CardListSurahProps) {
    const { isOpenSurah, setIsOpenSurah } = useOpenSurah()
  const pathname = usePathname();

  return (
    <Link
      onClick={() => setIsOpenSurah(!isOpenSurah)}
      href={`/surah/${nomor}`}
      className={`${
        pathname.includes(nomor.toString())
          ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
          : ''
      } card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5`}
    >
      <div className="w-full flex gap-3 items-center">
        <Center className="w-1/4 h-10 text-xl">
          <IconNumber number={nomor.toString()} size="70" />
        </Center>
        <div className="w-3/4 flex flex-col justify-center gap-2">
          <h2 className="card-title">
            {namaLatin} - {nama}
          </h2>
          <p className="text-sm">
            {tempatTurun} - {jumlahAyat} ayat
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardListSurah;
