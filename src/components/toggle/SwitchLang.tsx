import React from 'react';
import useLanguage from '@/hook/useLanguage';

function SwitchLang() {
  const { setIsArabicOnly } = useLanguage();
  const handleInputCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsArabicOnly(event.target.checked);
  };

  return (
    <div data-tip="Arabic only" className="tooltip tooltip-right -mb-2">
      <label className="swap font-semibold">
        <input type="checkbox" onChange={handleInputCheckbox} />
        <div className="swap-on">ON</div>
        <div className="swap-off">OFF</div>
      </label>
    </div>
  );
}

export default SwitchLang;
