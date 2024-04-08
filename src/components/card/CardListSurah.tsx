import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CgPlayButtonO, CgPlayPauseO } from 'react-icons/cg';
import useOpenSurah from '@/hook/useOpenSurah';
import { Center } from '@chakra-ui/react';
import IconNumber from './IconNumber';
import AudioPlayer from '../audio/AudioPlayer';

interface CardListSurahProps {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  audio: string;
}

function CardListSurah({ nomor, nama, namaLatin, jumlahAyat, tempatTurun, audio }: CardListSurahProps) {
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();
  const pathname = usePathname();

  return (
    <Link
      // onClick={() => setIsOpenSurah(!isOpenSurah)}
      href={`/surah/${nomor}`}
      className={`${
        pathname.includes(nomor.toString())
          ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
          : ''
      } card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5`}
    >
      <div onClick={() => setIsOpenSurah(!isOpenSurah)} className="w-full flex gap-3 items-center">
        <Center className="w-1/4 h-10 text-xl">
          <IconNumber number={nomor.toString()} size="70" />
        </Center>
        <div className="w-3/4 flex flex-col gap-2">
          {/* <div className="flex flex-col"> */}
          <h2 className="text-xl">
            {namaLatin} | {nama}
          </h2>
          <p className="text-sm">
            {tempatTurun} • {jumlahAyat} ayat
          </p>
          {/* </div> */}
          {/* <AudioPlayer src={audio} /> */}
        </div>
        <Image src="/icon-lampion.png" width={50} height={50} alt="icon-lampion" />
      </div>
          <AudioPlayer src={audio} />
    </Link>
  );
}

export default CardListSurah;
