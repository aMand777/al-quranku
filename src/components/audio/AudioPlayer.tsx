interface AudioPlayerProps {
  src: string;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <div className="mt-3 -mb-5">
      <audio controls className="h-5 w-full">
        <source src={src} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
