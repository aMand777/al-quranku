import { Surah } from '@/interface';
import PageSurah from '@/components/card/Surah';

export async function generateStaticParams() {
  const res = await fetch(`${process.env.BASE_API_URL}/surat`);
  const allSurah = await res.json();

  return allSurah.data.map((surah: Surah) => ({
    id: surah.nomor.toString(),
  }));
}

async function getDetailSurah(params: string) {
  const res = await fetch(`${process.env.BASE_API_URL}/surat/${params}`);
  const detailSurah = await res.json();

  return detailSurah;
}

async function getTafsirSurah(params: string) {
  const res = await fetch(`${process.env.BASE_API_URL}/tafsir/${params}`);
  const tafsirSurah = await res.json();

  return tafsirSurah;
}

async function Page({ params }: { params: { id: string } }) {;
  const detailSurah = await getDetailSurah(params.id);
  const tafsirSurah = await getTafsirSurah(params.id);

  return (
    <>
      <PageSurah detailSurah={detailSurah?.data} tafsirSurah={tafsirSurah?.data} />
    </>
  );
}

export default Page;
