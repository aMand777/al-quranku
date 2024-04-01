import React from 'react';
import Link from 'next/link';
import Number from './Number';
import { Center } from '@chakra-ui/react';

interface CardListSurahProps {
  number: number;
  title: string;
  translate: string;
  ayat: number;
}

function CardListSurah({ number, title, translate, ayat }: CardListSurahProps) {
  return (
    <Link href={`/surah/${number}`} className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5">
      <div className="w-full flex gap-3 items-center">
        <Center className="w-1/4 h-full border-base-300 border-r-2">
          <Number number={number} size="10" />
        </Center>
        <div className="w-3/4 flex flex-col justify-center gap-2">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm">
            {translate} - {ayat} ayat
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardListSurah;
