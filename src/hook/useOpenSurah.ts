import { useContext } from 'react';
import { OpenSurahContext } from '@/context/OpenSurah';

const useOpenSurah = () => useContext(OpenSurahContext);

export default useOpenSurah;
