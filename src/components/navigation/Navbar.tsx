'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RiLoginCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { Surah } from '@/interface';
import SwitchTheme from '@/components/toggle/SwitchTheme';
import { useGetAllSurahQuery } from '@/redux/services/getAllSurah';
import { MdBookmark } from 'react-icons/md';
import { useSession, signOut } from 'next-auth/react';

function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { data: allSurah } = useGetAllSurahQuery(null);
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Surah[]>([]);
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const querySearch = event.target.value.toLowerCase();
    const result = allSurah?.data.filter(
      (surah: Surah) =>
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
    <div className="navbar sticky top-0 bg-primary z-50 hidden md:flex">
      <div className="flex-1 text-black">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          Al-Quranku
        </Link>
      </div>
      <div className="flex w-1/4 gap-5 mx-5 text-black justify-end items-center">
        <Link
          className={`${
            pathname.includes('bookmarks') ? 'text-secondary' : ''
          } flex items-center text-base font-semibold hover:text-secondary duration-400 text-black mx-5`}
          href="/bookmarks"
        >
          <MdBookmark size={30} />
          Bookmarks
        </Link>
        <div data-tip="Theme" className="tooltip tooltip-bottom">
          <SwitchTheme size="10" className="hover:text-secondary duration-400" />
        </div>
      </div>
      <div className="flex-none gap-3">
        <div ref={searchContainerRef} className="form-control relative">
          <input
            onFocus={() => setInputFocused(true)}
            value={value}
            onChange={handleChange}
            type="search"
            placeholder="Search surah"
            className="input input-bordered w-72"
          />
          {inputFocused && (
            <div className="absolute top-14 max-h-44 rounded-lg w-72 bg-base-200 overflow-y-auto p-3">
              {searchResult?.length > 0 ? (
                searchResult.map((surah) => (
                  <div
                    onClick={() => handleClickSurah(surah.nomor.toString(), surah.namaLatin)}
                    key={surah.nomor}
                    className="p-1 rounded-md cursor-pointer hover:bg-base-300"
                  >
                    {surah.namaLatin}
                  </div>
                ))
              ) : (
                <div>No Result</div>
              )}
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {session?.user?.image ? (
                <Image src={session?.user.image} alt="avatar" width={100} height={100} />
              ) : (
                <Image
                  src={`https://ui-avatars.com/api/?name=${
                    session?.user?.name || 'Guest'
                  }&background=random`}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="justify-between hover:bg-base-100">
                {session ? session.user?.name : 'Visit as Guest'}
                <FaUserCircle size={20} className="text-primary" />
              </div>
            </li>
            <li>
              <button
                onClick={
                  session ? () => signOut({ callbackUrl: '/' }) : () => router.push('/auth/login')
                }
                className="justify-between"
              >
                {session ? 'Logout' : 'Login'}
                {session ? (
                  <RiLogoutCircleRLine size={20} className="text-error" />
                ) : (
                  <RiLoginCircleLine size={20} className="text-info" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
