import React from 'react';

interface NumberProps {
  number: number;
  size: string;
  text: 'xs' | 'sm' | "md" | 'lg' | 'xl' | '2xl'
}

function Number({ number, size, text }: NumberProps) {
  return (
    <>
      <div className={`w-${size} h-${size} border-2 border-accent absolute rotate-45`}></div>
      <div className={ `w-${size} h-${size} font-semibold border-2 border-accent absolute flex justify-center items-center text-${text}` }>
        {number}
      </div>
    </>
  );
}

export default Number;
