'use client';
import React from 'react';
import { MdBookmark } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import SwitchTheme from '@/components/toggle/SwitchTheme';
import SwitchLang from '@/components/toggle/SwitchLang';
import SelectFontSize from '@/components/select/FontSize';
import Link from 'next/link';
import SelectSurah from '@/components/drawer/SelectSurah';
import { AllSurah } from '@/interface';

interface BottomNavProps {
  data: AllSurah;
}

function BottomNav({ data }: BottomNavProps) {
  return (
    <div className="btm-nav md:hidden">
      <button className="">
        <SelectSurah data={data} />
        <span className="btm-nav-label">Surah</span>
      </button>
      <Link href="/bookmarks">
        <MdBookmark size={30} />
        <span className="btm-nav-label">Bookmarks</span>
      </Link>
      <div className="mt-2 dropdown dropdown-end">
        <button className="w-full flex flex-col justify-center items-center">
          <IoSettingsSharp size={30} className="active:rotate-90 duration-500" />
          <span className="btm-nav-label">Settings</span>
        </button>
        <ul
          tabIndex={0}
          className="-mt-48 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
        >
          <li className="flex">
            <button type="button" className="justify-between">
              Switch Theme
              <SwitchTheme />
            </button>
          </li>
          <li>
            <button type="button" className="justify-between">
              Focus Mode
              <SwitchLang />
            </button>
          </li>
          <li>
            <button type="button" className="justify-between">
              Font Size
              <SelectFontSize />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNav;
