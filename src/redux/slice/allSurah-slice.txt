import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import getAllSurah from '@/services/getAllSurah.services';
import { AllSurah } from '@/interface';
import { setPreload } from '@/redux/slice/preload-slice';

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
  dispatch(setPreload(false))
  try {
    const response = await getAllSurah();
    if (response.code === 200) {
      dispatch(setData(response.data));
    }
  } catch (error) {
    return error;
  }
});

export default allSurahSlice.reducer;
