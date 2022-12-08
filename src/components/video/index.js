import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
import api from "store/home/api";

const Video = () => {
  const [video, setVideo] = useState({
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 100,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  const [url, setUrl] = useState("");

  let player = null;
  const refPlayer = (_player) => {
    player = _player;
  };

  const setVideoLoaded = () => {
    player.seekTo(parseFloat(0.999999, "fraction"));
    // player.seekTo(parseFloat(0.1, "fraction"));
  };

  useEffect(() => {
    const getLiveStream = async () => {
      const res = await api.getLiveStream();
      console.log("bento");
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.result.url);
        // setUrl(res.data.result.url);
        console.log(url);
      } else {
        setUrl(
          "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
        );
      }
    };
    getLiveStream();
  }, []);

  return (
    <div className="absolute z-50" style={{top: "2300px", left: "300px"}}>
      <Draggable>
        <ReactPlayer
          url={url}
          playing={video.playing}
          ref={refPlayer}
          autoPlay
          muted
          onStart={() => {
            setVideoLoaded();
          }}
        />
      </Draggable>
    </div>
  );
};

export default Video;
