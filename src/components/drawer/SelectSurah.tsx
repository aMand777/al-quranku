import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbCardsFilled } from 'react-icons/tb';
import { Slide } from '@chakra-ui/react';
import useOpenSurah from '@/hook/useOpenSurah';
import CardListSurah from '../card/CardListSurah';
import { AllSurah } from '@/interface';
import CardListSkeleton from '@/components/skeleton/CardListSkeleton';

interface SelectSurahProps {
  data: AllSurah;
}

function SelectSurah({ data }: SelectSurahProps)
{
  const pathname = usePathname();
  const { isOpenSurahOnMobile, setIsOpenSurahOnMobile } = useOpenSurah();

  return (
    <>
      <button
        onClick={() => setIsOpenSurahOnMobile(!isOpenSurahOnMobile)}
        className="z-50 fixed bottom-5 right-5 block md:hidden duration-500 hover:rotate-12"
      >
        <TbCardsFilled size={40} className="text-primary" />
      </button>
      <Slide
        direction="bottom"
        in={isOpenSurahOnMobile}
        style={{ zIndex: 10 }}
        className="block md:hidden h-screen bg-base-100 overflow-auto py-14"
      >
        {data.length > 1 ? (
          data.map((surah) => (
            <Link
              key={surah.nomor}
              href={`/surah/${surah.nomor}`}
              onClick={() => setIsOpenSurahOnMobile(!isOpenSurahOnMobile)}
              className={`${
                pathname.substring(7) === surah.nomor.toString()
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              } card w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5`}
            >
              <CardListSurah
                nomor={surah.nomor}
                namaLatin={surah.namaLatin}
                jumlahAyat={surah.jumlahAyat}
                nama={surah.nama}
                tempatTurun={surah.tempatTurun}
                audio={surah.audioFull['05']}
              />
            </Link>
          ))
        ) : (
          <CardListSkeleton />
        )}
      </Slide>
    </>
  );
}

export default SelectSurah;
