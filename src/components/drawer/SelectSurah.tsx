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
} from '@chakra-ui/react'
import CardListSurah from '../card/CardListSurah';
import { AllSurah } from '@/interface';

interface SelectSurahProps {
  data: AllSurah;
}

function SelectSurah({ data }: SelectSurahProps) {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="z-50 fixed bottom-5 right-5 block md:hidden duration-500 hover:rotate-12"
      >
        <TbCardsFilled size={40} className="text-primary" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="bg-primary text-white">Select Surah</DrawerHeader>

          <DrawerBody className="block md:hidden bg-base-100 overflow-auto">
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
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SelectSurah;
