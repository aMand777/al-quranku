import instanceApi from '@/lib/axios';

const getAllSurah = async () => {
  try {
    const { data } = await instanceApi.get('/surat');
    return data;
  } catch (error) {
    throw error;
  }
};

export default getAllSurah;
