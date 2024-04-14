import { useRouter } from 'next/navigation';
import { TbReportSearch } from 'react-icons/tb';
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/react';
import useLanguage from '@/hook/useLanguage';
import IconNumber from './IconNumber';
import TafsirAyat from '../modal/TafsirAyat';
import { getTafsirSurahAsync } from '@/redux/slice/tafsirSurah-slice';
import { useAppDispatch } from '@/redux/store';
import useTafsirSurah from '@/hook/useTafsirSurah';

interface CardSurahProps {
  nomorSurah: number;
  teksArab: string;
  arti: string;
  ayat: number;
}

function CardSurah({ nomorSurah, teksArab, arti, ayat }: CardSurahProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data } = useTafsirSurah();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isArabicOnly } = useLanguage();

  const handleClickTafsir = () => {
    dispatch(getTafsirSurahAsync(nomorSurah.toString()));
    onOpen();
  };

  const tafsirAyat = data.tafsir.find((tafsir) => tafsir.ayat === ayat)?.teks;

  return (
    <div id={`ayat-${ayat.toString()}`} className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3">
      <div dir="rtl" className="text-2xl leading-loose">
        {teksArab}
        <span className="inline-block -mb-3 text-xs">
          <IconNumber number={`${ayat.toString()}`} size="40" />
        </span>
      </div>
      {!isArabicOnly && <p className="text-sm my-2">{arti}</p>}
      {!isArabicOnly && (
        <div className="flex gap-3 items-center">
          <button
            data-tip="Bookmark"
            onClick={() => router.push("/feature")}
            className="tooltip hover:text-primary"
          >
            <MdBookmarkAdd size={30} />
          </button>
          <button data-tip="Tafsir" onClick={handleClickTafsir} className="tooltip hover:text-primary">
            <TbReportSearch size={30} />
          </button>
          <TafsirAyat
            tafsir={tafsirAyat}
            namaLatin={data.namaLatin}
            ayat={ayat}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
}

export default CardSurah;
