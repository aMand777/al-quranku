'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect } from 'react';
import { getAllSurahAsync } from '@/redux/slice/allSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useOpenSurah from '@/hook/useOpenSurah';
import useAllSurah from '@/hook/useAllSurah';
import SelectSurah from '@/components/drawer/SelectSurah';
import CardListSurah from '@/components/card/CardListSurah';
import CardListSkeleton from '@/components/skeleton/CardListSkeleton';

function SurahLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
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
            isOpenSurah ? 'w-1/3 translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className={`${isOpenSurah ? 'block' : ' w-0 translate-x-full'} my-5`}>
            {data.length > 1 ? (
              data.map((surah) => (
                <Link
                  key={surah.nomor}
                  href={`/surah/${surah.nomor}`}
                  className={`${
                  pathname.substring(7) === surah.nomor.toString()
                    ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                    : ''
                } card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5`}
                >
                <CardListSurah
                  nomor={surah.nomor}
                  namaLatin={surah.namaLatin}
                  tempatTurun={surah.tempatTurun}
                  jumlahAyat={surah.jumlahAyat}
                  nama={surah.nama}
                  audio={surah.audioFull["05"]}
                />
                </Link>
              ))
            ) : (
              <CardListSkeleton />
            )}
          </div>
        </div>
        {children}
      </div>
      <SelectSurah data={data} />
    </>
  );
}

export default SurahLayout;
