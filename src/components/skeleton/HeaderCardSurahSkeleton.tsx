import React from 'react';
import IconNumber from '../card/IconNumber';

function HeaderCardSurahSkeleton() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto skeleton w-11/12 h-full rounded-lg flex justify-around items-center">
        <div className="flex items-center">
          <IconNumber number="0" size="40" className="skeleton" />
          <div className="flex items-center gap-2">
            <div className="skeleton w-14 h-3 bg-base-100" />
            <span className="hidden md:block">|</span>
            <span className="hidden md:block">
              <div className="skeleton w-14 h-3 bg-base-100" />
            </span>
            <div className="skeleton w-7 h-7 rounded-full bg-base-100" />
            <div className="skeleton w-10 h-7 bg-base-100 rounded-lg" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="skeleton w-12 h-4 bg-base-100" />
          <div className="skeleton w-16 h-10 bg-base-100" />
        </div>
      </div>
    </div>
  );
}

export default HeaderCardSurahSkeleton;
