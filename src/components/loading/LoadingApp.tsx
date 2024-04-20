'use client';
import React from 'react';
import Image from 'next/image';
import usePreload from '@/hook/usePreload';

function LoadingApp() {
  const { isPreload } = usePreload();
  if (!isPreload) {
    return null;
  }

  return (
    <div className="absolute w-screen h-screen top-0 left-0 right-0 bg-base-100 z-[1600]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Image
          priority={true}
          src="/icon-512.png"
          alt="icon"
          width={100}
          height={100}
          className="animate-pulse"
        />
        <span className="loading loading-dots loading-lg bg-primary"></span>
      </div>
    </div>
  );
}

export default LoadingApp;
