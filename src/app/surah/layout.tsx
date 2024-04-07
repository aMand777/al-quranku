'use client';
import { ReactNode, useEffect } from 'react';
import { getAllSurahAsync } from '@/redux/slice/allSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useAllSurah from '@/hook/useAllSurah';
import SelectSurah from '@/components/drawer/SelectSurah';
import CardListSurah from '@/components/card/CardListSurah';
import CardListSkeleton from '@/components/skeleton/CardListSkeleton';

function SurahLayout({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { data } = useAllSurah();
  const { isOpenSurah } = useOpenSurah();

  useEffect(() => {
    dispatch(getAllSurahAsync());
  }, [dispatch]);

  return (
    <>
      <div className="flex mx-auto h-screen absolute top-0 left-0 right-0 -z-10 pt-16">
        <div
          className={`hidden bg-base-100 md:block transition duration-500 overflow-y-scroll border-2 border-base-300 ${
            isOpenSurah ? 'w-1/3' : '-translate-x-full'
          }`}
        >
          <div className={`${isOpenSurah ? 'block' : ' w-0 translate-x-full'} my-5`}>
            {data.length > 1 ? (
              data.map((surah) => (
                <CardListSurah
                  key={surah.nomor}
                  nomor={surah.nomor}
                  namaLatin={surah.namaLatin}
                  tempatTurun={surah.tempatTurun}
                  jumlahAyat={surah.jumlahAyat}
                  nama={surah.nama}
                />
              ))
            ) : (
              <CardListSkeleton />
            )}
          </div>
        </div>
        {children}
      </div>
      <SelectSurah />
    </>
  );
}

export default SurahLayout;
