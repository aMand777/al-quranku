'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useAllSurah from '@/hook/useAllSurah';
import { Surah } from '@/interface';
import SwitchTheme from '../toggle/SwitchTheme';

function Navbar() {
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
    <div className="navbar bg-primary z-50 hidden md:flex">
      <div className="flex-1 text-white">
        <Link href="/" className="text-xl bold cursor-default">
          Al-Quranku
        </Link>
      </div>
      <div className="gap-5 mx-5 text-white">
        <SwitchTheme className="hover:text-secondary" />
        <Link className="text-base hover:text-secondary" href="#">
          Bookmarks
        </Link>
        <Link className="text-base hover:text-secondary" href="#">
          Jadwal Sholat
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div ref={searchContainerRef} className="form-control relative">
          <input
            onFocus={() => setInputFocused(true)}
            value={value}
            onChange={handleChange}
            type="search"
            placeholder="Search surah"
            className="input input-bordered w-72"
          />
          {inputFocused && searchResult.length > 0 && (
            <div className="absolute top-14 max-h-44 rounded-lg w-72 bg-base-100 overflow-y-auto p-3">
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
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
