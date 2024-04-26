import { useAppSelector } from '@/redux/store';

const useTafsirSurah = () => {
  const { data } = useAppSelector(({ tafsirSurah }) => tafsirSurah);

  return { data };
};

export default useTafsirSurah;