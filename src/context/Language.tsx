'use client';
import { createContext, ReactNode, useMemo, useState } from 'react';

interface LanguageContext {
  isArabicOnly: boolean;
  setIsArabicOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialLanguageContext: LanguageContext = {
  isArabicOnly: false,
  setIsArabicOnly: () => {},
};

export const LanguageContext = createContext(initialLanguageContext);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isArabic, setIsArabic] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      isArabicOnly: isArabic,
      setIsArabicOnly: setIsArabic,
    }),
    [isArabic],
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
