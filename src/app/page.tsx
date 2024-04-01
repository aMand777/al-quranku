'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Spinner, Center } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/store';
import { getAllSurahAsync } from '@/redux/slice/allSurah-slice';
import { getDetailSurahAsync } from '@/redux/slice/detailSurah-slice';
import { getTafsirSurahAsync } from '@/redux/slice/tafsirSurah-slice';

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getAllSurahAsync());
    dispatch(getDetailSurahAsync('1'));
    dispatch(getTafsirSurahAsync('1'));
    router.push('/surah/1');
  }, [dispatch, router]);

  return (
    <Center className="w-screen h-screen absolute top-0 -z-10">
      <Spinner
        boxShadow="dark-lg"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
}
