import React from 'react';
import Image from 'next/image';
import { Center } from '@chakra-ui/react';
import IconNumber from '../card/IconNumber';

function CardListSkeleton() {
  const loop = new Array(7).fill(null);
  return (
    <>
      {loop.map((_, index) => (
        <div key={index} className="card skeleton w-11/12 bg-base-300 shadow-xl mx-auto my-5 py-5">
          <div className="w-full flex gap-3 items-center">
            <Center className="w-1/4 h-10 text-xl">
              <IconNumber number={(index + 1).toString()} size="70" className="skeleton text-base-200" />
            </Center>
            <div className="w-3/4 flex flex-col justify-center gap-2">
              <div className="flex gap-2">
                <div className="skeleton bg-base-200 w-32 h-4" /> |{' '}
                <div className="skeleton bg-base-200 w-20 h-4" />
              </div>
              <div className="flex gap-2">
                <div className="skeleton bg-base-200 w-20 h-4" /> •{' '}
                <div className="skeleton bg-base-200 w-20 h-4" />
              </div>
            </div>
            <Image src="/icon-lampion.png" width={50} height={50} alt="icon-lampion" />
          </div>
        </div>
      ))}
    </>
  );
}

export default CardListSkeleton;
