import { useAppSelector } from '@/redux/store';

const useDetailSurah = () => {
  const { isLoading, data } = useAppSelector(({ detailSurah }) => detailSurah);

  return { isLoading, data };
};

export default useDetailSurah;
