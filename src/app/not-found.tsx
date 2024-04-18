'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { setPreload } from '@/redux/slice/preload-slice';
import { useAppDispatch } from '@/redux/store';

export default function NotFound() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPreload(false));
  }, [dispatch]);

  return (
    <div className="absolute w-screen h-screen top-0 left-0 right-0 bg-base-100 flex flex-col gap-3 justify-center items-center">
      <div className="flex items-center">
        <span className="text-xl">404</span>
        <div className="divider divider-horizontal" />
        <span className="text-xs flex gap-2 items-center">
          This page could not be found.
          <Image src="/icon-lampion.png" alt="icon-lampion" width={20} height={20} />
        </span>
      </div>
      <Link href="/" className="link link-info text-xs">
        Back to home
      </Link>
    </div>
  );
}
