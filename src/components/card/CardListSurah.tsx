import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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

function CardListSurah({
  nomor,
  nama,
  namaLatin,
  jumlahAyat,
  tempatTurun,
  audio,
}: CardListSurahProps) {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex gap-3 items-center">
        <Center className="w-1/4 h-10 text-xl">
          <IconNumber number={nomor.toString()} size="70" />
        </Center>
        <div className="w-3/4 flex flex-col gap-2">
          <h2 className="text-xl">
            {namaLatin} | {nama}
          </h2>
          <p className="text-sm">
            {tempatTurun} • {jumlahAyat} ayat
          </p>
        </div>
        <Image src="/icon-lampion.png" width={50} height={50} alt="icon-lampion" />
      </div>
      {pathname.substring(7) === nomor.toString() && <AudioPlayer src={audio} />}
    </>
  );
}

export default CardListSurah;
