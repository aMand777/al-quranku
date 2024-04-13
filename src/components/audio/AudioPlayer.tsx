interface AudioPlayerProps {
  src: string;
}

function AudioPlayer({ src }: AudioPlayerProps) {

  return (
    <div className="-mb-5 mt-1">
      <audio controls className="h-5 w-11/12 mx-auto">
        <source src={src} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
