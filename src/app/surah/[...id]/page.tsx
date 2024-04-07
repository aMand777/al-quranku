'use client';
import { useEffect, useState, useRef } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useDetailSurah from '@/hook/useDetailSurah';
import CardSurah from '@/components/card/CardSurah';
import HeaderCardSurah from '@/components/card/HeaderCardSurah';
import CardSurahSkeleton from '@/components/skeleton/CardSurahSkeleton';

function Surah({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { data } = useDetailSurah();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [scrollUp, setScrollUp] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getDetailSurahAsync(params.id));
    document.title = data.namaLatin;
  }, [data.namaLatin, dispatch, params.id]);

  useEffect(() => {
    function handleScroll() {
      if (scrollRef.current) {
        const currentScrollTop = scrollRef.current.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          setScrollUp(false);
        } else if (currentScrollTop < lastScrollTop) {
          setScrollUp(true);
        }
        setLastScrollTop(currentScrollTop);
      }
    }

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);

      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollTop]);

  return (
    <>
      <div
        ref={scrollRef}
        className={`${isOpenSurah ? 'w-full md:w-2/3' : 'w-full'} overflow-y-scroll scroll-smooth`}
      >
        <button
          className="hidden md:block tooltip tooltip-right absolute z-50 text-primary"
          data-tip={isOpenSurah ? 'Close list' : 'Open list'}
          onClick={() => setIsOpenSurah(!isOpenSurah)}
        >
          {isOpenSurah ? (
            <MdKeyboardDoubleArrowLeft size={30} />
          ) : (
            <MdKeyboardDoubleArrowRight size={30} />
          )}
        </button>
        <div
          className={`h-16 sticky top-0 z-40 transition duration-500 delay-100 ${
            scrollUp ? '-translate-y-0' : '-translate-y-full'
          }`}
        >
          <HeaderCardSurah
            ayat={data.ayat}
            nomor={data.nomor}
            nama={data.nama}
            namaLatin={data.namaLatin}
            jumlahAyat={data.jumlahAyat}
            tempatTurun={data.tempatTurun}
            arti={data.arti}
            deskripsi={data.deskripsi}
          />
        </div>
        {data.ayat.length > 1 ? (
          data.ayat.map((ayat) => (
            <CardSurah
              key={ayat.nomorAyat}
              nomorSurah={data.nomor}
              teksArab={ayat.teksArab}
              arti={ayat.teksIndonesia}
              ayat={ayat.nomorAyat}
            />
          ))
        ) : (
          <CardSurahSkeleton />
        )}
      </div>
    </>
  );
}

export default Surah;
