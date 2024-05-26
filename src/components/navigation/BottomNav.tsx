'use client';
import React from 'react';
import { MdBookmark } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import SwitchTheme from '@/components/toggle/SwitchTheme';
import SwitchLang from '@/components/toggle/SwitchLang';
import SelectFontSize from '@/components/select/FontSize';
import Link from 'next/link';
import { AllSurah } from '@/interface';
import CardListSurah from '@/components/card/CardListSurah';
import { usePathname } from 'next/navigation';
import { TbCardsFilled } from 'react-icons/tb';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';

interface BottomNavProps {
  data: AllSurah;
}

function BottomNav({ data }: BottomNavProps) {
  const pathname = usePathname();
  return (
    <div className="btm-nav md:hidden">
      <Popover>
        <PopoverTrigger>
          <button type="button">
            <TbCardsFilled size={30} className="active:rotate-45 duration-500" />
            <span className="btm-nav-label">Surah</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="mb-[100vh]">
          <PopoverBody className="w-screen h-screen bg-base-100 -mb-20">
            <div className="w-full h-full overflow-auto p-2 pt-44">
              {data.length > 0 &&
                data.map((surah) => (
                  <Link
                    key={surah.nomor}
                    href={`/surah/${surah.nomor}`}
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
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Link href="/bookmarks" className="my-3">
        <MdBookmark size={30} className="active:rotate-45 duration-500" />
        <span className="btm-nav-label">Bookmarks</span>
      </Link>
      <Popover>
        <PopoverTrigger>
          <button type="button">
            <IoSettingsSharp size={30} className="active:rotate-45 duration-500" />
            <span className="btm-nav-label">Settings</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="mb-20">
          <PopoverArrow />
          <PopoverBody>
            <div className="flex justify-between">
              Switch Theme
              <SwitchTheme />
            </div>
            <div className="flex justify-between my-5">
              Focus Mode
              <SwitchLang />
            </div>
            <div className="flex justify-between">
              Font Size
              <SelectFontSize />
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default BottomNav;
