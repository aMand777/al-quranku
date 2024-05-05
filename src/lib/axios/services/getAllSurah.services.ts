import { instanceApiBaseUrl } from '@/lib/axios/axios';

const getAllSurah = async () => {
  try {
    const { data } = await instanceApiBaseUrl.get('/surat');
    return data;
  } catch (error) {
    throw error;
  }
};

export default getAllSurah;
