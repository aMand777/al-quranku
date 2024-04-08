import React from 'react'
import Image from 'next/image';

function Phone() {
  return (
    <div className="mockup-phone border-primary md:hidden absolute left-1/2 -translate-x-1/2 top-20">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div className="flex justify-end w-full">
            <Image src="/mosque-icon-100.png" alt="icon-mosque" width={70} height={70} />
          </div>
          <div className="flex justify-center items-center h-1/2">
            <p className="text-4xl text-bold">Coming Soon</p>
          </div>
          <div className="w-full">
            <Image src="/icon-lampion-100.png" alt="icon-lampion" width={70} height={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone