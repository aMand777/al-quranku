'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbCardsFilled } from 'react-icons/tb';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerFooter,
} from '@chakra-ui/react';
import CardListSurah from '../card/CardListSurah';
import { AllSurah } from '@/interface';

interface SelectSurahProps {
  data: AllSurah;
}

function SelectSurah({ data }: SelectSurahProps) {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <span ref={btnRef} onClick={onOpen}>
        <TbCardsFilled size={30} className="active:rotate-45 duration-500" />
      </span>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="text-black" />
          <DrawerHeader className="bg-accent text-black">Select Surah</DrawerHeader>
          <DrawerBody>
            {data.length > 0 &&
              data.map((surah) => (
                <Link
                  key={surah.nomor}
                  href={`/surah/${surah.nomor}`}
                  onClick={onClose}
                  className={`${
                    pathname.substring(7) === surah.nomor.toString()
                      ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                      : ''
                  } card w-full bg-base-300 shadow-xl mx-auto my-5 py-5`}
                >
                  <CardListSurah
                    nomor={surah.nomor}
                    namaLatin={surah.namaLatin}
                    jumlahAyat={surah.jumlahAyat}
                    nama={surah.nama}
                    tempatTurun={surah.tempatTurun}
                  />
                </Link>
              ))}
          </DrawerBody>
          <DrawerFooter>
            <div className="text-xs text-center w-full">&copy; 2024 | al-quranku</div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SelectSurah;
