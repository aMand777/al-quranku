'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/store';
import { getAllSurahAsync } from '@/redux/slice/getAllSurah-slice';
import useAllSurah from '@/hook/useAllSurah';

export default function Home() {
  const { data } = useAllSurah();
  // console.log('useAllSurah===>', data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSurahAsync());
  }, [dispatch]);

  return (
    <>
      <main>
        <h1>Hello, World!</h1>
      </main>
    </>
  );
}
