'use client';
import React from 'react';
import useSelectFontSize from '@/hook/useSelectFontSize';

function SelectFontSize() {
  const { fontSize, setFontSize } = useSelectFontSize();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(event.target.value);
  };

  return (
    <select className="w-full max-w-xs p-1 rounded-lg" value={fontSize} onChange={handleChange}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

export default SelectFontSize;
