'use client';
import { SessionProvider } from 'next-auth/react';

function Provider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Provider