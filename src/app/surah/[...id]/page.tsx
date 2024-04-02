'use client';
import { useEffect } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useDetailSurah from '@/hook/useDetailSurah';
import CardSurah from '@/components/card/CardSurah';

function Surah({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { data } = useDetailSurah();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  useEffect(() => {
    dispatch(getDetailSurahAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={`${isOpenSurah ? 'md:w-2/3' : 'w-full'} overflow-y-scroll`}>
      <button
        className="hidden md:block tooltip tooltip-right pt-3 absolute"
        data-tip={isOpenSurah ? 'Close list' : 'Open list'}
        onClick={() => setIsOpenSurah(!isOpenSurah)}
      >
        {isOpenSurah ? (
          <MdKeyboardDoubleArrowLeft size={25} />
        ) : (
          <MdKeyboardDoubleArrowRight size={25} />
        )}
      </button>
      {data.ayat.map((ayat) => (
        <CardSurah key={ayat.nomorAyat} arabic={ayat.teksArab} translate={ayat.teksIndonesia} />
      ))}
    </div>
  );
}

export default Surah;
