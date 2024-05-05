'use client';
import CardSurahSkeleton from '@/components/skeleton/CardSurahSkeleton';
import HeaderCardSurahSkeleton from '@/components/skeleton/HeaderCardSurahSkeleton';
import useOpenSurah from '@/hook/useOpenSurah';

export default function Loading() {
  const { isOpenSurah } = useOpenSurah();

  return (
    <div className={`${isOpenSurah ? 'w-full md:w-2/3' : 'w-full'} overflow-auto`}>
      <div className="h-16 sticky top-0 z-40">
        <HeaderCardSurahSkeleton />
      </div>
      <CardSurahSkeleton />
    </div>
  );
}
