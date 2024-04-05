interface AudioFull {
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

interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioFull;
}

export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
}

interface Tafsir {
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
  audioFull: AudioFull;
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
  audioFull: AudioFull;
  tafsir: Tafsir[];
  suratSelanjutnya: nextPrevSurah;
  suratSebelumnya: nextPrevSurah;
}
