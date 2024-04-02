import React from 'react';

interface CardSurahProps {
  arabic: string;
  translate: string;
}

function CardSurah({arabic, translate}: CardSurahProps) {
  return (
    <div className="card w-11/12 bg-base-300 shadow-xl mx-auto my-5 p-3">
      <h2 className="text-2xl font-semibold text-right">{arabic}</h2>
      <p className="text-sm">{translate}</p>
    </div>
  );
}

export default CardSurah;
