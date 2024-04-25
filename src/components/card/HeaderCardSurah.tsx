import React from 'react';
import { useRouter } from 'next/navigation';
import { DetailSurah } from '@/interface';
import IconNumber from '@/components/card/IconNumber';
import InfoDetailSurah from '../popover/InfoDetailSurah';
import SwitchLang from '../toggle/SwitchLang';

function HeaderCardSurah({ detailSurah }: {detailSurah: DetailSurah}) {
  const router = useRouter();

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ayat = event.target.value;
    router.push(`#ayat-${ayat}`);
  };

  return (
    <div className="w-full">
      <div className="mx-auto bg-accent w-11/12 h-full rounded-lg flex justify-around items-center">
        <div className="flex items-center">
          <IconNumber number={detailSurah?.nomor.toString()} className="text-black" />
          <h2 className="text-base md:text-xl flex items-center gap-1 text-black">
            {detailSurah?.namaLatin}
            <span className="hidden md:block">|</span>
            <span
              className='hidden md:block'
            >
              {detailSurah?.nama}
            </span>
          </h2>
          <InfoDetailSurah detailSurah={detailSurah} />
          <SwitchLang />
        </div>
        <div className="flex items-center">
          <span className="text-base md:text-lg text-black mr-1">Ayat:</span>
          <select onChange={handleChangeSelect} className="select select-secondary w-full max-w-xs">
            {detailSurah?.ayat.length > 0 && detailSurah?.ayat.map((ayat) => <option key={ayat.nomorAyat}>{ayat.nomorAyat}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default HeaderCardSurah;
