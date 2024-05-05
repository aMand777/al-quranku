import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import preloadReducer from '@/redux/slice/preload-slice';
import { getAllSurah } from '@/redux/services/getAllSurah';
import bookmarksReducer from '@/redux/slice/bookmarks-slice';

const store = configureStore({
  reducer: {
    preload: preloadReducer,
    bookmarks: bookmarksReducer,
    [getAllSurah.reducerPath]: getAllSurah.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllSurah.middleware)
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
