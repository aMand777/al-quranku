import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import getAllSurah from '@/services/getAllSurah.services';
import { Surah } from '@/interface';

const initialState = {
  data: [] as Surah[],
};

const allSurahSlice = createSlice({
  name: 'allSurah',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Surah[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = allSurahSlice.actions;

export const getAllSurahAsync = createAsyncThunk('allSurah', async (_, {dispatch}) => {
  dispatch(showLoading())
  try {
    const response = await getAllSurah();
    if (response.code === 200) {
      dispatch(hideLoading())
      dispatch(setData(response.data));
    }
  } catch (error) {
    dispatch(hideLoading())
    return error;
  }
});

export default allSurahSlice.reducer;
