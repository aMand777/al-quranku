import { useAppSelector } from '@/redux/store';

const useDetailSurah = () => {
  const { data } = useAppSelector(({ detailSurah }) => detailSurah);

  return { data };
};

export default useDetailSurah;