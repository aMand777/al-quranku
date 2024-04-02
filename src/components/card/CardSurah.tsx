import React from 'react';

interface CardSurahProps {
  teksArab: string;
  arti: string;
  ayat: number;
}

function CardSurah({ teksArab, arti, ayat }: CardSurahProps) {
  return (
    <div id={ayat.toString()} className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3">
      <div className="text-2xl font-semibold text-end">
        {teksArab}
        <span className="mr-3 p-1 text-sm ring ring-accent ring-offset-base-100 ring-offset-2 rounded-full">
          {ayat.toString().length === 1 ? `0${ayat}` : ayat}
        </span>
      </div>
      <p className="text-sm my-2">{arti}</p>
    </div>
  );
}

export default CardSurah;
