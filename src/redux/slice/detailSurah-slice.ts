import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import getDetailSurah from '@/services/getDetailSurah.services';
import { DetailSurah } from '@/interface';

interface InitialStateDetailSurah {
  data: DetailSurah;
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
  },
});

export const { setData } = detailSurahSlice.actions;

export const getDetailSurahAsync = createAsyncThunk(
  'allSurah',
  async (surah: string, { dispatch }) => {
    try {
      const response = await getDetailSurah(surah);
      if (response.code === 200) {
        dispatch(setData(response.data));
      }
    } catch (error) {
      return error;
    }
  },
);

export default detailSurahSlice.reducer;
