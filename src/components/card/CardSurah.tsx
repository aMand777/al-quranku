'use client';
import { useRouter } from 'next/navigation';
import { TbReportSearch } from 'react-icons/tb';
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/react';
import useLanguage from '@/hook/useLanguage';
import IconNumber from './IconNumber';
import TafsirAyat from '../modal/TafsirAyat';
import { TafsirSurah } from '@/interface';

interface CardSurahProps {
  tafsirSurah: TafsirSurah;
  teksArab: string;
  arti: string;
  nomorAyat: number;
}

function CardSurah({ teksArab, arti, nomorAyat, tafsirSurah }: CardSurahProps) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isArabicOnly } = useLanguage();
  
  const handleClickTafsir = () => {
    onOpen();
  };

  const tafsirAyat = tafsirSurah.tafsir.find((tafsir) => tafsir.ayat === nomorAyat)?.teks;

  return (
    <div
      id={`ayat-${nomorAyat.toString()}`}
      className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3"
    >
      <div dir="rtl" className="text-2xl leading-loose">
        {teksArab}
        <span className="inline-block -mb-3 text-xs">
          <IconNumber number={`${nomorAyat.toString()}`} size="40" />
        </span>
      </div>
      {!isArabicOnly && <p className="text-sm my-2">{arti}</p>}
      {!isArabicOnly && (
        <div className="flex gap-3 items-center">
          <button
            data-tip="Bookmark"
            onClick={() => router.push('/feature')}
            className="tooltip hover:text-primary"
          >
            <MdBookmarkAdd size={30} />
          </button>
          <button
            data-tip="Tafsir"
            onClick={handleClickTafsir}
            className="tooltip hover:text-primary"
          >
            <TbReportSearch size={30} />
          </button>
          <TafsirAyat
            tafsir={tafsirAyat}
            namaLatin={tafsirSurah.namaLatin}
            nomorAyat={nomorAyat}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
}

export default CardSurah;
