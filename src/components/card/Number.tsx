import React from 'react';

interface NumberProps {
  number: number;
  size: string;
}

function Number({ number, size }: NumberProps) {
  return (
    <>
      <div className={`w-${size} h-${size} border-2 border-accent relative rotate-45`}></div>
      <div className={ `w-${size} h-${size} border-2 border-accent absolute flex justify-center items-center` }>
        {number}
      </div>
    </>
  );
}

export default Number;
