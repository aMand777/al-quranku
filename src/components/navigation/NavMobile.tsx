'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Surah } from '@/interface';
import { useGetAllSurahQuery } from '@/redux/services/getAllSurah';
import { User } from '@/interface';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import { RiLoginCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { signOut } from 'next-auth/react';

interface NavbarProps {
  session: User | null;
}

function NavMobile({ session }: NavbarProps) {
  const router = useRouter();
  const { data: allSurah } = useGetAllSurahQuery(null);
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
        surah.nomor === (Number(querySearch)),
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
    <div className="navbar sticky top-0 bg-primary z-50 flex md:hidden justify-between">
      <div ref={searchContainerRef} className="form-control relative">
        <input
          onFocus={() => setInputFocused(true)}
          value={value}
          onChange={handleChange}
          type="search"
          placeholder="Search surah"
          className="input input-bordered w-64"
        />
        {inputFocused && (
          <div className="absolute top-14 max-h-60 rounded-lg w-64 bg-base-200 overflow-y-auto p-3">
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
      <div className="flex gap-3">
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

export default NavMobile;
