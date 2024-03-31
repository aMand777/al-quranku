import instanceApi from '@/lib/axios';

const getDetailSurah = async (surah: string) => {
  try {
    const { data } = await instanceApi.get(`/api/v2/surat/${surah}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getDetailSurah;
