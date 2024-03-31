import instanceApi from '@/lib/axios';

const getAllSurah = async () => {
  try {
    const { data } = await instanceApi.get('/api/v2/surat');
    // console.log('data====>', data)
    return data;
  } catch (error) {
    throw error;
  }
};

export default getAllSurah;
