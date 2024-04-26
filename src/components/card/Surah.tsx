'use client';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import useOpenSurah from '@/hook/useOpenSurah';
import { DetailSurah, Ayat, TafsirSurah } from '@/interface';
import { setPreload } from '@/redux/slice/preload-slice';
import { useAppDispatch } from '@/redux/store';
import CardSurah from '@/components/card/CardSurah';
import HeaderCardSurah from '@/components/card/HeaderCardSurah';
import NotFoundSurah from '@/components/notFound/NotFoundSurah';

interface SurahProps {
  detailSurah: DetailSurah;
  tafsirSurah: TafsirSurah;
}

function Surah({ detailSurah, tafsirSurah }: SurahProps) {
  const dispatch = useAppDispatch();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  useEffect(() => {
    dispatch(setPreload(false));
    document.title = `${`${detailSurah?.namaLatin} |`} Al-Quranku`;
  }, [detailSurah?.namaLatin, dispatch]);

  return (
    <div className={`${isOpenSurah ? 'w-full md:w-2/3' : 'w-full'} overflow-auto scroll-smooth`}>
      <span
        className="hidden md:block tooltip tooltip-right absolute z-50 text-primary cursor-pointer"
        data-tip={isOpenSurah ? 'Close list' : 'Open list'}
        onClick={() => setIsOpenSurah(!isOpenSurah)}
      >
        {isOpenSurah ? (
          <MdKeyboardDoubleArrowLeft size={30} />
        ) : (
          <MdKeyboardDoubleArrowRight size={30} />
        )}
      </span>
      <div className="h-16 sticky top-0 z-40">
        <HeaderCardSurah detailSurah={detailSurah} />
      </div>
      {detailSurah?.ayat.length > 0 ? (
        detailSurah?.ayat.map((ayat: Ayat) => (
          <CardSurah
            key={ayat.nomorAyat}
            tafsirSurah={tafsirSurah}
            teksArab={ayat.teksArab}
            arti={ayat.teksIndonesia}
            nomorAyat={ayat.nomorAyat}
          />
        ))
      ) : (
        <NotFoundSurah />
      )}
    </div>
  );
}

export default Surah;
