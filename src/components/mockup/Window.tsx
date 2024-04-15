'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Window() {
  const router = useRouter();
  return (
    <div className="mockup-window border bg-base-300 h-11/12 flex flex-col justify-center">
      <div className="flex justify-end bg-base-200">
        <Image src="/mosque-icon-100.png" alt="icon-mosque" width={70} height={70} />
      </div>
      <div className="flex flex-col gap-5 justify-center bg-base-200 items-center py-32">
        <p className="text-6xl text-bold">Coming Soon</p>
        <p onClick={() => router.back()} className="link link-info">Back to home</p>
      </div>
      <div className="bg-base-200">
        <Image src="/icon-lampion-100.png" alt="icon-lampion" width={70} height={70} />
      </div>
    </div>
  );
}

export default Window;
