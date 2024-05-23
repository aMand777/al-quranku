'use client';
import React from 'react';
import useLanguage from '@/hook/useLanguage';

function SwitchLang() {
  const { isArabicOnly, setIsArabicOnly } = useLanguage();
  const handleInputCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsArabicOnly(event.target.checked);
  };

  return (
      <label className="swap">
        <input type="checkbox" checked={isArabicOnly} onChange={handleInputCheckbox} />
        <div className="swap-on">ON</div>
        <div className="swap-off">OFF</div>
      </label>
  );
}

export default SwitchLang;
