import React from 'react';
import IconNumber from '@/components/card/IconNumber';
import { Ayat } from '@/interface';
import { useRouter } from 'next/navigation';

interface HeaderCardSurah {
  ayat: Ayat[];
  namaLatin: string;
  namaSurah: string;
  nomorSurah: string;
}

function HeaderCardSurah({ nomorSurah, namaSurah, namaLatin, ayat }: HeaderCardSurah) {
  const router = useRouter();

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ayat = event.target.value;
    router.push(`#${ayat}`);
  };

  return (
    <div className="mx-auto bg-secondary w-11/12 h-full rounded-lg flex justify-around items-center">
      <div className="flex items-center gap-3">
        <IconNumber title={nomorSurah} size="40" />
        <h2 className="text-xl font-semibold">
          {namaLatin} | {namaSurah}
        </h2>
      </div>
      <div data-tip="Go to ayat" className="tooltip tooltip-right flex items-center gap-5">
        <span className="text-xl font-semibold">Ayat:</span>
        <select onChange={handleChangeSelect} className="select select-accent w-full max-w-xs">
          {ayat.map((ayat) => (
            <option key={ayat.nomorAyat}>{ayat.nomorAyat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default HeaderCardSurah;
