import { instanceApiBaseUrl } from '@/lib/axios/axios';

const getTafsirSurah = async (surah: string) => {
  try {
    const { data } = await instanceApiBaseUrl.get(`/tafsir/${surah}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getTafsirSurah;
