/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import CardBookmark from '@/components/card/CardBookmark';
import useBookmarks from '@/hook/useBookmarks';
import { TiArrowBackOutline } from 'react-icons/ti';
import CardBookmarkSkeleton from '@/components/skeleton/CardBookmarkSkeleton';

function Bookmark() {
  const { back } = useRouter();
  const { bookmarks } = useBookmarks();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login');
    },
  });

  return (
    <div className="container mx-auto px-5">
      <button onClick={() => back()} className="my-3 flex items-center font-semibold group text-lg">
        <TiArrowBackOutline className="group-hover:mr-1" size={20} />
        Back
      </button>
      {status === 'authenticated'
        ? bookmarks
            .filter((bookmark) => bookmark.owner === session?.user?.email)
            .map((bookmark) => (
              <CardBookmark
                key={bookmark.id}
                id={bookmark.id}
                surah={bookmark.surah}
                number={bookmark.number}
                ayat={bookmark.ayat}
              />
            ))
        : status === 'loading' && <CardBookmarkSkeleton />}
      {status === 'authenticated' ?
        bookmarks.filter((bookmark) => bookmark.owner === session?.user?.email).length < 1 && (
          <div role="alert" className="alert flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>You don't have any bookmarks yet</span>
          </div>
        ) : status === 'loading' && <CardBookmarkSkeleton />}
    </div>
  );
}

export default Bookmark;
