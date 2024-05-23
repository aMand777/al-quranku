'use client';
import React from 'react';
import useSelectFontSize from '@/hook/useSelectFontSize';

function SelectFontSize() {
  const { fontSize, setFontSize } = useSelectFontSize();
  setFontSize(fontSize);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(event.target.value);
  };

  return (
    <select className="w-full max-w-xs p-1 rounded-lg" value={fontSize} onChange={handleChange}>
      <option value="3xl">sm</option>
      <option value="4xl">md</option>
      <option value="5xl">xl</option>
      <option value="6xl">2xl</option>
      <option value="8xl">3xl</option>
      <option value="9xl">4xl</option>
    </select>
  );
}

export default SelectFontSize;
