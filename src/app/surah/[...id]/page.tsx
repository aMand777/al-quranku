'use client'
import React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import useOpenSurah from '@/hook/useOpenSurah';
import useAllSurah from '@/hook/useAllSurah';

function Surah({params}: {params: {id: string}}) {
  const { data } = useAllSurah()
  console.log('surah nomor', params.id)
  console.log('data===>', data)
  const { isOpenSurah, setIsOpenSurah } = useOpenSurah();

  return (
    <div className={`bg-green-500 w-full ${isOpenSurah ? 'md:w-2/3' : 'w-full'}`}>
      <button className="hidden md:block tooltip tooltip-right pt-3"
        data-tip={isOpenSurah ? "Close list" : "Open list"}
        onClick={ () => setIsOpenSurah(!isOpenSurah) }>
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