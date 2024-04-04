import React from 'react';
import useLanguage from '@/hook/useLanguage';
import IconNumber from './IconNumber';
import { Button, useDisclosure } from '@chakra-ui/react';

interface CardSurahProps {
  teksArab: string;
  arti: string;
  ayat: number;
}

function CardSurah({ teksArab, arti, ayat }: CardSurahProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const { isArabicOnly } = useLanguage();

  return (
    <div id={ayat.toString()} className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3">
      <div dir="rtl" className="text-2xl font-semibold">
        {teksArab}
        <span className="inline-block -mb-3 text-xs">
          <IconNumber number={ayat.toString()} size="40" />
        </span>
      </div>
      { !isArabicOnly && <p className="text-sm my-2">{ arti }</p> }
      <div>
      <Button onClick={onOpen}>Open Modal</Button>
      </div>
    </div>
  );
}

export default CardSurah;
