import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import getTafsirSurah from '@/services/getTafsirSurah.services';
import { TafsirSurah } from '@/interface';

interface InitialStateDetailSurah {
  data: TafsirSurah;
}

const initialState: InitialStateDetailSurah = {
  data: {
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
    tafsir: [
      {
        ayat: 0,
        teks: '',
      },
    ],
    suratSelanjutnya: {
      nomor: 0,
      nama: '',
      namaLatin: '',
      jumlahAyat: 0,
    },
    suratSebelumnya: {
      nomor: 0,
      nama: '',
      namaLatin: '',
      jumlahAyat: 0,
    },
  },
};

const tafsirSurahSlice = createSlice({
  name: 'tafsirSurah',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<TafsirSurah>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = tafsirSurahSlice.actions;

export const getTafsirSurahAsync = createAsyncThunk(
  'allSurah',
  async (surah: string, { dispatch }) => {
    dispatch(showLoading());
    try {
      const response = await getTafsirSurah(surah);
      if (response.code === 200) {
        dispatch(hideLoading());
        dispatch(setData(response.data));
      }
    } catch (error) {
      dispatch(hideLoading());
      return error;
    }
  },
);

export default tafsirSurahSlice.reducer;
