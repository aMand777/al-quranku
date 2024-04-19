'use client';
import { useEffect } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useDetailSurah from '@/hook/useDetailSurah';
import CardSurah from '@/components/card/CardSurah';
import HeaderCardSurah from '@/components/card/HeaderCardSurah';
import CardSurahSkeleton from '@/components/skeleton/CardSurahSkeleton';
import NotFoundSurah from '@/components/notFound/NotFoundSurah';

function Surah({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useDetailSurah();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  useEffect(() => {
    dispatch(getDetailSurahAsync(params.id));
    document.title = `${`${data.namaLatin} |`} Al-Quranku`;
  }, [data.namaLatin, dispatch, params.id]);

  return (
    <>
      <div
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
        <div className="h-16 sticky top-0 z-40 transition duration-500 delay-100">
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
        {data.ayat.length > 1 && !isLoading
          ? data.ayat.map((ayat) => (
              <CardSurah
                key={ayat.nomorAyat}
                nomorSurah={data.nomor}
                teksArab={ayat.teksArab}
                arti={ayat.teksIndonesia}
                ayat={ayat.nomorAyat}
              />
            ))
          : isLoading && <CardSurahSkeleton />}
        {!isLoading && data.ayat.length === 1 && <NotFoundSurah />}
      </div>
    </>
  );
}

export default Surah;
