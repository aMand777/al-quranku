import React from 'react';
import { useRouter } from 'next/navigation';
import { Ayat } from '@/interface';
import IconNumber from '@/components/card/IconNumber';
import DetailSurah from '../popover/DetailSurah';
import SwitchLang from '../toggle/SwitchLang';
import AudioPlayer from '@/components/audio/AudioPlayer';

interface HeaderCardSurah {
  ayat: Ayat[];
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
}

function HeaderCardSurah({
  ayat,
  nomor,
  nama,
  namaLatin,
  jumlahAyat,
  tempatTurun,
  arti,
  deskripsi,
}: HeaderCardSurah) {
  const router = useRouter();

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ayat = event.target.value;
    router.push(`#ayat-${ayat}`);
  };

  return (
    <div className="w-full">
      <div className="mx-auto bg-accent w-11/12 h-full rounded-lg flex justify-around items-center">
        <div className="flex items-center">
          <IconNumber number={nomor.toString()} className="text-black" />
          <h2 className="text-base md:text-xl flex items-center gap-1 text-black">
            {namaLatin || <div className="skeleton h-4 w-16 bg-secondary" />}{' '}
            <span className="hidden md:block">|</span>
            <span
              className={`hidden md:block ${
                nama.length < 1 ? 'skeleton w-16 h-4 bg-secondary' : ''
              }`}
            >
              {nama}
            </span>
          </h2>
          <DetailSurah
            nomor={nomor}
            nama={nama}
            namaLatin={namaLatin}
            jumlahAyat={jumlahAyat}
            tempatTurun={tempatTurun}
            arti={arti}
            deskripsi={deskripsi}
          />
          <SwitchLang />
        </div>
        <div className="flex items-center">
          <span className="text-base md:text-lg text-black mr-1">Ayat:</span>
          <select onChange={handleChangeSelect} className="select select-secondary w-full max-w-xs">
            {ayat.map((ayat) => (
              <option key={ayat.nomorAyat}>{ayat.nomorAyat}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default HeaderCardSurah;
