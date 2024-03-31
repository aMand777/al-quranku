import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import allSurahReducer from '@/redux/slice/allSurah-slice';
import detailSurahReducer from '@/redux/slice/detailSurah-slice';
import tafsirSurahReducer from '@/redux/slice/tafsirSurah-slice';

const store = configureStore({
  reducer: {
    allSurah: allSurahReducer,
    detailSurah: detailSurahReducer,
    tafsirSurah: tafsirSurahReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
