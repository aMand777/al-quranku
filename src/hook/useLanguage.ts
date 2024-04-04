import { useContext } from 'react';
import { LanguageContext } from '@/context/Language';

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
