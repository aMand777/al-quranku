import React from 'react';
import useLanguage from '@/hook/useLanguage';

function SwitchLang() {
  const { isArabicOnly, setIsArabicOnly } = useLanguage();
  const handleInputCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsArabicOnly(event.target.checked);
  };

  return (
    <div data-tip="Arabic only" className="tooltip tooltip-bottom -mb-2 text-black">
      <label className="swap">
        <input type="checkbox" checked={isArabicOnly} onChange={handleInputCheckbox} />
        <div className="swap-on">ON</div>
        <div className="swap-off">OFF</div>
      </label>
    </div>
  );
}

export default SwitchLang;
