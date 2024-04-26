import { useAppSelector } from '@/redux/store';

const useAllSurah = () => {
  const { data } = useAppSelector(({ allSurah }) => allSurah);

  return { data };
};

export default useAllSurah;
