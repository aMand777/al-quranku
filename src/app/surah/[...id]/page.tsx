'use client';
import { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useDetailSurah from '@/hook/useDetailSurah';
import CardSurah from '@/components/card/CardSurah';
import HeaderCardSurah from '@/components/card/HeaderCardSurah';

function Surah({ params }: { params: { id: string } }) {
  // const router = useRouter();
  const dispatch = useAppDispatch();
  const { data } = useDetailSurah();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [scrollUp, setScrollUp] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getDetailSurahAsync(params.id));

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
  }, [dispatch, lastScrollTop, params.id]);

  // const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const ayat = event.target.value;
  //   router.push(`#${ayat}`);
  // };

  return (
    <>
      <div
        ref={scrollRef}
        className={`${isOpenSurah ? 'md:w-2/3' : 'w-full'} overflow-y-scroll scroll-smooth`}
      >
        <button
          className="hidden md:block tooltip tooltip-right absolute z-50"
          data-tip={isOpenSurah ? 'Close list' : 'Open list'}
          onClick={() => setIsOpenSurah(!isOpenSurah)}
        >
          {isOpenSurah ? (
            <MdKeyboardDoubleArrowLeft size={25} />
          ) : (
            <MdKeyboardDoubleArrowRight size={25} />
          )}
        </button>
        {/* <div className={`h-10 c z-50 transition duration-500 ${scrollUp ? 'top-0' : '-top-10'}`}> */}
        <div
          className={`h-16 sticky top-2 z-40 transition duration-500 delay-300 ${
            scrollUp ? '-translate-y-0' : '-translate-y-full'
          }`}
        >
          <HeaderCardSurah
            ayat={data.ayat}
            namaSurah={data.nama}
            namaLatin={data.namaLatin}
            nomorSurah={data.nomor.toString()}
          />
        </div>
        {data.ayat.map((ayat) => (
          <CardSurah
            key={ayat.nomorAyat}
            teksArab={ayat.teksArab}
            arti={ayat.teksIndonesia}
            ayat={ayat.nomorAyat}
          />
        ))}
      </div>
    </>
  );
}

export default Surah;
