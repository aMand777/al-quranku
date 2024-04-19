'use client'
import { createContext, ReactNode, useMemo, useState } from 'react';

interface OpenSurahContext {
  isOpenSurahOnMobile: boolean;
  setIsOpenSurahOnMobile: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSurah: boolean;
  setIsOpenSurah: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialOpenSurahContext: OpenSurahContext = {
  isOpenSurahOnMobile: false,
  setIsOpenSurahOnMobile: () => {},
  isOpenSurah: true,
  setIsOpenSurah: () => {},
};

export const OpenSurahContext = createContext(initialOpenSurahContext);

const OpenSurahProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOpenOnMobile, setIsOpenOnMobile] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      isOpenSurahOnMobile: isOpenOnMobile,
      setIsOpenSurahOnMobile: setIsOpenOnMobile,
      isOpenSurah: isOpen,
      setIsOpenSurah: setIsOpen,
    }),
    [isOpen, isOpenOnMobile],
  );

  return <OpenSurahContext.Provider value={contextValue}>{children}</OpenSurahContext.Provider>;
};

export default OpenSurahProvider;
