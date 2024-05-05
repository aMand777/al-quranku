import { instanceApiBaseUrl } from '@/lib/axios/axios';

const getDetailSurah = async (surah: string) => {
  try {
    const { data } = await instanceApiBaseUrl.get(`/surat/${surah}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getDetailSurah;
