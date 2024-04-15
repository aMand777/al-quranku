import instanceApi from '@/lib/axios';

const getTafsirSurah = async (surah: string) => {
  try {
    const { data } = await instanceApi.get(`/tafsir/${surah}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getTafsirSurah;
