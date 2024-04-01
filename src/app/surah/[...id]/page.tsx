'use client'
import React from 'react';
import useOpenSurah from '@/hook/useOpenSurah';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Surah({params}: {params: {id: string}}) {
  console.log('surah nomor', params.id)
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  return (
    <div className={`bg-green-500 w-full h-screen ${isOpenSurah ? 'md:w-2/3' : 'w-full'}`}>
      <button className="hidden md:block" onClick={() => setIsOpenSurah(!isOpenSurah)}>
        {isOpenSurah ? (
          <MdKeyboardDoubleArrowLeft size={25} />
        ) : (
          <MdKeyboardDoubleArrowRight size={25} />
        )}
      </button>
      Detail Surah {params.id}
    </div>
  );
}

export default Surah;