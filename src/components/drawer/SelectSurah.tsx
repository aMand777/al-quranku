import { TbCardsFilled } from 'react-icons/tb';
import { Slide } from '@chakra-ui/react';
import useOpenSurah from '@/hook/useOpenSurah';
import CardListSurah from '../card/CardListSurah';
import { AllSurah } from '@/interface';
import CardListSkeleton from '@/components/skeleton/CardListSkeleton';

interface SelectSurahProps {
  data: AllSurah;
}

function SelectSurah({ data }: SelectSurahProps) {
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  return (
    <>
      <button
        onClick={() => setIsOpenSurah(!isOpenSurah)}
        className="z-50 fixed bottom-5 right-5 block md:hidden duration-500 hover:rotate-12"
      >
        <TbCardsFilled size={40} className="text-primary" />
      </button>
      <Slide
        direction="bottom"
        in={isOpenSurah}
        style={{ zIndex: 10 }}
        className="block md:hidden h-screen bg-base-100 overflow-auto py-[42]"
      >
        {data.length > 1 ? (
          data.map((surah) => (
            <CardListSurah
              key={surah.nomor}
              nomor={surah.nomor}
              namaLatin={surah.namaLatin}
              jumlahAyat={surah.jumlahAyat}
              nama={surah.nama}
              tempatTurun={surah.tempatTurun}
              audio={surah.audioFull['05']}
            />
          ))
        ) : (
          <CardListSkeleton />
        )}
      </Slide>
    </>
  );
}

export default SelectSurah;
