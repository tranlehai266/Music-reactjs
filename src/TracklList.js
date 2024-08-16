import React from "react";
import useMusicPlayer from "./hooks/useMusicPlayer";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Button } from "@mui/material";
import { PauseCircle } from "@mui/icons-material";
import Marquee from "react-fast-marquee";


const TrackList = () => {
    const { trackList, currentTrackName, playTrack,togglePlay,playPreviousTrack,playNextTrack,isPlaying } = useMusicPlayer();

    return (
      <div className="box-song">
            <Marquee style={{margin:'10px 0 10px 0', fontSize:'23px' }}  speed={80} >
                {currentTrackName || "No Music is playing"}
            </Marquee>
            <div className="picture">
                <img src="./slowmotion.jpg" alt="moon" />
            </div>
            <div className="track-list">
                {trackList.map((track, index) => (
                <div className="song-title" key={index} onClick={() => playTrack(index)} >
                    {track.name}
                    <div className="singer">
                        {track.singer}
                    </div> 
                </div>
                 ))}
            </div>
            <div className="controller">
                <Button sx={{color: "#000"}} onClick={() => playPreviousTrack()} disabled={!currentTrackName}>
                    <SkipPreviousIcon sx={{fontSize:"50px"}}/>
                </Button>
                {isPlaying ? (
                <Button sx={{color: "#000"}} onClick={() => togglePlay()} disabled={!currentTrackName}>
                    <PauseCircle sx={{fontSize:"50px"}}/>
                </Button>) : (
                <Button sx={{color: "#000"}} onClick={() => togglePlay()} disabled={!currentTrackName}>
                    <PlayCircleIcon sx={{fontSize:"50px"}}/>
                </Button>
                ) }
                <Button sx={{color: "#000"}} onClick={() => playNextTrack()} disabled={!currentTrackName}>
                    <SkipNextIcon sx={{fontSize:"50px"}} />
                </Button>
            </div>
      </div>
    );
};
    
export default TrackList;

