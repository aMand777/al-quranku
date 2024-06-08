'use client';
import { useEffect, useState, useRef } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import useOpenSurah from '@/hook/useOpenSurah';
import { DetailSurah, Ayat, TafsirSurah } from '@/interface';
import CardSurah from '@/components/card/CardSurah';
import HeaderCardSurah from '@/components/card/HeaderCardSurah';
import NotFoundSurah from '@/components/notFound/NotFoundSurah';

interface SurahProps {
  detailSurah: DetailSurah;
  tafsirSurah: TafsirSurah;
}

function Surah({ detailSurah, tafsirSurah }: SurahProps) {
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `${`${detailSurah?.namaLatin} |`} al-quranku`;
  }, [detailSurah?.namaLatin]);

  const handleScroll = () => {
    if (scrollableRef.current) {
      const currentScrollTop = scrollableRef.current.scrollTop;
      if (currentScrollTop > prevScrollTop) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setPrevScrollTop(currentScrollTop);
    }
  };

  return (
    <div
      ref={scrollableRef}
      className={`mb-16 md:mb-0 ${
        isOpenSurah ? 'w-full md:w-2/3' : 'w-full'
      } overflow-auto scroll-smooth -z-50`}
      onScroll={handleScroll}
    >
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
      <div
        className={`sticky top-0 z-10 ${
          !showHeader ? '-translate-y-0 duration-500' : '-translate-y-full duration-500'
        }`}
      >
        <HeaderCardSurah detailSurah={detailSurah} />
      </div>
      {detailSurah?.ayat.length > 0 ? (
        detailSurah?.ayat.map((ayat: Ayat) => (
          <CardSurah
            key={ayat.nomorAyat}
            namaLatin={detailSurah.namaLatin}
            tafsirSurah={tafsirSurah}
            teksArab={ayat.teksArab}
            arti={ayat.teksIndonesia}
            nomorAyat={ayat.nomorAyat}
            audio={ayat.audio['05']}
          />
        ))
      ) : (
        <NotFoundSurah />
      )}
    </div>
  );
}

export default Surah;
