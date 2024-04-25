import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import preloadReducer from '@/redux/slice/preload-slice';
import allSurahReducer from '@/redux/slice/allSurah-slice';
import detailSurahReducer from '@/redux/slice/detailSurah-slice';
import tafsirSurahReducer from '@/redux/slice/tafsirSurah-slice';
import { getAllSurah } from '@/redux/services/getAllSurah';
import { getDetailSurah } from '@/redux/services/getDetailSurah';

const store = configureStore({
  reducer: {
    preload: preloadReducer,
    allSurah: allSurahReducer,
    detailSurah: detailSurahReducer,
    tafsirSurah: tafsirSurahReducer,
    [getAllSurah.reducerPath]: getAllSurah.reducer,
    [getDetailSurah.reducerPath]: getDetailSurah.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(getAllSurah.middleware)
  .concat(getDetailSurah.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
