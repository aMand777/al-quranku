interface Audio {
  '01': string;
  '02': string;
  '03': string;
  '04': string;
  '05': string;
}

interface nextPrevSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

export interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Audio;
}

export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: Audio;
}

export interface Tafsir {
  ayat: number;
  teks: string;
}

export interface AllSurah extends Array<Surah> {}

export interface DetailSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Audio;
  ayat: Ayat[];
  suratSelanjutnya: nextPrevSurah;
  suratSebelumnya: nextPrevSurah;
}

export interface TafsirSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Audio;
  tafsir: Tafsir[];
  suratSelanjutnya: nextPrevSurah;
  suratSebelumnya: nextPrevSurah;
}

interface Data {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface User {
  user: Data
}
