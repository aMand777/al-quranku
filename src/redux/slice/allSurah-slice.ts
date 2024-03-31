import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import getAllSurah from '@/services/getAllSurah.services';
import { AllSurah } from '@/interface';

interface InitialStateDetailSurah {
  data: AllSurah;
}

const initialState: InitialStateDetailSurah = {
  data: [
    {
      nomor: 0,
      nama: '',
      namaLatin: '',
      jumlahAyat: 0,
      tempatTurun: '',
      arti: '',
      deskripsi: '',
      audioFull: {
        '01': '',
        '02': '',
        '03': '',
        '04': '',
        '05': '',
      },
    },
  ],
};


const allSurahSlice = createSlice({
  name: 'allSurah',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<AllSurah>) {
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
