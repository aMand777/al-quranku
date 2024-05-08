'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TbReportSearch } from 'react-icons/tb';
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/react';
import useLanguage from '@/hook/useLanguage';
import IconNumber from './IconNumber';
import TafsirAyat from '../modal/TafsirAyat';
import { TafsirSurah } from '@/interface';
import { useSession } from 'next-auth/react';
import { useToast } from '@chakra-ui/react';
import { postBookmarksAsync, deleteBookmarksAsync } from '@/redux/slice/bookmarks-slice';
import { useAppDispatch } from '@/redux/store';
import useBookmarks from '@/hook/useBookmarks';

interface CardSurahProps {
  tafsirSurah: TafsirSurah;
  teksArab: string;
  arti: string;
  nomorAyat: number;
  namaLatin: string;
}

function CardSurah({ teksArab, arti, nomorAyat, tafsirSurah, namaLatin }: CardSurahProps) {
  const { bookmarks } = useBookmarks();
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const NumberSurah = pathname.substring(7);
  const toast = useToast();
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isArabicOnly } = useLanguage();

  const tafsirAyat = tafsirSurah.tafsir.find((tafsir) => tafsir.ayat === nomorAyat)?.teks;
  const isBookmarked = bookmarks
    .filter((bookmark) => bookmark.owner === session?.user?.email)
    .filter((bookmark) => bookmark.surah === namaLatin)
    .map((bookmark) => bookmark.ayat)
    .includes(nomorAyat.toString());
  const [bookmark, setBookmark] = useState<boolean>(isBookmarked);
  useEffect(() => {}, [bookmark]);

  const handleClickBookmark = async (ayat: string, surah: string) => {
    session ? setBookmark((prevState) => !prevState) : null;
    const idBookmarked = bookmarks
      .filter((bookmark) => bookmark.owner === session?.user?.email)
      .filter((bookmark) => bookmark.surah === surah)
      .find((bookmark) => bookmark.ayat === ayat)?.id;
    const data = {
      owner: session?.user?.email,
      surah: namaLatin,
      number: NumberSurah,
      ayat: nomorAyat.toString(),
    };
    if (session && bookmark) {
      await dispatch(deleteBookmarksAsync(idBookmarked));
    } else if (session && !bookmark) {
      await dispatch(postBookmarksAsync(data));
    } else {
      toast({
        position: 'top',
        title: 'Please login first',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <div
      id={`ayat-${nomorAyat.toString()}`}
      className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3"
    >
      <div dir="rtl" className="text-2xl leading-loose">
        {teksArab}
        <span className="inline-block -mb-3 text-xs">
          <IconNumber number={`${nomorAyat.toString()}`} size="40" />
        </span>
      </div>
      {!isArabicOnly && <p className="text-sm my-2">{arti}</p>}
      {!isArabicOnly && (
        <div className="flex gap-5 items-center mt-3">
          <button
            onClick={() => handleClickBookmark(nomorAyat.toString(), namaLatin)}
            className="flex flex-col justify-center items-center"
          >
            {bookmark ? (
              <MdBookmarkAdded size={30} className="text-primary" />
            ) : (
              <MdBookmarkAdd size={30} />
            )}
            <span className="text-[9px]">Bookmark</span>
          </button>
          <button onClick={onOpen} className="flex flex-col justify-center items-center">
            <TbReportSearch size={30} />
            <span className="text-[9px]">Tafsir</span>
          </button>
          <TafsirAyat
            tafsir={tafsirAyat}
            namaLatin={tafsirSurah.namaLatin}
            nomorAyat={nomorAyat}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
}

export default CardSurah;
