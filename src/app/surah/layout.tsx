import { ReactNode } from 'react';
import ListSurah from '@/components/card/ListSurah';
import BottomNav from '@/components/navigation/BottomNav';

async function getAllSurah() {
  const res = await fetch(`${process.env.BASE_API_URL}/surat`);
  const allSurah = await res.json();

  return allSurah;
}

async function SurahLayout({ children }: { children: ReactNode }) {
  const allSurah = await getAllSurah();

  return (
    <div className="flex mx-auto h-screen absolute top-0 left-0 right-0 -z-10 pt-16">
      <ListSurah data={allSurah?.data} />
      {children}
      <BottomNav data={allSurah?.data}/>
    </div>
  );
}

export default SurahLayout;
