import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

function AudioPlayAyat({ audioSrc }: { audioSrc: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    const handleEnd = () => setIsPlaying(false);

    if (currentAudio) {
      currentAudio.addEventListener('ended', handleEnd);
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener('ended', handleEnd);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-end items-center gap-1">
      <audio ref={audioRef}>
        <source src={audioSrc} />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlayPause}>{isPlaying ? <FaPause size={23} /> : <FaPlay size={23} />}</button>
      <span className="text-[9px]">{isPlaying ? 'Pause' : 'Play'}</span>
    </div>
  );
}

export default AudioPlayAyat;
