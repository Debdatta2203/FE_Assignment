import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import VideoPlaceholder from "../../assets/VideoPlaceholder.jpeg";
import VideoControl from "./VideoControl";

const VideoCard = ({ videoURL, startTime, setStartTime, endTime, setEndTime }) => {
    // video player state
    const [player, setPlayer] = useState(null);
    // video URL state
    const [videoId, setVideoId] = useState(videoURL);
    // loader
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if(videoURL) {
            setVideoId(videoURL?.includes("embed") ? videoURL?.split("embed/")?.[1] : videoURL?.split("v=")?.[1]);
            if(!player) {
                setLoader(true);
            }
        } else {
            setLoader(false);
        }
    }, [videoURL]);

    useEffect(() => {
        if(player) {
            setEndTime((player?.getDuration()/60).toFixed(2));
        }
    }, [player]);

    // player styles
    const playerStyles = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    // youtube player on ready
    const onReady = (e) => {
        setPlayer(e.target);
    };

    // pause the player
    const handlePause = (type) => {
        player.pauseVideo();
        if(type === "start") {
            setStartTime((player.getCurrentTime()/60).toFixed(2));
        } else {
            setEndTime((player.getCurrentTime()/60).toFixed(2));
        }
    };

    console.log("VideoPlayer FE ", player?.getDuration());

    return (
        <div>
            {videoURL
                ? (
                    <>
                        <YouTube 
                            opts={playerStyles} 
                            className="rounded-2xl video-frame h-3/4 lg:h-60" 
                            // ref={playerRef} 
                            videoId={videoId} 
                            onReady={onReady}
                        />
                        
                        <VideoControl
                            handlePause={(value) => handlePause(value)}
                            startTime={startTime}
                            endTime={endTime}
                            totalDuration={(player?.getDuration()/60).toFixed(2)}
                        />
                    </>
                )
                : <img className="rounded-2xl video-placeholder" src={VideoPlaceholder} alt="placeholder" />
            }
        </div>
    );
};

export default VideoCard;