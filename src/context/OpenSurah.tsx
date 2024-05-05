'use client'
import { createContext, ReactNode, useMemo, useState } from 'react';

interface OpenSurahContext {
  isOpenSurah: boolean;
  setIsOpenSurah: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialOpenSurahContext: OpenSurahContext = {
  isOpenSurah: true,
  setIsOpenSurah: () => {},
};

export const OpenSurahContext = createContext(initialOpenSurahContext);

const OpenSurahProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const contextValue = useMemo(
    () => ({
      isOpenSurah: isOpen,
      setIsOpenSurah: setIsOpen,
    }),
    [isOpen],
  );

  return <OpenSurahContext.Provider value={contextValue}>{children}</OpenSurahContext.Provider>;
};

export default OpenSurahProvider;
