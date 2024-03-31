interface AudioFull {
  '01': string;
  '02': string;
  '03': string;
  '04': string;
  '05': string;
}

export interface Surah {
  nomor: 1;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioFull;
}
