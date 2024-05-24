'use client';
import { createContext, ReactNode, useMemo, useState } from 'react';

interface FontSizeContext {
  fontSize: string;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
}

const initialFontSizeContext: FontSizeContext = {
  fontSize: 'small',
  setFontSize: () => {},
};

export const FontSizeContext = createContext(initialFontSizeContext);

const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<string>('small');
  
  const contextValue = useMemo(
    () => ({
      fontSize: size,
      setFontSize: setSize,
    }),
    [size],
  );

  return <FontSizeContext.Provider value={contextValue}>{children}</FontSizeContext.Provider>;
};

export default FontSizeProvider;
