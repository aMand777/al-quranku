import { useEffect } from 'react';
import { TbCardsFilled } from "react-icons/tb";
import { Box, useDisclosure, Slide, Flex, } from '@chakra-ui/react';
import { getAllSurahAsync } from '@/redux/slice/allSurah-slice';
import useAllSurah from '@/hook/useAllSurah';
import { useAppDispatch } from '@/redux/store';
import CardListSurah from '../card/CardListSurah';

function SelectSurah() {
  const dispatch = useAppDispatch()
    const { data } = useAllSurah()
  const { isOpen, onToggle } = useDisclosure();

      useEffect(() => {
    dispatch(getAllSurahAsync());
  }, [dispatch]);

  return (
    <>
      <button onClick={onToggle} className="z-50 fixed bottom-5 right-5 block md:hidden">
        <TbCardsFilled size={40} className="text-accent" />
      </button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }} className="block md:hidden">
        <Box
          rounded="md"
          shadow="md"
          className="h-screen overflow-y-scroll bg-base-100"
        >
          {data.map((surah) => (
            <CardListSurah
              key={surah.nomor}
              nomor={surah.nomor}
              namaLatin={surah.namaLatin}
              arti={surah.arti}
              jumlahAyat={surah.jumlahAyat}
              nama={surah.nama}
              deskripsi={surah.deskripsi}
              tempatTurun={surah.tempatTurun}
            />
          ))}
        </Box>
      </Slide>
    </>
  );
}

export default SelectSurah;
