import { useEffect } from 'react';
import { TbCardsFilled } from 'react-icons/tb';
import { Box, Slide } from '@chakra-ui/react';
import { getAllSurahAsync } from '@/redux/slice/allSurah-slice';
import useAllSurah from '@/hook/useAllSurah';
import useOpenSurah from '@/hook/useOpenSurah';
import { useAppDispatch } from '@/redux/store';
import CardListSurah from '../card/CardListSurah';

function SelectSurah() {
  const dispatch = useAppDispatch();
  const { data } = useAllSurah();
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah()

  // useEffect(() => {
  //   dispatch(getAllSurahAsync());
  // }, [dispatch]);

  return (
    <>
      <button onClick={() => setIsOpenSurah(!isOpenSurah)} className="z-50 fixed bottom-5 right-5 block md:hidden duration-500 hover:rotate-12">
        <TbCardsFilled size={40} className="text-primary" />
      </button>
      <Slide direction="bottom" in={isOpenSurah} style={{ zIndex: 10 }} className="block md:hidden">
        <Box rounded="md" shadow="md" className="h-screen overflow-y-scroll bg-base-100">
          {data.map((surah) => (
            <CardListSurah
              key={surah.nomor}
              nomor={surah.nomor}
              namaLatin={surah.namaLatin}
              jumlahAyat={surah.jumlahAyat}
              nama={surah.nama}
              tempatTurun={surah.tempatTurun}
            />
          ))}
        </Box>
      </Slide>
    </>
  );
}

export default SelectSurah;
