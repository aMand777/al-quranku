'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/store';
import { getAllSurahAsync } from '@/redux/slice/allSurah-slice';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { getTafsirSurahAsync } from '@/redux/slice/tafsirSurah-slice';
import useAllSurah from '@/hook/useAllSurah';
import useDetailSurah from '@/hook/useDetailSurah';
import useTafsirSurah from '@/hook/useTafsirSurah';

export default function Home() {
  const { data } = useAllSurah();
  const { data: detailSurah } = useDetailSurah();
  const { data: tafsirSurah } = useTafsirSurah();
  console.log('useAllSurah===>', data);
  console.log('useDetailSurah===>', detailSurah);
  console.log('useTafsirSurah===>', tafsirSurah);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSurahAsync());
    dispatch(getDetailSurahAsync('1'));
    dispatch(getTafsirSurahAsync('1'));
  }, [dispatch]);

  return (
    <>
      <main>
        {data.map((d) => (
          <h1 key={d.nama} className='text-2xl bold'>{d.nama}</h1>
        ))}
      </main>
    </>
  );
}
