import { useContext } from 'react';
import { FontSizeContext } from '@/context/FontSize';

const useSelectFontSize = () => useContext(FontSizeContext);

export default useSelectFontSize;
