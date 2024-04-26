import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import getDetailSurah from '@/services/getDetailSurah.services';
import { DetailSurah } from '@/interface';

interface InitialStateDetailSurah {
  isLoading: boolean;
  data: DetailSurah;
}

const initialState: InitialStateDetailSurah = {
  isLoading: false,
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
    ayat: [
      {
        nomorAyat: 0,
        teksArab: '',
        teksLatin: '',
        teksIndonesia: '',
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

const detailSurahSlice = createSlice({
  name: 'detailSurah',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<DetailSurah>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading, setData } = detailSurahSlice.actions;

export const getDetailSurahAsync = createAsyncThunk(
  'allSurah',
  async (surah: string, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await getDetailSurah(surah);
      if (response.code === 200) {
        dispatch(setLoading(false));
        dispatch(setData(response.data));
      }
    } catch (error) {
      dispatch(setLoading(false));
      return error;
    }
  },
);

export default detailSurahSlice.reducer;
