'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useDetailSurah from '@/hook/useDetailSurah';
import CardSurah from '@/components/card/CardSurah';

function Surah({ params }: { params: { id: string } }) {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const { data } = useDetailSurah();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  useEffect(() => {
    dispatch(getDetailSurahAsync(params.id));
  }, [dispatch, params.id]);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ayat = event.target.value
    router.push(`#${ayat}`)
  }

  return (
    <div className={`${isOpenSurah ? 'md:w-2/3' : 'w-full'} overflow-y-scroll scroll-smooth`}>
      <div className="absolute flex flex-col gap-2">
        <button
          className="hidden md:block tooltip tooltip-right pt-3"
          data-tip={isOpenSurah ? 'Close list' : 'Open list'}
          onClick={() => setIsOpenSurah(!isOpenSurah)}
        >
          {isOpenSurah ? (
            <MdKeyboardDoubleArrowLeft size={25} />
          ) : (
            <MdKeyboardDoubleArrowRight size={25} />
          )}
        </button>
        <div data-tip="Go to ayat" className="tooltip tooltip-bottom z-50">
        <select onChange={handleChangeSelect} className="outline outline-accent rounded-md">
          {data.ayat.map((ayat) =>(
            <option key={ayat.nomorAyat}>{ayat.nomorAyat}</option>
          ))}
        </select>
        </div>
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
  );
}

export default Surah;
