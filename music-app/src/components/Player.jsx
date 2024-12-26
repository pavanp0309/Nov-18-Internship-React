import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ currentSong,setCurrentSong,isPlaying, setIsPlaying}) => {

  return (
    <div className="player  container p-4 shadow border border-danger position-fixed">
     
      <AudioPlayer
       className="audio-player"
        autoPlay={isPlaying}
        src={currentSong}
        onPlay={(e) => setIsPlaying(true)}
        onPause={(e) => setIsPlaying(false)}
        // other props here
      />
    </div>
  );
};

export default Player;
