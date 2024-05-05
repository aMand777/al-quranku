import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { getBookmarksAsync } from '@/redux/slice/bookmarks-slice';

const useBookmarks = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBookmarksAsync());
  }, [dispatch])
  
  const { data } = useAppSelector(({ bookmarks }) => bookmarks);

  return { bookmarks: data };
};

export default useBookmarks;
