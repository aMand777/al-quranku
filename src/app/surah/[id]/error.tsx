'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="absolute w-screen h-screen top-0 left-0 right-0 bg-base-100 flex flex-col gap-3 justify-center items-center z-[3600]">
      <h2>Something went wrong!</h2>
      <button
        className="btn btn-outline btn-primary"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
