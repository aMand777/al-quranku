'use client';
import useOpenSurah from '@/hook/useOpenSurah';
import Loading from '@/app/surah/[id]/loading';
import CardListSkeleton from '@/components/skeleton/CardListSkeleton';
import NavMobile from '@/components/navigation/NavMobile';
import Navbar from '@/components/navigation/Navbar';

function Offline() {
  const { isOpenSurah } = useOpenSurah();

  return (
    <>
      <Navbar />
      <NavMobile />
      <div className="flex mx-auto h-screen w-screen absolute top-0 left-0 right-0 -z-10 pt-16">
        <div
          className={`hidden bg-base-100 md:block transition overflow-auto duration-500 border-2 border-base-300 ${
            isOpenSurah ? 'w-1/3 translate-x-0' : '-translate-x-full'
          }`}
        >
          <CardListSkeleton />
        </div>
        <Loading />
      </div>
    </>
  );
}

export default Offline;
