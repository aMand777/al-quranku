'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import useAllSurah from '@/hook/useAllSurah';
import { Surah } from '@/interface';
import HamburgerMenu from '@/components/drawer/HamburgerMenu';
import SwitchTheme from '@/components/toggle/SwitchTheme';

function NavMobile() {
  const router = useRouter();
  const { data } = useAllSurah();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Surah[]>([]);
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const querySearch = event.target.value.toLowerCase();
    const result = data.filter(
      (surah) =>
        surah.namaLatin.toLowerCase().includes(querySearch) ||
        surah.nomor.toString().toLowerCase().includes(querySearch),
    );
    setSearchResult(result);
  };
  const handleClickSurah = (nomorSurah: string, namaLatin: string) => {
    router.push(`/surah/${nomorSurah}`);
    setInputFocused(false);
    setValue(namaLatin);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setInputFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="navbar bg-primary z-50 flex md:hidden justify-between">
      <div ref={searchContainerRef} className="form-control relative">
        <input
          onFocus={() => setInputFocused(true)}
          value={value}
          onChange={handleChange}
          type="search"
          placeholder="Search surah"
          className="input input-bordered w-64"
        />
        {inputFocused && searchResult.length > 0 && (
          <div className="absolute top-14 max-h-44 rounded-lg w-64 bg-base-100 overflow-y-auto p-3">
            {searchResult.map((surah) => (
              <div
                onClick={() => handleClickSurah(surah.nomor.toString(), surah.namaLatin)}
                key={surah.nomor}
                className="p-1 rounded-md cursor-pointer hover:bg-base-300"
              >
                {surah.namaLatin}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-3">
        <SwitchTheme className="text-white" />
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavMobile;