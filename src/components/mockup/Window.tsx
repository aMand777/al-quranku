import React from 'react';
import Image from 'next/image';

function Window() {
  return (
    <div className="mockup-window border bg-base-300 h-screen hidden md:block">
      <div className="flex justify-end bg-base-200">
        <Image src="/mosque-icon-100.png" alt="icon-mosque" width={100} height={100} />
      </div>
      <div className="flex justify-center bg-base-200 items-center h-1/2">
        <p className="text-6xl text-bold">Coming Soon</p>
      </div>
      <div className="bg-base-200">
        <Image src="/icon-lampion-100.png" alt="icon-lampion" width={100} height={100} />
      </div>
    </div>
  );
}

export default Window;
