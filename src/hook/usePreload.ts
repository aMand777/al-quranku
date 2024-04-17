import { useAppSelector } from '@/redux/store';

const usePreload = () => {
  const { isPreload } = useAppSelector(({ preload }) => preload);

  return { isPreload };
};

export default usePreload;
