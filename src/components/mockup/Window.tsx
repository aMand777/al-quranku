'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Window() {
  const router = useRouter();
  return (
    <div className="mockup-window border bg-base-300 h-screen">
      <div className="flex justify-end bg-base-200">
        <Image src="/mosque-icon-100.png" alt="icon-mosque" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-5 justify-center bg-base-200 items-center h-1/2">
        <p className="text-6xl text-bold">Coming Soon</p>
        <p onClick={() => router.back()} className="cursor-pointer hover:text-info">Back</p>
      </div>
      <div className="bg-base-200">
        <Image src="/icon-lampion-100.png" alt="icon-lampion" width={100} height={100} />
      </div>
    </div>
  );
}

export default Window;
