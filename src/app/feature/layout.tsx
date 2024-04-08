'use client';
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function FeatureLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return <div className="absolute w-screen h-screen top-0 bg-base-300">{children}</div>;
}

export default FeatureLayout;
