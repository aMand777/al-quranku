import React from 'react';
import IconNumber from '../card/IconNumber';
import { MdBookmarkAdd } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';

function CardSurahSkeleton() {
  const loop = new Array(7).fill(null);
  return (
    <>
      {loop.map((_, index) => (
        <div key={index} className="card skeleton w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3">
          <div dir="rtl" className="text-2xl leading-loose flex">
            <div className="w-full">
              <div className="skeleton my-2 w-11/12 h-4 bg-base-200" />
              <div className="skeleton my-2 w-3/4 h-4 bg-base-200" />
            </div>
            <span className="inline-block -mb-3 text-xs">
              <IconNumber number="0" size="40" className="skeleton text-base-200" />
            </span>
          </div>
          <div className="w-full">
            <div className="skeleton my-2 w-11/12 h-4 bg-base-200" />
            <div className="skeleton my-2 w-3/4 h-4 bg-base-200" />
          </div>
          <div className="flex gap-3 items-center">
            <button className="skeleton">
              <MdBookmarkAdd size={30} className="skeleton text-base-200" />
            </button>
            <button className="skeleton">
              <BiDetail size={30} className="skeleton text-base-200" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardSurahSkeleton;
